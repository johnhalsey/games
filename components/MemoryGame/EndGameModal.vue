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
				<div class="flex-shrink text-2xl cursor-pointer" @click="close()">⛌</div>
			</div>

			<p class="text-xl mb-4" v-show="newHighScore">You set a new High Score!</p>
			<p class="text-xl mb-4">You remembered {{ score }} sequencies, why not try a harder setting?</p>
			<div class="sm:flex w-full">
				<button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 w-full w-auto"
								@click="share"
				>
					<div class="flex items-center">
						<span class="mr-5">Share</span>
						<font-awesome-icon icon="fa-solid fa-share-nodes"/>
					</div>
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
		 console.log(event.target)
			if (!event.target.classList.contains('modal')) {
				this.close()
			}
		},
		share () {
			if (navigator.userAgentData.mobile) {
				console.log('using a mobile')
				this.shareOnMobile()
			} else {
				this.shareOnDesktop()
				console.log('not using a mobile')
			}
		},
		shareOnMobile () {
			navigator.share({
				title: 'Your title',
				text: 'Your text',
				url: 'Your url to share'
			})
		},
		shareOnDesktop () {
			navigator.clipboard.writeText('I remembered ' + this.score + ' sequences');

		}
	}
}
</script>

<style scoped>

</style>
