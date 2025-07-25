<template>
  <!-- 整個container -->
  <div class="relative w-full h-[80vh] flex items-center justify-center">
    <!-- 左箭頭 -->
    <button
      @click="prevCard"
      class="absolute z-30 left-[20vw] transform -translate-y-1/2 top-[20vw] p-3 rounded-full"
    >
      <div
        class="w-0 h-0 border-t-[2.5vh] border-t-transparent border-b-[2.5vh] border-b-transparent border-r-[4vh] border-[#374463]"
      ></div>
    </button>

    <!-- 卡片本人 -->
    <div class="relative flex justify-center items-center w-full h-full">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="absolute transition-all duration-500 ease-in-out"
        :style="getCardStyle(index)"
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
      class="absolute z-30 right-[20vw] transform -translate-y-1/2 top-[20vw] p-3"
    >
      <div
        class="w-0 h-0 border-t-[2.5vh] border-t-transparent border-b-[2.5vh] border-b-transparent border-l-[4vh] border-[#374463]"
      ></div>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProblemCard from './ProblemCard.vue'
import AMDLogo from '../../assets/Problems/Logo/AMD 1.webp'
import TSMCLogo from '../../assets/Problems/Logo/TSMC.webp'
import CloudMosaLogo from '../../assets/Problems/Logo/CloudMosa.webp'
import GoogleLogo from '../../assets/Problems/Logo/Google.webp'
import LogitechLogo from '../../assets/Problems/Logo/Logitech.webp'
import NXPLogo from '../../assets/Problems/Logo/NXP.webp'

const cards = [
  {
    logo: AMDLogo,
    companyName: 'AMD',
    problemTitle: '題目',
    problemContent:
      '題目題目題目題目題目題目題目題目題目題目題目題目題目題目題目題目題目題目題目題目題目題目題目題目題目題目題目題目題目題目題目題目',
    problemLink: '',
  },
  {
    logo: TSMCLogo,
    companyName: 'TSMC',
    problemTitle: '題目',
    problemContent: '請描述問題內容',
    problemLink: '',
  },
  {
    logo: CloudMosaLogo,
    companyName: 'CloudMosa',
    problemTitle: '題目',
    problemContent: '請描述問題內容',
    problemLink: '',
  },
  {
    logo: GoogleLogo,
    companyName: 'Google',
    problemTitle: '題目',
    problemContent: '請描述問題內容',
    problemLink: '',
  },
  {
    logo: LogitechLogo,
    companyName: 'Logitech',
    problemTitle: '題目',
    problemContent: '請描述問題內容',
    problemLink: '',
  },
  {
    logo: NXPLogo,
    companyName: 'NXP',
    problemTitle: '題目',
    problemContent: '請描述問題內容',
    problemLink: '',
  },
]

defineOptions({
  name: 'ProblemCardGroup',
})

const currentIndex = ref(0)

const getCardStyle = (index) => {
  const totalCards = cards.length
  const diff = (index - currentIndex.value + totalCards) % totalCards

  if (diff === 0) {
    // 中間卡片
    return {
      transform: 'translateX(0) scale(1)',
      zIndex: 20,
      opacity: 1,
      top: '-5vh',
    }
  } else if (diff === 1 || diff === totalCards - 1) {
    // 左右卡片
    return {
      transform: `translateX(${diff === 1 ? '30vh' : '-30vh'}) scale(0.85)`,
      zIndex: 10,
      opacity: 0.5,
      top: '0',
    }
  } else {
    // 其他卡片
    return {
      transform: `translateX(${diff > 1 ? '40vh' : '-40vh'}) scale(0)`,
      zIndex: 0,
      opacity: 0,
      top: '0',
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
/* 卡片的過渡效果 */
.card {
  transition: all 0.5s ease-in-out;
}
</style>
