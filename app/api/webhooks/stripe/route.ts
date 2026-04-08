import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.text();
    const event = JSON.parse(body);

    // Stub: log the event type and id
    console.log("[Stripe Webhook]", event.type, event.id);

    // TODO: Implement webhook handling
    // - checkout.session.completed → save booking, send confirmation email
    // - payment_intent.payment_failed → notify admin

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (error) {
    console.error("[Stripe Webhook] Error:", error);
    return NextResponse.json({ error: "Webhook error" }, { status: 400 });
  }
}
