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
      class="absolute z-30 right-[5vw] top-1/2 transform -translate-y-1/2 p-3"
    >
      <div
        class="w-0 h-0 border-t-[1.3vh] border-t-transparent border-b-[1.3vh] border-b-transparent border-l-[2vh] border-[#374463]"
      ></div>
    </button>
  </div>
</template>

<script setup>
import { ref, inject, onMounted, onUnmounted, nextTick } from 'vue'
import ProblemCard from './ProblemCard.vue'
import AMDLogo from '../../assets/Problems/Logo/AMD_ITRI.webp'
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
    logo: CloudMosaLogo,
    companyName: 'CloudMosa',
    problemTitle: '題目',
    problemContent:
      '透過 CloudMosa 提供之 Cloud Phone，開發一款具備完整功能與良好體驗的應用程式，並用以提升教育學習、資訊查詢、實用工具應用、天氣預報等服務品質，改變偏遠地區與第三世界國家的生活樣態，讓現代網路服務能走進每個人的生活。',
    problemLink: CloudMosaProblem,
  },
  {
    logo: NXPLogo,
    companyName: '恩智浦半導體',
    problemTitle: '題目',
    problemContent:
      '善用邊緣運算與人工智慧、結合語音影像等感測辨識，兼顧功能與資訊安全，打造具即時反應的智慧創新應用。例如，使用 FRDM i.MX93 開發板做為感測中心，以 Wi-Fi 方式連接各式感測器(如:攝影鏡頭)，進行物品辨識以判斷物品是否正常運作。這些感測器資料可以結合在一起，透過大數據、AI 演算法,做出更多不同的應用，亦可連接到手機 APP 控制，相關資料在各設備間的連結，可透過 Wi-Fi 進行安全傳輸。',
    problemLink: NXPProblem,
  },
  {
    logo: TSMCLogo,
    companyName: '台積電',
    problemTitle: '題目',
    problemContent:
      '透過數位化技術，設計一款針對新進員工的「生活小助手」數位夥伴解決方案。參賽者需以新進員工的角度出發，聚焦於入職後的實際需求與痛點,結合創新技術與使用者體驗,打造一個可以支援新員工快速適應職場生活的多功能平台或服務。此方案應涵蓋「食衣住行育樂」及「工作支持」相關的功能整合，並提供即時問題解決與資訊導航，讓員工能感受到台積電對於新人的支持與關懷。',
    problemLink: TSMCProblem,
  },
  {
    logo: LogitechLogo,
    companyName: '羅技',
    problemTitle: '題目',
    problemContent:
      '在三個子題中，打造沉浸式的使用者體驗。包括：打造增加使用者互動的 AI 工具如動態遊戲助手、永續發展人工智慧、情境感知使用者界面或自適應性能優化器；3D桌面互動概念，透過網路攝影機、空間輸入和顯示創新來增加數位工作流程；多模態介面，結合 AR/VR、手勢、語音和行動裝置、實現統一的使用者參與。',
    problemLink: LogitechProblem,
  },
  {
    logo: GoogleLogo,
    companyName: 'Google',
    problemTitle: '題目',
    problemContent:
      '運用 Gemini 模型，發揮創意,將智慧應用帶入每個人的手機中。例如，即時語音描述路況系統、處理複雜文件內容、結合手機鏡頭辨識垃圾種類、電話詐騙預防系統等等。在手機的應用場景上，使用指定模型、結合其他輔助領域之技術，解決真實世界的問題，提升弱勢社群的無障礙體驗。',
    problemLink: GooglePromblem,
  },
  {
    logo: AMDLogo,
    companyName: 'AMD',
    problemTitle: '題目',
    problemContent:
      '請利用AMD Ryzen AI PC的本地算力資源，開發能夠協助生活的 AI Agent。你將利用Lemonade server 來發揮 Ryzen AI PC 的潛力，並通過串流工具，將其連接到 Hugging Face 的 Tiny Agents 等內容，打造多樣的AI Agents。不論是在旅遊規劃、自動發文、個人活安排或校園活動整合等應用場景，創造更加便利的生活模式。 ',
    problemLink: AMDProblem,
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
