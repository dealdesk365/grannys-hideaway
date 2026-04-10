import { Metadata } from "next";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "SxS UTV Cabin Rental Michigan | Granny's Hideaway Near Deward Trails",
  description:
    "SxS and UTV cabin rental in Michigan near Deward Tract off-road trails. Granny's Hideaway in Mancelona is your base camp for Antrim County ORV riding — $275/night, sleeps 7, full kitchen, fire pit.",
  keywords: [
    "SxS cabin rental Michigan",
    "UTV cabin rental Michigan",
    "off-road trail cabin Northern Michigan",
    "ORV cabin rental Mancelona",
    "Deward Tract SxS rental",
    "side by side cabin rental Michigan",
  ],
  alternates: { canonical: "https://grannyshideaway.com/sxs-utv-cabin-rental-michigan" },
};

export default function SxsUtvCabinPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{ backgroundColor: "#1A1A1A", padding: "5rem 1.5rem", textAlign: "center" }}>
        <p className="font-accent" style={{ color: "#D4A017", fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "0.75rem" }}>
          Near Deward Tract · Antrim County Trails
        </p>
        <h1 className="font-display" style={{ color: "#FAF3E0", fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)", marginBottom: "1.25rem", lineHeight: 1.1 }}>
          SxS & UTV Cabin Rental in Michigan
        </h1>
        <p className="font-accent" style={{ color: "#FAF3E0", opacity: 0.8, fontSize: "1.2rem", maxWidth: "620px", margin: "0 auto 2rem" }}>
          Load the trailer, point it north, and base out of Granny's. Northern Michigan trail country is right outside the door.
        </p>
        <a href="/book" style={{ display: "inline-block", backgroundColor: "#2A9D8F", color: "#FAF3E0", padding: "0.9rem 2.25rem", borderRadius: "0.5rem", fontFamily: "var(--font-accent)", fontSize: "1.1rem", textDecoration: "none", fontWeight: 600 }}>
          Check Availability
        </a>
      </section>

      {/* Intro */}
      <section style={{ backgroundColor: "#FAF3E0", padding: "4.5rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#1A1A1A", marginBottom: "1.25rem" }}>
            Looking for an SxS or UTV cabin rental in Michigan? Granny's Hideaway in Mancelona is a short haul from the Deward Tract — thousands of acres of state forest with forest roads and off-road terrain that draws riders from all over the Midwest. Pull your trailer off the highway, unhitch, and you're 20 minutes from the action.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#1A1A1A" }}>
            The property has space to park your rig, a fire pit for the evening debrief, and a full kitchen so you're not eating gas station food after 6 hours in the saddle. It's a real base camp — not a glamping tent or a condo.
          </p>
        </div>
      </section>

      {/* Why section */}
      <section style={{ backgroundColor: "#C85A1E", padding: "4.5rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 className="font-display" style={{ color: "#FAF3E0", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", marginBottom: "2rem", textAlign: "center" }}>
            Why Granny's for Off-Road Riders?
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              ["🚙", "Short drive to Deward Tract state forest — real forest roads, real terrain, no resort grooming"],
              ["🔥", "Fire pit and outdoor space for post-ride cleanup, gear drying, and telling stories that may or may not be true"],
              ["🍳", "Full kitchen — cook real food, eat real food, repeat"],
              ["🏠", "Fully private property with outdoor parking — no HOA, no neighbors watching you unload your SxS at 9pm"],
            ].map(([icon, text]) => (
              <div key={text as string} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", backgroundColor: "rgba(0,0,0,0.15)", borderRadius: "0.75rem", padding: "1rem 1.25rem" }}>
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{icon}</span>
                <p className="font-accent" style={{ color: "#FAF3E0", fontSize: "1.05rem", lineHeight: 1.6 }}>{text as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deward info */}
      <section style={{ backgroundColor: "#2A9D8F", padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 className="font-display" style={{ color: "#FAF3E0", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", marginBottom: "1rem", textAlign: "center" }}>
            About the Deward Tract
          </h2>
          <p style={{ color: "#FAF3E0", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1rem" }}>
            The Deward area — named for the ghost town of Deward that once operated there — is a large block of state and federal forest land in Crawford and Kalkaska counties adjacent to Antrim County. It's known for the Boardman River corridor, forest roads, and the rugged back-country character that most of Northern Michigan's resort zones have long since smoothed away.
          </p>
          <p style={{ color: "#FAF3E0", fontSize: "1.05rem", lineHeight: 1.8 }}>
            Riders use it as staging ground for longer loops through Kalkaska and Crawford County trail systems. Always check current ORV regulations with the Michigan DNR before you ride.
          </p>
        </div>
      </section>

      {/* Grandma Viola */}
      <section style={{ backgroundColor: "#FAF3E0", padding: "4.5rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
          <p className="font-accent" style={{ color: "#C85A1E", fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "0.75rem" }}>Your Home Base</p>
          <h2 className="font-display" style={{ color: "#1A1A1A", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", marginBottom: "1.5rem" }}>
            Grandma Viola Would Have Approved
          </h2>
          <p style={{ color: "#1A1A1A", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Viola built this place for people who wanted to be in the woods — not people who wanted to look at woods through a resort window. This is a working cabin: full kitchen, real washer/dryer, fire pit out back, and enough beds for a crew of seven. The orange carpet and bunny ear TV are a bonus.
          </p>
          <p style={{ color: "#1A1A1A", fontSize: "1.05rem", lineHeight: 1.8 }}>
            After a day of trails, you want Grandma Viola's quilt and Bit O Honeys on the table. You've earned them.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#1A1A1A", padding: "4rem 1.5rem", textAlign: "center" }}>
        <h2 className="font-display" style={{ color: "#FAF3E0", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", marginBottom: "1rem" }}>
          Book Your Trail Weekend
        </h2>
        <p className="font-accent" style={{ color: "#FAF3E0", opacity: 0.75, fontSize: "1.1rem", marginBottom: "1.75rem" }}>
          $275/night · Sleeps 7 · Private property · Book direct
        </p>
        <a href="/book" style={{ display: "inline-block", backgroundColor: "#2A9D8F", color: "#FAF3E0", padding: "0.9rem 2.5rem", borderRadius: "0.5rem", fontFamily: "var(--font-accent)", fontSize: "1.1rem", textDecoration: "none", fontWeight: 600 }}>
          Book Now
        </a>
      </section>

      <Footer />
    </main>
  );
}
