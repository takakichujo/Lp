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
        150: '150px',
        250: '220px',
        280: '280px',
        415: '415px',
        90: '90px',
        480: '480px',
        1500: '2500px',
        1000: '1000px',
      },
      height: {
        60: '60px',
        400: '400px',
        100: '100px',
        230: '230px',
        320: '320px',
      },
      margin: {
        10: '10px',
        20: '20px',
        40: '40px',
        80: '80px',
      },
      colors: {
        offwhite: '#f8f8f8',
        deepPink: '#ff1493',
      },
      borderRadius: {
        40: '40px',
      },
      fontSize: {
        10: '15px',
        18: '18px',
        23: '23px',
        30: '30px',
        40: '40px',
        50: '50px',
      },
      borderWidth: {
        10: '30px',
      },
      padding: {
        25: '25px',
        50: '50px',
      },
    },
  },
  plugins: [],
};
