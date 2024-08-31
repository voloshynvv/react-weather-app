/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          DEFAULT: '80rem',
        },
      },
      colors: {
        background: '#030616',
        foreground: '#f2f5f9',

        secondary: {
          DEFAULT: '#20293a',
          foreground: '#97a3b6',
        },
      },
      borderRadius: {
        DEFAULT: '0.8rem',
      },
    },
  },
  plugins: [],
};
