/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
	mode: 'jit',
	// These paths are just examples, customize them to match your project structure
	purge: [
		'./public/**/*.html',
		'./pages/*.{js,jsx,ts,tsx,vue}',
	],
	content: [
		"./components/**/*.{vue}",
		"./layouts/**/*.{vue}",
		"./pages/**/*.{vue}",
		"./plugins/**/*.{js,ts}",
		"./app.vue",
		"./error.vue",
	],
	safelist: [
		'bg-red-400',
		'bg-red-500',
		'bg-green-400',
		'bg-green-500',
		'bg-blue-400',
		'bg-blue-500',
		'bg-yellow-400',
		'bg-yellow-500',
		'bg-indigo-400',
		'bg-indigo-500',
		'bg-purple-400',
		'bg-purple-500',
		'bg-pink-400',
		'bg-pink-500',
		'bg-orange-400',
		'bg-orange-500',
		'bg-cyan-400',
		'bg-cyan-500',
		'bg-lime-400',
		'bg-lime-500',
		'grid-cols-2',
		'grid-cols-3',
		'grid-cols-4',
		'grid-rows-2',
		'grid-rows-3',
		'grid-rows-4',
		'cursor-pointer',
	],
	theme: {
		extend: {
			colors: {
				...colors
			}
		},
		plugins: [],
	}
}
