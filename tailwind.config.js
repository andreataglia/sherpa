const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  // prefix: 'tw-',
  // important: true,
  purge: ['./public/**/*.html', './src/**/*.vue'],
  theme: {
    extend: {
      spacing: {
        '104': '26rem',
        '0.5': '0.12rem',
        '90-screen': '90vh',
        '80-screen': '80vh',
        '70-screen': '70vh',
        '50-screen': '50vh',
        '1/3': '33.333%'
      },
      borderRadius: {
        'large': '12rem'
      },
      // colors: {
      //   primary: {
      //     100: '#f9fafc',
      //     200: '#ECF8FC',
      //     300: '#daeff9',
      //     400: '#9cd7f0',
      //     500: '#54bae5',
      //     900: '#0c5075',
      //   }
      // },
      maxWidth: {
        '104': '26rem',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui')({
      layout: 'sidebar',
    }),
  ],
};
