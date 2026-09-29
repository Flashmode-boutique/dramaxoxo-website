import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.14.0?target=deno";

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
  apiVersion: "2023-10-16",
  httpClient: Stripe.createFetchHttpClient(),
});

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Prix vérifiés côté serveur (Zero-Trust : le client ne décide jamais du prix)
const PRICING = {
  vip: {
    weekly: { title: "Pass VIP Hebdomadaire", priceCents: 999, coins: 0 },
    monthly: { title: "Pass VIP Mensuel Illimité", priceCents: 2999, coins: 0 },
    annual: { title: "Pass VIP Annuel Privilège", priceCents: 9999, coins: 0 },
  },
  coins: [
    { title: "Pack 100 Pièces (+10 bonus)", priceCents: 99, coins: 110 },
    { title: "Pack 500 Pièces (+60 bonus)", priceCents: 499, coins: 560 },
    { title: "Pack 1000 Pièces (+200 bonus)", priceCents: 999, coins: 1200 },
    { title: "Pack 2500 Pièces (+700 bonus)", priceCents: 2499, coins: 3200 },
  ],
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { itemType, planKey, packIndex, userId, userEmail, returnUrl } = await req.json();

    let title = "";
    let priceCents = 0;
    let coinsToAdd = 0;

    if (itemType === "vip") {
      const plan = PRICING.vip[planKey as keyof typeof PRICING.vip] || PRICING.vip.monthly;
      title = plan.title;
      priceCents = plan.priceCents;
    } else {
      const pack = PRICING.coins[packIndex ?? 0] || PRICING.coins[0];
      title = pack.title;
      priceCents = pack.priceCents;
      coinsToAdd = pack.coins;
    }

    const baseUrl = returnUrl || "https://www.dramaxoxo.com/app.html";

    // Création de la Session Stripe Checkout officielle
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"], // Apple Pay et Google Pay sont gérés automatiquement
      mode: "payment",
      customer_email: userEmail || undefined,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `DRAMA XOXO — ${title}`,
              description: itemType === "vip" 
                ? "Accès illimité à tous les épisodes de dramas et romans" 
                : `${coinsToAdd} Pièces pour débloquer vos séries favorites`,
              images: ["https://www.dramaxoxo.com/favicon.svg"],
            },
            unit_amount: priceCents,
          },
          quantity: 1,
        },
      ],
      metadata: {
        itemType,
        planKey: planKey || "",
        packIndex: packIndex !== undefined ? packIndex.toString() : "",
        coinsToAdd: coinsToAdd.toString(),
        userId: userId || "",
        userEmail: userEmail || "",
        itemName: title,
      },
      success_url: `${baseUrl}?session_id={CHECKOUT_SESSION_ID}&payment=success`,
      cancel_url: `${baseUrl}?payment=cancelled`,
    });

    return new Response(JSON.stringify({ url: session.url, sessionId: session.id }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error: any) {
    console.error("Erreur create-checkout:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 400,
    });
  }
});
