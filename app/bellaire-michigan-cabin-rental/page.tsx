import { Metadata } from "next";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Bellaire Michigan Cabin Rental | Granny's Hideaway Near Bellaire MI",
  description:
    "Cabin rental near Bellaire, Michigan — 25 minutes from Short's Brewing and downtown Bellaire. Granny's Hideaway in Mancelona sleeps 7, private woods, $275/night. Book direct.",
  keywords: [
    "Bellaire Michigan cabin rental",
    "cabin near Bellaire MI",
    "Short's Brewing cabin rental",
    "Bellaire vacation rental",
    "Antrim County cabin near Bellaire",
  ],
  alternates: { canonical: "https://grannyshideaway.com/bellaire-michigan-cabin-rental" },
};

export default function BellaireMichiganCabinPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{ backgroundColor: "#1A1A1A", padding: "5rem 1.5rem", textAlign: "center" }}>
        <p className="font-accent" style={{ color: "#D4A017", fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "0.75rem" }}>
          25 Minutes from Bellaire, Michigan
        </p>
        <h1 className="font-display" style={{ color: "#FAF3E0", fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)", marginBottom: "1.25rem", lineHeight: 1.1 }}>
          Cabin Rental Near Bellaire, Michigan
        </h1>
        <p className="font-accent" style={{ color: "#FAF3E0", opacity: 0.8, fontSize: "1.2rem", maxWidth: "620px", margin: "0 auto 2rem" }}>
          Short's Brewing, Antrim County back roads, Shanty Creek slopes — and a retro cabin that's more interesting than any hotel in town.
        </p>
        <a href="/book" style={{ display: "inline-block", backgroundColor: "#2A9D8F", color: "#FAF3E0", padding: "0.9rem 2.25rem", borderRadius: "0.5rem", fontFamily: "var(--font-accent)", fontSize: "1.1rem", textDecoration: "none", fontWeight: 600 }}>
          Check Availability
        </a>
      </section>

      {/* Intro */}
      <section style={{ backgroundColor: "#FAF3E0", padding: "4.5rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#1A1A1A", marginBottom: "1.25rem" }}>
            If you're planning a trip around Bellaire, Michigan — Short's Brewing, the Antrim County scene, Shanty Creek ski runs — Granny's Hideaway in Mancelona is a natural home base. It's 25 minutes from downtown Bellaire, fully private, sleeps 7, and costs a fraction of what you'd pay for a Shanty Creek lodge package.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#1A1A1A" }}>
            Mancelona is the working-class neighbor to Bellaire's tourist scene — which means you get the quiet woods, the honest cabin, and just a 25-minute drive when you want to get into it.
          </p>
        </div>
      </section>

      {/* Why section */}
      <section style={{ backgroundColor: "#C85A1E", padding: "4.5rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 className="font-display" style={{ color: "#FAF3E0", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", marginBottom: "2rem", textAlign: "center" }}>
            Why Granny's for a Bellaire Trip?
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              ["🍺", "25 minutes from Short's Brewing in Bellaire — the flagship taproom, one of Michigan's best craft breweries"],
              ["🎿", "Shanty Creek Ski Resort is about 20 minutes away — ski, snowshoe, or hit the slopes on a powder day"],
              ["🌲", "Private wooded cabin that Bellaire lodging can't match for character or price"],
              ["🛏️", "Sleeps 7 — big enough for the group trip that's been in the planning stages since last fall"],
            ].map(([icon, text]) => (
              <div key={text as string} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", backgroundColor: "rgba(0,0,0,0.15)", borderRadius: "0.75rem", padding: "1rem 1.25rem" }}>
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{icon}</span>
                <p className="font-accent" style={{ color: "#FAF3E0", fontSize: "1.05rem", lineHeight: 1.6 }}>{text as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Short's / Bellaire section */}
      <section style={{ backgroundColor: "#2A9D8F", padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 className="font-display" style={{ color: "#FAF3E0", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", marginBottom: "1rem", textAlign: "center" }}>
            The Bellaire Day Trip
          </h2>
          <p style={{ color: "#FAF3E0", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1rem" }}>
            Bellaire is a small town that punches well above its weight. Short's Brewing has been putting Bellaire on the map for years — they've got hundreds of beers on rotation, a pub menu, and live music that draws people from Traverse City and Grand Rapids. The Local's Only taproom is a couple hours south, but the Bellaire location is the original.
          </p>
          <p style={{ color: "#FAF3E0", fontSize: "1.05rem", lineHeight: 1.8 }}>
            From Bellaire you can loop down to Elk Rapids for harbor food, up to Shanty Creek for skiing or golf depending on the season, or east toward Torch Lake on a sunny day. It's a good town for a lazy morning and a long afternoon.
          </p>
        </div>
      </section>

      {/* Grandma Viola */}
      <section style={{ backgroundColor: "#FAF3E0", padding: "4.5rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
          <p className="font-accent" style={{ color: "#C85A1E", fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "0.75rem" }}>The Story</p>
          <h2 className="font-display" style={{ color: "#1A1A1A", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", marginBottom: "1.5rem" }}>
            Grandma Viola's Take on Bellaire
          </h2>
          <p style={{ color: "#1A1A1A", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Viola was a Mancelona woman through and through. She came up to Bellaire when she needed supplies or a reason to dress up. The chalet was her real world — 1970s decor she picked out herself, orange carpet that scandalized and delighted in equal measure, and a fire pit in the yard where the real evenings happened.
          </p>
          <p style={{ color: "#1A1A1A", fontSize: "1.05rem", lineHeight: 1.8 }}>
            Granny's Hideaway is the antidote to the Bellaire resort scene. Same beautiful county, zero pretense.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#1A1A1A", padding: "4rem 1.5rem", textAlign: "center" }}>
        <h2 className="font-display" style={{ color: "#FAF3E0", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", marginBottom: "1rem" }}>
          Book Your Bellaire Area Getaway
        </h2>
        <p className="font-accent" style={{ color: "#FAF3E0", opacity: 0.75, fontSize: "1.1rem", marginBottom: "1.75rem" }}>
          $275/night · Sleeps 7 · 25 min from Bellaire · Book direct
        </p>
        <a href="/book" style={{ display: "inline-block", backgroundColor: "#2A9D8F", color: "#FAF3E0", padding: "0.9rem 2.5rem", borderRadius: "0.5rem", fontFamily: "var(--font-accent)", fontSize: "1.1rem", textDecoration: "none", fontWeight: 600 }}>
          Book Now
        </a>
      </section>

      <Footer />
    </main>
  );
}
