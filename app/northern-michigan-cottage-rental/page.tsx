import { Metadata } from "next";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Northern Michigan Cottage Rental | Granny's Hideaway | Mancelona, MI",
  description:
    "Looking for a Northern Michigan cottage rental? Granny's Hideaway is a vintage 1970s chalet in Mancelona — $275/night, sleeps 7, fully private wooded setting. Book your northern Michigan cottage getaway today.",
  keywords: [
    "Northern Michigan cottage rental",
    "northern michigan cottage",
    "michigan cottage rental",
    "cottage rental northern michigan",
    "Mancelona cottage rental",
    "Antrim County cottage",
    "northern michigan vacation cottage",
  ],
  alternates: { canonical: "https://grannyshideaway.com/northern-michigan-cottage-rental" },
};

export default function NorthernMichiganCottageRentalPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{ backgroundColor: "#1A1A1A", padding: "5rem 1.5rem", textAlign: "center" }}>
        <p className="font-accent" style={{ color: "#D4A017", fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "0.75rem" }}>
          Northern Michigan Cottage Rental
        </p>
        <h1 className="font-display" style={{ color: "#FAF3E0", fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)", marginBottom: "1.25rem", lineHeight: 1.1 }}>
          A Northern Michigan Cottage With a Story
        </h1>
        <p className="font-accent" style={{ color: "#FAF3E0", opacity: 0.8, fontSize: "1.2rem", maxWidth: "620px", margin: "0 auto 2rem" }}>
          Granny's Hideaway is a 1970s vintage cottage in Mancelona, Michigan — warm, private, and unlike any Northern Michigan cottage rental you've stayed in before.
        </p>
        <a href="/book" style={{ display: "inline-block", backgroundColor: "#2A9D8F", color: "#FAF3E0", padding: "0.9rem 2.25rem", borderRadius: "0.5rem", fontFamily: "var(--font-accent)", fontSize: "1.1rem", textDecoration: "none", fontWeight: 600 }}>
          Check Availability
        </a>
      </section>

      {/* Intro */}
      <section style={{ backgroundColor: "#FAF3E0", padding: "4.5rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 className="font-display" style={{ color: "#1A1A1A", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", marginBottom: "1.25rem" }}>
            The Northern Michigan Cottage Rental You've Been Looking For
          </h2>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#1A1A1A", marginBottom: "1.25rem" }}>
            If you've been searching for a Northern Michigan cottage rental and everything feels either too expensive or too generic, Granny's Hideaway is the answer. This is a real cottage — built in the 1970s by Grandma Viola, set on a private wooded lot in Mancelona, Antrim County — and it hasn't been stripped of its character to appeal to the masses.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#1A1A1A", marginBottom: "1.25rem" }}>
            The orange carpet is original. The quilts on the beds were Viola's. The Bit O Honeys waiting on the table when you arrive? That was her thing, and we kept it. What you get here is a Northern Michigan cottage with warmth that was genuinely lived in.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#1A1A1A" }}>
            The cottage sleeps 7 across three bedrooms and sits 25 minutes from Bellaire, 30 minutes from Torch Lake, and 20 minutes from Gaylord. At $275/night, it's one of the best-value Northern Michigan cottage rentals you'll find.
          </p>
        </div>
      </section>

      {/* Details */}
      <section style={{ backgroundColor: "#C85A1E", padding: "4.5rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 className="font-display" style={{ color: "#FAF3E0", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", marginBottom: "2rem", textAlign: "center" }}>
            Cottage Details
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
            {[
              ["🏡", "3 Bedrooms", "2 queen beds + 3 twins in the loft — sleeps 7 guests"],
              ["🌲", "Private Wooded Lot", "No shared walls, no neighbors, no resort noise"],
              ["🔥", "Fire Pit", "Evenings around the fire are mandatory"],
              ["🍳", "Full Kitchen", "Cook your own meals, stock the fridge, feel at home"],
              ["👕", "Washer & Dryer", "Pack lighter — laundry is covered"],
              ["📶", "WiFi Included", "Stay connected or don't — your call"],
            ].map(([icon, title, desc]) => (
              <div key={title as string} style={{ backgroundColor: "rgba(0,0,0,0.15)", borderRadius: "0.75rem", padding: "1.25rem" }}>
                <div style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>{icon}</div>
                <p className="font-accent" style={{ color: "#FAF3E0", fontWeight: 600, marginBottom: "0.25rem" }}>{title as string}</p>
                <p style={{ color: "rgba(250,243,224,0.8)", fontSize: "0.9rem", lineHeight: 1.5 }}>{desc as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section style={{ backgroundColor: "#FAF3E0", padding: "4.5rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 className="font-display" style={{ color: "#1A1A1A", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", marginBottom: "1.5rem" }}>
            Right in the Middle of Northern Michigan
          </h2>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#1A1A1A", marginBottom: "1.25rem" }}>
            Mancelona is one of those Northern Michigan towns that doesn't get enough credit. It sits in Antrim County — surrounded by Bellaire, Elk Rapids, Torch Lake, and the Gaylord golf corridor — and it gives you access to all of Northern Michigan without the resort price tag.
          </p>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {[
              "🌊 Torch Lake — 30 min",
              "⛳ Gaylord Golf Mecca — 20 min",
              "🍺 Bellaire & Short's Brewing — 25 min",
              "🎿 Shanty Creek Ski Resort — 35 min",
              "🌉 Mackinac Bridge — 75 min",
              "🚴 Elk Rapids & Grand Traverse Bay — 40 min",
            ].map((item) => (
              <li key={item} style={{ color: "#1A1A1A", fontSize: "1.05rem", padding: "0.6rem 1rem", backgroundColor: "#fff", borderRadius: "0.5rem", border: "1px solid rgba(0,0,0,0.07)" }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#1A1A1A", padding: "4rem 1.5rem", textAlign: "center" }}>
        <h2 className="font-display" style={{ color: "#FAF3E0", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", marginBottom: "1rem" }}>
          Book Your Northern Michigan Cottage
        </h2>
        <p className="font-accent" style={{ color: "#FAF3E0", opacity: 0.75, fontSize: "1.1rem", marginBottom: "1.75rem" }}>
          $275/night + $125 cleaning fee · Sleeps 7 · Now booking June 15+
        </p>
        <a href="/book" style={{ display: "inline-block", backgroundColor: "#2A9D8F", color: "#FAF3E0", padding: "0.9rem 2.5rem", borderRadius: "0.5rem", fontFamily: "var(--font-accent)", fontSize: "1.1rem", textDecoration: "none", fontWeight: 600 }}>
          Book Your Stay
        </a>
      </section>

      <Footer />
    </main>
  );
}
