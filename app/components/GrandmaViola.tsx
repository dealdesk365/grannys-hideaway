export default function GrandmaViola() {
  return (
    <section
      id="viola"
      className="w-full py-20 px-4"
      style={{ backgroundColor: "#FAF3E0" }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Decorative top border */}
        <div
          className="h-2 rounded-t-2xl mb-0"
          style={{ backgroundColor: "#D4A017" }}
        />

        {/* Story card */}
        <div
          className="rounded-b-2xl px-8 py-12 sm:px-14"
          style={{ backgroundColor: "#FFFBF0", border: "2px solid #D4A017", borderTop: "none" }}
        >
          {/* Eyebrow */}
          <p
            className="font-accent text-base uppercase tracking-widest mb-3 text-center"
            style={{ color: "#C85A1E" }}
          >
            A Little History
          </p>

          {/* Heading */}
          <h2
            className="font-display text-4xl sm:text-5xl text-center mb-10"
            style={{ color: "#D4A017" }}
          >
            Meet Grandma Viola.
          </h2>

          {/* Story paragraphs */}
          <div
            className="flex flex-col gap-5 text-base leading-relaxed"
            style={{ color: "#1A1A1A", opacity: 0.88 }}
          >
            <p>
              Nobody really knows when Viola first found this little chalet tucked in the Northern
              Michigan woods. Some say she drove up from downstate in 1974 with a station wagon
              full of carpet samples and a very strong opinion about orange.
            </p>
            <p>
              She raised her kids here. Fed them Bit O Honeys at the kitchen table. Made them
              watch the evening news on the bunny ear TV whether they liked it or not. The
              thermostat never went above 68°. There were quilts for that.
            </p>
            <p>
              The bedrooms got blue and green — because even Viola knew you couldn&apos;t sleep{" "}
              <em>ON</em> orange. But the living room? That was <strong>HERS.</strong>
            </p>
            <p>
              She passed the hideaway down with one condition —{" "}
              <em>&ldquo;Don&apos;t you dare touch my carpet.&rdquo;</em>
            </p>
            <p>We didn&apos;t.</p>
            <p>
              Welcome to Grandma Viola&apos;s Hideaway. She&apos;d be thrilled you&apos;re here.
              Just behave yourself.
            </p>
          </div>

          {/* Closing tagline */}
          <div
            className="mt-10 pt-6 text-center"
            style={{ borderTop: "1px solid #D4A017" }}
          >
            <p
              className="font-accent text-2xl italic"
              style={{ color: "#C85A1E" }}
            >
              &ldquo;Treat it like Grandma&apos;s house. Because it is.&rdquo; 🟠
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
