/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        portfolio: {
          light: '#f3e8ff',
          DEFAULT: '#8b5cf6',
          dark: '#6d28d9',
        },
        webbazaar: {
          saffron: '#FF9933',
          emerald: '#128C7E',
          navy: '#0B1E36',
          accent: '#FF5722',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
