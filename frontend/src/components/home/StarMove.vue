<template>
  <div class="relative w-screen h-[20vw] overflow-hidden">
    <img
      v-for="star in visibleStars"
      :key="star.id"
      :src="star.img"
      class="absolute transition-all duration-300"
      :style="{ left: star.x + '%', opacity: 1, transition: 'opacity 0.3s, left 0.3s' }"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import A_IMG from '../../assets/Home/bluestar-10-1.svg'
import B_IMG from '../../assets/Home/bluestar-11-3.svg'
// 可以用 import 來引入圖片 !
// const A_IMG = '../../assets/Home/bluestar-10-1.svg'
// const B_IMG = '../../assets/Home/bluestar-11-3.svg'

const starSequence = [A_IMG, B_IMG, A_IMG, B_IMG, A_IMG, B_IMG, B_IMG, A_IMG, B_IMG, A_IMG, B_IMG] // 重複交錯
const visibleStars = ref([])

let currentIndex = 0
const positions = [-8, 0, 25, 50, 80, 110, 110, 75, 50, 25, 0]

onMounted(() => {
  setInterval(() => {
    // 每次顯示下一張
    const newStar = {
      id: Date.now(), // 確保 key 不重複
      img: starSequence[currentIndex % starSequence.length],
      x: positions[currentIndex % positions.length],
    }

    visibleStars.value.push(newStar)

    // 移除前一張（讓它消失）
    if (visibleStars.value.length > 1) {
      visibleStars.value.shift()
    }

    currentIndex++
  }, 500) // 每 0.5 秒一張
})
</script>

<style scoped>
img {
  /* width: 50px; */
  width: 15vw;
  height: auto;
}
</style>
