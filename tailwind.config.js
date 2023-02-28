/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'autofill': 'repeat(auto-fill, minmax(240px, 1fr))',
      }
    },
  },
  plugins: [],
}
