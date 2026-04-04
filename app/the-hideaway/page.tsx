import Footer from "../components/Footer";

const amenities = [
  { icon: "🔥", label: "Fire Pit" },
  { icon: "📶", label: "WiFi — Spectrum cable. Grandma got an upgrade." },
  { icon: "🧺", label: "Full Size Washer / Dryer" },
  { icon: "🍳", label: "Full Kitchen" },
  { icon: "🙅", label: "No Dishwasher — It's the 70s, people." },
  { icon: "🛁", label: "Updated bathroom — Even Granny needed one upgrade." },
  { icon: "🌲", label: "Total Privacy — No Neighbors" },
  { icon: "🪵", label: "Wood Paneled Loft" },
  { icon: "🧊", label: "Vintage fridge with small freezer" },
  { icon: "🍳", label: "Vintage stove / oven" },
];

const bedrooms = [
  {
    icon: "🛏️",
    title: "Queen Bedroom #1",
    desc: "Downstairs. Cozy & classic. Step back into 1974 the moment you close the door.",
    bg: "#1A1A1A",
    color: "#FAF3E0",
  },
  {
    icon: "🛏️",
    title: "Queen Bedroom #2",
    desc: "Downstairs. Green shag vibes. Viola had opinions about carpet — all of them correct.",
    bg: "#7B9A3A",
    color: "#FAF3E0",
  },
  {
    icon: "🛗",
    title: "Twin Loft — 3 Beds",
    desc: "Upstairs loft. Classic wood paneling keeping the full Granny vibe from top to bottom. Perfect for the kids, or anyone young at heart.",
    bg: "#2A9D8F",
    color: "#FAF3E0",
  },
];

export default function TheHideawayPage() {
  return (
    <main>
      {/* Page Hero */}
      <section
        style={{
          backgroundColor: "#1A1A1A",
          padding: "5rem 1.5rem",
          textAlign: "center",
        }}
      >
        <p
          className="font-accent"
          style={{
            color: "#D4A017",
            fontSize: "1rem",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            marginBottom: "0.75rem",
          }}
        >
          Full Property Details
        </p>
        <h1
          className="font-display"
          style={{
            color: "#FAF3E0",
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            marginBottom: "1.25rem",
            lineHeight: 1.1,
          }}
        >
          The Hideaway
        </h1>
        <p
          className="font-accent"
          style={{
            color: "#FAF3E0",
            opacity: 0.8,
            fontSize: "1.2rem",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          A time capsule in the Northern Michigan woods. Nothing is reproduction.
          This place didn&apos;t try to be retro — it just never stopped.
        </p>
      </section>

      {/* The Vibe */}
      <section
        style={{
          backgroundColor: "#FAF3E0",
          padding: "5rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p
            className="font-accent"
            style={{
              color: "#C85A1E",
              fontSize: "1rem",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              marginBottom: "0.75rem",
              textAlign: "center",
            }}
          >
            Welcome, Traveler
          </p>
          <h2
            className="font-display"
            style={{
              color: "#1A1A1A",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              textAlign: "center",
              marginBottom: "2.5rem",
            }}
          >
            Step Into the Groovy Zone
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: "#1A1A1A",
            }}
          >
            <p>
              Wall-to-wall orange carpet in the living room that would make a 1974 interior
              designer weep with joy. Sink into the vintage sofa, flip on the bunny ear TV
              (yes, it works), and let the decade wash over you.
            </p>
            <p>
              Textured wallpaper. Vintage light fixtures. 80s furniture throughout. Nothing is
              a reproduction. This chalet didn&apos;t try to be retro — it just{" "}
              <em>never stopped being retro</em>. Every corner is a love letter to the era.
            </p>
            <p>
              The bedrooms got blue and green shag — because even Viola knew you couldn&apos;t
              sleep <em>ON</em> orange. But the living room? That was <strong>hers.</strong>
            </p>
            <p>
              Up in the loft: wood paneling from floor to ceiling, three twin beds, and a
              view of the treeline that Granny never got tired of.
            </p>
          </div>
        </div>
      </section>

      {/* Granny Touches */}
      <section
        style={{
          backgroundColor: "#D4A017",
          padding: "4rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2
            className="font-display"
            style={{
              color: "#1A1A1A",
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              textAlign: "center",
              marginBottom: "2rem",
            }}
          >
            🍬 Little Granny Touches
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {[
              ["🍬", "Bit O Honeys & Werther's Originals waiting for you on arrival — because Granny doesn't let guests go hungry."],
              ["📖", "Sign Granny's Guest Book before you go. She actually reads it."],
              ["📌", '"68° is plenty warm. Granny has quilts."'],
              ["📌", '"Check the burn ban. Granny didn\'t raise a fool."'],
            ].map(([icon, text]) => (
              <div
                key={text}
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                  backgroundColor: "rgba(0,0,0,0.1)",
                  borderRadius: "0.75rem",
                  padding: "1rem 1.25rem",
                }}
              >
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{icon}</span>
                <p className="font-accent" style={{ color: "#1A1A1A", fontSize: "1.05rem", lineHeight: 1.6 }}>
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stairs Warning */}
      <section style={{ backgroundColor: "#C85A1E", padding: "3rem 1.5rem" }}>
        <div
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            display: "flex",
            gap: "1.25rem",
            alignItems: "flex-start",
          }}
        >
          <span style={{ fontSize: "2.5rem", flexShrink: 0 }}>⚠️</span>
          <div>
            <p
              className="font-display"
              style={{ color: "#FAF3E0", fontSize: "1.75rem", marginBottom: "0.5rem" }}
            >
              Mind the Stairs
            </p>
            <p
              className="font-accent"
              style={{ color: "#FAF3E0", opacity: 0.92, fontSize: "1.05rem", lineHeight: 1.65 }}
            >
              The upstairs loft is accessed via <strong>original 1974 chalet stairs</strong> — narrow,
              steep, and full of character. They&apos;re exactly as Granny left them. Hold the
              rail. Take your time. Use at your own risk.
            </p>
          </div>
        </div>
      </section>

      {/* Bedroom Breakdown */}
      <section
        style={{
          backgroundColor: "#1A1A1A",
          padding: "5rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2
            className="font-display"
            style={{
              color: "#FAF3E0",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              textAlign: "center",
              marginBottom: "2.5rem",
            }}
          >
            Bedroom Breakdown
          </h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1.25rem",
            }}
          >
            {bedrooms.map((b) => (
              <div
                key={b.title}
                style={{
                  flex: "1 1 240px",
                  backgroundColor: b.bg,
                  color: b.color,
                  borderRadius: "1rem",
                  padding: "1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  border: "2px solid rgba(212,160,23,0.3)",
                }}
              >
                <span style={{ fontSize: "2.25rem" }}>{b.icon}</span>
                <p className="font-display" style={{ fontSize: "1.35rem" }}>{b.title}</p>
                <p className="font-accent" style={{ opacity: 0.85, lineHeight: 1.6 }}>{b.desc}</p>
              </div>
            ))}
          </div>
          <p
            className="font-accent"
            style={{
              color: "#D4A017",
              textAlign: "center",
              marginTop: "1.5rem",
              fontSize: "1.1rem",
              opacity: 0.85,
            }}
          >
            Sleeps 7 total — 2 queens downstairs + 3 twins in the loft
          </p>
        </div>
      </section>

      {/* Amenities Grid */}
      <section
        style={{
          backgroundColor: "#FAF3E0",
          padding: "5rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2
            className="font-display"
            style={{
              color: "#1A1A1A",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              textAlign: "center",
              marginBottom: "2.5rem",
            }}
          >
            Amenities
          </h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "center",
            }}
          >
            {amenities.map((a) => (
              <div
                key={a.label}
                style={{
                  backgroundColor: "#2A9D8F",
                  color: "#FAF3E0",
                  borderRadius: "9999px",
                  padding: "0.6rem 1.35rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                }}
              >
                <span>{a.icon}</span>
                <span className="font-accent" style={{ fontSize: "0.97rem" }}>{a.label}</span>
              </div>
            ))}
          </div>

          {/* No dishwasher callout */}
          <div
            style={{
              backgroundColor: "#C85A1E",
              color: "#FAF3E0",
              borderRadius: "1.25rem",
              padding: "2.5rem",
              textAlign: "center",
              marginTop: "2.5rem",
            }}
          >
            <p className="font-display" style={{ fontSize: "clamp(1.75rem, 5vw, 2.5rem)", marginBottom: "0.75rem" }}>
              🙅 No Dishwasher
            </p>
            <p className="font-accent" style={{ fontSize: "1.35rem", marginBottom: "0.5rem" }}>
              It&apos;s the 70s, People.
            </p>
            <p style={{ maxWidth: "500px", margin: "0 auto", opacity: 0.9, lineHeight: 1.65 }}>
              Granny washed dishes by hand. Her mother did. Her grandmother did. The tradition
              continues here. Think of it as character-building. Or just teamwork. Either way — 🫧
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
