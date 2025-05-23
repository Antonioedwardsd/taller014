/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Futura", "Trebuchet MS", "Arial", "sans-serif"],
			},
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				gray: {
					900: "var(--gray-900)",
					800: "var(--gray-800)",
					700: "var(--gray-700)",
					600: "var(--gray-600)",
					500: "var(--gray-500)",
					400: "var(--gray-400)",
					300: "var(--gray-300)",
				},
				text: {
					primary: "var(--text-primary)",
					secondary: "var(--text-secondary)",
				},
				border: "var(--border-color)",
			},
		},
	},
	plugins: [],
};
