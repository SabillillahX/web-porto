/** @type {import('tailwindcss').Config} */
// Purpose: Tailwind CSS configuration file to define custom theme settings, colors, fonts, and dark mode strategy.

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{css,scss}",
  ],
  darkMode: "class", // Enable dark mode with class strategy
  theme: {
    extend: {
      // Tambahkan custom theme, colors, fonts, dsb di sini jika perlu
    },
  },
  plugins: [],
};

