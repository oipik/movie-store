/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      's': '500px',
      "m": "768px",
      "ll": "1300px",
      "l": "1440px",
      "2xl": "1536px"
    },
    extend: {
      colors: {
        default: "#33A8F6",
      },
    },
  },
  plugins: [],
}