/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './src/styles/tailwind.css',
  ],
  theme: {
    extend: {
      width: {
        60: '60px',
        220: '220px',
        250: '250px',
        90: '90px',
        1500: '2500px',
        1000: '1000px',
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
