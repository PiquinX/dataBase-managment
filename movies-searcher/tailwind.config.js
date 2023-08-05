/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false,
  theme: {
    extend: {
      gridTemplateColumns: {
        responsive: 'repeat(auto-fit, minmax(350px, 1fr))'
      },
      boxShadow: {
        movies: '0 0 2px #172335, 0 0 5px #172335, 0 0 10px #172335, 0 0 20px #172335',
        select: '1px 1px 2px #172335, 1px 1px 5px #172335'
      }
    }
  },
  plugins: []
}
