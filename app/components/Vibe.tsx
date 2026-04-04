const vibeCards = [
  {
    emoji: "🟠",
    title: "The Living Room",
    desc: "Wall-to-wall orange carpet that would make a 1974 interior designer weep with joy. Sink into the vintage sofa, flip on the bunny ear TV (yes, it works), and let the decade wash over you.",
    bg: "#C85A1E",
    color: "#FAF3E0",
  },
  {
    emoji: "📺",
    title: "Authentic Time Capsule",
    desc: "Textured wallpaper, vintage light fixtures, 80s furniture — nothing is reproduction. This place didn't try to be retro. It just never stopped being retro.",
    bg: "#7B9A3A",
    color: "#FAF3E0",
  },
  {
    emoji: "🛏️",
    title: "Groovy Bedrooms",
    desc: "Blue shag carpet in one room, green shag in another. Each bedroom is its own little mood board from another era. Sleep in style — 1978 style.",
    bg: "#2A9D8F",
    color: "#FAF3E0",
  },
];

export default function Vibe() {
  return (
    <section
      id="vibe"
      className="w-full py-20 px-4"
      style={{ backgroundColor: "#1A1A1A" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p
            className="font-accent text-base uppercase tracking-widest mb-2"
            style={{ color: "#D4A017" }}
          >
            Welcome, Traveler
          </p>
          <h2
            className="font-display text-4xl sm:text-5xl md:text-6xl mb-4"
            style={{ color: "#FAF3E0" }}
          >
            Step Into the Groovy Zone
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "#FAF3E0", opacity: 0.8 }}
          >
            Granny never updated. And honestly? Thank goodness. Every square foot of this
            chalet is a love letter to the 70s and 80s — right down to the shag carpet and
            the bunny ears on the TV. This isn&apos;t nostalgia. This is the real thing.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="flex flex-col sm:flex-row gap-6">
          {vibeCards.map((card) => (
            <div
              key={card.title}
              className="flex-1 rounded-2xl p-7 flex flex-col gap-3"
              style={{ backgroundColor: card.bg, color: card.color }}
            >
              <div className="text-4xl">{card.emoji}</div>
              <h3 className="font-display text-2xl">{card.title}</h3>
              <p className="text-base leading-relaxed" style={{ opacity: 0.92 }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Seclusion callout */}
        <div
          className="mt-10 rounded-2xl p-8 text-center"
          style={{ backgroundColor: "#D4A017", color: "#1A1A1A" }}
        >
          <p className="font-display text-2xl sm:text-3xl mb-2">
            🌲 Total Seclusion. Zero Neighbors.
          </p>
          <p className="text-base max-w-xl mx-auto">
            Tucked deep in the Northern Michigan woods, Granny&apos;s Hideaway is your private
            escape. No noise complaints possible — because there&apos;s no one around to
            complain.
          </p>
        </div>
      </div>
    </section>
  );
}
