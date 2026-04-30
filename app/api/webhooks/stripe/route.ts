import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-03-25.dahlia",
});

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!webhookSecret) {
    console.error("[Stripe Webhook] STRIPE_WEBHOOK_SECRET is not set — cannot verify signature");
    return NextResponse.json({ error: "Webhook not configured" }, { status: 500 });
  }

  if (!sig) {
    console.error("[Stripe Webhook] Missing stripe-signature header");
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err) {
    console.error("[Stripe Webhook] Signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  console.log("[Stripe Webhook] Verified event:", event.type, event.id);

  // TODO: Implement webhook handling
  // - checkout.session.completed → save booking, send confirmation email
  // - payment_intent.payment_failed → notify admin

  return NextResponse.json({ received: true }, { status: 200 });
}
