import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        ink: "var(--ink)",
        "ink-muted": "var(--ink-muted)",
        walnut: "var(--walnut)",
        brass: "var(--brass)",
        stone: "var(--stone)",
        hairline: "var(--hairline)",
        navy: "var(--navy)",
        "brand-blue": "var(--brand-blue)",
        canvas: "var(--canvas)",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Palatino Linotype", "Palatino", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.12em",
      },
      maxWidth: {
        measure: "62ch",
        editorial: "80rem",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
