<template>
  <div class="relative w-[110vw] h-[20vw] overflow-hidden ml-[0] pl-[0]">
    <img
      v-for="(star, i) in starSequence"
      :key="i"
      :src="star"
      class="absolute transition-all duration-300"
      :class="star === B_IMG ? 'scale-150' : 'scale-100'"
      :style="{
        left: positions[i] + '%',
        opacity: currentIndex % starSequence.length === i ? 1 : 0,
        transition: ' left 0.3s',
      }"
    />
    <!-- 如果加 opacity 0.3s 就會在移動的時候有淡入淡出的感覺 -->
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import A_IMG from '../../assets/Home/bluestar-11-3.svg'
import B_IMG from '../../assets/Home/bluestar-10-1.svg'

const starSequence = [A_IMG, B_IMG, A_IMG, B_IMG, A_IMG, B_IMG, A_IMG, B_IMG, A_IMG, B_IMG]
const positions = [0, 25, 50, 80, 115, 80, 50, 25, 0, -20]

const currentIndex = ref(0)

onMounted(() => {
  setInterval(() => {
    currentIndex.value++
  }, 1000)
})
</script>

<style scoped>
img {
  width: 15vw;
  height: auto;
}
</style>
