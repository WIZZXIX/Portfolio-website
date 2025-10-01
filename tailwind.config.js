/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}", // Include all HTML, JS, TS, JSX, and TSX files in the src folder
    "./public/index.html",             // Include specific files like index.html
  ],
  theme: {
    extend: {}, // Extend the default theme here
  },
  plugins: [], // Add Tailwind plugins here
};
