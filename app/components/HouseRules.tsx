const ruleGroups = [
  {
    category: "⏰ Check-In / Check-Out",
    bg: "#1A1A1A",
    color: "#FAF3E0",
    rules: [
      "Check-in: 4:00 PM",
      "Check-out: 11:00 AM",
    ],
  },
  {
    category: "👥 Occupancy",
    bg: "#D4A017",
    color: "#1A1A1A",
    rules: [
      'Max occupancy: 7 guests — <em>"Granny gets overwhelmed"</em>',
      "Up to 2 additional guests allowed — $35/night per additional guest (max 9 total)",
    ],
  },
  {
    category: "🚭 No Smoking / Vaping",
    bg: "#1A1A1A",
    color: "#FAF3E0",
    rules: [
      "🚭 No smoking inside",
      "💨 No vaping inside",
    ],
  },
  {
    category: "🐾 No Animals",
    bg: "#C85A1E",
    color: "#FAF3E0",
    rules: [
      'No animals allowed — <em>"Granny has allergies"</em>',
    ],
  },
  {
    category: "🎉 No Parties",
    bg: "#1A1A1A",
    color: "#FAF3E0",
    rules: [
      "No parties or events",
    ],
  },
  {
    category: "🎆 No Fireworks",
    bg: "#D4A017",
    color: "#1A1A1A",
    rules: [
      "NO fireworks. Ever. Period.",
    ],
  },
  {
    category: "🔇 Quiet Hours",
    bg: "#2A9D8F",
    color: "#FAF3E0",
    rules: [
      "9:30 PM – 8:30 AM",
    ],
  },
  {
    category: "🌡️ Thermostat",
    bg: "#1A1A1A",
    color: "#FAF3E0",
    rules: [
      'Max 68°F — <em>"Granny keeps it cozy the old fashioned way. Check the quilt closet."</em>',
    ],
  },
  {
    category: "🔥 Fire Pit",
    bg: "#C85A1E",
    color: "#FAF3E0",
    rules: [
      "Fire pit use subject to current Michigan DNR burn ban status",
      'Guests are responsible for checking burn ban status before lighting any fire — check at <a href="https://michigan.gov/dnr" target="_blank" rel="noopener noreferrer" style="text-decoration:underline">michigan.gov/dnr</a>',
      "Never leave fire unattended",
      "Fully extinguish before going to bed or leaving property",
      "❌ No fires during active burn bans — violation is guest&apos;s full legal and financial responsibility",
    ],
  },
  {
    category: "🚗 Parking",
    bg: "#D4A017",
    color: "#1A1A1A",
    rules: [
      "No parking on road — unloading ok, but all vehicles and trailers must be parked in driveway",
      "Driveway capacity details coming soon",
    ],
  },
  {
    category: "📷 Exterior Cameras",
    bg: "#1A1A1A",
    color: "#FAF3E0",
    rules: [
      'Exterior cameras on property — <em>"Granny has trust issues. Max occupancy enforced."</em>',
    ],
  },
  {
    category: "⚠️ Stairs Warning",
    bg: "#7B9A3A",
    color: "#FAF3E0",
    rules: [
      "Upstairs loft accessed via original 1974 chalet stairs — narrow, steep, and full of character. Hold the rail. Granny insists. Use at your own risk.",
    ],
  },
  {
    category: "🦌 Firearms",
    bg: "#1A1A1A",
    color: "#FAF3E0",
    rules: [
      "Firearms allowed — bring at your own risk, follow all Michigan laws",
    ],
  },
  {
    category: "🗑️ Trash",
    bg: "#D4A017",
    color: "#1A1A1A",
    rules: [
      "Please empty all interior trash and place in exterior bins before checkout",
    ],
  },
  {
    category: "🔑 Door Code",
    bg: "#2A9D8F",
    color: "#FAF3E0",
    rules: [
      "Lockbox door code sent via email day of arrival only",
    ],
  },
  {
    category: "📅 Date Changes",
    bg: "#1A1A1A",
    color: "#FAF3E0",
    rules: [
      "One free date change allowed with 30+ days notice. No changes within 30 days.",
    ],
  },
];

export default function HouseRules() {
  return (
    <section
      id="rules"
      className="w-full py-20 px-4"
      style={{ backgroundColor: "#FAF3E0" }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="font-accent text-base uppercase tracking-widest mb-2"
            style={{ color: "#C85A1E" }}
          >
            A Few Things, Honey
          </p>
          <h2
            className="font-display text-4xl sm:text-5xl mb-4"
            style={{ color: "#1A1A1A" }}
          >
            House Rules
          </h2>
          <p className="text-lg" style={{ color: "#1A1A1A", opacity: 0.7 }}>
            Granny raised you better than this. But just in case — here&apos;s a refresher.
          </p>
        </div>

        {/* Rule Cards */}
        <div className="flex flex-col gap-4 mb-10">
          {ruleGroups.map((group, i) => (
            <div
              key={i}
              className="rounded-xl p-5"
              style={{ backgroundColor: group.bg, color: group.color }}
            >
              <p className="font-display text-xl mb-3">{group.category}</p>
              <ul className="flex flex-col gap-1.5">
                {group.rules.map((rule, j) => (
                  <li
                    key={j}
                    className="font-accent text-base leading-relaxed"
                    style={{ opacity: 0.92 }}
                    dangerouslySetInnerHTML={{ __html: "• " + rule }}
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Cancellation Policy */}
        <div
          className="rounded-2xl p-6 mb-6"
          style={{ backgroundColor: "#1A1A1A", color: "#FAF3E0" }}
        >
          <p className="font-display text-2xl mb-4 text-center">📅 Cancellation Policy</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm font-accent">
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(250,243,224,0.3)" }}>
                  <th className="text-left py-2 pr-4" style={{ color: "#D4A017" }}>Timing</th>
                  <th className="text-left py-2" style={{ color: "#D4A017" }}>Refund</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Cancel 30+ days before", "100% refund"],
                  ["Cancel 14–29 days before", "50% refund"],
                  ["Cancel under 14 days", "No refund"],
                  ["No-show", "No refund"],
                ].map(([timing, refund], i) => (
                  <tr
                    key={i}
                    style={{ borderBottom: "1px solid rgba(250,243,224,0.1)" }}
                  >
                    <td className="py-2 pr-4">{timing}</td>
                    <td className="py-2 font-bold">{refund}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Insurance + Liability */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div
            className="flex-1 rounded-2xl p-6"
            style={{ backgroundColor: "#2A9D8F", color: "#FAF3E0" }}
          >
            <p className="font-display text-xl mb-2">🛡️ Guest Damage Protection</p>
            <p className="text-sm leading-relaxed" style={{ opacity: 0.9 }}>
              All guests are required to purchase damage protection through{" "}
              <strong>Safely.com</strong> at the time of booking. It covers accidents — because
              Granny didn&apos;t survive this long by leaving things to chance.
            </p>
          </div>
          <div
            className="flex-1 rounded-2xl p-6"
            style={{ backgroundColor: "#7B9A3A", color: "#FAF3E0" }}
          >
            <p className="font-display text-xl mb-2">📋 Liability Waiver</p>
            <p className="text-sm leading-relaxed" style={{ opacity: 0.9 }}>
              All guests must sign a digital liability waiver at booking covering: stairs,
              fire pit, outdoor activities, firearms, and general property risks.
              Granny&apos;s lawyer made her do it.
            </p>
          </div>
        </div>

        {/* The Granny Rule */}
        <div
          className="rounded-2xl p-8 text-center"
          style={{ backgroundColor: "#C85A1E", color: "#FAF3E0" }}
        >
          <p className="font-display text-3xl sm:text-4xl mb-3">👀 The Granny Rule</p>
          <p className="font-accent text-xl italic">
            &ldquo;Treat it like Grandma&apos;s house. Because it is.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
