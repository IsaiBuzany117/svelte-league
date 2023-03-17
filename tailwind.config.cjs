/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			fontFamily: {
				fredokaOne: ['"Fredoka One"'],
				abeezee: ['ABeeZee'],
			},
		},
	},
	plugins: [],
};