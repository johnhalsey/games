// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: {
		enabled: true,
		pages: true,
	},
	css: [
		'~/assets/css/main.css',
		'@fortawesome/fontawesome-svg-core/styles.css'
	],
	server: {
		port: 8000 // default: 3000
	},
	build: {
		transpile: [
			'@fortawesome/vue-fontawesome',
			'@fortawesome/fontawesome-svg-core',
			// '@fortawesome/free-solid-svg-icons',
			// '@fortawesome/free-regular-svg-icons',
			'@fortawesome/free-brands-svg-icons'
		]
	},
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
})
