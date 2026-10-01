/** @type {import('tailwindcss').Config} */
const v = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: v("ink"),
        inksoft: v("inksoft"),
        paper: v("paper"),
        papersoft: v("papersoft"),
        border: v("border"),
        contact: v("contact"),
        brand: { blue: v("blue"), solid: v("solid"), teal: v("teal") },
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Inter", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
    },
  },
  plugins: [],
};
