import { Metadata } from "next";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Snowmobile Cabin Rental Michigan | Granny's Hideaway Mancelona",
  description:
    "Snowmobile cabin rental in Michigan near Mancelona trail access. Granny's Hideaway sleeps 7, has fire pit, full kitchen, and washer/dryer. Trail-adjacent, fully private, $275/night.",
  keywords: [
    "snowmobile cabin rental Michigan",
    "Michigan snowmobile cabin",
    "Mancelona snowmobile lodging",
    "snowmobile trail cabin Northern Michigan",
    "Antrim County snowmobile rental",
  ],
  alternates: { canonical: "https://grannyshideaway.com/snowmobile-cabin-rental-michigan" },
};

export default function SnowmobileCabinPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{ backgroundColor: "#1A1A1A", padding: "5rem 1.5rem", textAlign: "center" }}>
        <p className="font-accent" style={{ color: "#D4A017", fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "0.75rem" }}>
          Mancelona, Michigan — Snowmobile Country
        </p>
        <h1 className="font-display" style={{ color: "#FAF3E0", fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)", marginBottom: "1.25rem", lineHeight: 1.1 }}>
          Snowmobile Cabin Rental in Michigan
        </h1>
        <p className="font-accent" style={{ color: "#FAF3E0", opacity: 0.8, fontSize: "1.2rem", maxWidth: "620px", margin: "0 auto 2rem" }}>
          Wake up, suit up, and hit the trail. Granny's Hideaway is your Northern Michigan snowmobile base camp.
        </p>
        <a href="/book" style={{ display: "inline-block", backgroundColor: "#2A9D8F", color: "#FAF3E0", padding: "0.9rem 2.25rem", borderRadius: "0.5rem", fontFamily: "var(--font-accent)", fontSize: "1.1rem", textDecoration: "none", fontWeight: 600 }}>
          Check Availability
        </a>
      </section>

      {/* Intro */}
      <section style={{ backgroundColor: "#FAF3E0", padding: "4.5rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#1A1A1A", marginBottom: "1.25rem" }}>
            If you're hunting for a snowmobile cabin rental in Michigan, Mancelona is where the serious riders book. The town sits at the intersection of multiple Michigan DNR groomed trail corridors, and Granny's Hideaway puts you less than a mile from trail access. You're not driving an hour to the trailhead — you're already there.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#1A1A1A" }}>
            Antrim County gets real snow. When the rest of the Lower Peninsula is dealing with slush, up here the trails are groomed and the powder is good. The cabin sleeps 7, so bring the whole crew — there's room for riders and enough space to spread out gear.
          </p>
        </div>
      </section>

      {/* Why section */}
      <section style={{ backgroundColor: "#2A9D8F", padding: "4.5rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 className="font-display" style={{ color: "#FAF3E0", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", marginBottom: "2rem", textAlign: "center" }}>
            Why Granny's Hideaway for Snowmobilers?
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              ["🛷", "Near Mancelona trail access — DNR groomed corridors minutes from the cabin"],
              ["🔥", "Fire pit out back for post-ride decompression — bring your own wood or scavenge the lot"],
              ["🧺", "Full-size washer and dryer — because wet gear needs a real dryer, not a radiator"],
              ["🏠", "Sleeps 7 with room to actually spread out — no bunk house sardine situation"],
            ].map(([icon, text]) => (
              <div key={text as string} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", backgroundColor: "rgba(0,0,0,0.15)", borderRadius: "0.75rem", padding: "1rem 1.25rem" }}>
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{icon}</span>
                <p className="font-accent" style={{ color: "#FAF3E0", fontSize: "1.05rem", lineHeight: 1.6 }}>{text as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trails info */}
      <section style={{ backgroundColor: "#D4A017", padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 className="font-display" style={{ color: "#1A1A1A", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", marginBottom: "1rem", textAlign: "center" }}>
            The Snowmobile Scene Here
          </h2>
          <p style={{ color: "#1A1A1A", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1rem" }}>
            Mancelona is a classic northern snowmobile town. The DNR maintains groomed trail connections throughout Antrim County that link into the broader statewide system. You can pick up USFS trails and head toward Gaylord's famous snowmobile corridor to the east, or stay local and ride the Antrim County network.
          </p>
          <p style={{ color: "#1A1A1A", fontSize: "1.05rem", lineHeight: 1.8 }}>
            Check trail conditions at <strong>www.michigan.gov/dnr</strong> and <strong>traillink.com</strong> before your trip. Antrim County typically has excellent coverage from January through mid-March.
          </p>
        </div>
      </section>

      {/* Grandma Viola */}
      <section style={{ backgroundColor: "#1A1A1A", padding: "4.5rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
          <p className="font-accent" style={{ color: "#D4A017", fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "0.75rem" }}>Your Home Base</p>
          <h2 className="font-display" style={{ color: "#FAF3E0", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", marginBottom: "1.5rem" }}>
            Granny Viola's Warm Cabin
          </h2>
          <p style={{ color: "#FAF3E0", opacity: 0.85, fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            After a full day on the trails, there's something deeply satisfying about coming back to orange carpet, a wood-paneled loft, and quilts stacked on every bed. Grandma Viola's chalet has been warming up cold Northern Michigan winters since the 70s. She'd want you to hang your gear, help yourself to the candy bowl, and sign the guest book before you pass out.
          </p>
          <p style={{ color: "#FAF3E0", opacity: 0.85, fontSize: "1.05rem", lineHeight: 1.8 }}>
            No A/C needed up here in January. The electric heat works, and Viola left quilts on every bed just in case Granny's 68° thermostat setting isn't your preference.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#C85A1E", padding: "4rem 1.5rem", textAlign: "center" }}>
        <h2 className="font-display" style={{ color: "#FAF3E0", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", marginBottom: "1rem" }}>
          Lock In Your Snowmobile Weekend
        </h2>
        <p className="font-accent" style={{ color: "#FAF3E0", opacity: 0.85, fontSize: "1.1rem", marginBottom: "1.75rem" }}>
          Winter weekends book fast. Check availability now.
        </p>
        <a href="/book" style={{ display: "inline-block", backgroundColor: "#2A9D8F", color: "#FAF3E0", padding: "0.9rem 2.5rem", borderRadius: "0.5rem", fontFamily: "var(--font-accent)", fontSize: "1.1rem", textDecoration: "none", fontWeight: 600 }}>
          Book Now
        </a>
      </section>

      <Footer />
    </main>
  );
}
