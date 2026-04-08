import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-03-25.dahlia",
});

const NIGHTLY_RATE = 275;
const CLEANING_FEE = 125;

function calculatePricing(
  checkIn: Date,
  checkOut: Date,
  guests: number
): { nights: number; nightlyRate: number; baseTotal: number; extraGuestFee: number; totalAmount: number; depositAmount: number } {
  const msPerDay = 1000 * 60 * 60 * 24;
  const nights = Math.round((checkOut.getTime() - checkIn.getTime()) / msPerDay);
  const baseTotal = nights * NIGHTLY_RATE;
  const extraGuests = Math.max(0, guests - 7);
  const extraGuestFee = extraGuests * 35 * nights;
  const totalAmount = baseTotal + extraGuestFee + CLEANING_FEE;
  const depositAmount = Math.round(totalAmount / 2);
  return { nights, nightlyRate: NIGHTLY_RATE, baseTotal, extraGuestFee, totalAmount, depositAmount };
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { checkIn, checkOut, guests, guestName, waiverAgreed, waiverSignature } = body;

    if (!checkIn || !checkOut || !guests || !guestName || !waiverAgreed || !waiverSignature) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (!waiverAgreed) {
      return NextResponse.json({ error: "Waiver must be agreed to" }, { status: 400 });
    }

    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const guestCount = Number(guests);

    if (isNaN(checkInDate.getTime()) || isNaN(checkOutDate.getTime())) {
      return NextResponse.json({ error: "Invalid dates" }, { status: 400 });
    }

    const { nights, nightlyRate, extraGuestFee, totalAmount, depositAmount } = calculatePricing(
      checkInDate,
      checkOutDate,
      guestCount
    );

    if (nights < 2) {
      return NextResponse.json({ error: "Minimum stay is 2 nights" }, { status: 400 });
    }

    if (guestCount < 1 || guestCount > 9) {
      return NextResponse.json({ error: "Guest count must be between 1 and 9" }, { status: 400 });
    }

    const checkInFormatted = checkInDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    const checkOutFormatted = checkOutDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

    const itemDescription = `Granny's Hideaway — ${checkInFormatted}–${checkOutFormatted} (${nights} nights, ${guestCount} guests) — 50% Deposit`;

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            unit_amount: depositAmount * 100, // in cents
            product_data: {
              name: itemDescription,
              description: `$${nightlyRate}/night × ${nights} nights + $${CLEANING_FEE} cleaning fee${extraGuestFee > 0 ? ` + $${extraGuestFee} extra guest fee` : ""}. Total: $${totalAmount}. Remaining 50% ($${totalAmount - depositAmount}) due 30 days before arrival.`,
            },
          },
          quantity: 1,
        },
      ],
      success_url: `${siteUrl}/book/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/book`,
      metadata: {
        checkIn,
        checkOut,
        guests: String(guestCount),
        guestName,
        waiverSignature,
        nights: String(nights),
        totalAmount: String(totalAmount),
        depositAmount: String(depositAmount),
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 });
  }
}
