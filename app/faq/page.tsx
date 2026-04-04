import Footer from "../components/Footer";

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

export default function FAQPage() {
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
          Got Questions?
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
          Granny&apos;s Got Answers
        </h1>
        <p
          className="font-accent"
          style={{
            color: "#FAF3E0",
            opacity: 0.75,
            fontSize: "1.15rem",
          }}
        >
          Everything you need to know before you pack the station wagon.
        </p>
      </section>

      {/* FAQ Cards */}
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
          {faqItems.map((item, i) => (
            <div
              key={i}
              style={{
                backgroundColor: item.bg,
                color: item.color,
                borderRadius: "0.85rem",
                padding: "1.35rem 1.5rem",
              }}
            >
              <p
                className="font-display"
                style={{
                  color: item.accentColor,
                  fontSize: "1.35rem",
                  marginBottom: "0.5rem",
                }}
              >
                {item.icon} {item.question}
              </p>
              <p
                className="font-accent"
                style={{ opacity: 0.9, lineHeight: 1.65, fontSize: "1.05rem" }}
              >
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
