/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'Poppins': "'Poppins'"
      },
      colors:{
        'mainColor': '#2c62d6',
        'mainHover': '#2A628F'
      }
    },
  },
  plugins: [],
}
