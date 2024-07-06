import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "brand-primary": "#3b82f6",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        jsGlow: {
          "0%, 100%": { "border-color": "#111827" },
          "50%": { "border-color": "#F0DB4F" },
        },
        reactGlow: {
          "0%, 100%": { "border-color": "#111827" },
          "50%": { "border-color": "#61DBFB" },
        },
        nodeGlow: {
          "0%, 100%": { "border-color": "#111827" },
          "50%": { "border-color": "#339933" },
        },
        mongoGlow: {
          "0%, 100%": { "border-color": "#111827" },
          "50%": { "border-color": "#47A248" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        jsGlow: "jsGlow 2s ease-in-out forwards",
        reactGlow: "reactGlow 2s 2s ease-in-out forwards",
        nodeGlow: "nodeGlow 2s 4s ease-in-out forwards",
        mongoGlow: "mongoGlow 2s 6s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
