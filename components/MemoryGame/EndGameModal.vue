<template>
	<div class="modal-background"
			 :class="{'show': show}"
	>
		<div class="modal"
				 :class="{'show': show}"
		>
			<div class="modal-header flex">
				<h1 class="text-3xl font-bold mb-4 mr-auto">Game Over 🏁</h1>
				<div class="flex-shrink text-2xl cursor-pointer" @click="close()">⛌</div>
			</div>

			<p class="text-xl mb-4" v-show="newHighScore">You set a new High Score!</p>
			<p class="text-xl mb-4">You remembered {{ score }} sequencies, and got to level {{ level }}</p>
			<p class="text-xl mb-4" v-show="difficulty == 'Easy' || difficulty == 'Medium'">Why not try a harder setting?</p>
			<div class="sm:flex w-full sm:w-auto sm:items-center">
				<button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 w-full sm:w-auto"
								@click="share"
				>
					<div class="flex items-center">
						<span class="mr-5">Share</span>
						<font-awesome-icon icon="fa-solid fa-share-nodes"/>
					</div>
				</button>
				<div v-show="statsCopied" class="ml-5 text-green-700">Stats have been copied to the clipboard</div>
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
		},
		level: {
			type: Number
		},
		difficulty: {
			type: String
		}
	},
	data () {
		return {
			statsCopied: false
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
			this.statsCopied = false
			this.$emit('close')
		},
		clickOff () {
			// if mouse cursor is clicked outside of the modal
			console.log(event.target)
			if (!event.target.classList.contains('modal')) {
				this.close()
			}
		},
		share () {
			if (navigator.share) {
				this.shareOnMobile()
			} else {
				this.shareOnDesktop()
			}
		},
		shareOnMobile () {
			navigator.share({
				text: this.buildMessage(),
				url: window.location.href
			})
		},
		shareOnDesktop () {
			navigator.clipboard.writeText(this.buildMessage());
			this.statsCopied = true
		},
		buildMessage () {
			let message = '🟩🟧\n🟦🟨\n'
			message += 'Memory Sequence 🧠'
			message += '\nScore: ' + this.score
			if (this.newHighScore) {
				message += ' (New highscore!) 😎'
			}
			message += '\nLevel: ' + this.level
			return message += '\nDifficulty: ' + this.difficulty
		}
	}
}
</script>

<style scoped>

</style>
