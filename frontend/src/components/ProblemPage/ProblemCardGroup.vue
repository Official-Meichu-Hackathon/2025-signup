<template>
  <div class="w-full my-12">
    <!-- 黑客組的輪播 (多張卡片) -->
    <div v-if="groupType === 'hacker'" class="relative flex justify-center items-center">
      <!-- 左箭頭 -->
      <button
        @click="prevCard"
        class="absolute left-4 z-30 p-2 rounded-full bg-white/80 shadow-md hover:bg-white focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-[#2D3E63]"
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

      <!-- 卡片容器 -->
      <div class="flex justify-center items-center relative w-full max-w-5xl overflow-hidden py-10">
        <div class="flex justify-center items-center relative" style="width: 1000px; height: 320px">
          <div
            v-for="(card, index) in cards"
            :key="index"
            class="absolute transition-all duration-500 ease-in-out"
            :style="getCardStyle(index)"
          >
            <img :src="getCardImageSrc(card)" :alt="card" class="w-[320px] h-auto" />
          </div>
        </div>
      </div>

      <!-- 右箭頭 -->
      <button
        @click="nextCard"
        class="absolute right-4 z-30 p-2 rounded-full bg-white/80 shadow-md hover:bg-white focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-[#2D3E63]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>

    <!-- 創客組 (只有一張卡片) -->
    <div v-else class="flex justify-center items-center">
      <img :src="governmentCardSrc" alt="Government" class="w-[320px] h-auto" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// 預先導入所有卡片圖片
import AMDCard from '../../assets/Problems/Card/AMD.svg'
import TSMCCard from '../../assets/Problems/Card/TSMC.svg'
import GoogleCard from '../../assets/Problems/Card/Google.svg'
import LogitechCard from '../../assets/Problems/Card/Logitech.svg'
import NXPCard from '../../assets/Problems/Card/NXP.svg'
import CloudmosaCard from '../../assets/Problems/Card/Cloudmosa.svg'
import GovernmentCard from '../../assets/Problems/Card/Government.svg'

// 圖片映射
const cardImages = {
  AMD: AMDCard,
  TSMC: TSMCCard,
  Google: GoogleCard,
  Logitech: LogitechCard,
  NXP: NXPCard,
  Cloudmosa: CloudmosaCard,
}

const governmentCardSrc = GovernmentCard

// 獲取卡片圖片路徑
const getCardImageSrc = (cardName) => {
  return cardImages[cardName]
}

// 接收組別類型
const props = defineProps({
  groupType: {
    type: String,
    default: 'hacker',
    required: true,
  },
})

// 根據組別決定顯示的卡片
const cards = computed(() => {
  return props.groupType === 'hacker'
    ? ['AMD', 'TSMC', 'Google', 'Logitech', 'NXP', 'Cloudmosa']
    : ['Government']
})

// 當前選中的卡片索引
const currentIndex = ref(0)

// 取得指定索引卡片的樣式
const getCardStyle = (index) => {
  // 計算卡片位置
  const diff = index - currentIndex.value
  const normalizedDiff = (diff + cards.value.length) % cards.value.length

  // 如果差值為0，表示是當前卡片
  if (normalizedDiff === 0) {
    return {
      transform: 'translateX(0)',
      zIndex: 20,
      opacity: 1,
      scale: 1,
    }
  }

  // 如果差值為1或-1，表示是相鄰卡片
  if (normalizedDiff === 1 || normalizedDiff === cards.value.length - 1) {
    return {
      transform: `translateX(${normalizedDiff === 1 ? 250 : -250}px)`,
      zIndex: 10,
      opacity: 0.7,
      scale: 0.85,
    }
  }

  // 其他卡片，隱藏在更遠的位置
  return {
    transform: `translateX(${normalizedDiff <= cards.value.length / 2 ? 450 : -450}px)`,
    zIndex: 0,
    opacity: 0.3,
    scale: 0.7,
  }
}

// 切換到下一張卡片
const nextCard = () => {
  currentIndex.value = (currentIndex.value + 1) % cards.value.length
}

// 切換到上一張卡片
const prevCard = () => {
  currentIndex.value = (currentIndex.value - 1 + cards.value.length) % cards.value.length
}

defineOptions({
  name: 'ProblemCardGroup',
})
</script>
