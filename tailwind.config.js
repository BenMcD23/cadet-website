/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'dark-blue-footer': '#002856',
        'dark-blue-main': '#384357'
      },

      maxWidth : {
        '7.5xl': '100rem',
      },
      screens: {
        'middle': '1500px',
      }
    },
  },
  plugins: [],
}

