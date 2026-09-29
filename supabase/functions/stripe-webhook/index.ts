import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.14.0?target=deno";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.0";

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
  apiVersion: "2023-10-16",
  httpClient: Stripe.createFetchHttpClient(),
});

const webhookSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET") || "";
const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
const supabaseServiceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";

serve(async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const signature = req.headers.get("stripe-signature");
  if (!signature) {
    return new Response("Signature manquante", { status: 400 });
  }

  const body = await req.text();
  let event: Stripe.Event;

  try {
    // Vérification cryptographique inviolable de la signature Stripe
    event = await stripe.webhooks.constructEventAsync(body, signature, webhookSecret);
  } catch (err: any) {
    console.error(`⚠️ Échec de vérification du webhook Stripe: ${err.message}`);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  // Traitement exclusif de la confirmation de paiement réussi
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    // Ne créditer QUE si le paiement est réellement acquitté
    if (session.payment_status === "paid") {
      const metadata = session.metadata || {};
      const txId = session.id;
      const amountUSD = (session.amount_total || 0) / 100;
      const amountDisplay = `$${amountUSD.toFixed(2)}`;
      const itemType = metadata.itemType === "vip" ? "VIP" : "COINS";
      const coinsCredited = parseInt(metadata.coinsToAdd || "0", 10);
      const userName = session.customer_details?.name || metadata.userEmail || "Spectateur Invité";
      const country = session.customer_details?.address?.country || "International";
      const itemName = metadata.itemName || (itemType === "VIP" ? "Pass VIP Illimité" : "Pack de Pièces");

      console.log(`💰 [Stripe Webhook] Paiement confirmé: ${txId} | Montant: ${amountDisplay} | Type: ${itemType}`);

      // Client Supabase avec privilèges d'administration (service_role)
      const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey);

      // Exécution de la procédure atomique de crédit et mise à jour du grand livre
      const { data, error } = await supabaseAdmin.rpc("process_coin_purchase", {
        p_tx_id: txId,
        p_user_id: metadata.userId ? metadata.userId : null,
        p_user_name: userName,
        p_tx_type: itemType,
        p_amount_usd: amountUSD,
        p_amount_display: amountDisplay,
        p_currency: (session.currency || "USD").toUpperCase(),
        p_coins_credited: coinsCredited,
        p_payment_method: "💳 Stripe (Apple Pay / CB / Google Pay)",
        p_country: country,
        p_item_name: itemName,
      });

      if (error) {
        console.error("Erreur RPC process_coin_purchase:", error);
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
      }

      console.log("✅ Crédit validé avec succès sur Supabase:", data);
    }
  }

  return new Response(JSON.stringify({ received: true }), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
});
