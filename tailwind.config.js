/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'media',
  theme: {
    extend: {
      gridTemplateColumns: {
        responsive: '3.4em, 5.25em, 4.25em, 9.5em, 10.3125em, 6.25em, 6.25em, 11em, 8em, 9.175em, 8.2em, 7em, 7em, 7em, 4.6em'
      },
      boxShadow: {
        movies: '0 0 2px #172335, 0 0 5px #172335, 0 0 10px #172335, 0 0 20px #172335',
        select: '1px 1px 2px #172335, 1px 1px 5px #172335'
      },
      screens: {
        'superShort': { 'raw': '(min-height: 300px)' },
        'short': { 'raw': '(min-height: 500px)' },
      },
    },
    screens: {
      xs: { min: '400px' },
      sm: { min: '600px' },
      md: { min: '1000px' },
      lg: { min: '1150px' },
      xl: { min: '1350px' },
      '2xl': { min: '1700px' }
    },
  },
  plugins: []
}
