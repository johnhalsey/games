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
			<div class="grid h-full"
					 :class="containerClasses">
				<div v-for="index in segments"
						 :key="'segment-' + index"
						 :class="`bg-${colours[index -1]}-500`">
			{{ index }}
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
				{label: 'Hard', segments: 8},
			],
			currentDifficulty: 'Easy',
			colours: [
				'yellow',
				'purple',
				'pink',
				'green',
				'blue',
				'lime',
				'red',
				'amber'
			]
		}
	},
	computed: {
		segments () {
			return this.difficulties.find(difficulty => difficulty.label === this.currentDifficulty).segments;
		},
		containerClasses () {
			return 'grid-cols-' + this.cols + ' grid-rows-' + this.cols;
		},
		cols () {
			return this.segments / 2;
		}
	},
	methods: {
		startGame () {
			console.log("start game");
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
