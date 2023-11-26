/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        catalog: 'repeat(auto-fill, minmax(160px, 1fr))',
      },
      fontFamily: {
        roboto: 'Roboto, sans-serif',
      },
      boxShadow: {
        panel: '5px 5px 35px -14px rgba(0, 0, 0, 0.17)',
      },
      minWidth: {
        5: '20px',
      },
    },
  },
  plugins: [],
}
