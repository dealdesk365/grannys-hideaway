import { Metadata } from "next";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Northern Michigan Cabin Rental | Granny's Hideaway",
  description:
    "Book a Northern Michigan cabin rental that's anything but generic. Granny's Hideaway is a vintage 1970s chalet in Mancelona — $275/night, sleeps 7, private wooded setting. Your base camp for all of Northern Michigan.",
  keywords: [
    "northern Michigan cabin rental",
    "cabin rental Northern Michigan",
    "Northern Michigan vacation rental",
    "retro cabin Northern Michigan",
    "Antrim County cabin",
  ],
  alternates: { canonical: "https://grannyshideaway.com/northern-michigan-cabin-rental" },
};

export default function NorthernMichiganCabinRentalPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{ backgroundColor: "#1A1A1A", padding: "5rem 1.5rem", textAlign: "center" }}>
        <p className="font-accent" style={{ color: "#D4A017", fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "0.75rem" }}>
          Your Northern Michigan Base Camp
        </p>
        <h1 className="font-display" style={{ color: "#FAF3E0", fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)", marginBottom: "1.25rem", lineHeight: 1.1 }}>
          Northern Michigan Cabin Rental
        </h1>
        <p className="font-accent" style={{ color: "#FAF3E0", opacity: 0.8, fontSize: "1.2rem", maxWidth: "620px", margin: "0 auto 2rem" }}>
          A real cabin, not a Pinterest remodel. Granny kept everything exactly as it was — and somehow that's the whole point.
        </p>
        <a href="/book" style={{ display: "inline-block", backgroundColor: "#2A9D8F", color: "#FAF3E0", padding: "0.9rem 2.25rem", borderRadius: "0.5rem", fontFamily: "var(--font-accent)", fontSize: "1.1rem", textDecoration: "none", fontWeight: 600 }}>
          Check Availability
        </a>
      </section>

      {/* Intro */}
      <section style={{ backgroundColor: "#FAF3E0", padding: "4.5rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#1A1A1A", marginBottom: "1.25rem" }}>
            Granny's Hideaway is a Northern Michigan cabin rental in Mancelona — and it earns that name. Set on a private wooded lot in Antrim County, this 1970s chalet is your launch point for snowmobiling, SxS trails, fall foliage, Torch Lake day trips, Shanty Creek ski runs, and everything else the north has to offer.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#1A1A1A" }}>
            Mancelona sits in the sweet spot: 25 minutes from Bellaire, 30 minutes from Elk Rapids and the Torch Lake chain, 20 minutes from Gaylord. You're in the middle of it all without the resort price tag.
          </p>
        </div>
      </section>

      {/* Why section */}
      <section style={{ backgroundColor: "#2A9D8F", padding: "4.5rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 className="font-display" style={{ color: "#FAF3E0", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", marginBottom: "2rem", textAlign: "center" }}>
            Why Granny's Hideaway?
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              ["🌲", "Fully private — no shared walls, no condo hallways, no neighbors in earshot"],
              ["🏔️", "Central to all of Northern Michigan's best: Torch Lake, Shanty Creek, Deward Tract trails, Bellaire, Elk Rapids"],
              ["🛏️", "Sleeps 7 comfortably — 2 queens + 3 twins in the wood-paneled loft"],
              ["🍬", "Bit O Honeys waiting on the table when you arrive. Because Granny."],
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
      <section style={{ backgroundColor: "#FAF3E0", padding: "4.5rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p className="font-accent" style={{ color: "#C85A1E", fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "0.75rem", textAlign: "center" }}>The Story Behind the Place</p>
          <h2 className="font-display" style={{ color: "#1A1A1A", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", marginBottom: "1.5rem", textAlign: "center" }}>
            Meet Grandma Viola
          </h2>
          <p style={{ color: "#1A1A1A", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Grandma Viola picked out that orange carpet herself. The wallpaper was her choice. The quilts on the beds? Hers. When Viola passed, the family couldn't bring themselves to change anything — and when you see it in person, you'll understand why.
          </p>
          <p style={{ color: "#1A1A1A", fontSize: "1.05rem", lineHeight: 1.8 }}>
            Granny's Hideaway is a Northern Michigan cabin rental that's also a time capsule. Nothing is reproduction. Everything is exactly as she left it — and Viola had excellent taste, even if "excellent" just meant she committed fully to 1974.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#1A1A1A", padding: "4rem 1.5rem", textAlign: "center" }}>
        <h2 className="font-display" style={{ color: "#FAF3E0", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", marginBottom: "1rem" }}>
          Your Northern Michigan Cabin Is Waiting
        </h2>
        <p className="font-accent" style={{ color: "#FAF3E0", opacity: 0.75, fontSize: "1.1rem", marginBottom: "1.75rem" }}>
          $275/night · Sleeps 7 · Fully private · Mancelona, MI
        </p>
        <a href="/book" style={{ display: "inline-block", backgroundColor: "#2A9D8F", color: "#FAF3E0", padding: "0.9rem 2.5rem", borderRadius: "0.5rem", fontFamily: "var(--font-accent)", fontSize: "1.1rem", textDecoration: "none", fontWeight: 600 }}>
          Book Your Stay
        </a>
      </section>

      <Footer />
    </main>
  );
}
