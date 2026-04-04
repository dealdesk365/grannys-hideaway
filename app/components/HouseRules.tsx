const rules = [
  { icon: "📅", rule: "2-night minimum stay" },
  { icon: "🚫", rule: "No parties or large gatherings — Granny&apos;s neighbors are trees, and the trees have feelings" },
  { icon: "🐾", rule: "Pet policy TBD — check back closer to opening" },
  { icon: "🛡️", rule: "Damage protection purchased via Safely.com at booking — required for all guests" },
  { icon: "🧹", rule: "Leave it how you found it (groovy, not trashed)" },
  { icon: "🚬", rule: "No smoking indoors — take it to the fire pit" },
  { icon: "👀", rule: "Granny&apos;s watching. She always is." },
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

        {/* Rules list */}
        <div className="flex flex-col gap-4 mb-10">
          {rules.map((r, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-xl p-5"
              style={{
                backgroundColor: i % 2 === 0 ? "#1A1A1A" : "#D4A017",
                color: i % 2 === 0 ? "#FAF3E0" : "#1A1A1A",
              }}
            >
              <span className="text-2xl mt-0.5">{r.icon}</span>
              <p
                className="font-accent text-lg"
                dangerouslySetInnerHTML={{ __html: r.rule }}
              />
            </div>
          ))}
        </div>

        {/* Safely.com note */}
        <div
          className="rounded-2xl p-6 text-center"
          style={{ backgroundColor: "#2A9D8F", color: "#FAF3E0" }}
        >
          <p className="font-display text-xl mb-2">🛡️ Guest Damage Protection</p>
          <p className="text-sm max-w-lg mx-auto" style={{ opacity: 0.9 }}>
            All guests are required to purchase damage protection through{" "}
            <strong>Safely.com</strong> at the time of booking. It covers accidents — because
            even the most careful guests sometimes meet their match in a shag carpet.
          </p>
        </div>
      </div>
    </section>
  );
}
