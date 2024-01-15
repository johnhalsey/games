<template>
	<div
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
		}
	},
	data () {
		return {
			selected: false
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
			setTimeout(() => {
				this.selected = false
				this.$emit('selected', this.index)
			}, 500)
		}
	}
}
</script>

<style scoped>

</style>
