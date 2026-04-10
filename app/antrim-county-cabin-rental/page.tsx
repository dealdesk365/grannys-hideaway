import { Metadata } from "next";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Antrim County Cabin Rental | Granny's Hideaway",
  description:
    "Rent a cabin in Antrim County, Michigan. Granny's Hideaway is a vintage chalet in Mancelona, MI — sleeps 7, private woods, 25 min from Bellaire and Elk Rapids. Book direct.",
  keywords: [
    "Antrim County cabin rental",
    "cabin rental Antrim County Michigan",
    "Antrim County vacation rental",
    "Mancelona cabin Antrim County",
    "Antrim County Michigan lodging",
  ],
  alternates: { canonical: "https://grannyshideaway.com/antrim-county-cabin-rental" },
};

export default function AntrimCountyCabinRentalPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{ backgroundColor: "#1A1A1A", padding: "5rem 1.5rem", textAlign: "center" }}>
        <p className="font-accent" style={{ color: "#D4A017", fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "0.75rem" }}>
          Antrim County, Michigan
        </p>
        <h1 className="font-display" style={{ color: "#FAF3E0", fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)", marginBottom: "1.25rem", lineHeight: 1.1 }}>
          Antrim County Cabin Rental
        </h1>
        <p className="font-accent" style={{ color: "#FAF3E0", opacity: 0.8, fontSize: "1.2rem", maxWidth: "620px", margin: "0 auto 2rem" }}>
          A private wooded hideaway in Mancelona — smack in the middle of everything Antrim County has to offer.
        </p>
        <a href="/book" style={{ display: "inline-block", backgroundColor: "#2A9D8F", color: "#FAF3E0", padding: "0.9rem 2.25rem", borderRadius: "0.5rem", fontFamily: "var(--font-accent)", fontSize: "1.1rem", textDecoration: "none", fontWeight: 600 }}>
          Check Availability
        </a>
      </section>

      {/* Intro */}
      <section style={{ backgroundColor: "#FAF3E0", padding: "4.5rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#1A1A1A", marginBottom: "1.25rem" }}>
            Antrim County is one of Northern Michigan's most underrated destinations — crystal-clear lakes, dense forests, ski hills, snowmobile corridors, and small towns that still feel like themselves. If you're looking for an Antrim County cabin rental, Granny's Hideaway in Mancelona puts you right at the county's geographic heart.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#1A1A1A" }}>
            From the cabin you're 25 minutes from Bellaire, 30 minutes from Elk Rapids, close to the Torch Lake chain, and just up the road from Shanty Creek Ski Resort. Everything Antrim County — without the resort pricing.
          </p>
        </div>
      </section>

      {/* Antrim County Highlights */}
      <section style={{ backgroundColor: "#D4A017", padding: "4.5rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 className="font-display" style={{ color: "#1A1A1A", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", marginBottom: "0.75rem", textAlign: "center" }}>
            Antrim County Day Trips
          </h2>
          <p className="font-accent" style={{ color: "#1A1A1A", opacity: 0.75, textAlign: "center", marginBottom: "2rem" }}>Everything within 45 minutes of the cabin</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              ["🏔️", "Shanty Creek Ski Resort — 20 minutes. Two mountains, lodges, and some of the best terrain in the Lower Peninsula"],
              ["🏖️", "Torch Lake — 30 minutes. The clearest lake in Michigan. Day trip, not the same area"],
              ["🍺", "Bellaire — 25 minutes. Home of Short's Brewing, Shorts Local's Only, and the Antrim County fair vibes"],
              ["🌊", "Elk Rapids — 30 minutes. Elk Lake, Lake Michigan access, harbor, and good food"],
            ].map(([icon, text]) => (
              <div key={text as string} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", backgroundColor: "rgba(0,0,0,0.1)", borderRadius: "0.75rem", padding: "1rem 1.25rem" }}>
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{icon}</span>
                <p className="font-accent" style={{ color: "#1A1A1A", fontSize: "1.05rem", lineHeight: 1.6 }}>{text as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why section */}
      <section style={{ backgroundColor: "#C85A1E", padding: "4.5rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 className="font-display" style={{ color: "#FAF3E0", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", marginBottom: "2rem", textAlign: "center" }}>
            Why Granny's Hideaway?
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              ["🌲", "Private wooded lot — total seclusion, no shared walls"],
              ["🛏️", "Sleeps 7: 2 queens + 3 twins in the loft — perfect for families or a friend group"],
              ["📍", "Central Antrim County location — quick drive to everything, peaceful when you get back"],
              ["🕰️", "Authentic 1970s chalet — Grandma Viola's original decor, unchanged and unapologetic"],
            ].map(([icon, text]) => (
              <div key={text as string} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", backgroundColor: "rgba(0,0,0,0.15)", borderRadius: "0.75rem", padding: "1rem 1.25rem" }}>
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{icon}</span>
                <p className="font-accent" style={{ color: "#FAF3E0", fontSize: "1.05rem", lineHeight: 1.6 }}>{text as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grandma Viola */}
      <section style={{ backgroundColor: "#1A1A1A", padding: "4.5rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
          <p className="font-accent" style={{ color: "#D4A017", fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "0.75rem" }}>The Story</p>
          <h2 className="font-display" style={{ color: "#FAF3E0", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", marginBottom: "1.5rem" }}>
            Grandma Viola Picked This County
          </h2>
          <p style={{ color: "#FAF3E0", opacity: 0.85, fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Viola chose this corner of Antrim County back in the early 70s — and she had good taste. Orange carpet in the living room, blue and green shag in the bedrooms, quilts on every bed. The bunny ear TV still pulls a signal. The guest book still has her handwriting on the first page.
          </p>
          <p style={{ color: "#FAF3E0", opacity: 0.85, fontSize: "1.05rem", lineHeight: 1.8 }}>
            Antrim County was Grandma Viola's territory. Now it can be yours for a weekend.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#FAF3E0", padding: "4rem 1.5rem", textAlign: "center" }}>
        <h2 className="font-display" style={{ color: "#1A1A1A", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", marginBottom: "1rem" }}>
          Book Your Antrim County Stay
        </h2>
        <p className="font-accent" style={{ color: "#1A1A1A", opacity: 0.7, fontSize: "1.1rem", marginBottom: "1.75rem" }}>
          $275/night · Sleeps 7 · Private woods · Book direct, no extra fees
        </p>
        <a href="/book" style={{ display: "inline-block", backgroundColor: "#2A9D8F", color: "#FAF3E0", padding: "0.9rem 2.5rem", borderRadius: "0.5rem", fontFamily: "var(--font-accent)", fontSize: "1.1rem", textDecoration: "none", fontWeight: 600 }}>
          Book Now
        </a>
      </section>

      <Footer />
    </main>
  );
}
