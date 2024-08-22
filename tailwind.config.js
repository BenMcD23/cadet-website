/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#002856'
      },
      maxWidth : {
        '7.5xl': '100rem',
      }
    },
  },
  plugins: [],
}

