import type { Config } from "tailwindcss";

// Tokens live as CSS variables in app/globals.css (single source of truth, see DESIGN.md).
// Tailwind maps to them so utilities and raw CSS never drift apart.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        ink: "var(--ink)",
        "ink-muted": "var(--ink-muted)",
        "ink-faint": "var(--ink-faint)",
        hairline: "var(--hairline)",
        gold: "var(--gold)",
        "gold-ink": "var(--gold-ink)",
        forest: "var(--forest)",
        "bg-dark": "var(--bg-dark)",
        "surface-dark": "var(--surface-dark)",
        "ink-dark": "var(--ink-dark)",
        "ink-dark-muted": "var(--ink-dark-muted)",
        "hairline-dark": "var(--hairline-dark)",
        "gold-on-dark": "var(--gold-on-dark)",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.14em",
      },
      maxWidth: {
        measure: "66ch",
        editorial: "78rem",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
      },
      boxShadow: {
        soft: "0 1px 2px oklch(0.235 0.012 62 / 0.06), 0 8px 24px oklch(0.235 0.012 62 / 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
