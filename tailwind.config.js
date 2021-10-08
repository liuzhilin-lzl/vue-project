const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
	purge: [
		'./src/**/*.html',
		'./src/**/*.js',
	],
	darkMode: 'media', // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				sans: [
					'Lato',
					...defaultTheme.fontFamily.sans,
				]
			}
		}
	},
  variants: {
    extend: {},
  },
  plugins: [],
}
