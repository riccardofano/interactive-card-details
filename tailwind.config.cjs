/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        violet: {
          200: "hsl(270, 3%, 87%)",
          600: "hsl(279, 6%, 55%)",
          800: "hsl(278, 68%, 11%)",
        },
        red: {
          400: "hsl(0, 100%, 66%)",
        },
      },
      fontSize: {
        base: "18px",
      },
    },
  },
  plugins: [],
};
