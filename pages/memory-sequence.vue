<template>
	<div class="flex flex-col h-full">
		<div class="border p-3 bg-slate-200">
			<ul class="w-full md:w-1/2">
				<li class="inline w-1/3 mr-5">
					<button class="p-3 bg-blue-200 rounded hover:bg-blue-300">New Game</button>
				</li>
				<li class="inline mr-5 ">High Score: {{ highScore }}</li>
				<li class="inline mr-5">Level: {{ currentLevel }}</li>
			</ul>
		</div>
		<div class="grow">
			<div class="h-full grid grid-cols-2 grid-rows-2">
				<div class="bg-yellow-500"></div>
				<div class="bg-purple-500"></div>
				<div class="bg-pink-500"></div>
				<div class="bg-green-500"></div>
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
			currentLevel: 1
		}
	},
}
</script>

<style>
html,
body {
	@apply h-full;
}
</style>
