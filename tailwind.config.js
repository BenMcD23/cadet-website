/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'dark-blue-footer': '#002856',
        'dark-blue-main': '#384357',
        // 'light-blue-main': '#4682B4'
        // 6d6e79 708090
        'slate-grey-main': '#606e7d'

      },

      maxWidth : {
        '7.5xl': '100rem',
      },
      screens: {
        'middle': '1500px',
      },
      
      gridTemplateColumns: {
        '14': 'repeat(14, minmax(0, 1fr))',
      }
    },
  },
  plugins: [],
}

