"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        backgroundColor: "#FAF3E0",
        borderBottom: "3px solid #D4A017",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
        {/* Main bar — wordmark + desktop nav + hamburger */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "56px",
          }}
        >
          {/* Wordmark */}
          <Link
            href="/"
            className="font-display"
            style={{
              color: "#1A1A1A",
              textDecoration: "none",
              fontSize: "clamp(1.1rem, 4vw, 1.5rem)",
              lineHeight: 1,
              whiteSpace: "nowrap",
            }}
          >
            Granny&apos;s Hideaway
          </Link>

          {/* Desktop nav — Tailwind controls display; NO inline display property */}
          <nav className="hidden sm:flex" style={{ gap: "1.75rem", alignItems: "center" }}>
            <Link
              href="/the-hideaway"
              className="font-accent transition-colors"
              style={{ color: "#1A1A1A", textDecoration: "none", fontSize: "1.05rem" }}
            >
              The Hideaway
            </Link>
            <Link
              href="/faq"
              className="font-accent transition-colors"
              style={{ color: "#1A1A1A", textDecoration: "none", fontSize: "1.05rem" }}
            >
              FAQ
            </Link>
            <Link
              href="/rules"
              className="font-accent transition-colors"
              style={{ color: "#1A1A1A", textDecoration: "none", fontSize: "1.05rem" }}
            >
              House Rules
            </Link>
            <Link
              href="/book"
              className="font-accent transition-all hover:scale-105 active:scale-95"
              style={{
                backgroundColor: "#D4A017",
                color: "#1A1A1A",
                textDecoration: "none",
                fontSize: "1.05rem",
                fontWeight: 700,
                padding: "0.45rem 1.25rem",
                borderRadius: "9999px",
                border: "2px solid #1A1A1A",
                whiteSpace: "nowrap",
              }}
            >
              Book Now
            </Link>
          </nav>

          {/* Hamburger — Tailwind controls display; NO inline display property */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className="sm:hidden"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                display: "block",
                width: "26px",
                height: "2px",
                backgroundColor: "#1A1A1A",
                transition: "transform 0.2s",
                transform: open ? "rotate(45deg) translate(5px, 5px)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "26px",
                height: "2px",
                backgroundColor: "#1A1A1A",
                marginTop: "5px",
                opacity: open ? 0 : 1,
                transition: "opacity 0.2s",
              }}
            />
            <span
              style={{
                display: "block",
                width: "26px",
                height: "2px",
                backgroundColor: "#1A1A1A",
                marginTop: "5px",
                transition: "transform 0.2s",
                transform: open ? "rotate(-45deg) translate(5px, -5px)" : "none",
              }}
            />
          </button>
        </div>

        {/* Mobile dropdown — only rendered when open, only visible below sm */}
        {open && (
          <div
            className="sm:hidden"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.25rem",
              paddingTop: "0.75rem",
              paddingBottom: "1rem",
              borderTop: "1px solid #D4A017",
            }}
          >
            <Link
              href="/the-hideaway"
              className="font-accent"
              style={{
                color: "#1A1A1A",
                textDecoration: "none",
                fontSize: "1.1rem",
                padding: "0.5rem 0",
              }}
              onClick={() => setOpen(false)}
            >
              The Hideaway
            </Link>
            <Link
              href="/faq"
              className="font-accent"
              style={{
                color: "#1A1A1A",
                textDecoration: "none",
                fontSize: "1.1rem",
                padding: "0.5rem 0",
              }}
              onClick={() => setOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/rules"
              className="font-accent"
              style={{
                color: "#1A1A1A",
                textDecoration: "none",
                fontSize: "1.1rem",
                padding: "0.5rem 0",
              }}
              onClick={() => setOpen(false)}
            >
              House Rules
            </Link>
            <Link
              href="/book"
              className="font-accent"
              style={{
                display: "block",
                backgroundColor: "#D4A017",
                color: "#1A1A1A",
                textDecoration: "none",
                fontSize: "1.1rem",
                fontWeight: 700,
                padding: "0.6rem 1.25rem",
                borderRadius: "9999px",
                border: "2px solid #1A1A1A",
                textAlign: "center",
                marginTop: "0.5rem",
              }}
              onClick={() => setOpen(false)}
            >
              Book Now
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
