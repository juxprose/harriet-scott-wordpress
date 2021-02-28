const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    '**/*.twig',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
     colors: {
       'hs-maroon': '#800000',
      },
      fontFamily: {
        'sans': ['Open Sans', ...defaultTheme.fontFamily.sans],
        'display': ['Abril Fatface', 'Georgia', 'serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.black'),
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
}