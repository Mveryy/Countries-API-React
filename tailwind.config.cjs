/** @type {import('tailwindcss').Config} */ 
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      darkElements: 'hsl(209, 23%, 22%)',
      darkBg: 'hsl(207, 26%, 17%)',
      lightBg: 'hsl(0, 0%, 98%)',
      textLight: 'hsl(200, 15%, 8%)',
      inputLight: 'hsl(0, 0%, 52%)',
    },
    extend: {
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}