/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'syn-blue': {
          50:  '#f2f8ff',
          100: '#dceeff',
          200: '#b6dcff',
          300: '#3d3d3d',
          400: '#52a9ff',
          500: '#0056b3',
          600: '#1478e0',
          700: '#0d5fb3',
          800: '#171717',
          900: '#141322',
        },
        'orange-gradient': {
          500: '#ffc71b',
          1000: '#ffa500'
        },
        'slightly-white': {
          700: '#e6e9ef',
          800: '#f9fbff',
          900: '#f5f5f5',
          1000: '#e6e6e6'
        }
      },
      fontSize: {
        h1: "40px",
        h2: "32px",
        h3: "20px",
        large: "16px",
        medium: "14px",
        small: "12px"
      },
      fontFamily: {
        body: ["Montserrat", "ui-sans-serif", "system-ui"],
        sans: ["Montserrat", "ui-sans-serif", "system-ui"],
      }
    },
  },
  plugins: [],
}

