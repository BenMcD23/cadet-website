import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // RAF Air Cadets palette
        'navy': '#002856',
        'navy-light': '#0A3A75',
        'accent': '#6CACE4',
        'accent-dark': '#2B6CB0',
        // maroon from the RAF stable belt, used sparingly as the third stripe
        'maroon': '#7A1E3C',
        'surface': '#F4F6F8',
        'ink': '#1A202C',
      },

      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
        // condensed display face for headings, in the spirit of RAF signage
        display: ['"Barlow Condensed"', 'Impact', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
