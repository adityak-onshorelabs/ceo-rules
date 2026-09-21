import type { Config } from "tailwindcss";

// Tokens live as CSS variables in app/globals.css; Tailwind maps to them so
// utilities and raw CSS never drift apart. Radius is 0 everywhere.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "var(--cream)",
        "cream-deep": "var(--cream-deep)",
        ink: "var(--ink)",
        "ink-deep": "var(--ink-deep)",
        blue: "var(--blue)",
        eye: "var(--eye)",
        gold: "var(--gold)",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        wide: "1500px",
        page: "1200px",
      },
      transitionTimingFunction: {
        house: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
