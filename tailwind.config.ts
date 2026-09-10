import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#121014",
          800: "#1c1820",
          700: "#26202b",
        },
        paper: "#f7f1e8",
        cherry: {
          DEFAULT: "#d6293a",
          light: "#ef4a5a",
          dark: "#a81c2a",
        },
        fuchsia: {
          DEFAULT: "#f23f8c",
          light: "#ff6fac",
          dark: "#a5236c",
        },
        neon: {
          teal: "#2fe6c9",
          amber: "#ffb020",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        "flicker-in": {
          "0%": { opacity: "0", transform: "translateY(14px) scale(0.98)" },
          "60%": { opacity: "1", transform: "translateY(0) scale(1.01)" },
          "80%": { opacity: "0.85" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        "steam": {
          "0%": { transform: "translateY(0) scaleX(1)", opacity: "0.35" },
          "50%": { transform: "translateY(-10px) scaleX(1.15)", opacity: "0.6" },
          "100%": { transform: "translateY(-20px) scaleX(0.9)", opacity: "0" },
        },
      },
      animation: {
        "flicker-in": "flicker-in 0.9s cubic-bezier(.2,.8,.2,1) both",
        "steam-1": "steam 3.2s ease-in-out infinite",
        "steam-2": "steam 3.6s ease-in-out 0.6s infinite",
        "steam-3": "steam 2.8s ease-in-out 1.2s infinite",
      },
    },
  },
  plugins: [],
};

export default config;
