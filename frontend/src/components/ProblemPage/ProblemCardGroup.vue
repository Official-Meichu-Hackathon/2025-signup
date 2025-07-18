<template>
  <div class="w-full">
    <div v-if="groupType === 'hacker'" class="relative flex justify-center items-center">
      <!-- 左箭頭 -->
      <button
        @click="prevCard"
        class="absolute left-[2vw] z-30 p-[1vh] rounded-full bg-white/80 shadow-md hover:bg-white focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-[3vh] w-[3vh] text-[#2D3E63]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <!-- Card Container -->
      <div
        class="flex justify-center items-center relative w-full max-w-[80vw] overflow-hidden py-[5vh]"
      >
        <div class="flex justify-center items-center relative" style="width: 60vw; height: 65vh">
          <div
            v-for="(card, index) in cards"
            :key="index"
            class="absolute transition-all duration-500 ease-in-out"
            :style="getCardStyle(index)"
          >
            <img :src="getCardImageSrc(card)" :alt="card" class="w-[50vw] h-[65vh]" />
          </div>
        </div>
      </div>

      <!-- 右箭頭 -->
      <button
        @click="nextCard"
        class="absolute right-[2vw] z-30 p-[1vh] rounded-full bg-white/80 shadow-md hover:bg-white focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-[3vh] w-[3vh] text-[#2D3E63]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>

    <div v-else class="flex justify-center items-center">
      <img :src="governmentCardSrc" alt="Government" class="w-[50vw] h-[65vh]" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

import AMDCard from '../../assets/Problems/Card/AMD.svg'
import TSMCCard from '../../assets/Problems/Card/TSMC.svg'
import GoogleCard from '../../assets/Problems/Card/Google.svg'
import LogitechCard from '../../assets/Problems/Card/Logitech.svg'
import NXPCard from '../../assets/Problems/Card/NXP.svg'
import CloudmosaCard from '../../assets/Problems/Card/Cloudmosa.svg'
import GovernmentCard from '../../assets/Problems/Card/Government.svg'

const cardImages = {
  AMD: AMDCard,
  TSMC: TSMCCard,
  Google: GoogleCard,
  Logitech: LogitechCard,
  NXP: NXPCard,
  Cloudmosa: CloudmosaCard,
}

const governmentCardSrc = GovernmentCard

const getCardImageSrc = (cardName) => {
  return cardImages[cardName]
}

const props = defineProps({
  groupType: {
    type: String,
    default: 'hacker',
    required: true,
  },
})

const cards = computed(() => {
  return props.groupType === 'hacker'
    ? ['AMD', 'TSMC', 'Google', 'Logitech', 'NXP', 'Cloudmosa']
    : ['Government']
})

const currentIndex = ref(0)

const getCardStyle = (index) => {
  const diff = index - currentIndex.value
  const normalizedDiff = (diff + cards.value.length) % cards.value.length

  if (normalizedDiff === 0) {
    return {
      transform: 'translateX(0)',
      zIndex: 20,
      opacity: 1,
      scale: 1,
    }
  }

  if (normalizedDiff === 1 || normalizedDiff === cards.value.length - 1) {
    return {
      transform: `translateX(${normalizedDiff === 1 ? '10vw' : '-10vw'})`,
      zIndex: 10,
      opacity: 0.7,
      scale: 0.75,
    }
  }

  return {
    transform: `translateX(${normalizedDiff <= cards.value.length / 2 ? '20vw' : '-20vw'})`,
    zIndex: 0,
    opacity: 0.3,
    scale: 0,
  }
}

const nextCard = () => {
  currentIndex.value = (currentIndex.value + 1) % cards.value.length
}

const prevCard = () => {
  currentIndex.value = (currentIndex.value - 1 + cards.value.length) % cards.value.length
}

defineOptions({
  name: 'ProblemCardGroup',
})
</script>
