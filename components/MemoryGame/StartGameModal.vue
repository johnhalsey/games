<template>
	<div class="modal-background"
			 :class="{'show': show}"
	>
		<div class="modal"
				 :class="{'show': show}"
		>
			<h1 class="text-3xl font-bold mb-4">Memory Sequence</h1>
			<p class="text-xl mb-4">Remember the sequence of colours and repeat it back.</p>
			<div class="flex justify-center items-center w-full">
				<button
						class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4"
						@click="startGame"
				>
					Start Game
				</button>
				<button
						class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
						@click="close"
				>
					Close
				</button>
			</div>
		</div>
	</div>

</template>

<script>
export default {
	name: "StartGameModal",
	props: {
		show: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		startGame () {
			this.$emit('start-game')
		},
		close () {
			this.$emit('close')
		}
	}
}
</script>

<style scoped>

</style>
