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
        bg: "var(--bg-base)",
        surface: "var(--bg-surface)",
        surfaceAlt: "var(--bg-surface-alt)",
        accent: "var(--accent)",
        accentDim: "var(--accent-dim)",
        accentMuted: "var(--accent-muted)",
        border: "var(--border)",
        borderHighlight: "var(--border-highlight)",
        textMain: "var(--text-main)",
        textMuted: "var(--text-muted)",
      },
      fontFamily: {
        mono: [
          "var(--font-geist-mono)",
          "IBM Plex Mono",
          "JetBrains Mono",
          "Consolas",
          "Courier New",
          "monospace",
        ],
      },
      animation: {
        blink: "blink 1s step-start infinite",
        ticker: "ticker 20s linear infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
