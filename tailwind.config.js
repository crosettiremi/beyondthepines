const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,vue,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: [...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
}
