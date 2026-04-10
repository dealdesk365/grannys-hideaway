import { Metadata } from "next";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Vintage Cabin Rental Michigan | Granny's Hideaway — Retro 1970s Chalet",
  description:
    "Michigan's most authentically vintage cabin rental. Granny's Hideaway in Mancelona is a real 1970s chalet — original orange carpet, bunny ear TV, Grandma Viola's quilts. Not a reproduction. $275/night.",
  keywords: [
    "vintage cabin rental Michigan",
    "retro cabin rental Michigan",
    "1970s cabin rental Michigan",
    "nostalgic cabin Northern Michigan",
    "unique cabin rental Michigan",
    "Grandma cabin rental Michigan",
  ],
  alternates: { canonical: "https://grannyshideaway.com/vintage-cabin-rental-michigan" },
};

export default function VintageCabinPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{ backgroundColor: "#C85A1E", padding: "5rem 1.5rem", textAlign: "center" }}>
        <p className="font-accent" style={{ color: "#D4A017", fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "0.75rem" }}>
          Mancelona, Michigan · Est. 1974
        </p>
        <h1 className="font-display" style={{ color: "#FAF3E0", fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)", marginBottom: "1.25rem", lineHeight: 1.1 }}>
          Vintage Cabin Rental in Michigan
        </h1>
        <p className="font-accent" style={{ color: "#FAF3E0", opacity: 0.9, fontSize: "1.2rem", maxWidth: "660px", margin: "0 auto 2rem" }}>
          Wall-to-wall orange carpet. Bunny ear TV. Grandma Viola's quilts. This isn't vintage-inspired — it's the actual 70s, preserved.
        </p>
        <a href="/book" style={{ display: "inline-block", backgroundColor: "#2A9D8F", color: "#FAF3E0", padding: "0.9rem 2.25rem", borderRadius: "0.5rem", fontFamily: "var(--font-accent)", fontSize: "1.1rem", textDecoration: "none", fontWeight: 600 }}>
          Check Availability
        </a>
      </section>

      {/* Intro */}
      <section style={{ backgroundColor: "#FAF3E0", padding: "4.5rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#1A1A1A", marginBottom: "1.25rem" }}>
            Most "vintage cabin rentals" in Michigan are new builds with some antique furniture and a shiplap accent wall. Granny's Hideaway is not that. This is a genuine vintage cabin rental in Michigan — a 1970s chalet in Mancelona that Grandma Viola decorated herself and nobody has dared to update since. The orange carpet is original. The wallpaper is original. The quilts on the beds are Viola's quilts.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#1A1A1A" }}>
            Granny's Hideaway didn't try to be retro. It just never stopped being exactly what it was when Viola moved in. That's a different thing entirely — and if you've spent five minutes on rental sites trying to find something with real character, you already know it.
          </p>
        </div>
      </section>

      {/* The details */}
      <section style={{ backgroundColor: "#1A1A1A", padding: "4.5rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 className="font-display" style={{ color: "#FAF3E0", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", marginBottom: "2rem", textAlign: "center" }}>
            What Actually Makes It Vintage
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              ["🟠", "Wall-to-wall orange carpet in the living room. The real thing. Picked out by Viola in 1974."],
              ["📺", "Bunny ear TV — still works. Still terrible. Still perfect."],
              ["🛏️", "Blue and green shag in the bedrooms — because even Viola knew you couldn't sleep on orange"],
              ["🖼️", "Textured wallpaper, vintage light fixtures, wood paneling in the loft — nothing is reproduction"],
              ["🧶", "Quilts on every bed. Viola made some of them herself."],
              ["🍬", "Bit O Honeys and Werther's Originals in a candy bowl by the door. Because Granny."],
            ].map(([icon, text]) => (
              <div key={text as string} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", backgroundColor: "rgba(255,255,255,0.06)", borderRadius: "0.75rem", padding: "1rem 1.25rem", border: "1px solid rgba(212,160,23,0.2)" }}>
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{icon}</span>
                <p className="font-accent" style={{ color: "#FAF3E0", fontSize: "1.05rem", lineHeight: 1.6 }}>{text as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grandma Viola — the full story */}
      <section style={{ backgroundColor: "#D4A017", padding: "4.5rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p className="font-accent" style={{ color: "#1A1A1A", opacity: 0.7, fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "0.75rem", textAlign: "center" }}>The Story</p>
          <h2 className="font-display" style={{ color: "#1A1A1A", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", marginBottom: "1.5rem", textAlign: "center" }}>
            Grandma Viola
          </h2>
          <p style={{ color: "#1A1A1A", fontSize: "1.1rem", lineHeight: 1.85, marginBottom: "1.25rem" }}>
            Viola built this chalet in Mancelona in the early 1970s and made it exactly the home she wanted. She chose every carpet, picked every piece of furniture, and hung every light fixture with the confidence of someone who knew exactly what she liked. And what she liked was 1974 Northern Michigan chalet culture, full commitment.
          </p>
          <p style={{ color: "#1A1A1A", fontSize: "1.1rem", lineHeight: 1.85, marginBottom: "1.25rem" }}>
            She kept a candy bowl by the door for guests — Bit O Honeys and Werther's Originals, because she had opinions about candy. She kept the thermostat at 68° and stacked quilts on every bed in case you disagreed. She wanted you to sign the guest book before you left. She actually read it.
          </p>
          <p style={{ color: "#1A1A1A", fontSize: "1.1rem", lineHeight: 1.85 }}>
            When Viola passed, the family left everything exactly as she had it. And when you see it, you'll understand why. This cabin is Viola. The whole place feels like a person.
          </p>
        </div>
      </section>

      {/* Why section */}
      <section style={{ backgroundColor: "#2A9D8F", padding: "4.5rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 className="font-display" style={{ color: "#FAF3E0", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", marginBottom: "2rem", textAlign: "center" }}>
            Why Granny's for Vintage Lovers?
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              ["🕰️", "Nothing is a reproduction — every detail is original to the 1970s build"],
              ["🌲", "Private, wooded, no neighbors — the vintage vibe isn't interrupted by the 21st century"],
              ["📸", "Most photogenic cabin in Northern Michigan — every corner is worth a photo"],
              ["💰", "At $275/night, there is no cheaper way to stay in a genuine piece of Michigan history"],
            ].map(([icon, text]) => (
              <div key={text as string} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", backgroundColor: "rgba(0,0,0,0.15)", borderRadius: "0.75rem", padding: "1rem 1.25rem" }}>
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{icon}</span>
                <p className="font-accent" style={{ color: "#FAF3E0", fontSize: "1.05rem", lineHeight: 1.6 }}>{text as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#1A1A1A", padding: "4rem 1.5rem", textAlign: "center" }}>
        <h2 className="font-display" style={{ color: "#FAF3E0", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", marginBottom: "1rem" }}>
          Step Into the 70s
        </h2>
        <p className="font-accent" style={{ color: "#FAF3E0", opacity: 0.75, fontSize: "1.1rem", marginBottom: "1.75rem" }}>
          $275/night · Mancelona, Michigan · The real thing
        </p>
        <a href="/book" style={{ display: "inline-block", backgroundColor: "#2A9D8F", color: "#FAF3E0", padding: "0.9rem 2.5rem", borderRadius: "0.5rem", fontFamily: "var(--font-accent)", fontSize: "1.1rem", textDecoration: "none", fontWeight: 600 }}>
          Book Granny's Hideaway
        </a>
      </section>

      <Footer />
    </main>
  );
}
