/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Poppins', 'sans-serif'],
      mono: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#0B498B',
      }
    },
  },
  plugins: [],
} 