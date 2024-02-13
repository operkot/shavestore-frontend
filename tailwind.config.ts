import { type Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: 'Montserrat, sans-serif',
      },
    },
  },
  plugins: [],
}

export default config
