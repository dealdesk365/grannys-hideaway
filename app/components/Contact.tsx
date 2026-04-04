"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Notify Me — Granny's Hideaway");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:grannyshideaway@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="w-full py-20 px-4"
      style={{ backgroundColor: "#1A1A1A" }}
    >
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="font-accent text-base uppercase tracking-widest mb-2"
            style={{ color: "#D4A017" }}
          >
            Get In Early
          </p>
          <h2
            className="font-display text-4xl sm:text-5xl mb-4"
            style={{ color: "#FAF3E0" }}
          >
            Be the First to Book
          </h2>
          <p className="text-lg max-w-lg mx-auto" style={{ color: "#FAF3E0", opacity: 0.8 }}>
            We open Summer 2026. Drop your email and we&apos;ll reach out when booking goes
            live. First come, first served — just like the good ol&apos; days.
          </p>
        </div>

        {submitted ? (
          <div
            className="rounded-2xl p-10 text-center"
            style={{ backgroundColor: "#7B9A3A", color: "#FAF3E0" }}
          >
            <p className="text-5xl mb-4">🌲</p>
            <p className="font-display text-3xl mb-2">You&apos;re on the list!</p>
            <p className="text-lg" style={{ opacity: 0.9 }}>
              Granny will be in touch. Keep your calendar open in 2026.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >
            <div className="flex flex-col gap-1">
              <label
                htmlFor="name"
                className="font-accent text-sm uppercase tracking-widest"
                style={{ color: "#D4A017" }}
              >
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="What do people call you?"
                className="w-full rounded-xl px-5 py-4 text-base outline-none focus:ring-2"
                style={{
                  backgroundColor: "#FAF3E0",
                  color: "#1A1A1A",
                  border: "2px solid #D4A017",
                }}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="email"
                className="font-accent text-sm uppercase tracking-widest"
                style={{ color: "#D4A017" }}
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full rounded-xl px-5 py-4 text-base outline-none focus:ring-2"
                style={{
                  backgroundColor: "#FAF3E0",
                  color: "#1A1A1A",
                  border: "2px solid #D4A017",
                }}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="message"
                className="font-accent text-sm uppercase tracking-widest"
                style={{ color: "#D4A017" }}
              >
                Message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="Questions? Dates in mind? Just want to tell Granny hi?"
                className="w-full rounded-xl px-5 py-4 text-base outline-none focus:ring-2 resize-none"
                style={{
                  backgroundColor: "#FAF3E0",
                  color: "#1A1A1A",
                  border: "2px solid #D4A017",
                }}
              />
            </div>

            <button
              type="submit"
              className="w-full font-display text-xl py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-95"
              style={{
                backgroundColor: "#C85A1E",
                color: "#FAF3E0",
                boxShadow: "0 4px 20px rgba(200,90,30,0.35)",
              }}
            >
              Notify Me When You Open ✉️
            </button>

            <p
              className="text-center text-sm"
              style={{ color: "#FAF3E0", opacity: 0.5 }}
            >
              No spam. Just Granny when she&apos;s ready.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
