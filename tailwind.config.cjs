/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {    colors: {
    'avendre': '#420093',
    'blue' : '#6f6fd2',
    'white': '#ffffff'
  },
    extend: {},
  },
  plugins: [require('tailgrids/plugin')],
}