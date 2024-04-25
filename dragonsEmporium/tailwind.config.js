/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./src/**/*.jsx"
  ],
  theme: {
    extend: {
      colors: {
        'parpol' : '#1a1a3e',
        'electric-violet' : '#8F00FF',
        'rich-black': '#00171F',
        'white' : '#FFFFFF',  // Note: Defining 'white' here is not necessary unless you want a custom shade because Tailwind already includes 'white' by default
        'space-cadet' : '#25283D',
        'blackk' : '#181A1B',  // Note: Similarly, 'black' is also predefined; ensure your custom color name does not conflict with default names
        'grigino': '#CDCDCD'
      }
    }
  },
  plugins: [require('flowbite-typography'),],
}

