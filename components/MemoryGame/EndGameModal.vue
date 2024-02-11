<template>
	<div class="modal-background"
			 :class="{'show': show}"
			 @click="clickOff()"
	>
		<div class="modal"
				 :class="{'show': show}"
		>
			<div class="modal-header flex">
				<h1 class="text-3xl font-bold mb-4 mr-auto">Game Over 🏁</h1>
				<div class="flex-shrink text-2xl" @click="close()">⛌</div>
			</div>

			<p class="text-xl mb-4" v-show="newHighScore">You set a new High Score!</p>
			<p class="text-xl mb-4">You remembered {{score}} sequencies, why not try a harder setting?</p>
			<div class="flex w-full">
				<button
						class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 w-full sm:w-auto"
						@click="startGame"
				>
					Try again
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
		},
	 	score: {
			type: Number,
		}
	},
 computed: {
		newHighScore () {
			return this.score > localStorage.getItem('highScore')
		}
 },
	methods: {
		startGame () {
			this.$emit('start-game')
		},
		close () {
			this.$emit('close')
		},
		clickOff () {
			// if mouse cursor is clicked outside of the modal
			if (!event.target.classList.contains('modal')) {
				this.close()
			}
		}
	}
}
</script>

<style scoped>

</style>
