/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    colors:{
      primary:{
        default: '#E50914',
        dark: '#B20710'
      }
    }
    },
  },
  plugins: [],
}

