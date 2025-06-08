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
          300: '#76e1ff',
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
        }
      },
      fontSize: {
        h1: "40px",
        h2: "32px",
        h3: "20px",
        large: "16px",
        small: "14px",
        tiny: "12px"
      },
      fontFamily: {
        body: ["Montserrat", "ui-sans-serif", "system-ui"],
        sans: ["Montserrat", "ui-sans-serif", "system-ui"],
      }
    },
  },
  plugins: [],
}

