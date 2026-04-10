import { Metadata } from "next";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Fall Colors Cabin Michigan | Granny's Hideaway Northern Michigan",
  description:
    "Experience Michigan's fall color season from Granny's Hideaway in Mancelona. A vintage retro cabin in Antrim County — peak color country. $275/night, sleeps 7, private woods. Book your fall trip.",
  keywords: [
    "fall colors cabin Michigan",
    "Michigan fall foliage cabin rental",
    "Northern Michigan fall colors cabin",
    "Antrim County fall foliage lodging",
    "Michigan fall trip cabin rental",
  ],
  alternates: { canonical: "https://grannyshideaway.com/fall-colors-cabin-michigan" },
};

export default function FallColorsCabinPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{ backgroundColor: "#1A1A1A", padding: "5rem 1.5rem", textAlign: "center" }}>
        <p className="font-accent" style={{ color: "#D4A017", fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "0.75rem" }}>
          Peak Color Country — Antrim County, Michigan
        </p>
        <h1 className="font-display" style={{ color: "#FAF3E0", fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)", marginBottom: "1.25rem", lineHeight: 1.1 }}>
          Fall Colors Cabin in Michigan
        </h1>
        <p className="font-accent" style={{ color: "#FAF3E0", opacity: 0.8, fontSize: "1.2rem", maxWidth: "620px", margin: "0 auto 2rem" }}>
          Northern Michigan does fall better than anywhere else. Stay in the middle of it — in a cabin that already knows how to be orange.
        </p>
        <a href="/book" style={{ display: "inline-block", backgroundColor: "#2A9D8F", color: "#FAF3E0", padding: "0.9rem 2.25rem", borderRadius: "0.5rem", fontFamily: "var(--font-accent)", fontSize: "1.1rem", textDecoration: "none", fontWeight: 600 }}>
          Check Availability
        </a>
      </section>

      {/* Intro */}
      <section style={{ backgroundColor: "#FAF3E0", padding: "4.5rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#1A1A1A", marginBottom: "1.25rem" }}>
            Michigan fall colors peak in the northern Lower Peninsula in late September through mid-October — and Antrim County, where Granny's Hideaway sits, is smack in the sweet spot. The maples go red and orange, the birches go gold, and the back roads through the state forest become some of the most scenic drives in the midwest. A fall colors cabin in Michigan doesn't get much more central than this.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#1A1A1A" }}>
            Mancelona is surrounded by state and private forest — the color show happens right outside the windows. Pair a morning drive through the Deward area back roads with an afternoon in Bellaire or on the Torch Lake Chain, and you've got a perfect fall day in Northern Michigan.
          </p>
        </div>
      </section>

      {/* Why section */}
      <section style={{ backgroundColor: "#C85A1E", padding: "4.5rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 className="font-display" style={{ color: "#FAF3E0", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", marginBottom: "2rem", textAlign: "center" }}>
            Why Granny's for Fall Color Season?
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              ["🍂", "Private wooded lot — surrounded by trees that go absolutely ablaze in October"],
              ["🛤️", "Near the Deward Tract back roads — some of the most underrated fall drives in Northern Michigan"],
              ["🔥", "Fire pit in the yard for cool September evenings when the leaves are just starting to turn"],
              ["📍", "Equidistant to Bellaire, Elk Rapids, Mancelona, and the Torch Lake area — the whole county in one base"],
            ].map(([icon, text]) => (
              <div key={text as string} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", backgroundColor: "rgba(0,0,0,0.15)", borderRadius: "0.75rem", padding: "1rem 1.25rem" }}>
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{icon}</span>
                <p className="font-accent" style={{ color: "#FAF3E0", fontSize: "1.05rem", lineHeight: 1.6 }}>{text as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fall timing */}
      <section style={{ backgroundColor: "#D4A017", padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 className="font-display" style={{ color: "#1A1A1A", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", marginBottom: "1rem", textAlign: "center" }}>
            When to Visit for Peak Color
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              ["🌿", "Late September — Color starts in the upper reaches. Early peak in Antrim County. Cooler nights."],
              ["🍂", "First two weeks of October — Full peak in most years. This is the sweet spot. Book early."],
              ["🍁", "Mid to late October — Late color, bare branches on some trees, but the late light is golden and the crowds thin fast."],
            ].map(([icon, text]) => (
              <div key={text as string} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", backgroundColor: "rgba(0,0,0,0.1)", borderRadius: "0.75rem", padding: "1rem 1.25rem" }}>
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{icon}</span>
                <p className="font-accent" style={{ color: "#1A1A1A", fontSize: "1.05rem", lineHeight: 1.6 }}>{text as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grandma Viola */}
      <section style={{ backgroundColor: "#1A1A1A", padding: "4.5rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
          <p className="font-accent" style={{ color: "#D4A017", fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "0.75rem" }}>The Cabin</p>
          <h2 className="font-display" style={{ color: "#FAF3E0", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", marginBottom: "1.5rem" }}>
            A Cabin That Already Knew Orange
          </h2>
          <p style={{ color: "#FAF3E0", opacity: 0.85, fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Grandma Viola put orange carpet down in 1974 and never apologized for it. In October, when the maples outside go the same shade, the whole world feels like it's matching the living room. It's either the most on-theme fall rental in Northern Michigan or a very lucky coincidence. Probably both.
          </p>
          <p style={{ color: "#FAF3E0", opacity: 0.85, fontSize: "1.05rem", lineHeight: 1.8 }}>
            Viola kept quilts on every bed because fall nights in Mancelona get cold. She was right. They're still here.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#FAF3E0", padding: "4rem 1.5rem", textAlign: "center" }}>
        <h2 className="font-display" style={{ color: "#1A1A1A", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", marginBottom: "1rem" }}>
          Book Your Fall Color Trip
        </h2>
        <p className="font-accent" style={{ color: "#1A1A1A", opacity: 0.7, fontSize: "1.1rem", marginBottom: "1.75rem" }}>
          October weekends go fast. Lock in your dates now.
        </p>
        <a href="/book" style={{ display: "inline-block", backgroundColor: "#2A9D8F", color: "#FAF3E0", padding: "0.9rem 2.5rem", borderRadius: "0.5rem", fontFamily: "var(--font-accent)", fontSize: "1.1rem", textDecoration: "none", fontWeight: 600 }}>
          Book Now
        </a>
      </section>

      <Footer />
    </main>
  );
}
