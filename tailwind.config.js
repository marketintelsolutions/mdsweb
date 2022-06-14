/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'app-text':'#272D38',
        'app-color':'blue'

      },
    },
  },
  plugins: [],
}
