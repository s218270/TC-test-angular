/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,ts}",
    ],
    theme: {
      extend: {
        backgroundColor: ['responsive', 'hover', 'focus', 'active'],
      },
    },
    plugins: [],
  }