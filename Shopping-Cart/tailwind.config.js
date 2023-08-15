/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        responsive: 'repeat(auto-fit, minmax(350px, 1fr))'
      },
    }
  },
  plugins: []
}
