/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "primary-green": "#8BAC3E",
        "light-gray": "#F2F2F2",
        "dark": "#333333",
        "soft-blue": "#F9FFF6"


      }
    }
  },
  plugins: [],
}

