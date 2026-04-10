import { Metadata } from "next";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Deward Tract Cabin Rental | Granny's Hideaway Near Deward Area Michigan",
  description:
    "Cabin rental near the Deward Tract in Northern Michigan. Granny's Hideaway in Mancelona is your base for Deward area hiking, ORV, and Boardman River access. Sleeps 7, $275/night.",
  keywords: [
    "Deward Tract cabin rental",
    "cabin near Deward Michigan",
    "Deward area lodging",
    "Boardman River cabin rental",
    "Kalkaska cabin rental near Deward",
  ],
  alternates: { canonical: "https://grannyshideaway.com/deward-tract-cabin-rental" },
};

export default function DewardTractCabinPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{ backgroundColor: "#1A1A1A", padding: "5rem 1.5rem", textAlign: "center" }}>
        <p className="font-accent" style={{ color: "#D4A017", fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "0.75rem" }}>
          Northern Michigan — Near Deward Area
        </p>
        <h1 className="font-display" style={{ color: "#FAF3E0", fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)", marginBottom: "1.25rem", lineHeight: 1.1 }}>
          Cabin Rental Near the Deward Tract
        </h1>
        <p className="font-accent" style={{ color: "#FAF3E0", opacity: 0.8, fontSize: "1.2rem", maxWidth: "620px", margin: "0 auto 2rem" }}>
          Deep state forest, the Boardman River, and miles of forest roads — and Granny's Hideaway is your home base.
        </p>
        <a href="/book" style={{ display: "inline-block", backgroundColor: "#2A9D8F", color: "#FAF3E0", padding: "0.9rem 2.25rem", borderRadius: "0.5rem", fontFamily: "var(--font-accent)", fontSize: "1.1rem", textDecoration: "none", fontWeight: 600 }}>
          Check Availability
        </a>
      </section>

      {/* Intro */}
      <section style={{ backgroundColor: "#FAF3E0", padding: "4.5rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#1A1A1A", marginBottom: "1.25rem" }}>
            If you're looking for a cabin near the Deward Tract, Granny's Hideaway in Mancelona is one of the closest true rental options. The Deward area — sprawling state and federal forest land where the ghost town of Deward once stood — is a destination for hikers, anglers, ORV riders, and anyone who wants Northern Michigan without the tourist layer. The Boardman River headwaters run through this country, and the back roads are some of the most beautiful in the northern Lower Peninsula.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#1A1A1A" }}>
            Granny's Hideaway sits on a private wooded lot in Mancelona — the closest real town to the Deward area. Use it as your launch point, and come back to orange carpet, a fire pit, and Grandma Viola's quilts.
          </p>
        </div>
      </section>

      {/* Why section */}
      <section style={{ backgroundColor: "#2A9D8F", padding: "4.5rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 className="font-display" style={{ color: "#FAF3E0", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", marginBottom: "2rem", textAlign: "center" }}>
            Why Base Here for Deward Area Trips?
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              ["🌲", "Mancelona is the closest town to the Deward Tract — better access than driving from Gaylord or Bellaire"],
              ["🎣", "Boardman River headwaters are a short drive — wild trout water, no crowds"],
              ["🛤️", "Forest roads throughout the Deward area for hiking, biking, ORV, and snowmobiling depending on season"],
              ["🔥", "Private wooded property with fire pit — you'll feel the forest before you even leave the yard"],
            ].map(([icon, text]) => (
              <div key={text as string} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", backgroundColor: "rgba(0,0,0,0.15)", borderRadius: "0.75rem", padding: "1rem 1.25rem" }}>
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{icon}</span>
                <p className="font-accent" style={{ color: "#FAF3E0", fontSize: "1.05rem", lineHeight: 1.6 }}>{text as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deward history */}
      <section style={{ backgroundColor: "#D4A017", padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 className="font-display" style={{ color: "#1A1A1A", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", marginBottom: "1rem", textAlign: "center" }}>
            The Ghost Town in the Woods
          </h2>
          <p style={{ color: "#1A1A1A", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1rem" }}>
            Deward was a company logging town — founded, clear-cut, and abandoned in the early 1900s. The Michigan Land and Iron Company operated a massive mill there at the turn of the century. When the timber ran out, the town was dismantled and hauled away. Today the Deward Tract is state forest land, and the Boardman River flows clean through country that once saw one of Michigan's most aggressive logging operations.
          </p>
          <p style={{ color: "#1A1A1A", fontSize: "1.05rem", lineHeight: 1.8 }}>
            It's haunted by history and beautiful for it. Pack a map and your fishing license.
          </p>
        </div>
      </section>

      {/* Grandma Viola */}
      <section style={{ backgroundColor: "#1A1A1A", padding: "4.5rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
          <p className="font-accent" style={{ color: "#D4A017", fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "0.75rem" }}>Your Home Base</p>
          <h2 className="font-display" style={{ color: "#FAF3E0", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", marginBottom: "1.5rem" }}>
            Viola's Place, Your Base Camp
          </h2>
          <p style={{ color: "#FAF3E0", opacity: 0.85, fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Grandma Viola chose Mancelona because she loved the woods — and she knew how to live in them. Her chalet has been in the family since the 70s: orange carpet, quilts on the beds, a fire pit in the back, and enough space for the whole crew. Nothing here was designed by an interior brand. Viola designed it herself, and she committed.
          </p>
          <p style={{ color: "#FAF3E0", opacity: 0.85, fontSize: "1.05rem", lineHeight: 1.8 }}>
            After a day in the Deward area, you want a real cabin to come back to. This is it.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#FAF3E0", padding: "4rem 1.5rem", textAlign: "center" }}>
        <h2 className="font-display" style={{ color: "#1A1A1A", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", marginBottom: "1rem" }}>
          Book Your Deward Area Getaway
        </h2>
        <p className="font-accent" style={{ color: "#1A1A1A", opacity: 0.7, fontSize: "1.1rem", marginBottom: "1.75rem" }}>
          $275/night · Sleeps 7 · Private woods · Mancelona, MI
        </p>
        <a href="/book" style={{ display: "inline-block", backgroundColor: "#2A9D8F", color: "#FAF3E0", padding: "0.9rem 2.5rem", borderRadius: "0.5rem", fontFamily: "var(--font-accent)", fontSize: "1.1rem", textDecoration: "none", fontWeight: 600 }}>
          Book Now
        </a>
      </section>

      <Footer />
    </main>
  );
}
