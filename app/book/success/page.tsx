"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";

function SuccessContent() {
  const params = useSearchParams();
  const sessionId = params.get("session_id");

  return (
    <main style={{ backgroundColor: "#FAF3E0", minHeight: "100vh" }}>
      {/* Header */}
      <div
        className="w-full py-10 px-4 text-center"
        style={{ borderBottom: "3px solid #D4A017" }}
      >
        <h1
          className="font-display text-4xl sm:text-5xl mb-2"
          style={{ color: "#1A1A1A" }}
        >
          You&apos;re Booked! 🎉
        </h1>
        <p className="font-accent text-lg" style={{ color: "#2A9D8F" }}>
          Granny&apos;s Hideaway — Mancelona, MI
        </p>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-12">
        {/* Success card */}
        <div
          className="rounded-2xl p-8 mb-6 text-center"
          style={{
            backgroundColor: "#fff",
            border: "3px solid #2A9D8F",
            boxShadow: "0 4px 20px rgba(42,157,143,0.2)",
          }}
        >
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
            style={{ backgroundColor: "#2A9D8F" }}
          >
            <span style={{ fontSize: "2.5rem" }}>✓</span>
          </div>
          <h2 className="font-display text-3xl mb-3" style={{ color: "#1A1A1A" }}>
            Deposit Received!
          </h2>
          <p className="font-accent text-base mb-2" style={{ color: "#444" }}>
            Thank you for booking Granny&apos;s Hideaway. Your deposit payment was successful.
          </p>
          {sessionId && (
            <p className="font-accent text-xs mt-2" style={{ color: "#999" }}>
              Confirmation: {sessionId.slice(0, 24)}…
            </p>
          )}
        </div>

        {/* What happens next */}
        <div
          className="rounded-2xl p-6 mb-6"
          style={{ backgroundColor: "#fff", border: "2px solid #D4A017", boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}
        >
          <h3 className="font-display text-2xl mb-4" style={{ color: "#1A1A1A" }}>
            What Happens Next
          </h3>
          <div className="space-y-4">
            <NextStep
              icon="📧"
              title="Booking Confirmation"
              description="A confirmation email is on its way to you with your booking details and waiver summary."
            />
            <NextStep
              icon="💳"
              title="Remaining Balance — Due 30 Days Before Arrival"
              description="The remaining 50% of your stay total is due 30 days before your check-in date. We'll send a reminder when it's time."
            />
            <NextStep
              icon="📍"
              title="Property Address — Sent Upon Final Payment"
              description="The full property address (9856 Wyndwood Dr, Mancelona, MI) will be confirmed in your final payment receipt."
            />
            <NextStep
              icon="🔑"
              title="Door Code — Sent Night Before Arrival"
              description="Your unique lockbox door code will be emailed to you the evening before your check-in date. Check-in is at 4:00 PM."
            />
          </div>
        </div>

        {/* Important reminders */}
        <div
          className="rounded-2xl p-6 mb-6"
          style={{ backgroundColor: "#FFF8E7", border: "2px solid #D4A017" }}
        >
          <h3 className="font-display text-xl mb-3" style={{ color: "#1A1A1A" }}>
            Important Reminders
          </h3>
          <ul className="font-accent text-sm space-y-2" style={{ color: "#444" }}>
            <li>🕓 Check-in: 4:00 PM &nbsp;|&nbsp; Check-out: 11:00 AM</li>
            <li>🔥 Always check the <a href="https://michigan.gov/dnr" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#2A9D8F" }}>Michigan DNR burn ban status</a> before using the fire pit</li>
            <li>👥 Max 9 guests (as declared at booking) — exterior cameras monitor occupancy</li>
            <li>📋 House Rules: <a href="/rules" className="underline" style={{ color: "#2A9D8F" }}>grannyshideaway.com/rules</a></li>
          </ul>
        </div>

        {/* Cancellation reminder */}
        <div
          className="rounded-2xl p-4 mb-8 text-center"
          style={{ backgroundColor: "#fff", border: "1px solid #ddd" }}
        >
          <p className="font-accent text-xs" style={{ color: "#888" }}>
            <strong>Cancellation policy:</strong> 100% refund if cancelled 30+ days before check-in. 50% refund 14–29 days. No refund under 14 days.
            One free date change with 30+ days notice.
          </p>
        </div>

        {/* Back home */}
        <div className="text-center">
          <Link
            href="/"
            className="font-accent text-base transition-all hover:scale-105 active:scale-95 inline-block"
            style={{
              backgroundColor: "#D4A017",
              color: "#1A1A1A",
              textDecoration: "none",
              padding: "0.75rem 2rem",
              borderRadius: "9999px",
              border: "2px solid #1A1A1A",
              fontWeight: 700,
            }}
          >
            ← Back to Granny&apos;s Hideaway
          </Link>
        </div>
      </div>
    </main>
  );
}

function NextStep({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="flex gap-4 items-start">
      <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{icon}</span>
      <div>
        <p className="font-accent font-bold text-sm mb-0.5" style={{ color: "#1A1A1A" }}>
          {title}
        </p>
        <p className="font-accent text-sm" style={{ color: "#555" }}>
          {description}
        </p>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <main style={{ backgroundColor: "#FAF3E0", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p className="font-accent text-xl" style={{ color: "#2A9D8F" }}>Loading…</p>
      </main>
    }>
      <SuccessContent />
    </Suspense>
  );
}
