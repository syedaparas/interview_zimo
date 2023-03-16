/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", 
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      // Add your custom fonts and enjoy.
      'Lato': ['Lato', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
