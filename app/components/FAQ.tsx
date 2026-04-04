const faqItems = [
  {
    icon: "📶",
    question: "WiFi",
    answer: "Spectrum cable internet. Grandma got an upgrade.",
    bg: "#1A1A1A",
    color: "#FAF3E0",
    accentColor: "#D4A017",
  },
  {
    icon: "🌬️",
    question: "Air Conditioning",
    answer:
      "No A/C. It's the 70s. Grandma opens windows. Northern Michigan summers are beautiful — you won't miss it.",
    bg: "#2A9D8F",
    color: "#FAF3E0",
    accentColor: "#FAF3E0",
  },
  {
    icon: "🔥",
    question: "Heat",
    answer:
      "Electric heat currently. Forced air upgrade coming soon. Viola kept it cozy.",
    bg: "#C85A1E",
    color: "#FAF3E0",
    accentColor: "#FAF3E0",
  },
  {
    icon: "🧺",
    question: "Washer & Dryer",
    answer: "Full size. Viola believed in clean clothes.",
    bg: "#7B9A3A",
    color: "#FAF3E0",
    accentColor: "#FAF3E0",
  },
  {
    icon: "☕",
    question: "Kitchen",
    answer:
      "Coffee pot, small vintage stove/oven, and a vintage fridge with small freezer. Grandma always said eat fresh.",
    bg: "#D4A017",
    color: "#1A1A1A",
    accentColor: "#1A1A1A",
  },
  {
    icon: "⛽",
    question: "Nearest Gas Station",
    answer:
      "About 10 miles away. Plan ahead — Granny didn't run out of gas and neither should you.",
    bg: "#1A1A1A",
    color: "#FAF3E0",
    accentColor: "#D4A017",
  },
  {
    icon: "🛒",
    question: "Nearest Grocery Store",
    answer:
      "Family Fare in Mancelona. Or get Meijer/Walmart delivery from Gaylord straight to the door — modern convenience, Granny approves.",
    bg: "#2A9D8F",
    color: "#FAF3E0",
    accentColor: "#FAF3E0",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="w-full py-20 px-4"
      style={{ backgroundColor: "#1A1A1A" }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="font-accent text-base uppercase tracking-widest mb-2"
            style={{ color: "#D4A017" }}
          >
            Got Questions?
          </p>
          <h2
            className="font-display text-4xl sm:text-5xl mb-4"
            style={{ color: "#FAF3E0" }}
          >
            Granny&apos;s Got Answers
          </h2>
          <p className="text-base" style={{ color: "#FAF3E0", opacity: 0.65 }}>
            Everything you need to know before you pack the station wagon.
          </p>
        </div>

        {/* FAQ Cards */}
        <div className="flex flex-col gap-4">
          {faqItems.map((item, i) => (
            <div
              key={i}
              className="rounded-xl p-5"
              style={{ backgroundColor: item.bg, color: item.color }}
            >
              <p
                className="font-display text-xl mb-2"
                style={{ color: item.accentColor }}
              >
                {item.icon} {item.question}
              </p>
              <p className="font-accent text-base leading-relaxed" style={{ opacity: 0.9 }}>
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
