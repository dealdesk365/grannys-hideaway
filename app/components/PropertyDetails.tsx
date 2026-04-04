const amenities = [
  { icon: "🔥", label: "Fire Pit" },
  { icon: "📶", label: "WiFi (Granny got an upgrade)" },
  { icon: "🧺", label: "Washer / Dryer" },
  { icon: "🍳", label: "Full Kitchen" },
  { icon: "🛁", label: "Updated full bathroom with tub/shower combo — Even Granny needed one upgrade." },
  { icon: "🌲", label: "Total Privacy — No Neighbors" },
];

const bedrooms = [
  { icon: "🛏️", label: "Queen Bedroom #1", sub: "Downstairs — cozy & classic" },
  { icon: "🛏️", label: "Queen Bedroom #2", sub: "Downstairs — green shag vibes" },
  { icon: "🛗", label: "Twin Loft (×3 beds)", sub: "Upstairs loft — classic wood paneling keeping the full Granny vibe from top to bottom." },
];

export default function PropertyDetails() {
  return (
    <section
      id="details"
      className="w-full py-20 px-4"
      style={{ backgroundColor: "#FAF3E0" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="font-accent text-base uppercase tracking-widest mb-2"
            style={{ color: "#C85A1E" }}
          >
            The Specs
          </p>
          <h2
            className="font-display text-4xl sm:text-5xl mb-4"
            style={{ color: "#1A1A1A" }}
          >
            What You&apos;re Getting
          </h2>
          <p className="text-lg" style={{ color: "#1A1A1A", opacity: 0.75 }}>
            3 bedrooms · Sleeps 7 · 1 bathroom · Mancelona, MI
          </p>
        </div>

        {/* Quick stats bar */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-12 rounded-2xl p-6"
          style={{ backgroundColor: "#D4A017" }}
        >
          {[
            ["🏡", "Chalet Style"],
            ["👨‍👩‍👧‍👦", "Sleeps 7"],
            ["🛏️", "3 Bedrooms"],
            ["🚿", "1 Bathroom"],
            ["💵", "From $325/night"],
            ["📅", "2-Night Minimum"],
          ].map(([icon, text]) => (
            <div key={text} className="flex items-center gap-2 font-accent text-lg" style={{ color: "#1A1A1A" }}>
              <span>{icon}</span>
              <span>{text}</span>
            </div>
          ))}
        </div>

        {/* Bedrooms */}
        <h3
          className="font-display text-3xl mb-6 text-center"
          style={{ color: "#1A1A1A" }}
        >
          Bedroom Breakdown
        </h3>
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          {bedrooms.map((b) => (
            <div
              key={b.label}
              className="flex-1 rounded-xl p-5 flex flex-col gap-1"
              style={{ backgroundColor: "#1A1A1A", color: "#FAF3E0" }}
            >
              <div className="text-3xl">{b.icon}</div>
              <p className="font-display text-lg">{b.label}</p>
              <p className="text-sm" style={{ opacity: 0.7 }}>{b.sub}</p>
            </div>
          ))}
        </div>

        {/* Amenities */}
        <h3
          className="font-display text-3xl mb-6 text-center"
          style={{ color: "#1A1A1A" }}
        >
          Amenities
        </h3>
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {amenities.map((a) => (
            <div
              key={a.label}
              className="flex items-center gap-3 rounded-full px-5 py-3 font-accent text-base"
              style={{ backgroundColor: "#2A9D8F", color: "#FAF3E0" }}
            >
              <span>{a.icon}</span>
              <span>{a.label}</span>
            </div>
          ))}
        </div>

        {/* No Dishwasher funny callout */}
        <div
          className="rounded-2xl p-8 text-center"
          style={{ backgroundColor: "#C85A1E", color: "#FAF3E0" }}
        >
          <p className="font-display text-3xl sm:text-4xl mb-3">
            🙅 No Dishwasher
          </p>
          <p className="font-accent text-2xl mb-2">It&apos;s the 70s, People.</p>
          <p className="max-w-lg mx-auto text-base" style={{ opacity: 0.9 }}>
            Granny washed dishes by hand. Her mother did. Her grandmother did. The tradition
            continues at Granny&apos;s Hideaway. Think of it as a character-building experience.
            Or just teamwork. Either way, the kitchen is fully stocked — you&apos;ve just got
            to earn it. 🫧
          </p>
        </div>
      </div>
    </section>
  );
}
