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
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./app.vue",
		"./error.vue",
	],
	safelist: [
		'bg-red-300',
		'bg-red-600',
		'bg-green-300',
		'bg-green-600',
		'bg-blue-300',
		'bg-blue-600',
		'bg-yellow-300',
		'bg-yellow-600',
		'bg-indigo-300',
		'bg-indigo-600',
		'bg-purple-300',
		'bg-purple-600',
		'bg-pink-300',
		'bg-pink-600',
		'bg-orange-300',
		'bg-orange-600',
		'bg-cyan-300',
		'bg-cyan-600',
		'bg-lime-300',
		'bg-lime-600',
		'grid-cols-2',
		'grid-cols-3',
		'grid-cols-4',
		'grid-rows-2',
		'grid-rows-3',
		'grid-rows-4',
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
