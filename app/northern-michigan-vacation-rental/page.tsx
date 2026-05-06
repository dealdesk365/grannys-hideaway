import { Metadata } from "next";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Northern Michigan Vacation Rental | Granny's Hideaway | Mancelona, MI",
  description:
    "Book a Northern Michigan vacation rental that feels like home. Granny's Hideaway is a vintage 1970s cottage in Mancelona — $275/night, sleeps 7, fully private. Perfect for family trips, couples, golf getaways, and snowmobile weekends.",
  keywords: [
    "Northern Michigan vacation rental",
    "northern michigan vacation rental cabin",
    "vacation rental northern michigan",
    "northern michigan vacation cottage",
    "Mancelona vacation rental",
    "Antrim County vacation rental",
  ],
  alternates: { canonical: "https://grannyshideaway.com/northern-michigan-vacation-rental" },
};

export default function NorthernMichiganVacationRentalPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{ backgroundColor: "#1A1A1A", padding: "5rem 1.5rem", textAlign: "center" }}>
        <p className="font-accent" style={{ color: "#D4A017", fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "0.75rem" }}>
          Northern Michigan Vacation Rental
        </p>
        <h1 className="font-display" style={{ color: "#FAF3E0", fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)", marginBottom: "1.25rem", lineHeight: 1.1 }}>
          Your Northern Michigan Getaway Starts Here
        </h1>
        <p className="font-accent" style={{ color: "#FAF3E0", opacity: 0.8, fontSize: "1.2rem", maxWidth: "620px", margin: "0 auto 2rem" }}>
          Granny's Hideaway is a fully private Northern Michigan vacation rental in Mancelona — vintage, warm, and unlike anything else up north.
        </p>
        <a href="/book" style={{ display: "inline-block", backgroundColor: "#2A9D8F", color: "#FAF3E0", padding: "0.9rem 2.25rem", borderRadius: "0.5rem", fontFamily: "var(--font-accent)", fontSize: "1.1rem", textDecoration: "none", fontWeight: 600 }}>
          Check Availability
        </a>
      </section>

      {/* Intro */}
      <section style={{ backgroundColor: "#FAF3E0", padding: "4.5rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 className="font-display" style={{ color: "#1A1A1A", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", marginBottom: "1.25rem" }}>
            A Northern Michigan Vacation Rental Worth Talking About
          </h2>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#1A1A1A", marginBottom: "1.25rem" }}>
            If you've been searching for a Northern Michigan vacation rental that isn't a generic condo or a cookie-cutter VRBO, you've found it. Granny's Hideaway is a 1970s chalet in Mancelona, Antrim County — built by Grandma Viola, kept exactly as she left it, and now open to guests who appreciate the real thing.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#1A1A1A", marginBottom: "1.25rem" }}>
            Mancelona puts you 25 minutes from Bellaire, 30 minutes from Torch Lake, 20 minutes from Gaylord, and about an hour from Petoskey and Traverse City. It's the middle of Northern Michigan in the best possible way — close to everything without paying the waterfront premium.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#1A1A1A" }}>
            At $275/night with a $125 cleaning fee, the cabin sleeps 7 comfortably across three bedrooms. Fully private lot, fire pit, full kitchen, washer/dryer — everything a Northern Michigan vacation needs.
          </p>
        </div>
      </section>

      {/* What's nearby */}
      <section style={{ backgroundColor: "#2A9D8F", padding: "4.5rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 className="font-display" style={{ color: "#FAF3E0", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", marginBottom: "2rem", textAlign: "center" }}>
            Everything Northern Michigan in One Base Camp
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {[
              ["⛳", "Gaylord Golf Mecca", "20 min — 20+ championship courses within driving distance"],
              ["🌊", "Torch Lake", "30 min — some of the clearest water in the Midwest"],
              ["🏔️", "Shanty Creek & Boyne", "35 min — skiing, snowboarding, mountain biking"],
              ["🛷", "Snowmobile Trails", "Direct trail access from Lakes of the North"],
              ["🏍️", "SxS / ORV Trails", "Deward Tract and Pigeon River Forest nearby"],
              ["🌉", "Mackinac Bridge", "75 min north — a classic Northern Michigan day trip"],
            ].map(([icon, title, desc]) => (
              <div key={title as string} style={{ backgroundColor: "rgba(0,0,0,0.15)", borderRadius: "0.75rem", padding: "1.25rem" }}>
                <div style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>{icon}</div>
                <p className="font-accent" style={{ color: "#FAF3E0", fontWeight: 600, marginBottom: "0.25rem" }}>{title as string}</p>
                <p style={{ color: "rgba(250,243,224,0.75)", fontSize: "0.9rem", lineHeight: 1.5 }}>{desc as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The cabin */}
      <section style={{ backgroundColor: "#FAF3E0", padding: "4.5rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 className="font-display" style={{ color: "#1A1A1A", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", marginBottom: "1.5rem" }}>
            What's Included
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.75rem", marginBottom: "2rem" }}>
            {["3 bedrooms (2 queens + 3 twins in loft)", "Sleeps 7 guests", "Fully private wooded lot", "Fire pit", "Full kitchen", "Washer & dryer", "WiFi", "Bit O Honeys on arrival 🍬"].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.5rem", backgroundColor: "#fff", borderRadius: "0.5rem", padding: "0.75rem 1rem", border: "1px solid rgba(0,0,0,0.07)" }}>
                <span style={{ color: "#2A9D8F", fontWeight: 700 }}>✓</span>
                <span style={{ color: "#1A1A1A", fontSize: "0.95rem" }}>{item}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#555" }}>
            Now booking from June 15, 2026. The cabin is available for weekend and week-long stays. Minimum 2 nights.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#1A1A1A", padding: "4rem 1.5rem", textAlign: "center" }}>
        <h2 className="font-display" style={{ color: "#FAF3E0", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", marginBottom: "1rem" }}>
          Ready to Book Your Northern Michigan Vacation?
        </h2>
        <p className="font-accent" style={{ color: "#FAF3E0", opacity: 0.75, fontSize: "1.1rem", marginBottom: "1.75rem" }}>
          $275/night · Sleeps 7 · Fully private · Mancelona, MI · Now booking June 15+
        </p>
        <a href="/book" style={{ display: "inline-block", backgroundColor: "#2A9D8F", color: "#FAF3E0", padding: "0.9rem 2.5rem", borderRadius: "0.5rem", fontFamily: "var(--font-accent)", fontSize: "1.1rem", textDecoration: "none", fontWeight: 600 }}>
          Book Your Stay
        </a>
      </section>

      <Footer />
    </main>
  );
}
