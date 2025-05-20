/* @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    //"./src/pages/*.js",
    //"./src/components/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2E7D32', // Green
        accent: '#1565C0', // Blue
        background: '#FAFAFA', // Light gray
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
