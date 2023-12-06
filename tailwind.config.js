/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      width: {
        60: '60px',
        220: '220px',
        90: '90px',
      },
      height: {
        60: '60px',
        400: '400px',
        230: '230px',
      },
      margin: {
        10: '10px',
        20: '20px',
        40: '40px',
        80: '80px',
      },
      colors: {
        offwhite: '#f8f8f8',
      },
    },
  },
  plugins: [],
};
