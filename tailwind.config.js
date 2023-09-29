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
        responsive: '3.5em, 4.0625em, 3.75em, 8em, 10.3125em, 6.25em, 6.25em, 12em, 8em, 7.8125em, 8.2em, 7em, 7em, 7em, 4.5em'
      },
      boxShadow: {
        movies: '0 0 2px #172335, 0 0 5px #172335, 0 0 10px #172335, 0 0 20px #172335',
        select: '1px 1px 2px #172335, 1px 1px 5px #172335'
      }
    },
    screens: {
      xs: { min: '380px' },
      sm: { min: '600px' },
      md: { min: '1000px' },
      lg: { min: '1150px' },
      xl: { min: '1350px' },
      '2xl': { min: '1700px' }
    },
  },
  plugins: []
}
