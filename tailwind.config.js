/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    colors: {
      brand: "#0050ff",
      lightBeige: "#f4ece6",
      beige: "#e6d2ce",
      white: "#fff",
      black: "#000",
    },
    textColor: {
      brand: "#0050ff",
      lightBeige: "#f4ece6",
      beige: "#e6d2ce",
      white: "#fff",
      black: "#000",
    },
    extend: {
      fontFamily: {
        avenir: ['var(--font-avenir)'],
        poppins: ['var(--font-poppins)'],
        helvetica: ['var(--font-helvetica)'],
      },
    },
  },
  plugins: [],
}