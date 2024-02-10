<template>
	<div class="flex flex-col h-full">
		<div class="border p-3 bg-slate-200">
			<ul class="w-full">
				<li class="md:inline w-1/3 mr-5">
					<button class="p-3 bg-blue-200 rounded hover:bg-blue-300"
									@click="openStartGameModal">
						New Game
					</button>
				</li>
				<li class="md:inline mr-5">
					<select class="p-3 bg-blue-200 rounded w-26 hover:bg-blue-300"
									v-model="currentDifficulty">
						<option v-for="difficulty in difficulties"
										:key="difficulty.label"
										:value="difficulty.label">
							{{ difficulty.label }}
						</option>
					</select>
				</li>
				<li class="md:inline mr-5 ">Current Score: {{ currentScore }}</li>
				<li class="md:inline mr-5 ">High Score: {{ highScore }}</li>
				<li class="md:inline mr-5">Level: {{ currentLevel }}</li>

			</ul>
		</div>
		<div class="grow">
			<div class="grid h-full grid-cols-2 grid-rows-2"
					 :class="containerClasses">
				<memory-game-segment v-for="index in segments"
														 :timeout="timeout"
														 :key="'segment-' + index"
														 :colour="colours[index -1]"
														 :active="activeSegment === index -1"
														 :index="index -1"
														 @selected="segmentSelected"
				>

				</memory-game-segment>
			</div>
		</div>
		<start-game-modal
				:show="modals.startGame"
				@start-game="startGame"
				@close="closeStartGameModal"
		/>
	</div>
</template>

<script>

import MemoryGameSegment from '~/components/MemoryGame/segment.vue'
import StartGameModal from '~/components/MemoryGame/StartGameModal.vue'

export default {
	name: "memory-sequence.vue",
	components: {
		MemoryGameSegment,
		StartGameModal
	},
	data () {
		return {
			highScore: 0,
			currentScore: 0,
			currentLevel: 0,
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
			userSequence: [],
			activeSegment: null,
			modals: {
				startGame: true,
				gameOver: false
			}
		}
	},
	computed: {
		timeout () {
			if (this.currentLevel > 20) {
				return 300
			}
			if (this.currentLevel > 15) {
				return 350
			}
			if (this.currentLevel > 10) {
				return 400
			}
			if (this.currentLevel > 5) {
				return 450
			}

			return 500
		},
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
	mounted () {
		this.getHighScore()
	},
	methods: {
		getHighScore () {
			let highScore = 0
			if (localStorage.getItem('highScore') !== null) {
				highScore = localStorage.getItem('highScore')
			}
			this.highScore = highScore
		},
		openStartGameModal () {
			this.modals.startGame = true
		},
		closeStartGameModal () {
			this.modals.startGame = false
		},
		startGame () {
			this.sequence = []
			this.nextTurn()
		}
		,
		nextTurn (level = 1) {
			const segments = this.difficulties.find(difficulty => difficulty.label === this.currentDifficulty).segments;
			const index = this.randomIntFromInterval(0, segments - 1)
			this.sequence.push(index)
			this.play(level)
		}
		,
		randomIntFromInterval (min, max) { // min and max included
			return Math.floor(Math.random() * (max - min + 1) + min)
		}
		,
		async play (level) {
			this.currentLevel = level
			this.userSequence = []
			for (const index of this.sequence) {
				await this.highlight(index);
			}
		}
		,
		highlight (index) {
			return new Promise((resolve) => {
				this.activeSegment = index
				setTimeout(() => {
					this.activeSegment = null
					setTimeout(() => {
						resolve()
					}, this.timeout)
				}, this.timeout)
			})
		}
		,
		segmentSelected (index) {
			this.userSequence.push(index)
			// check if the user has selected the correct sequence
			if (this.userSequence[this.userSequence.length - 1] !== this.sequence[this.userSequence.length - 1]) {
				// set the new high score if the current score is higher
				if (this.currentScore > this.highScore) {
					this.highScore = this.currentScore
					// save the high score to local storage
					localStorage.setItem('highScore', this.currentScore)
				}
				alert('Game Over')

				return;
			} else {
				this.currentScore++
			}

			if (this.userSequence.length === this.sequence.length) {
				setTimeout(() => {
					this.nextTurn(this.currentLevel + 1)
				}, this.timeout)

			}
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
