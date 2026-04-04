export default function Reviews() {
  return (
    <section
      id="reviews"
      className="w-full py-20 px-4"
      style={{ backgroundColor: "#D4A017" }}
    >
      <div className="max-w-2xl mx-auto text-center">
        {/* Eyebrow */}
        <p
          className="font-accent text-base uppercase tracking-widest mb-3"
          style={{ color: "#1A1A1A", opacity: 0.65 }}
        >
          The Verdict
        </p>

        {/* Heading */}
        <h2
          className="font-display text-4xl sm:text-5xl mb-8"
          style={{ color: "#1A1A1A" }}
        >
          What Guests Are Saying
        </h2>

        {/* Placeholder card */}
        <div
          className="rounded-2xl px-8 py-12"
          style={{ backgroundColor: "#FFFBF0", border: "2px solid #1A1A1A" }}
        >
          {/* Stars */}
          <p className="text-4xl mb-6" aria-label="Five stars">⭐⭐⭐⭐⭐</p>

          <p
            className="font-accent text-xl leading-relaxed mb-6"
            style={{ color: "#1A1A1A" }}
          >
            Reviews coming Summer 2026 — be one of our first guests and leave your mark in
            Grandma Viola&apos;s Guest Book.
          </p>

          <p
            className="text-base italic"
            style={{ color: "#1A1A1A", opacity: 0.6 }}
          >
            A real paper guest book. Viola would have it no other way. 📖
          </p>
        </div>
      </div>
    </section>
  );
}
