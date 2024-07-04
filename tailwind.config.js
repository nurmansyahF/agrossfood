/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        'primary' : '#FF6B3F',
        'bgrey'   : '#F2F2F2',
        'bdark'   : '#0B0B0B',
        'hdark'   : '#171717',
        'slate'   : '#777777',
      },
      fontFamily: {
        'inter'   : ['Inter', 'sans-serif'],
        'durk'    : ['Durk Text Wide', 'sans-serif'],
      },
      screens: {
        'xxl': '1900px',
        'retina': '1930px',
      },
    },
  },
  plugins: [],
}