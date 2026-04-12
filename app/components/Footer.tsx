import Link from "next/link";

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
        <a
          href="mailto:grannyshideaway@gmail.com"
          className="font-accent underline underline-offset-4 hover:opacity-70 transition-opacity"
          style={{ color: "#1A1A1A", fontSize: "1.05rem" }}
        >
          grannyshideaway@gmail.com
        </a>

        {/* Page links */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem 1.5rem",
            justifyContent: "center",
          }}
          className="font-accent"
        >
          {[
            ["Home", "/"],
            ["The Hideaway", "/the-hideaway"],
            ["FAQ", "/faq"],
            ["House Rules", "/rules"],
            ["Reviews", "/reviews"],
          ].map(([label, href]) => (
            <Link
              key={label}
              href={href}
              style={{ color: "#1A1A1A", textDecoration: "underline", fontSize: "1rem" }}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* SEO landing page links */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.4rem 1.2rem",
            justifyContent: "center",
            marginTop: "0.75rem",
          }}
          className="font-accent"
        >
          {[
            ["Northern Michigan Cabin Rental", "/northern-michigan-cabin-rental"],
            ["Vintage Cabin Rental Michigan", "/vintage-cabin-rental-michigan"],
            ["Bellaire Michigan Cabin", "/bellaire-michigan-cabin-rental"],
            ["Snowmobile Cabin Rental", "/snowmobile-cabin-rental-michigan"],
            ["SxS & UTV Cabin Rental", "/sxs-utv-cabin-rental-michigan"],
            ["Torch Lake Area Cabin", "/torch-lake-area-cabin"],
            ["Antrim County Cabin", "/antrim-county-cabin-rental"],
            ["Fall Colors Cabin", "/fall-colors-cabin-michigan"],
            ["Deward Tract Cabin", "/deward-tract-cabin-rental"],
            ["Mancelona Vacation Rental", "/mancelona-vacation-rental"],
          ].map(([label, href]) => (
            <Link
              key={label}
              href={href}
              style={{ color: "#1A1A1A", textDecoration: "underline", fontSize: "0.8rem", opacity: 0.65 }}
            >
              {label}
            </Link>
          ))}
        </div>

        <div
          className="w-full border-t border-black/20 pt-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm"
          style={{ color: "#1A1A1A", opacity: 0.65 }}
        >
          <p>© 2026 Granny&apos;s Hideaway. All rights reserved.</p>
          <p className="font-accent">Stuck in time. Perfectly on purpose. 🟠📺</p>
          <Link
            href="/admin"
            className="font-accent hover:opacity-100 transition-opacity"
            style={{ color: "#1A1A1A", opacity: 0.4, fontSize: "0.8rem" }}
          >
            Host Login
          </Link>
        </div>
      </div>
    </footer>
  );
}
