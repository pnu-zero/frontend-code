/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter'],
      },
      colors: {
        pcBlack: '#212A2A',
        pcLightBlack: '#3D3D3D',
        pcGray: '#F6F6F6',
        pcDaryGray: '#DFE0E7',
        pcLightGray: '#F7F8FA',
        pcSky: '#F3F7FF',
        pcLightBlue: '#FBFCFE',
      },
    },
  },
  plugins: [],
};
