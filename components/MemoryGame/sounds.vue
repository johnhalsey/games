<script>

import sound0 from '../../assets/audio/MemoryGame/0.wav'
import sound1 from '../../assets/audio/MemoryGame/1.wav'
import sound2 from '../../assets/audio/MemoryGame/2.wav'
import sound3 from '../../assets/audio/MemoryGame/3.wav'
import sound4 from '../../assets/audio/MemoryGame/4.wav'
import sound5 from '../../assets/audio/MemoryGame/5.wav'
import sound6 from '../../assets/audio/MemoryGame/6.wav'
import sound7 from '../../assets/audio/MemoryGame/7.wav'
import sound8 from '../../assets/audio/MemoryGame/8.wav'


export default {
	name: "MemoryGameSounds",
	computed: {
		sound () {
			if (this.index === 0) return sound0
			if (this.index === 1) return sound1
			if (this.index === 2) return sound2
			if (this.index === 3) return sound3
			if (this.index === 4) return sound4
			if (this.index === 5) return sound5
			if (this.index === 6) return sound6
			if (this.index === 7) return sound7
			if (this.index === 8) return sound8
		}
	},
	methods: {
		getSound (index) {
			if (index === 0) return sound0
			if (index === 1) return sound1
			if (index === 2) return sound2
			if (index === 3) return sound3
			if (index === 4) return sound4
			if (index === 5) return sound5
			if (index === 6) return sound6
			if (index === 7) return sound7
			if (index === 8) return sound8
		}
	}


}
</script>
