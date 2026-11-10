/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#8B1E1E',
          'red-light': '#A61C1C',
          gold: '#D4AF37',
          'gold-dark': '#C59B27',
          dark: '#1A1615',
          light: '#FAF8F5',
        },
      },
    },
  },
  plugins: [],
};
