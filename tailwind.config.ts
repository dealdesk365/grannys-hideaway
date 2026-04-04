import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "harvest-gold": "#D4A017",
        "burnt-orange": "#C85A1E",
        "avocado-green": "#7B9A3A",
        "retro-teal": "#2A9D8F",
        "warm-cream": "#FAF3E0",
        "near-black": "#1A1A1A",
      },
      fontFamily: {
        display: ["Righteous", "sans-serif"],
        accent: ["Boogaloo", "sans-serif"],
        body: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
