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
        <ProblemCard
          :logo="card.logo"
          :companyName="card.companyName"
          :problemTitle="card.problemTitle"
          :problemContent="card.problemContent"
          :problemLink="card.problemLink"
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
    <!-- 左箭頭 -->
    <button
      @click="prevCard"
      class="absolute z-30 left-[5vw] top-1/2 transform -translate-y-1/2 p-3 rounded-full"
    >
      <div
        class="w-0 h-0 border-t-[1.3vh] border-t-transparent border-b-[1.3vh] border-b-transparent border-r-[2vh] border-[#374463]"
      ></div>
    </button>

    <!-- 卡片輪播 -->
    <div class="relative flex w-full h-full justify-center items-center">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="absolute transition-all duration-500 ease-in-out"
        :style="getCardStyleMobile(index)"
      >
        <ProblemCard
          :logo="card.logo"
          :companyName="card.companyName"
          :problemTitle="card.problemTitle"
          :problemContent="card.problemContent"
          :problemLink="card.problemLink"
        />
      </div>
    </div>

    <!-- 右箭頭 -->
    <button
      @click="nextCard"
      class="absolute z-30 right-[5vw] top-1/2 transform -translate-y-1/2 p-3"
    >
      <div
        class="w-0 h-0 border-t-[1.3vh] border-t-transparent border-b-[1.3vh] border-b-transparent border-l-[2vh] border-[#374463]"
      ></div>
    </button>
  </div>
</template>

<script setup>
import { ref, inject } from 'vue'
import ProblemCard from './ProblemCard.vue'
import AMDLogo from '../../assets/Problems/Logo/AMD 1.webp'
import TSMCLogo from '../../assets/Problems/Logo/TSMC.webp'
import CloudMosaLogo from '../../assets/Problems/Logo/CloudMosa.webp'
import GoogleLogo from '../../assets/Problems/Logo/Google.webp'
import LogitechLogo from '../../assets/Problems/Logo/Logitech.webp'
import NXPLogo from '../../assets/Problems/Logo/NXP.webp'

import AMDProblem from '../../assets/Problems/Problem/AMDProblem.pdf'
import TSMCProblem from '../../assets/Problems/Problem/TSMCProblem.pdf'
import CloudMosaProblem from '../../assets/Problems/Problem/CloudmosaProblem.pdf'
import GooglePromblem from '../../assets/Problems/Problem/GoogleProblem.pdf'
import LogitechProblem from '../../assets/Problems/Problem/LogitechProblem.pdf'
import NXPProblem from '../../assets/Problems/Problem/NXPProblem.pdf'

const isDesktop = inject('isDesktop')

const cards = [
  {
    logo: AMDLogo,
    companyName: 'AMD',
    problemTitle: '題目',
    problemContent: '題目題目題目之後改',
    problemLink: AMDProblem,
  },
  {
    logo: TSMCLogo,
    companyName: 'TSMC',
    problemTitle: '題目',
    problemContent: '請描述問題內容',
    problemLink: TSMCProblem,
  },
  {
    logo: CloudMosaLogo,
    companyName: 'CloudMosa',
    problemTitle: '題目',
    problemContent: '請描述問題內容',
    problemLink: CloudMosaProblem,
  },
  {
    logo: GoogleLogo,
    companyName: 'Google',
    problemTitle: '題目',
    problemContent: '請描述問題內容',
    problemLink: GooglePromblem,
  },
  {
    logo: LogitechLogo,
    companyName: 'Logitech',
    problemTitle: '題目',
    problemContent: '請描述問題內容',
    problemLink: LogitechProblem,
  },
  {
    logo: NXPLogo,
    companyName: 'NXP',
    problemTitle: '題目',
    problemContent: '請描述問題內容',
    problemLink: NXPProblem,
  },
]

const currentIndex = ref(0)

const getCardStyleWeb = (index) => {
  const totalCards = cards.length
  const diff = (index - currentIndex.value + totalCards) % totalCards

  if (diff === 0) {
    return {
      transform: 'translateX(0) scale(1)',
      zIndex: 20,
      opacity: 1,
      top: '0', // 原本 -5vh 改成 0
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
</script>

<style scoped>
.card {
  transition: all 0.5s ease-in-out;
}
</style>
