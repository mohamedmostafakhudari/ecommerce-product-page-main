/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.jsx"],
	theme: {
		extend: {
			colors: {
				orange: {
					400: "hsl(26, 100%, 55%)",
					200: "hsl(25, 100%, 94%)",
				},
				neutral: {
					900: "hsl(220, 13%, 13%)",
					800: "hsl(219, 9%, 45%)",
					400: "hsl(220, 14%, 75%)",
					200: "hsl(223, 64%, 98%)",
				},
			},
			fontFamily: {
				body: ["Kumbh Sans", "sans-serif"],
				head: ["Kumbh Sans", "sans-serif"],
			},
		},
	},
	plugins: [],
};
