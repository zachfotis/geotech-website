/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#00ABB3',
        secondary: '#0AC99E',
        accent: '#464159',
        black: '#273838',
        grey: '#4F6364',
        white: '#FFFFFF',
      },
      fontSize: {
        title: '5rem',
        h1: '2.8rem',
        h2: '2.4rem',
        h3: '1.9rem',
        h4: '1.6rem',
        textLG: '1.3rem',
        text: '1rem',
        textSM: '0.9rem',
        textXS: '0.8rem',
      },
      screens: {
        mobile: { max: '650px' },
        tablet: { max: '768px' },
        laptop: { max: '1050px' },
        laptopLG: { max: '1200px' },
        desktop: { max: '1440px' },
      },
    },
  },
  plugins: [],
};
