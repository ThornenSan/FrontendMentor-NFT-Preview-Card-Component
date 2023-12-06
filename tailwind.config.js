/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,css,js}"],
  theme: {
    extend: {
      colors: {
        // Primary
        softBlue: "hsl(215, 51%, 70%)",
        cyan: "hsl(178, 100%, 50%)",
        // Neutral
        bgDarkBlue: "hsl(217, 54%, 11%)",
        cardDarkBlue: "hsl(216, 50%, 16%)",
        lineDarkBlue: "hsl(215, 32%, 27%)",
      },
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
