"use client";

import Link from "next/link";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-20 px-4"
      style={{ backgroundColor: "#1A1A1A" }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <p
          className="font-accent text-base uppercase tracking-widest mb-2"
          style={{ color: "#D4A017" }}
        >
          Ready to Go?
        </p>
        <h2
          className="font-display text-4xl sm:text-5xl mb-4"
          style={{ color: "#FAF3E0" }}
        >
          Book Your Stay
        </h2>
        <p className="text-lg max-w-lg mx-auto mb-10" style={{ color: "#FAF3E0", opacity: 0.8 }}>
          June 15 onward — pick your dates, sign the rental agreement, and pay your deposit. Takes about 3 minutes.
        </p>

        <Link
          href="/book"
          className="font-accent text-xl px-10 py-4 rounded-full inline-block transition-all duration-200 hover:scale-105 active:scale-95"
          style={{
            backgroundColor: "#D4A017",
            color: "#1A1A1A",
            border: "3px solid #FAF3E0",
            boxShadow: "0 4px 20px rgba(212,160,23,0.4)",
            fontWeight: 700,
          }}
        >
          Reserve Your Dates →
        </Link>

        <p className="font-accent text-sm mt-8" style={{ color: "#FAF3E0", opacity: 0.5 }}>
          Questions?{" "}
          <a
            href="mailto:grannyshideaway@gmail.com"
            style={{ color: "#D4A017", textDecoration: "underline" }}
          >
            grannyshideaway@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}
