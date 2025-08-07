<template>
  <!-- 桌面版卡片組 -->
  <div
    v-if="isDesktop"
    class="relative w-full min-h-[70vh] flex items-center justify-center pb-[10vh]"
  >
    <!-- 左箭頭 -->
    <button
      @click="prevCard"
      class="absolute z-30 left-[20vw] top-1/2 transform -translate-y-1/2 p-3 rounded-full"
    >
      <div
        class="w-0 h-0 border-t-[2.5vh] border-t-transparent border-b-[2.5vh] border-b-transparent border-r-[4vh] border-[#374463]"
      ></div>
    </button>

    <!-- 卡片輪播 -->
    <div class="relative flex justify-center items-center w-full h-full">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="absolute transition-all duration-500 ease-in-out"
        :style="getCardStyleWeb(index)"
      >
        <ProblemCardGovernment
          ref="cardRefs"
          :logo="card.logo"
          :companyName="card.companyName"
          :problemTitle="card.problemTitle"
          :problemContent="card.problemContent"
          :problemLink="card.problemLink"
          :maxHeight="maxCardHeight"
        />
      </div>
    </div>

    <!-- 右箭頭 -->
    <button
      @click="nextCard"
      class="absolute z-30 right-[20vw] top-1/2 transform -translate-y-1/2 p-3"
    >
      <div
        class="w-0 h-0 border-t-[2.5vh] border-t-transparent border-b-[2.5vh] border-b-transparent border-l-[4vh] border-[#374463]"
      ></div>
    </button>
  </div>

  <!-- 手機版卡片組 -->
  <div v-else class="relative w-full h-[40vh] flex flex-col items-center justify-center">
    <!-- 卡片輪播 -->
    <div class="relative flex w-full h-full justify-center items-center">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="absolute transition-all duration-500 ease-in-out"
        :style="getCardStyleMobile(index)"
      >
        <ProblemCardGovernment
          ref="cardRefs"
          :logo="card.logo"
          :companyName="card.companyName"
          :problemTitle="card.problemTitle"
          :problemContent="card.problemContent"
          :problemLink="card.problemLink"
          :maxHeight="maxCardHeight"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, inject, onMounted, onUnmounted, nextTick } from 'vue'
import ProblemCardGovernment from './ProblemCardGovernment.vue'

import HsinchuLogo from '../../assets/Problems/Card/Hsinchulogo.svg'

import GovernmentProblem from '../../assets/Problems/Problem/GovernmentProblem.pdf'

const isDesktop = inject('isDesktop')

const cards = [
  {
    logo: HsinchuLogo,
    companyName: '新竹市政府與新竹市青年發展中心',
    problemTitle: '題目',
    problemContent:
      '在四個子題中，運用 AI、大數據、物聯網等技術，針對市政服務提出創新解方，從智慧交通、公共安全到環境檢測，打造更即時、便利、貼近市民需求的智慧應用，共創友善高效的未來城市。',
    problemLink: GovernmentProblem,
  },
]

const currentIndex = ref(0)
const cardRefs = ref([])
const maxCardHeight = ref(null)

const getCardStyleWeb = (index) => {
  const totalCards = cards.length
  const diff = (index - currentIndex.value + totalCards) % totalCards

  if (diff === 0) {
    return {
      transform: 'translateX(0) scale(1)',
      zIndex: 20,
      opacity: 1,
      top: '0',
    }
  } else if (diff === 1 || diff === totalCards - 1) {
    return {
      transform: `translateX(${diff === 1 ? '30vh' : '-30vh'}) scale(0.85)`,
      zIndex: 10,
      opacity: 0.5,
      top: '2vh',
    }
  } else {
    return {
      transform: `translateX(${diff > 1 ? '40vh' : '-40vh'}) scale(0)`,
      zIndex: 0,
      opacity: 0,
      top: '2vh',
    }
  }
}

const getCardStyleMobile = (index) => {
  const totalCards = cards.length
  const diff = (index - currentIndex.value + totalCards) % totalCards

  if (diff === 0) {
    return {
      transform: 'translateX(-50%) translateY(-50%) translateX(0) scale(1)',
      transformOrigin: 'center center',
      zIndex: 20,
      opacity: 1,
      top: '50%',
      left: '50%',
    }
  } else if (diff === 1 || diff === totalCards - 1) {
    return {
      transform: `translateX(-50%) translateY(-50%) translateX(${diff === 1 ? '30vh' : '-30vh'}) scale(0.85)`,
      transformOrigin: 'center center',
      zIndex: 10,
      opacity: 0.5,
      top: '50%',
      left: '50%',
    }
  } else {
    return {
      transform: `translateX(-50%) translateY(-50%) translateX(${diff > 1 ? '40vh' : '-40vh'}) scale(0)`,
      transformOrigin: 'center center',
      zIndex: 0,
      opacity: 0,
      top: '50%',
      left: '50%',
    }
  }
}

const nextCard = () => {
  currentIndex.value = (currentIndex.value + 1) % cards.length
}

const prevCard = () => {
  currentIndex.value = (currentIndex.value - 1 + cards.length) % cards.length
}

const calculateMaxHeight = async () => {
  await nextTick()

  if (!cardRefs.value || cardRefs.value.length === 0) return

  const heights = []

  for (const cardRef of cardRefs.value) {
    if (cardRef && cardRef.calculateNaturalHeight) {
      const height = await cardRef.calculateNaturalHeight()
      heights.push(height)
    }
  }

  if (heights.length > 0) {
    const calculatedMaxHeight = Math.max(...heights)
    const minHeight = isDesktop.value ? window.innerWidth * 0.45 : window.innerWidth * 0.7
    maxCardHeight.value = Math.max(calculatedMaxHeight, minHeight)
  }
}

const handleResize = () => {
  setTimeout(calculateMaxHeight, 100)
}

onMounted(async () => {
  await nextTick()
  setTimeout(calculateMaxHeight, 100)
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.card {
  transition: all 0.5s ease-in-out;
}
</style>
