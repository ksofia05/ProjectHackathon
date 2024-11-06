/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whiteL: 'D6E7EE',
        blueLight: '#018ABE',
        blueDark: '171723',
        blueSea: '070645',
      },
      fontFamily: {
        dongle: ['Dongle', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

