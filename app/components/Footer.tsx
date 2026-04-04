export default function Footer() {
  return (
    <footer
      className="w-full py-12 px-4"
      style={{ backgroundColor: "#D4A017" }}
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-5 text-center">
        <p
          className="font-display text-3xl sm:text-4xl"
          style={{ color: "#1A1A1A" }}
        >
          Granny&apos;s Hideaway
        </p>
        <p
          className="font-accent text-xl"
          style={{ color: "#1A1A1A", opacity: 0.8 }}
        >
          Mancelona, MI — Northern Michigan
        </p>
        <div
          className="flex flex-wrap gap-4 justify-center font-accent text-base"
          style={{ color: "#1A1A1A" }}
        >
          <a
            href="mailto:grannyshideaway@gmail.com"
            className="underline underline-offset-4 hover:opacity-70 transition-opacity"
          >
            grannyshideaway@gmail.com
          </a>
          <span>·</span>
          <span>grannyshideaway.com</span>
        </div>
        <div
          className="w-full border-t border-black/20 pt-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm"
          style={{ color: "#1A1A1A", opacity: 0.65 }}
        >
          <p>© 2026 Granny&apos;s Hideaway. All rights reserved.</p>
          <p className="font-accent">Stuck in time. Perfectly on purpose. 🟠📺</p>
        </div>
      </div>
    </footer>
  );
}
