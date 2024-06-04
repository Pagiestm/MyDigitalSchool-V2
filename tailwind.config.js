/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-aqua": "#2DB7C4",
        "Cyan": "#29A5B0",
        "black": "#181818",
        "laser-lemon": "#FFBD1D",
      }
    },
  },
  plugins: [],
}