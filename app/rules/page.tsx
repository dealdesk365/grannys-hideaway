import Footer from "../components/Footer";

const ruleGroups = [
  {
    category: "⏰ Check-In / Check-Out",
    bg: "#1A1A1A",
    color: "#FAF3E0",
    rules: ["Check-in: 4:00 PM", "Check-out: 11:00 AM"],
  },
  {
    category: "👥 Occupancy",
    bg: "#D4A017",
    color: "#1A1A1A",
    rules: [
      'Max occupancy: 7 guests — "Granny gets overwhelmed"',
      "Up to 2 additional guests allowed — $35/night per additional guest (max 9 total)",
    ],
  },
  {
    category: "🚭 No Smoking / Vaping",
    bg: "#1A1A1A",
    color: "#FAF3E0",
    rules: ["🚭 No smoking inside", "💨 No vaping inside"],
  },
  {
    category: "🐾 No Animals",
    bg: "#C85A1E",
    color: "#FAF3E0",
    rules: ['No animals allowed — "Granny has allergies"'],
  },
  {
    category: "🎉 No Parties or Events",
    bg: "#1A1A1A",
    color: "#FAF3E0",
    rules: ["No parties or events"],
  },
  {
    category: "🎆 No Fireworks",
    bg: "#D4A017",
    color: "#1A1A1A",
    rules: ["NO fireworks. Ever. Period."],
  },
  {
    category: "🔇 Quiet Hours",
    bg: "#2A9D8F",
    color: "#FAF3E0",
    rules: ["9:30 PM – 8:30 AM"],
  },
  {
    category: "🌡️ Thermostat",
    bg: "#1A1A1A",
    color: "#FAF3E0",
    rules: ['Max 68°F — "Granny keeps it cozy the old fashioned way. Check the quilt closet."'],
  },
  {
    category: "🔥 Fire Pit",
    bg: "#C85A1E",
    color: "#FAF3E0",
    rules: [
      "Fire pit use subject to current Michigan DNR burn ban status",
      "Check burn ban status before lighting any fire",
      "Never leave fire unattended",
      "Fully extinguish before going to bed or leaving property",
      "❌ No fires during active burn bans — violation is guest's full legal and financial responsibility",
    ],
    link: { text: "Check current burn ban at michigan.gov/dnr", href: "https://michigan.gov/dnr" },
  },
  {
    category: "🚗 Parking",
    bg: "#D4A017",
    color: "#1A1A1A",
    rules: [
      "No parking on road — unloading OK, but all vehicles and trailers must be in the driveway",
    ],
  },
  {
    category: "📷 Exterior Cameras",
    bg: "#1A1A1A",
    color: "#FAF3E0",
    rules: ['Exterior cameras on property — "Granny has trust issues. Max occupancy enforced."'],
  },
  {
    category: "⚠️ Stairs Warning",
    bg: "#7B9A3A",
    color: "#FAF3E0",
    rules: [
      "Upstairs loft accessed via original 1974 chalet stairs — narrow, steep, and full of character. Hold the rail. Use at your own risk.",
    ],
  },
  {
    category: "🦌 Firearms",
    bg: "#1A1A1A",
    color: "#FAF3E0",
    rules: ["Firearms allowed — bring at your own risk, follow all Michigan laws"],
  },
  {
    category: "🗑️ Trash",
    bg: "#D4A017",
    color: "#1A1A1A",
    rules: ["Please empty all interior trash and place in exterior bins before checkout"],
  },
  {
    category: "🔑 Door Code",
    bg: "#2A9D8F",
    color: "#FAF3E0",
    rules: ["Lockbox door code sent via email day of arrival only"],
  },
  {
    category: "📅 Date Changes",
    bg: "#1A1A1A",
    color: "#FAF3E0",
    rules: ["One free date change allowed with 30+ days notice. No changes within 30 days."],
  },
];

export default function RulesPage() {
  return (
    <main>
      {/* Page Hero */}
      <section
        style={{
          backgroundColor: "#C85A1E",
          padding: "5rem 1.5rem",
          textAlign: "center",
        }}
      >
        <p
          className="font-accent"
          style={{
            color: "#FAF3E0",
            fontSize: "1rem",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            marginBottom: "0.75rem",
            opacity: 0.85,
          }}
        >
          A Few Things, Honey
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
          House Rules
        </h1>
        <p
          className="font-accent"
          style={{
            color: "#FAF3E0",
            opacity: 0.85,
            fontSize: "1.15rem",
            maxWidth: "560px",
            margin: "0 auto",
          }}
        >
          Granny raised you better than this. But just in case — here&apos;s a refresher.
        </p>
      </section>

      {/* Rules */}
      <section
        style={{
          backgroundColor: "#FAF3E0",
          padding: "4rem 1.5rem",
        }}
      >
        <div
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {ruleGroups.map((group, i) => (
            <div
              key={i}
              style={{
                backgroundColor: group.bg,
                color: group.color,
                borderRadius: "0.85rem",
                padding: "1.35rem 1.5rem",
              }}
            >
              <p
                className="font-display"
                style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}
              >
                {group.category}
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                {group.rules.map((rule, j) => (
                  <li
                    key={j}
                    className="font-accent"
                    style={{ opacity: 0.92, lineHeight: 1.6, fontSize: "1rem" }}
                  >
                    • {rule}
                  </li>
                ))}
                {"link" in group && group.link && (
                  <li className="font-accent" style={{ marginTop: "0.25rem" }}>
                    →{" "}
                    <a
                      href={group.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: group.color,
                        textDecoration: "underline",
                        opacity: 0.9,
                      }}
                    >
                      {group.link.text}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Cancellation Policy */}
      <section
        style={{
          backgroundColor: "#1A1A1A",
          padding: "4rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2
            className="font-display"
            style={{
              color: "#FAF3E0",
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              textAlign: "center",
              marginBottom: "2rem",
            }}
          >
            📅 Cancellation Policy
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }} className="font-accent">
              <thead>
                <tr
                  style={{
                    borderBottom: "1px solid rgba(250,243,224,0.3)",
                  }}
                >
                  <th
                    style={{
                      textAlign: "left",
                      padding: "0.65rem 1rem 0.65rem 0",
                      color: "#D4A017",
                      fontSize: "1rem",
                    }}
                  >
                    Timing
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "0.65rem 0",
                      color: "#D4A017",
                      fontSize: "1rem",
                    }}
                  >
                    Refund
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["30+ days before check-in", "100% refund"],
                  ["14–29 days before check-in", "50% refund"],
                  ["Under 14 days", "No refund"],
                  ["No-show", "No refund"],
                ].map(([timing, refund], i) => (
                  <tr
                    key={i}
                    style={{ borderBottom: "1px solid rgba(250,243,224,0.1)" }}
                  >
                    <td
                      style={{
                        padding: "0.65rem 1rem 0.65rem 0",
                        color: "#FAF3E0",
                        fontSize: "0.97rem",
                      }}
                    >
                      {timing}
                    </td>
                    <td
                      style={{
                        padding: "0.65rem 0",
                        color: "#FAF3E0",
                        fontWeight: 700,
                        fontSize: "0.97rem",
                      }}
                    >
                      {refund}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Insurance + Liability */}
      <section
        style={{
          backgroundColor: "#FAF3E0",
          padding: "4rem 1.5rem",
        }}
      >
        <div
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1.25rem",
            }}
          >
            <div
              style={{
                flex: "1 1 280px",
                backgroundColor: "#2A9D8F",
                color: "#FAF3E0",
                borderRadius: "1rem",
                padding: "1.75rem",
              }}
            >
              <p className="font-display" style={{ fontSize: "1.35rem", marginBottom: "0.75rem" }}>
                🛡️ Guest Damage Protection
              </p>
              <p className="font-accent" style={{ opacity: 0.9, lineHeight: 1.65 }}>
                All guests are required to purchase damage protection through{" "}
                <strong>Safely.com</strong> at the time of booking. It covers accidents —
                because Granny didn&apos;t survive this long by leaving things to chance.
              </p>
            </div>
            <div
              style={{
                flex: "1 1 280px",
                backgroundColor: "#7B9A3A",
                color: "#FAF3E0",
                borderRadius: "1rem",
                padding: "1.75rem",
              }}
            >
              <p className="font-display" style={{ fontSize: "1.35rem", marginBottom: "0.75rem" }}>
                📋 Liability Waiver
              </p>
              <p className="font-accent" style={{ opacity: 0.9, lineHeight: 1.65 }}>
                All guests must sign a digital liability waiver at booking covering: stairs,
                fire pit, outdoor activities, firearms, and general property risks.
                Granny&apos;s lawyer made her do it.
              </p>
            </div>
          </div>

          {/* The Granny Rule */}
          <div
            style={{
              backgroundColor: "#C85A1E",
              color: "#FAF3E0",
              borderRadius: "1.25rem",
              padding: "2.5rem",
              textAlign: "center",
            }}
          >
            <p className="font-display" style={{ fontSize: "clamp(1.75rem, 5vw, 2.75rem)", marginBottom: "0.75rem" }}>
              👀 The Granny Rule
            </p>
            <p className="font-accent" style={{ fontSize: "1.35rem", fontStyle: "italic" }}>
              &ldquo;Treat it like Grandma&apos;s house. Because it is.&rdquo;
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
