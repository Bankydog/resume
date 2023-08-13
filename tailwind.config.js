/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: "#608AF5",
        },
      },
      fontFamily: {
        changa: ["Changa", "sans-serif"],
        chivo: ["Chivo", "sans-serif"],
        cinzel: ["Cinzel", "serif"],
        kablammo: ["Kablammo", "cursive"],
        patuaOne: ["Patua One", "cursive"],
        specialElite: ["Special Elite", "cursive"],
      },
      boxShadow: {
        "3xl": "0 0 60px -15px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
