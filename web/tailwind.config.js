/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    './projects/**/*.{html,ts}',
  ],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [],
}
