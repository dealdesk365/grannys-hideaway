import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getSupabaseAdmin } from "@/lib/supabase";
import { sendBookingConfirmation } from "@/lib/email";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-03-25.dahlia",
});

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!webhookSecret) {
    console.error("[Stripe Webhook] STRIPE_WEBHOOK_SECRET is not set");
    return NextResponse.json({ error: "Webhook not configured" }, { status: 500 });
  }

  if (!sig) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err) {
    console.error("[Stripe Webhook] Signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    await handleCheckoutCompleted(session);
  } else if (event.type === "payment_intent.payment_failed") {
    const intent = event.data.object as Stripe.PaymentIntent;
    console.error("[Stripe Webhook] Payment failed:", intent.id, intent.last_payment_error?.message);
  }

  return NextResponse.json({ received: true }, { status: 200 });
}

async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  const meta = session.metadata ?? {};
  const {
    checkIn,
    checkOut,
    guests,
    guestName,
    waiverSignature,
    waiverTimestamp,
    waiverIp,
    nights,
    totalAmount,
    depositAmount,
    damageDeposit,
  } = meta;

  if (!checkIn || !checkOut || !guestName) {
    console.error("[Webhook] Missing required metadata in session:", session.id);
    return;
  }

  const supabase = getSupabaseAdmin();

  // Avoid duplicate processing
  const { data: existing } = await supabase
    .from("bookings")
    .select("id")
    .eq("stripe_session_id", session.id)
    .single();

  if (existing) {
    console.log("[Webhook] Booking already exists for session:", session.id);
    return;
  }

  const guestCount = parseInt(guests ?? "1", 10);
  const totalAmt = parseInt(totalAmount ?? "0", 10);
  const depositAmt = parseInt(depositAmount ?? "0", 10);
  const damageAmt = parseInt(damageDeposit ?? "500", 10);
  const nightsCount = parseInt(nights ?? "1", 10);

  // Save booking
  const { error: insertError } = await supabase.from("bookings").insert({
    stripe_session_id: session.id,
    guest_name: guestName,
    guest_email: session.customer_details?.email ?? null,
    check_in: checkIn,
    check_out: checkOut,
    guests: guestCount,
    total_amount: totalAmt,
    deposit_amount: depositAmt,
    damage_deposit: damageAmt,
    status: "deposit_paid",
    waiver_signature: waiverSignature ?? null,
    waiver_agreed_at: waiverTimestamp ?? null,
    waiver_ip: waiverIp ?? null,
  });

  if (insertError) {
    console.error("[Webhook] Failed to save booking:", insertError);
    return;
  }

  console.log("[Webhook] Booking saved for:", guestName, checkIn, "→", checkOut);

  // Calculate balance due date (30 days before check-in)
  const checkInDate = new Date(checkIn + "T12:00:00");
  const balanceDueDate = new Date(checkInDate);
  balanceDueDate.setDate(balanceDueDate.getDate() - 30);
  const balanceDueDateStr = balanceDueDate.toISOString().slice(0, 10);

  // Send confirmation emails
  try {
    await sendBookingConfirmation({
      guestName,
      guestEmail: session.customer_details?.email ?? undefined,
      checkIn,
      checkOut,
      nights: nightsCount,
      guests: guestCount,
      depositPaid: depositAmt,
      damageDeposit: damageAmt,
      totalAmount: totalAmt,
      balanceDue: totalAmt - depositAmt,
      balanceDueDate: balanceDueDateStr,
      stripeSessionId: session.id,
    });
    console.log("[Webhook] Confirmation emails sent for session:", session.id);
  } catch (emailErr) {
    console.error("[Webhook] Email send failed (booking still saved):", emailErr);
  }
}
