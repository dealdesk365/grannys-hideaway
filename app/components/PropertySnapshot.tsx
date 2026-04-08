const snapItems = [
  { icon: "👨‍👩‍👧‍👦", label: "Sleeps 7" },
  { icon: "🛏️", label: "3 Bedrooms" },
  { icon: "🚿", label: "1 Bath" },
  { icon: "🔥", label: "Fire Pit" },
  { icon: "📶", label: "WiFi" },
  { icon: "📍", label: "Mancelona, MI" },
];

export default function PropertySnapshot() {
  return (
    <section
      id="snapshot"
      className="w-full py-16 px-4"
      style={{ backgroundColor: "#FAF3E0" }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <p
            className="font-accent text-base uppercase tracking-widest mb-2"
            style={{ color: "#C85A1E" }}
          >
            At a Glance
          </p>
          <h2
            className="font-display text-4xl sm:text-5xl mb-3"
            style={{ color: "#1A1A1A" }}
          >
            The Hideaway
          </h2>
          <p className="font-accent text-lg" style={{ color: "#1A1A1A", opacity: 0.7 }}>
            A one-of-a-kind retro chalet tucked in the Northern Michigan woods.{" "}
            <a
              href="/the-hideaway"
              style={{ color: "#C85A1E", textDecoration: "underline" }}
            >
              See full details →
            </a>
          </p>
        </div>

        {/* Snapshot cards */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "center",
          }}
        >
          {snapItems.map((item) => (
            <div
              key={item.label}
              style={{
                backgroundColor: "#D4A017",
                color: "#1A1A1A",
                borderRadius: "1rem",
                padding: "1.25rem 1.75rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.5rem",
                minWidth: "130px",
                flex: "1 1 130px",
                maxWidth: "180px",
              }}
            >
              <span style={{ fontSize: "2.25rem" }}>{item.icon}</span>
              <span className="font-accent" style={{ fontSize: "1.05rem", fontWeight: 700, textAlign: "center" }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Price teaser */}
        <div
          className="text-center mt-10"
        >
          <p
            className="font-accent text-xl"
            style={{ color: "#1A1A1A", opacity: 0.75 }}
          >
            From <strong>$325/night</strong> · 2-Night Minimum · Now Booking from June 15
          </p>
        </div>
      </div>
    </section>
  );
}
