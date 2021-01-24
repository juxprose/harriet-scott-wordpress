const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    '**/*.twig',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Open Sans', ...defaultTheme.fontFamily.sans],
        'display': ['Abril Fatface', 'Georgia', 'serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ]
}