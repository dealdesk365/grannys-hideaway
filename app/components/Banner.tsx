export default function Banner() {
  return (
    <div
      style={{ backgroundColor: "#8B2500" }}
      className="w-full py-4 px-4 flex items-center justify-center text-center z-50"
    >
      <p className="text-white font-sans text-base sm:text-lg tracking-wide">
        🏡 <strong>This Website Is For Sale</strong> — Fully built vacation rental site, ready to go. Interested?{" "}
        <a
          href="mailto:dealdesk365@gmail.com"
          className="underline font-bold hover:opacity-80 transition"
        >
          dealdesk365@gmail.com
        </a>
      </p>
    </div>
  );
}
