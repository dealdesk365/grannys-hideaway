import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { supabase } from "@/lib/supabase";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-03-25.dahlia",
});

const PRICING_DEFAULTS = {
  nightly_rate: 275,
  cleaning_fee: 125,
  extra_guest_fee: 35,
  extra_guest_threshold: 7,
  min_nights: 2,
};

interface CustomPricingRange {
  id: string;
  label: string;
  from_date: string;
  to_date: string;
  nightly_rate: number;
}

async function fetchPricingWithCustom() {
  try {
    const [pricingResult, customResult] = await Promise.all([
      supabase.from("pricing").select("*").eq("id", 1).single(),
      supabase
        .from("custom_pricing")
        .select("id, label, from_date, to_date, nightly_rate")
        .order("from_date", { ascending: true }),
    ]);
    const base = pricingResult.error || !pricingResult.data ? PRICING_DEFAULTS : pricingResult.data;
    const customPricing: CustomPricingRange[] = customResult.error ? [] : (customResult.data ?? []);
    return { base, customPricing };
  } catch {
    return { base: PRICING_DEFAULTS, customPricing: [] };
  }
}

/** Returns the nightly rate for a specific date (ISO yyyy-mm-dd) given custom pricing ranges */
function getEffectiveRate(
  dateStr: string,
  customPricing: CustomPricingRange[],
  baseRate: number
): { rate: number; label?: string } {
  for (const range of customPricing) {
    if (dateStr >= range.from_date && dateStr <= range.to_date) {
      return { rate: range.nightly_rate, label: range.label };
    }
  }
  return { rate: baseRate };
}

/** Format a Date to yyyy-mm-dd in local time */
function toDateStr(d: Date): string {
  return d.toISOString().slice(0, 10);
}

function calculatePricingPerNight(
  checkIn: Date,
  checkOut: Date,
  guests: number,
  base: typeof PRICING_DEFAULTS,
  customPricing: CustomPricingRange[]
) {
  const msPerDay = 1000 * 60 * 60 * 24;
  const nights = Math.round((checkOut.getTime() - checkIn.getTime()) / msPerDay);

  // Iterate each night
  const nightBreakdown: Array<{ dateStr: string; rate: number; label?: string }> = [];
  for (let i = 0; i < nights; i++) {
    const nightDate = new Date(checkIn.getTime() + i * msPerDay);
    const dateStr = toDateStr(nightDate);
    const { rate, label } = getEffectiveRate(dateStr, customPricing, base.nightly_rate);
    nightBreakdown.push({ dateStr, rate, label });
  }

  const baseTotal = nightBreakdown.reduce((sum, n) => sum + n.rate, 0);
  const extraGuests = Math.max(0, guests - base.extra_guest_threshold);
  const extraGuestFee = extraGuests * base.extra_guest_fee * nights;
  const totalAmount = baseTotal + extraGuestFee + base.cleaning_fee;
  const depositAmount = Math.round(totalAmount / 2);

  // Count custom-rate nights for description
  const customNights = nightBreakdown.filter((n) => n.label);
  const baseNights = nights - customNights.length;

  return { nights, baseTotal, extraGuestFee, totalAmount, depositAmount, nightBreakdown, baseNights, customNights };
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

    const { base, customPricing } = await fetchPricingWithCustom();

    const { nights, baseTotal, extraGuestFee, totalAmount, depositAmount, customNights } =
      calculatePricingPerNight(checkInDate, checkOutDate, guestCount, base, customPricing);

    if (nights < base.min_nights) {
      return NextResponse.json({ error: `Minimum stay is ${base.min_nights} nights` }, { status: 400 });
    }

    if (guestCount < 1 || guestCount > 9) {
      return NextResponse.json({ error: "Guest count must be between 1 and 9" }, { status: 400 });
    }

    const checkInFormatted = checkInDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    const checkOutFormatted = checkOutDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

    const itemDescription = `Granny's Hideaway — ${checkInFormatted}–${checkOutFormatted} (${nights} nights, ${guestCount} guests) — 50% Deposit`;

    // Build a description that shows custom pricing if applicable
    let pricingDesc = `$${baseTotal} accommodation`;
    if (customNights.length > 0) {
      const uniqueLabels = Array.from(new Set(customNights.map((n) => n.label).filter(Boolean)));
      pricingDesc += ` (includes ${customNights.length} holiday-rate night${customNights.length > 1 ? "s" : ""}: ${uniqueLabels.join(", ")})`;
    }
    pricingDesc += ` + $${base.cleaning_fee} cleaning fee`;
    if (extraGuestFee > 0) {
      pricingDesc += ` + $${extraGuestFee} extra guest fee`;
    }
    pricingDesc += `. Total: $${totalAmount}. Remaining 50% ($${totalAmount - depositAmount}) due 30 days before arrival.`;

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            unit_amount: depositAmount * 100,
            product_data: {
              name: itemDescription,
              description: pricingDesc,
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
