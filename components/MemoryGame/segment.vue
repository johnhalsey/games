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
				return `bg-${this.colour}-300`
			}
			return `bg-${this.colour}-600`
		}
	},
	methods: {
		selectSegment () {
			this.selected = true
			this.$emit('select-segment')
			setTimeout(() => {
				this.selected = false
			}, 500)
		}
	}
}
</script>

<style scoped>

</style>
