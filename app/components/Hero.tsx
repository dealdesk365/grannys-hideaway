"use client";

import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-4 py-24"
      style={{
        backgroundImage:
          "linear-gradient(rgba(26,26,26,0.52), rgba(26,26,26,0.52)), url('https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Wordmark */}
      <h1
        className="font-display text-6xl sm:text-7xl md:text-8xl mb-4 leading-tight"
        style={{ color: "#FAF3E0", textShadow: "2px 4px 12px rgba(0,0,0,0.6)" }}
      >
        Granny&apos;s Hideaway
      </h1>

      {/* Tagline */}
      <p
        className="font-accent text-2xl sm:text-3xl mb-3"
        style={{ color: "#D4A017" }}
      >
        Your Northern Michigan Base Camp
      </p>

      {/* Subline */}
      <p
        className="text-lg sm:text-xl max-w-xl mx-auto mb-10"
        style={{ color: "#FAF3E0", opacity: 0.9 }}
      >
        Stuck in time. Perfectly on purpose.
      </p>

      {/* CTA */}
      <button
        onClick={() => router.push("/book")}
        className="font-accent text-lg px-8 py-4 rounded-full border-4 transition-all duration-200 hover:scale-105 active:scale-95"
        style={{
          backgroundColor: "#2A9D8F",
          borderColor: "#2A9D8F",
          color: "#FAF3E0",
          boxShadow: "0 4px 20px rgba(42,157,143,0.4)",
        }}
      >
        Book Your Stay →
      </button>

      {/* Scroll hint */}
      <div
        className="absolute bottom-8 left-0 right-0 flex justify-center"
        style={{ color: "#FAF3E0", opacity: 0.6 }}
      >
        <span className="font-accent text-sm tracking-widest animate-bounce">scroll ↓</span>
      </div>
    </section>
  );
}
