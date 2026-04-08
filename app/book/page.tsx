"use client";

import { useState, useCallback, useEffect } from "react";
import { DayPicker, DateRange } from "react-day-picker";
import "react-day-picker/style.css";
import { format, differenceInCalendarDays, isBefore } from "date-fns";

// ─── Pricing helpers ───────────────────────────────────────────────────────────
interface PricingConfig {
  nightlyRate: number;
  cleaningFee: number;
  extraGuestFee: number;
  extraGuestThreshold: number;
  minNights: number;
}

function calcPricing(checkIn: Date, checkOut: Date, guests: number, config: PricingConfig) {
  const nights = differenceInCalendarDays(checkOut, checkIn);
  const baseTotal = nights * config.nightlyRate;
  const extraGuests = Math.max(0, guests - config.extraGuestThreshold);
  const extraGuestFee = extraGuests * config.extraGuestFee * nights;
  const totalAmount = baseTotal + extraGuestFee + config.cleaningFee;
  const depositAmount = Math.round(totalAmount / 2);
  return { nights, nightlyRate: config.nightlyRate, baseTotal, extraGuestFee, totalAmount, depositAmount };
}

// ─── Blocked dates ─────────────────────────────────────────────────────────────
// Nothing available before June 15, 2026
const FIRST_AVAILABLE = new Date(2026, 5, 15); // June 15, 2026

function isDateBlocked(date: Date): boolean {
  return isBefore(date, FIRST_AVAILABLE);
}

// ─── Waiver sections ───────────────────────────────────────────────────────────
const WAIVER_SECTIONS = [
  {
    title: "1. ASSUMPTION OF RISK",
    body: `Guest acknowledges that the property contains inherent risks including but not limited to:
• Original 1974 chalet staircase — narrow and steep. Guest assumes full risk of use.
• Outdoor fire pit — Guest assumes full responsibility for safe use and compliance with Michigan DNR burn bans.
• Outdoor recreational activities — hiking, ORV trails, snowmobiling, fishing, and other activities in the surrounding area.
• Wildlife and natural surroundings.
• Firearms stored or used on premises (if applicable) — Guest assumes full legal and financial responsibility.`,
  },
  {
    title: "2. RELEASE OF LIABILITY",
    body: `Guest releases Granny's Hideaway, its owners, members, agents, and assigns from any and all claims, damages, injuries, losses, or expenses arising from Guest's use of the property or surrounding areas, to the fullest extent permitted by Michigan law.`,
  },
  {
    title: "3. PROPERTY RULES",
    body: `Guest agrees to abide by all House Rules as listed at grannyshideaway.com/rules. Violations may result in immediate removal without refund. Guest acknowledges they have read and understood all House Rules prior to booking.`,
  },
  {
    title: "4. MAXIMUM OCCUPANCY",
    body: `Guest agrees that total occupancy will not exceed the number declared at booking.
• Standard maximum: 7 guests
• Up to 2 additional guests permitted at $35/night per additional guest, declared at time of booking
• Exterior cameras monitor property occupancy
• Undisclosed additional guests constitute a material breach of this agreement`,
  },
  {
    title: "5. DAMAGE & INSURANCE",
    body: `• Guest is required to purchase damage protection through Safely.com at time of booking
• Guest is financially responsible for any damage beyond normal wear and tear not covered by Safely.com protection
• Guest authorizes charges to the payment method on file for damages not covered by Safely.com`,
  },
  {
    title: "6. CANCELLATION POLICY",
    body: `Cancellation Timing / Refund:
• 30+ days before check-in → 100% refund
• 14–29 days before check-in → 50% refund
• Under 14 days before check-in → No refund
• No-show → No refund

One free date change permitted with 30+ days notice. No date changes permitted within 30 days of check-in.`,
  },
  {
    title: "7. CHECK-IN / CHECK-OUT",
    body: `• Check-in: 4:00 PM on arrival date
• Check-out: 11:00 AM on departure date
• Lockbox door code will be sent via email on the day of arrival only
• Early check-in and late check-out are not guaranteed and must be arranged in advance`,
  },
  {
    title: "8. FIRE PIT",
    body: `Guest acknowledges full responsibility for:
• Checking current Michigan DNR burn ban status at michigan.gov/dnr before lighting any fire
• Never leaving fire unattended
• Fully extinguishing fire before going to bed or leaving the property
• Any fines, damages, or liability resulting from improper fire use or violation of active burn bans`,
  },
  {
    title: "9. INDEMNIFICATION",
    body: `Guest agrees to indemnify, defend, and hold harmless Granny's Hideaway and its owners from any and all claims, suits, losses, damages, costs, and attorney fees arising from Guest's stay, including claims by third parties or additional guests.`,
  },
  {
    title: "10. GOVERNING LAW",
    body: `This agreement is governed by the laws of the State of Michigan. Any disputes shall be resolved in Antrim County, Michigan.`,
  },
  {
    title: "11. SEVERABILITY",
    body: `If any provision of this agreement is found unenforceable, the remaining provisions shall remain in full force and effect.`,
  },
  {
    title: "12. ENTIRE AGREEMENT",
    body: `This document, together with the House Rules at grannyshideaway.com/rules, constitutes the entire agreement between Guest and Granny's Hideaway.`,
  },
];

// ─── Step types ────────────────────────────────────────────────────────────────
type Step = "dates" | "waiver";

export default function BookPage() {
  const [step, setStep] = useState<Step>("dates");
  const [range, setRange] = useState<DateRange | undefined>();
  const [guests, setGuests] = useState(2);
  const [waiverAgreed, setWaiverAgreed] = useState(false);
  const [waiverSignature, setWaiverSignature] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pricingConfig, setPricingConfig] = useState<PricingConfig | null>(null);
  const [pricingLoading, setPricingLoading] = useState(true);

  useEffect(() => {
    fetch("/api/pricing")
      .then((r) => r.json())
      .then((data) => {
        setPricingConfig({
          nightlyRate: data.nightly_rate,
          cleaningFee: data.cleaning_fee,
          extraGuestFee: data.extra_guest_fee,
          extraGuestThreshold: data.extra_guest_threshold,
          minNights: data.min_nights,
        });
        setPricingLoading(false);
      })
      .catch(() => {
        // Fall back to defaults
        setPricingConfig({ nightlyRate: 275, cleaningFee: 125, extraGuestFee: 35, extraGuestThreshold: 7, minNights: 2 });
        setPricingLoading(false);
      });
  }, []);

  const checkIn = range?.from;
  const checkOut = range?.to;

  const minNights = pricingConfig?.minNights ?? 2;

  const pricing =
    pricingConfig && checkIn && checkOut && differenceInCalendarDays(checkOut, checkIn) >= minNights
      ? calcPricing(checkIn, checkOut, guests, pricingConfig)
      : null;

  const canProceedToDates =
    checkIn &&
    checkOut &&
    differenceInCalendarDays(checkOut, checkIn) >= minNights;

  const canSubmit = waiverAgreed && waiverSignature.trim().length > 2;

  const handleSubmit = useCallback(async () => {
    if (!checkIn || !checkOut || !pricing) return;
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          checkIn: checkIn.toISOString(),
          checkOut: checkOut.toISOString(),
          guests,
          guestName: waiverSignature.trim(),
          waiverAgreed,
          waiverSignature: waiverSignature.trim(),
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        setSubmitting(false);
        return;
      }
      if (data.url) {
        window.location.href = data.url;
      }
    } catch {
      setError("Network error. Please try again.");
      setSubmitting(false);
    }
  }, [checkIn, checkOut, guests, waiverAgreed, waiverSignature, pricing]);

  if (pricingLoading) {
    return (
      <main style={{ backgroundColor: "#FAF3E0", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p className="font-accent text-lg" style={{ color: "#666" }}>Loading…</p>
      </main>
    );
  }

  return (
    <main style={{ backgroundColor: "#FAF3E0", minHeight: "100vh" }}>
      {/* Page Header */}
      <div
        className="w-full py-10 px-4 text-center"
        style={{ borderBottom: "3px solid #D4A017" }}
      >
        <h1
          className="font-display text-4xl sm:text-5xl mb-2"
          style={{ color: "#1A1A1A" }}
        >
          Book Your Stay
        </h1>
        <p className="font-accent text-lg" style={{ color: "#2A9D8F" }}>
          Granny&apos;s Hideaway — Mancelona, MI
        </p>
      </div>

      {/* Step indicator */}
      <div className="flex justify-center gap-4 py-6 px-4">
        <StepBadge num={1} label="Dates & Guests" active={step === "dates"} done={step === "waiver"} />
        <div style={{ width: "2rem", height: "2px", backgroundColor: "#D4A017", alignSelf: "center" }} />
        <StepBadge num={2} label="Review & Sign" active={step === "waiver"} done={false} />
      </div>

      <div className="max-w-3xl mx-auto px-4 pb-20">
        {/* ── STEP 1: Dates & Guests ── */}
        {step === "dates" && (
          <div>
            {/* Availability note */}
            <div
              className="rounded-xl p-4 mb-6 font-accent text-sm"
              style={{ backgroundColor: "#FFF8E7", border: "2px solid #D4A017", color: "#1A1A1A" }}
            >
              📅 <strong>Availability note:</strong> Now booking from June 15, 2026 onward. {minNights}-night minimum required.
            </div>

            {/* Date Picker */}
            <div
              className="rounded-2xl p-6 mb-6"
              style={{ backgroundColor: "#fff", border: "2px solid #D4A017", boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}
            >
              <h2 className="font-display text-2xl mb-4" style={{ color: "#1A1A1A" }}>
                Select Your Dates
              </h2>
              <div className="flex justify-center overflow-x-auto">
                <DayPicker
                  mode="range"
                  selected={range}
                  onSelect={setRange}
                  disabled={isDateBlocked}
                  numberOfMonths={1}
                  fromDate={new Date()}
                  style={{ fontFamily: "inherit" }}
                  styles={{
                    day_selected: { backgroundColor: "#2A9D8F", color: "#fff" },
                    day_range_middle: { backgroundColor: "#d4f0ed", color: "#1A1A1A" },
                  }}
                />
              </div>
              {checkIn && checkOut && differenceInCalendarDays(checkOut, checkIn) < minNights && (
                <p className="text-center mt-2 font-accent" style={{ color: "#C85A1E" }}>
                  Minimum stay is {minNights} nights. Please select a longer range.
                </p>
              )}
              {checkIn && checkOut && differenceInCalendarDays(checkOut, checkIn) >= minNights && (
                <p className="text-center mt-2 font-accent" style={{ color: "#2A9D8F" }}>
                  ✓ {format(checkIn, "MMM d")} → {format(checkOut, "MMM d, yyyy")} ({differenceInCalendarDays(checkOut, checkIn)} nights)
                </p>
              )}
            </div>

            {/* Guest Count */}
            <div
              className="rounded-2xl p-6 mb-6"
              style={{ backgroundColor: "#fff", border: "2px solid #D4A017", boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}
            >
              <h2 className="font-display text-2xl mb-4" style={{ color: "#1A1A1A" }}>
                Number of Guests
              </h2>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setGuests((g) => Math.max(1, g - 1))}
                  className="font-display text-2xl w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-95"
                  style={{ backgroundColor: "#D4A017", color: "#1A1A1A", border: "2px solid #1A1A1A" }}
                  aria-label="Decrease guests"
                >
                  −
                </button>
                <span className="font-display text-3xl" style={{ minWidth: "2.5rem", textAlign: "center" }}>
                  {guests}
                </span>
                <button
                  onClick={() => setGuests((g) => Math.min(9, g + 1))}
                  className="font-display text-2xl w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-95"
                  style={{ backgroundColor: "#D4A017", color: "#1A1A1A", border: "2px solid #1A1A1A" }}
                  aria-label="Increase guests"
                >
                  +
                </button>
                <span className="font-accent text-sm" style={{ color: "#666" }}>
                  Max 9 guests
                </span>
              </div>
              {pricingConfig && guests > pricingConfig.extraGuestThreshold && (
                <p className="mt-2 font-accent text-sm" style={{ color: "#2A9D8F" }}>
                  Extra guest fee: ${guests - pricingConfig.extraGuestThreshold} additional guest{guests - pricingConfig.extraGuestThreshold > 1 ? "s" : ""} × ${pricingConfig.extraGuestFee}/night
                </p>
              )}
            </div>

            {/* Price Breakdown */}
            {pricing && checkIn && checkOut && (
              <div
                className="rounded-2xl p-6 mb-6"
                style={{ backgroundColor: "#fff", border: "2px solid #2A9D8F", boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}
              >
                <h2 className="font-display text-2xl mb-4" style={{ color: "#1A1A1A" }}>
                  Price Breakdown
                </h2>
                <div className="space-y-2">
                  <PriceLine
                    label={`$${pricing.nightlyRate}/night × ${pricing.nights} nights`}
                    value={`$${pricing.baseTotal}`}
                  />
                  {pricing.extraGuestFee > 0 && pricingConfig && (
                    <PriceLine
                      label={`Extra guest fee (${guests - pricingConfig.extraGuestThreshold} guest${guests - pricingConfig.extraGuestThreshold > 1 ? "s" : ""} × $${pricingConfig.extraGuestFee} × ${pricing.nights} nights)`}
                      value={`$${pricing.extraGuestFee}`}
                    />
                  )}
                  <PriceLine label="Cleaning fee" value={`$${pricingConfig?.cleaningFee ?? 125}`} />
                  <div style={{ borderTop: "2px solid #D4A017", paddingTop: "0.75rem", marginTop: "0.75rem" }}>
                    <PriceLine label="Total stay" value={`$${pricing.totalAmount}`} bold />
                    <PriceLine
                      label="50% deposit due today"
                      value={`$${pricing.depositAmount}`}
                      bold
                      highlight
                    />
                    <PriceLine
                      label="Remaining balance (due 30 days before arrival)"
                      value={`$${pricing.totalAmount - pricing.depositAmount}`}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Continue button */}
            <button
              onClick={() => setStep("waiver")}
              disabled={!canProceedToDates}
              className="w-full font-accent text-xl py-4 rounded-2xl transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed"
              style={{
                backgroundColor: canProceedToDates ? "#2A9D8F" : "#ccc",
                color: "#FAF3E0",
                border: "2px solid #1A1A1A",
                boxShadow: canProceedToDates ? "0 4px 16px rgba(42,157,143,0.35)" : "none",
              }}
            >
              Continue to Rental Agreement →
            </button>
          </div>
        )}

        {/* ── STEP 2: Waiver ── */}
        {step === "waiver" && checkIn && checkOut && pricing && (
          <div>
            {/* Booking summary recap */}
            <div
              className="rounded-xl p-4 mb-6 font-accent"
              style={{ backgroundColor: "#FFF8E7", border: "2px solid #D4A017", color: "#1A1A1A" }}
            >
              <strong>Your booking:</strong> {format(checkIn, "MMM d")} → {format(checkOut, "MMM d, yyyy")} &nbsp;|&nbsp;
              {pricing.nights} nights &nbsp;|&nbsp; {guests} guest{guests > 1 ? "s" : ""} &nbsp;|&nbsp;
              <strong>Deposit due today: ${pricing.depositAmount}</strong>
              <button
                onClick={() => setStep("dates")}
                className="ml-3 underline text-sm"
                style={{ color: "#2A9D8F", background: "none", border: "none", cursor: "pointer" }}
              >
                Edit
              </button>
            </div>

            {/* Waiver */}
            <div
              className="rounded-2xl p-6 mb-6"
              style={{ backgroundColor: "#fff", border: "2px solid #D4A017", boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}
            >
              <h2 className="font-display text-2xl mb-1" style={{ color: "#1A1A1A" }}>
                Guest Liability Waiver & Rental Agreement
              </h2>
              <p className="font-accent text-sm mb-1" style={{ color: "#666" }}>
                9856 Wyndwood Dr, Mancelona, MI 49659
              </p>
              <p className="font-accent text-sm mb-4" style={{ color: "#C85A1E" }}>
                Please read the entire agreement before signing.
              </p>

              <div
                className="overflow-y-auto rounded-xl p-4 mb-4"
                style={{
                  maxHeight: "400px",
                  border: "1px solid #D4A017",
                  backgroundColor: "#FAF3E0",
                  fontSize: "0.9rem",
                  lineHeight: "1.6",
                }}
              >
                <p className="font-accent font-bold text-center mb-4 uppercase tracking-wide" style={{ color: "#1A1A1A" }}>
                  BY COMPLETING THIS BOOKING, GUEST AGREES TO THE FOLLOWING:
                </p>
                {WAIVER_SECTIONS.map((section) => (
                  <div key={section.title} className="mb-5">
                    <h3 className="font-accent font-bold mb-2" style={{ color: "#1A1A1A" }}>
                      {section.title}
                    </h3>
                    <p style={{ color: "#333", whiteSpace: "pre-line" }}>{section.body}</p>
                  </div>
                ))}
              </div>

              {/* Checkbox */}
              <label className="flex items-start gap-3 cursor-pointer mb-5">
                <input
                  type="checkbox"
                  checked={waiverAgreed}
                  onChange={(e) => setWaiverAgreed(e.target.checked)}
                  className="mt-1 w-5 h-5 cursor-pointer"
                  style={{ accentColor: "#2A9D8F", flexShrink: 0 }}
                />
                <span className="font-accent text-sm" style={{ color: "#1A1A1A" }}>
                  I have read and agree to the Guest Liability Waiver & Rental Agreement in its entirety. I am 18 years of age or older and am responsible for ensuring all guests in my party comply with this agreement.
                </span>
              </label>

              {/* Signature */}
              <div>
                <label className="font-accent font-bold text-sm block mb-2" style={{ color: "#1A1A1A" }}>
                  Full Legal Name (typed signature)
                </label>
                <input
                  type="text"
                  value={waiverSignature}
                  onChange={(e) => setWaiverSignature(e.target.value)}
                  placeholder="Type your full legal name"
                  className="w-full rounded-xl px-4 py-3 font-accent text-base outline-none"
                  style={{
                    border: "2px solid #D4A017",
                    backgroundColor: "#FFF8E7",
                    color: "#1A1A1A",
                  }}
                />
              </div>
            </div>

            {error && (
              <div
                className="rounded-xl p-4 mb-4 font-accent text-sm"
                style={{ backgroundColor: "#FEE2E2", border: "2px solid #C85A1E", color: "#C85A1E" }}
              >
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              onClick={handleSubmit}
              disabled={!canSubmit || submitting}
              className="w-full font-accent text-xl py-4 rounded-2xl transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed"
              style={{
                backgroundColor: canSubmit && !submitting ? "#2A9D8F" : "#ccc",
                color: "#FAF3E0",
                border: "2px solid #1A1A1A",
                boxShadow: canSubmit && !submitting ? "0 4px 16px rgba(42,157,143,0.35)" : "none",
              }}
            >
              {submitting ? "Redirecting to payment…" : `Pay $${pricing.depositAmount} Deposit →`}
            </button>
            <p className="text-center font-accent text-xs mt-3" style={{ color: "#666" }}>
              You&apos;ll be redirected to Stripe&apos;s secure checkout. Remaining balance of ${pricing.totalAmount - pricing.depositAmount} due 30 days before arrival.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

// ─── Sub-components ────────────────────────────────────────────────────────────

function StepBadge({ num, label, active, done }: { num: number; label: string; active: boolean; done: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center font-display text-sm"
        style={{
          backgroundColor: active ? "#2A9D8F" : done ? "#D4A017" : "#e0d9cc",
          color: active || done ? "#FAF3E0" : "#888",
          border: "2px solid #1A1A1A",
        }}
      >
        {done ? "✓" : num}
      </div>
      <span className="font-accent text-sm" style={{ color: active ? "#1A1A1A" : "#888" }}>
        {label}
      </span>
    </div>
  );
}

function PriceLine({
  label,
  value,
  bold,
  highlight,
}: {
  label: string;
  value: string;
  bold?: boolean;
  highlight?: boolean;
}) {
  return (
    <div
      className="flex justify-between items-center py-1 font-accent text-sm"
      style={{
        color: highlight ? "#2A9D8F" : "#1A1A1A",
        fontWeight: bold ? 700 : 400,
        fontSize: highlight ? "1.05rem" : undefined,
      }}
    >
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}
