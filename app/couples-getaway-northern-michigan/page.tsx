import { Metadata } from "next";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Couples Getaway Northern Michigan | Granny's Hideaway Mancelona",
  description:
    "Plan a couples getaway in Northern Michigan at Granny's Hideaway — a private, vintage 1970s cabin in Mancelona. $275/night, no neighbors, fire pit, and genuine retro charm. Romantic, weird, and perfect.",
  keywords: [
    "couples getaway Northern Michigan",
    "romantic cabin Northern Michigan",
    "couples cabin rental Michigan",
    "Northern Michigan romantic getaway",
    "private cabin couples Michigan",
  ],
  alternates: { canonical: "https://grannyshideaway.com/couples-getaway-northern-michigan" },
};

export default function CouplesGetawayPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{ backgroundColor: "#1A1A1A", padding: "5rem 1.5rem", textAlign: "center" }}>
        <p className="font-accent" style={{ color: "#D4A017", fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "0.75rem" }}>
          A Different Kind of Romantic
        </p>
        <h1 className="font-display" style={{ color: "#FAF3E0", fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)", marginBottom: "1.25rem", lineHeight: 1.1 }}>
          Couples Getaway in Northern Michigan
        </h1>
        <p className="font-accent" style={{ color: "#FAF3E0", opacity: 0.8, fontSize: "1.2rem", maxWidth: "620px", margin: "0 auto 2rem" }}>
          No resort. No spa package. Just you, the woods, orange carpet, and a fire pit. This is Northern Michigan romance on your own terms.
        </p>
        <a href="/book" style={{ display: "inline-block", backgroundColor: "#2A9D8F", color: "#FAF3E0", padding: "0.9rem 2.25rem", borderRadius: "0.5rem", fontFamily: "var(--font-accent)", fontSize: "1.1rem", textDecoration: "none", fontWeight: 600 }}>
          Check Availability
        </a>
      </section>

      {/* Intro */}
      <section style={{ backgroundColor: "#FAF3E0", padding: "4.5rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#1A1A1A", marginBottom: "1.25rem" }}>
            If you're looking for a couples getaway in Northern Michigan that doesn't feel like a corporate romance package with a jacuzzi tub and a "local artisan" charcuterie board, Granny's Hideaway is your cabin. It's private, wooded, genuinely charming, and completely unlike anything you'd find on a resort booking site.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#1A1A1A" }}>
            Two people rattling around a chalet that sleeps 7, with nothing but trees outside and a fire waiting to be lit — there's something about that combination that makes it easy to actually disconnect. No agenda. No itinerary required. Northern Michigan does the rest.
          </p>
        </div>
      </section>

      {/* Why section */}
      <section style={{ backgroundColor: "#2A9D8F", padding: "4.5rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 className="font-display" style={{ color: "#FAF3E0", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", marginBottom: "2rem", textAlign: "center" }}>
            Why Granny's for a Couples Escape?
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              ["🌲", "Total privacy — no neighbors, no noise, no shared walls. Just trees in every direction."],
              ["🔥", "Fire pit for the kind of evening conversation that doesn't happen at home"],
              ["🍷", "Full kitchen — cook together, drink together, no restaurant schedule or reservation stress"],
              ["🏙️", "Day trip distance to Bellaire, Short's Brewing, Elk Rapids, and the Torch Lake area when you feel like it"],
            ].map(([icon, text]) => (
              <div key={text as string} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", backgroundColor: "rgba(0,0,0,0.15)", borderRadius: "0.75rem", padding: "1rem 1.25rem" }}>
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{icon}</span>
                <p className="font-accent" style={{ color: "#FAF3E0", fontSize: "1.05rem", lineHeight: 1.6 }}>{text as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Itinerary suggestion */}
      <section style={{ backgroundColor: "#D4A017", padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 className="font-display" style={{ color: "#1A1A1A", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", marginBottom: "0.75rem", textAlign: "center" }}>
            A Perfect Northern Michigan Weekend
          </h2>
          <p className="font-accent" style={{ color: "#1A1A1A", opacity: 0.7, textAlign: "center", marginBottom: "2rem" }}>
            No agenda required — but here's one anyway
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              ["Friday 🌙", "Arrive, start the fire, pour something good. Don't look at your phone."],
              ["Saturday ☀️", "Coffee on the porch. Drive to Bellaire for lunch and Short's Brewing. Take the back roads home through the state forest."],
              ["Saturday 🌅", "Cook together. Fire pit. Maybe finally figure out what the bunny ear TV picks up."],
              ["Sunday 🌊", "Drive down to Elk Rapids or toward the Torch Lake area. Stop somewhere with a view. Take your time heading home."],
            ].map(([day, text]) => (
              <div key={day as string} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", backgroundColor: "rgba(0,0,0,0.1)", borderRadius: "0.75rem", padding: "1rem 1.25rem" }}>
                <p className="font-accent" style={{ color: "#1A1A1A", fontWeight: 700, minWidth: "100px", flexShrink: 0 }}>{day as string}</p>
                <p className="font-accent" style={{ color: "#1A1A1A", fontSize: "1.05rem", lineHeight: 1.6 }}>{text as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grandma Viola */}
      <section style={{ backgroundColor: "#1A1A1A", padding: "4.5rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
          <p className="font-accent" style={{ color: "#D4A017", fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "0.75rem" }}>The Cabin's Story</p>
          <h2 className="font-display" style={{ color: "#FAF3E0", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", marginBottom: "1.5rem" }}>
            Built for People Who Know How to Relax
          </h2>
          <p style={{ color: "#FAF3E0", opacity: 0.85, fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Grandma Viola wasn't trying to impress anyone with this cabin. She built it to enjoy — to spend slow mornings and long evenings in the woods with the people she loved. That ethos is still here: in the quilts she folded, the candy she kept in the bowl, and the guest book she wanted everyone to sign before they left.
          </p>
          <p style={{ color: "#FAF3E0", opacity: 0.85, fontSize: "1.05rem", lineHeight: 1.8 }}>
            Granny's Hideaway is romantic the way a real place is romantic — imperfect, specific, and genuinely itself.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#C85A1E", padding: "4rem 1.5rem", textAlign: "center" }}>
        <h2 className="font-display" style={{ color: "#FAF3E0", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", marginBottom: "1rem" }}>
          Book Your Northern Michigan Escape
        </h2>
        <p className="font-accent" style={{ color: "#FAF3E0", opacity: 0.85, fontSize: "1.1rem", marginBottom: "1.75rem" }}>
          $275/night · Private wooded cabin · Mancelona, MI
        </p>
        <a href="/book" style={{ display: "inline-block", backgroundColor: "#2A9D8F", color: "#FAF3E0", padding: "0.9rem 2.5rem", borderRadius: "0.5rem", fontFamily: "var(--font-accent)", fontSize: "1.1rem", textDecoration: "none", fontWeight: 600 }}>
          Book Now
        </a>
      </section>

      <Footer />
    </main>
  );
}
