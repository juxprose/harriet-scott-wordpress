const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	purge: ['**/*.twig'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				'hs-maroon': '#800000',
				'hs-black': '#434343',
				'hs-dust-pink': '#FFA082',
				'hs-dust-pink-50': '#ffcdbd',
				'hs-marmelade': '#ffddb0',
				'hs-seagrove-50': '#d3f6f1',
				'hs-seagrove': '#B6EBE3',
			},
			height: {
				670: '670px',
			},
			fontFamily: {
				sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
				display: ['Abril Fatface', 'Georgia', 'serif'],
			},
			typography: theme => ({
				DEFAULT: {
					css: {
						color: theme('colors.hs-black'),
					},
				},
			}),
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/typography')],
};
