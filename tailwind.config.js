import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        // RAF Air Cadets palette
        'navy': '#002856',
        'navy-light': '#0A3A75',
        'accent': '#6CACE4',
        'accent-dark': '#3D87C9',
        'surface': '#F4F6F8',
        'ink': '#1A202C',
      },

      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
      },

      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
      },
    },
  },
  plugins: [],
}
