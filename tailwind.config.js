/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Famílias Barlow Condensed conforme @font-face
        barlow: ["'Barlow Condensed'", "sans-serif"],
        "barlow-extrabold": ["'Barlow Condensed ExtraBold'", "sans-serif"],
        "barlow-extralight": ["'Barlow Condensed ExtraLight'", "sans-serif"],
        "barlow-semibold": ["'Barlow Condensed SemiBold'", "sans-serif"],
        "barlow-medium": ["'Barlow Condensed Medium'", "sans-serif"],
        "barlow-black": ["'Barlow Condensed Black'", "sans-serif"],
        "barlow-bold": ["'Barlow Condensed Bold'", "sans-serif"],
        "barlow-italic": ["'Barlow Condensed Italic'", "sans-serif"],
        "barlow-medium-italic": [
          "'Barlow Condensed Medium Italic'",
          "sans-serif",
        ],
      },
      colors: {
        // Cores nomeadas individualmente
        "brand-orange": "#a64a35",
        "brand-dark": "#471A24",
        "brand-laranja": "#CC7042",
        "brand-bege": "#FFDCD2",
        "brand-tangerina": "#9B4237",
        "brand-roxo": "#663540",
      },
    },
  },
  plugins: [],
};
