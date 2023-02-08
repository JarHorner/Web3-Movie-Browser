/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        movieHeroImg: "url('assets/background/hero.jpg')",
      },
    },
  },
  plugins: [],
};
