<template>
	<div
			class="cursor-pointer"
			:class="colorClass"
			@click="selectSegment"
	>
	</div>
</template>

<script>

export default {
	name: "MemoryGameSegment",
	props: {
		colour: {
			type: String,
			required: true
		},
		active: {
			type: Boolean,
			default: false
		},
		index: {
			type: Number,
			required: true
		},
		timeout: {
			type: Number,
			required: true
		},
		sound: {
			type: File
		}
	},
	data () {
		return {
			selected: false
		}
	},
	watch: {
		active (val) {
			if (val) {
				this.playSound()
			}
		}
	},
	computed: {
		colorClass () {
			if (this.active || this.selected) {
				return `bg-${this.colour}-400`
			}
			return `bg-${this.colour}-500`
		}
	},
	methods: {
		selectSegment () {
			this.selected = true
			this.playSound()
			setTimeout(() => {
				this.selected = false
				this.$emit('selected', this.index)
			}, this.timeout)
		},
		playSound () {
			const audio = new Audio(this.sound)
			audio.play()
		}
	}
}
</script>

<style scoped>

</style>
