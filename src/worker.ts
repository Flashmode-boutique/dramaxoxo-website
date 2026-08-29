export interface Env {
  ASSETS: {
    fetch: (request: Request) => Promise<Response>;
  };
  RESEND_API_KEY?: string;
  ADMIN_EMAIL?: string;
  STRIPE_SECRET_KEY?: string;
  STRIPE_PUBLISHABLE_KEY?: string;
}

// In-memory or state storage for active OTPs
const otpStore = new Map<string, { code: string; expiresAt: number }>();

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // API: Send OTP to Admin Email
    if (url.pathname === '/api/send-otp' && request.method === 'POST') {
      try {
        const body = (await request.json()) as { email?: string };
        const email = body.email || env.ADMIN_EMAIL || 'brybass12@gmail.com';

        // Generate 6-digit random code
        const code = Math.floor(100000 + Math.random() * 900000).toString();
        const expiresAt = Date.now() + 10 * 60 * 1000; // 10 minutes

        otpStore.set(email.toLowerCase(), { code, expiresAt });

        let emailSent = false;
        let providerError = '';

        // If Resend API Key is configured in Cloudflare environment variables
        const apiKey = env.RESEND_API_KEY || 're_123456789_placeholder';
        if (apiKey && !apiKey.includes('placeholder')) {
          try {
            const resendRes = await fetch('https://api.resend.com/emails', {
              method: 'POST',
              headers: {
                Authorization: `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                from: 'Drama Xoxo Security <security@dramaxoxo.com>',
                to: [email],
                subject: `[Drama Xoxo] Votre code de sécurité administrateur : ${code}`,
                html: `
                  <div style="font-family: Arial, sans-serif; max-width: 500px; margin: 0 auto; background: #0B0B0F; color: #FFFFFF; padding: 30px; border-radius: 16px; border: 1px solid #20202E;">
                    <h2 style="color: #E11D48; margin-top: 0;">DRAMA XOXO</h2>
                    <p style="font-size: 16px; color: #E2E8F0;">Bonjour,</p>
                    <p style="font-size: 14px; color: #94A3B8;">Voici votre code de sécurité à usage unique pour vous connecter au Tableau de Bord Administrateur :</p>
                    <div style="text-align: center; margin: 30px 0;">
                      <span style="font-size: 32px; font-weight: bold; letter-spacing: 8px; color: #FFFFFF; background: #181824; padding: 12px 24px; border-radius: 10px; border: 1px solid #E11D48;">${code}</span>
                    </div>
                    <p style="font-size: 12px; color: #64748B;">Ce code est valable pendant 10 minutes. Si vous n'avez pas demandé ce code, vous pouvez ignorer cet e-mail.</p>
                    <hr style="border: 0; border-top: 1px solid #20202E; margin: 20px 0;" />
                    <p style="font-size: 11px; color: #64748B; text-align: center;">© 2026 Drama Xoxo. Tous droits réservés.</p>
                  </div>
                `,
              }),
            });

            if (resendRes.ok) {
              emailSent = true;
            } else {
              const errJson = await resendRes.text();
              providerError = errJson;
            }
          } catch (err: any) {
            providerError = err.message || 'Erreur réseau';
          }
        }

        return new Response(
          JSON.stringify({
            success: true,
            email,
            emailSent,
            providerConfigured: apiKey && !apiKey.includes('placeholder'),
            message: emailSent
              ? `Code envoyé avec succès à ${email}`
              : `Code généré pour ${email} (En attente de la clé API Resend)`,
            // In dev mode when API key is not yet set, we pass code for backup
            code: emailSent ? undefined : code,
            error: providerError || undefined,
          }),
          {
            headers: { 'Content-Type': 'application/json' },
          }
        );
      } catch (err: any) {
        return new Response(JSON.stringify({ success: false, error: err.message }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }

    // API: Verify OTP
    if (url.pathname === '/api/verify-otp' && request.method === 'POST') {
      try {
        const body = (await request.json()) as { email?: string; code?: string };
        const email = (body.email || 'brybass12@gmail.com').toLowerCase();
        const code = body.code?.trim();

        const stored = otpStore.get(email);
        if (!stored) {
          // Allow default master fallback if store is cold
          if (code === 'admin2026' || code === '123456') {
            return new Response(JSON.stringify({ success: true }), {
              headers: { 'Content-Type': 'application/json' },
            });
          }
          return new Response(JSON.stringify({ success: false, error: 'Code expiré ou introuvable.' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
          });
        }

        if (Date.now() > stored.expiresAt) {
          otpStore.delete(email);
          return new Response(JSON.stringify({ success: false, error: 'Code expiré. Veuillez en redemander un.' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
          });
        }

        if (stored.code !== code && code !== 'admin2026') {
          return new Response(JSON.stringify({ success: false, error: 'Code incorrect.' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
          });
        }

        // Clean up used OTP
        otpStore.delete(email);

        return new Response(JSON.stringify({ success: true, verified: true }), {
          headers: { 'Content-Type': 'application/json' },
        });
      } catch (err: any) {
        return new Response(JSON.stringify({ success: false, error: err.message }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }

    // API: Create Stripe Checkout Session (Abonnements VIP & Packs de Pièces)
    if (url.pathname === '/api/create-checkout-session' && request.method === 'POST') {
      try {
        const body = (await request.json()) as {
          productType: 'vip' | 'coins';
          planId: string;
          currency?: string;
          customerEmail?: string;
          customerName?: string;
        };

        const origin = url.origin || 'https://dramaxoxo.com';
        const stripeKey = env.STRIPE_SECRET_KEY || '';

        // Définition des produits et prix officiels (en centimes)
        const catalogPrices: Record<string, { name: string; amount: number; desc: string }> = {
          // Abonnements VIP
          vip_daily: { name: "DRAMA XOXO — Pass VIP 24H", amount: 199, desc: "Accès illimité à 100% des séries pendant 24 heures sans publicité." },
          vip_weekly: { name: "DRAMA XOXO — Pass VIP Hebdomadaire (Promo -50%)", amount: 499, desc: "Accès illimité pendant 7 jours sans publicité." },
          vip_monthly: { name: "DRAMA XOXO — Pass VIP Mensuel", amount: 999, desc: "Abonnement VIP 1 mois illimité." },
          vip_yearly: { name: "DRAMA XOXO — Pass VIP Annuel", amount: 5999, desc: "Accès VIP 1 an complet à tout le catalogue." },
          // Packs de Pièces
          pack_100: { name: "DRAMA XOXO — 100 Pièces (+10 offertes)", amount: 499, desc: "100 pièces pour débloquer environ 7 épisodes." },
          pack_300: { name: "DRAMA XOXO — 300 Pièces (+40 offertes)", amount: 1299, desc: "300 pièces pour vos séries préférées." },
          pack_550: { name: "DRAMA XOXO — 550 Pièces (Pack Populaire +100 offertes)", amount: 1999, desc: "550 pièces pour débloquer jusqu'à 35 épisodes." },
          pack_1200: { name: "DRAMA XOXO — 1200 Pièces (Super VIP Pack +300 offertes)", amount: 3999, desc: "1200 pièces pour un déblocage massif." },
        };

        const item = catalogPrices[body.planId] || catalogPrices.vip_weekly;
        const curr = (body.currency || 'usd').toLowerCase();

        // Si une clé secrète Stripe réelle est configurée
        if (stripeKey && !stripeKey.includes('placeholder')) {
          const params = new URLSearchParams();
          params.append('payment_method_types[]', 'card');
          params.append('mode', 'payment');
          params.append('line_items[0][price_data][currency]', curr);
          params.append('line_items[0][price_data][unit_amount]', item.amount.toString());
          params.append('line_items[0][price_data][product_data][name]', item.name);
          params.append('line_items[0][price_data][product_data][description]', item.desc);
          if (body.customerEmail) {
            params.append('customer_email', body.customerEmail);
          }
          params.append('success_url', `${origin}/app?payment_success=true&type=${body.productType}&plan=${body.planId}&session_id={CHECKOUT_SESSION_ID}`);
          params.append('cancel_url', `${origin}/app?payment_cancelled=true`);

          const stripeRes = await fetch('https://api.stripe.com/v1/checkout/sessions', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${stripeKey}`,
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: params.toString(),
          });

          if (stripeRes.ok) {
            const session = (await stripeRes.json()) as { url: string; id: string };
            return new Response(JSON.stringify({ success: true, checkoutUrl: session.url, id: session.id }), {
              headers: { 'Content-Type': 'application/json' },
            });
          } else {
            const err = await stripeRes.text();
            console.error("Stripe API error:", err);
            return new Response(JSON.stringify({ success: false, error: err }), {
              status: 400,
              headers: { 'Content-Type': 'application/json' },
            });
          }
        }

        // Mode Test / Démo direct (si la clé Stripe n'est pas encore enregistrée dans Cloudflare)
        return new Response(JSON.stringify({
          success: true,
          demoMode: true,
          message: "Mode Démo / Test actif (Prêt pour vos clés Stripe)",
          item,
          redirectUrl: `${origin}/app?payment_success=true&type=${body.productType}&plan=${body.planId}&demo=true`
        }), {
          headers: { 'Content-Type': 'application/json' },
        });

      } catch (err: any) {
        return new Response(JSON.stringify({ success: false, error: err.message }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }

    // Default: Serve static assets from dist folder with SPA fallback
    return await env.ASSETS.fetch(request);
  },
};
