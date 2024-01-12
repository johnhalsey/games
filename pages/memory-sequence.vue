<template>
	<div class="flex flex-col h-full">
		<div class="border p-3 bg-slate-200">
			<ul class="w-full md:w-1/2">
				<li class="inline w-1/3 mr-5">
					<button class="p-3 bg-blue-200 rounded hover:bg-blue-300"
									@click="startGame">
						New Game
					</button>
				</li>
				<li class="inline mr-5 ">High Score: {{ highScore }}</li>
				<li class="inline mr-5">Level: {{ currentLevel }}</li>
			</ul>
		</div>
		<div class="grow">
			<div class="grid h-full grid-cols-2 grid-rows-2"
					 :class="containerClasses">
				<div v-for="index in segments"
						 :key="'segment-' + index"
						 :class="[`bg-${colours[index -1]}-500`, ]">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "memory-sequence.vue",
	data () {
		return {
			highScore: 0,
			currentLevel: 1,
			difficulties: [
				{label: 'Easy', segments: 4},
				{label: 'Medium', segments: 6},
				{label: 'Hard', segments: 9},
			],
			currentDifficulty: 'Easy',
			colours: [
				'green',
				'blue',
				'orange',
				'yellow',
				'purple',
				'pink',
				'red',
				'lime',
				'cyan'
			],
			sequence: [],
			activeSegment: null
		}
	},
	computed: {
		segments () {
			return this.difficulties.find(difficulty => difficulty.label === this.currentDifficulty).segments;
		},
		containerClasses () {
			return 'grid-cols-' + this.cols + ' grid-rows-' + this.rows;
		},
		cols () {
			let cols = 2
			// cols = this.currentDifficulty === 'Easy' ? 2 : cols
			// cols = this.currentDifficulty === 'Medi' ? 3 : cols
			cols = this.currentDifficulty === 'Hard' ? 3 : cols
			return cols
		},
		rows () {
			let rows = 2
			// cols = this.currentDifficulty === 'Easy' ? 2 : cols
			rows = this.currentDifficulty === 'Medium' ? 3 : rows
			rows = this.currentDifficulty === 'Hard' ? 3 : rows
			return rows
		}
	},
	methods: {
		startGame () {
			this.sequence = []
			this.nextTurn()
		},
		nextTurn () {
			const segments = this.difficulties.find(difficulty => difficulty.label === this.currentDifficulty).segments;
			const index = this.randomIntFromInterval(0, segments - 1)
			this.sequence.push(index)
			this.play()
		},
		randomIntFromInterval (min, max) { // min and max included
			return Math.floor(Math.random() * (max - min + 1) + min)
		},
		play () {
			this.sequence.forEach((index) => {
				setTimeout(() => {
					this.highlight(index)
				}, (index + 1) * 1000)
			})
		},
		highlight (index) {
			this.activeSegment = index
			setTimeout(() => {
				this.activeSegment = null
			}, 500)
		}
	}

}
</script>

<style>
html,
body,
#__nuxt {
	@apply h-full;
}

</style>
