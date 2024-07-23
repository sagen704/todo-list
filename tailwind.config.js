/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(12,12,54,1) 54%, rgba(17,17,55,1) 100%)',
      }
    },
  },
  plugins: [],
}

