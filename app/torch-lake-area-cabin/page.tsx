import { Metadata } from "next";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Torch Lake Area Cabin Rental | Granny's Hideaway Mancelona Michigan",
  description:
    "Cabin rental near Torch Lake, Michigan. Granny's Hideaway is 30 minutes from Torch Lake in Mancelona — vintage retro chalet, sleeps 7, $275/night, book direct. Your Torch Lake area base camp.",
  keywords: [
    "Torch Lake area cabin rental",
    "cabin near Torch Lake Michigan",
    "Torch Lake vacation rental",
    "cabin rental near Elk Rapids",
    "Antrim County cabin Torch Lake",
  ],
  alternates: { canonical: "https://grannyshideaway.com/torch-lake-area-cabin" },
};

export default function TorchLakeAreaCabinPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{ backgroundColor: "#1A1A1A", padding: "5rem 1.5rem", textAlign: "center" }}>
        <p className="font-accent" style={{ color: "#D4A017", fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "0.75rem" }}>
          30 Minutes from Torch Lake
        </p>
        <h1 className="font-display" style={{ color: "#FAF3E0", fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)", marginBottom: "1.25rem", lineHeight: 1.1 }}>
          Torch Lake Area Cabin Rental
        </h1>
        <p className="font-accent" style={{ color: "#FAF3E0", opacity: 0.8, fontSize: "1.2rem", maxWidth: "620px", margin: "0 auto 2rem" }}>
          Skip the resort markup. Base out of Granny's in Mancelona — 30 minutes from the clearest lake in Michigan.
        </p>
        <a href="/book" style={{ display: "inline-block", backgroundColor: "#2A9D8F", color: "#FAF3E0", padding: "0.9rem 2.25rem", borderRadius: "0.5rem", fontFamily: "var(--font-accent)", fontSize: "1.1rem", textDecoration: "none", fontWeight: 600 }}>
          Check Availability
        </a>
      </section>

      {/* Intro */}
      <section style={{ backgroundColor: "#FAF3E0", padding: "4.5rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#1A1A1A", marginBottom: "1.25rem" }}>
            Torch Lake is the crown jewel of Antrim County — Caribbean-blue water, sandbar culture, and a reputation that draws visitors from across the Midwest all summer long. If you're looking for a cabin in the Torch Lake area, Granny's Hideaway in Mancelona is about 30 minutes from the lake and a fraction of the cost of lakefront lodging.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#1A1A1A" }}>
            You're in the same county, the same general north woods vibe, just off the beaten tourist path. Spend the day at the lake and come back to orange carpet, Grandma Viola's quilts, and a fire pit waiting in the backyard.
          </p>
        </div>
      </section>

      {/* Why section */}
      <section style={{ backgroundColor: "#2A9D8F", padding: "4.5rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 className="font-display" style={{ color: "#FAF3E0", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", marginBottom: "2rem", textAlign: "center" }}>
            Why Granny's for Your Torch Lake Trip?
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              ["💧", "30-minute drive to Torch Lake — day trips, not a commute"],
              ["💰", "A fraction of the cost of Torch Lake-adjacent lodging — more money for the sandbar"],
              ["🌲", "Private and wooded — unwind completely at the end of the day"],
              ["🍺", "Close to Bellaire and Short's Brewing, Elk Rapids harbor, and the full Antrim County loop"],
            ].map(([icon, text]) => (
              <div key={text as string} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", backgroundColor: "rgba(0,0,0,0.15)", borderRadius: "0.75rem", padding: "1rem 1.25rem" }}>
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{icon}</span>
                <p className="font-accent" style={{ color: "#FAF3E0", fontSize: "1.05rem", lineHeight: 1.6 }}>{text as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local guide */}
      <section style={{ backgroundColor: "#D4A017", padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 className="font-display" style={{ color: "#1A1A1A", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", marginBottom: "1rem", textAlign: "center" }}>
            Torch Lake Area Day Trip Guide
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              ["🏖️", "Torch Lake Sandbar — Pull up on the west shore near Eastport on a summer Saturday. Bring a cooler."],
              ["🌊", "Elk Rapids — Harbor town with good restaurants, Elk Lake access, and a short walk to Lake Michigan"],
              ["🍺", "Short's Brewing (Bellaire) — The flagship. Enormous beer menu, live music, pub food. 25 min from cabin."],
              ["🎿", "Shanty Creek Resort — 20 min from cabin. Two mountains. Summer golf, winter skiing."],
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
            Grandma Viola's Torch Lake Era Chalet
          </h2>
          <p style={{ color: "#FAF3E0", opacity: 0.85, fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Viola was up here during the Torch Lake scene of the 70s and 80s — when this corner of Michigan was starting to get its reputation. She built her chalet in Mancelona and never looked back. The orange carpet is original. The quilts are original. The bunny ear TV pulls a signal and the guest book is older than most of the guests.
          </p>
          <p style={{ color: "#FAF3E0", opacity: 0.85, fontSize: "1.05rem", lineHeight: 1.8 }}>
            It's the most charming cabin in the Torch Lake area that isn't actually on Torch Lake. Which is exactly the point.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#C85A1E", padding: "4rem 1.5rem", textAlign: "center" }}>
        <h2 className="font-display" style={{ color: "#FAF3E0", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", marginBottom: "1rem" }}>
          Ready to Book Your Torch Lake Area Trip?
        </h2>
        <p className="font-accent" style={{ color: "#FAF3E0", opacity: 0.85, fontSize: "1.1rem", marginBottom: "1.75rem" }}>
          Summer weekends fill early. Check availability now.
        </p>
        <a href="/book" style={{ display: "inline-block", backgroundColor: "#2A9D8F", color: "#FAF3E0", padding: "0.9rem 2.5rem", borderRadius: "0.5rem", fontFamily: "var(--font-accent)", fontSize: "1.1rem", textDecoration: "none", fontWeight: 600 }}>
          Book Now
        </a>
      </section>

      <Footer />
    </main>
  );
}
