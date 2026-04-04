const activities = [
  {
    emoji: "⛳",
    title: "Gaylord Golf Corridor",
    desc: "Golf Mecca of the Midwest, minutes away. World-class courses in every direction — tee times fill fast.",
    color: "#7B9A3A",
  },
  {
    emoji: "🏖️",
    title: "Torch Lake",
    desc: "30–40 minutes to one of the most beautiful lakes in the world. Caribbean-blue water in Northern Michigan — yes, really.",
    color: "#2A9D8F",
  },
  {
    emoji: "🌉",
    title: "Mackinac Bridge",
    desc: "1 hour to a Michigan bucket list moment. Walk it on Labor Day, or just pull over and stare — it earns every second.",
    color: "#D4A017",
  },
  {
    emoji: "🏔️",
    title: "Shanty Creek + Boyne Mountain",
    desc: "World-class skiing and golf resorts just up the road. Come in winter, stay for the slopes. Come in summer, stay for the views.",
    color: "#C85A1E",
  },
  {
    emoji: "🏍️",
    title: "ORV & Snowmobile Trails",
    desc: "Northern Michigan is trail heaven. Hundreds of miles of groomed snowmobile and ORV trails practically at your doorstep.",
    color: "#7B9A3A",
  },
  {
    emoji: "🎣",
    title: "Fishing",
    desc: "Legendary Northern Michigan fishing — streams, lakes, and rivers teeming with trout, salmon, and walleye. Bring your rod.",
    color: "#2A9D8F",
  },
];

export default function BaseCamp() {
  return (
    <section
      id="basecamp"
      className="w-full py-20 px-4"
      style={{ backgroundColor: "#1A1A1A" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-4">
          <p
            className="font-accent text-base uppercase tracking-widest mb-2"
            style={{ color: "#D4A017" }}
          >
            Adventure Awaits
          </p>
          <h2
            className="font-display text-4xl sm:text-5xl md:text-6xl mb-4"
            style={{ color: "#FAF3E0" }}
          >
            Your Base Camp
          </h2>
          <p
            className="font-accent text-xl max-w-2xl mx-auto mb-10"
            style={{ color: "#2A9D8F" }}
          >
            No matter what season brings you here, there&apos;s always something waiting.
          </p>
        </div>

        {/* Activities grid */}
        <div className="flex flex-wrap gap-5 justify-center mb-10">
          {activities.map((a) => (
            <div
              key={a.title}
              className="rounded-2xl p-6 flex flex-col gap-3"
              style={{
                backgroundColor: a.color,
                color: "#FAF3E0",
                flexBasis: "calc(50% - 1.25rem)",
                minWidth: "260px",
              }}
            >
              <div className="text-4xl">{a.emoji}</div>
              <h3 className="font-display text-xl">{a.title}</h3>
              <p className="text-sm leading-relaxed" style={{ opacity: 0.9 }}>
                {a.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Four Seasons callout */}
        <div
          className="rounded-2xl p-8 text-center"
          style={{ backgroundColor: "#FAF3E0", color: "#1A1A1A" }}
        >
          <p className="text-3xl mb-2">🌲❄️🌸☀️</p>
          <h3 className="font-display text-3xl mb-3" style={{ color: "#7B9A3A" }}>
            Four Seasons of Northern Michigan
          </h3>
          <p className="max-w-xl mx-auto text-base" style={{ opacity: 0.8 }}>
            Summer beach days, fall color drives, winter snowmobiling, spring fishing —
            Granny&apos;s Hideaway is a year-round home base. Every season has its thing.
          </p>
        </div>
      </div>
    </section>
  );
}
