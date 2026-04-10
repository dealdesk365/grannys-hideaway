import { Metadata } from "next";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Vacation Rental in Mancelona Michigan | Granny's Hideaway",
  description:
    "Looking for a vacation rental in Mancelona, Michigan? Granny's Hideaway is a one-of-a-kind retro chalet sleeping 7 — $275/night, private wooded setting, your Northern Michigan base camp.",
  keywords: [
    "vacation rental Mancelona Michigan",
    "Mancelona MI cabin rental",
    "Mancelona vacation rental",
    "cabin rental near Mancelona",
    "Northern Michigan vacation rental",
  ],
  alternates: { canonical: "https://grannyshideaway.com/mancelona-vacation-rental" },
};

export default function MancelonVacationRentalPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{ backgroundColor: "#1A1A1A", padding: "5rem 1.5rem", textAlign: "center" }}>
        <p className="font-accent" style={{ color: "#D4A017", fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "0.75rem" }}>
          Mancelona, Michigan
        </p>
        <h1 className="font-display" style={{ color: "#FAF3E0", fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)", marginBottom: "1.25rem", lineHeight: 1.1 }}>
          Vacation Rental in Mancelona, Michigan
        </h1>
        <p className="font-accent" style={{ color: "#FAF3E0", opacity: 0.8, fontSize: "1.2rem", maxWidth: "620px", margin: "0 auto 2rem" }}>
          A retro chalet tucked in the Northern Michigan woods — and there's nothing else like it.
        </p>
        <a href="/book" style={{ display: "inline-block", backgroundColor: "#2A9D8F", color: "#FAF3E0", padding: "0.9rem 2.25rem", borderRadius: "0.5rem", fontFamily: "var(--font-accent)", fontSize: "1.1rem", textDecoration: "none", fontWeight: 600 }}>
          Check Availability
        </a>
      </section>

      {/* Intro */}
      <section style={{ backgroundColor: "#FAF3E0", padding: "4.5rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#1A1A1A", marginBottom: "1.25rem" }}>
            If you're searching for a vacation rental in Mancelona, Michigan, look no further — Granny's Hideaway is the real deal. Nestled on a wooded lot just outside town, this authentic 1970s chalet sleeps up to 7 and puts you right in the heart of Antrim County's best outdoor country. No cookie-cutter rental vibes here — this place has <em>character</em>.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#1A1A1A" }}>
            Mancelona is the quiet northern town most people drive through on the way to somewhere else. But the ones who stop? They come back. Close enough to Bellaire, Elk Rapids, and Gaylord for a day trip, but far enough from the crowds to actually unwind.
          </p>
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
              ["📍", "Walking distance to Mancelona snowmobile trails — park your sled and sleep in a real bed"],
              ["🏡", "Fully private — no shared walls, no neighbors, just trees"],
              ["🛏️", "Sleeps 7: 2 queens downstairs + 3 twins in the wood-paneled loft"],
              ["💰", "$275/night flat rate — no resort fees, no nonsense"],
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
            Grandma Viola's Chalet
          </h2>
          <p style={{ color: "#FAF3E0", opacity: 0.85, fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            This chalet was Grandma Viola's, and it shows — in the best way. The orange carpet she picked out in 1974 is still here. The bunny ear TV still works. The quilts are stacked on the beds exactly as she left them. Nobody updated the wallpaper because nobody needed to.
          </p>
          <p style={{ color: "#FAF3E0", opacity: 0.85, fontSize: "1.05rem", lineHeight: 1.8 }}>
            Granny's Hideaway didn't try to be retro. It just never stopped being Viola's cabin.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#D4A017", padding: "4rem 1.5rem", textAlign: "center" }}>
        <h2 className="font-display" style={{ color: "#1A1A1A", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", marginBottom: "1rem" }}>
          Ready to Book Your Mancelona Getaway?
        </h2>
        <p className="font-accent" style={{ color: "#1A1A1A", opacity: 0.8, fontSize: "1.1rem", marginBottom: "1.75rem" }}>
          Check available dates and lock in your stay.
        </p>
        <a href="/book" style={{ display: "inline-block", backgroundColor: "#2A9D8F", color: "#FAF3E0", padding: "0.9rem 2.5rem", borderRadius: "0.5rem", fontFamily: "var(--font-accent)", fontSize: "1.1rem", textDecoration: "none", fontWeight: 600 }}>
          Book Now
        </a>
      </section>

      <Footer />
    </main>
  );
}
