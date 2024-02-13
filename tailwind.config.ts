/* eslint-disable @typescript-eslint/no-var-requires */
import { type Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        catalog: 'repeat(auto-fill, minmax(160px, 1fr))',
      },
      fontFamily: {
        primary: 'Montserrat, sans-serif',
      },
      colors: {
        primary: {
          DEFAULT: colors.cyan[500],
        },
        danger: {
          DEFAULT: colors.red[500],
        },
      },
      boxShadow: {
        panel: '5px 5px 35px -14px rgba(0, 0, 0, 0.17)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')({ className: 'cms' }),
    require('@tailwindcss/forms')({ strategy: 'class' }),
  ],
}

export default config
