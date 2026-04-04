import Footer from "../components/Footer";

export default function ReviewsPage() {
  return (
    <main>
      {/* Page Hero */}
      <section
        style={{
          backgroundColor: "#D4A017",
          padding: "5rem 1.5rem",
          textAlign: "center",
        }}
      >
        <p
          className="font-accent"
          style={{
            color: "#1A1A1A",
            fontSize: "1rem",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            marginBottom: "0.75rem",
            opacity: 0.65,
          }}
        >
          The Verdict
        </p>
        <h1
          className="font-display"
          style={{
            color: "#1A1A1A",
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            marginBottom: "1.25rem",
            lineHeight: 1.1,
          }}
        >
          What Guests Are Saying
        </h1>
      </section>

      {/* Placeholder */}
      <section
        style={{
          backgroundColor: "#FAF3E0",
          padding: "5rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
          <div
            style={{
              backgroundColor: "#FFFBF0",
              border: "2px solid #D4A017",
              borderRadius: "1.25rem",
              padding: "3.5rem 2.5rem",
            }}
          >
            <p style={{ fontSize: "3rem", marginBottom: "1.5rem" }} aria-label="Five stars">
              ⭐⭐⭐⭐⭐
            </p>
            <p
              className="font-accent"
              style={{
                color: "#1A1A1A",
                fontSize: "1.25rem",
                lineHeight: 1.7,
                marginBottom: "1.5rem",
              }}
            >
              Reviews coming Summer 2026 — be one of our first guests and leave your mark in
              Grandma Viola&apos;s Guest Book.
            </p>
            <p style={{ color: "#1A1A1A", opacity: 0.55, fontStyle: "italic" }}>
              A real paper guest book. Viola would have it no other way. 📖
            </p>
          </div>

          <div style={{ marginTop: "2.5rem" }}>
            <a
              href="/#contact"
              className="font-accent"
              style={{
                backgroundColor: "#D4A017",
                color: "#1A1A1A",
                textDecoration: "none",
                fontSize: "1.15rem",
                fontWeight: 700,
                padding: "0.75rem 2rem",
                borderRadius: "9999px",
                border: "2px solid #1A1A1A",
                display: "inline-block",
              }}
            >
              Get Notified When We Open →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
