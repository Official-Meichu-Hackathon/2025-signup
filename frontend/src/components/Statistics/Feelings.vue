<template>
  <div class="statistics-bar z-[101]" style="margin-bottom: -5vw">
    <div class="relative svg-container overflow-hidden rounded-t-lg" style="aspect-ratio: 1440/210">
      <img
        src="../../assets/Statistics/bar-top.svg"
        class="absolute inset-0 w-full h-full object-cover"
        alt="背景裝飾"
      />
      <div class="relative z-10 flex items-center justify-center top-[20%]">
        <h3 class="blue-text bar-title">參賽者感言</h3>
        <span
          class="absolute right-6 text-[#2D3E63] font-mono transition-transform duration-200 responsive-icon cursor-pointer hover:bg-[rgba(255,255,255,0.2)] rounded-full w-8 h-8 flex items-center justify-center transition-all duration-200"
          @click="toggleFeelings"
        >
          {{ isOpen ? '−' : '+' }}
        </span>
      </div>
    </div>
    <transition name="slide-down">
      <div v-if="isOpen" class="px-[5vw] pb-[8vw]" style="margin-top: -2vw">
        <!-- 左右雙欄佈局 -->
        <div class="grid grid-cols-2 gap-8">
          <!-- 第一個 feeling box -->
          <div class="feeling-container">
            <div class="category-title">【黑客組】</div>
            <div class="flex items-center justify-center">
              <!-- 左箭頭 -->
              <button @click="previousFeeling(0)" class="arrow-btn">
                <img src="../../assets/Statistics/left-arrow.svg" alt="Previous" class="w-6 h-6" />
              </button>

              <!-- 感言內容 -->
              <div class="feeling-content relative w-full">
                <img
                  :src="getFeelingImageUrl(currentFeelings[0])"
                  :alt="`感言 ${currentFeelings[0]}`"
                  class="w-full h-auto"
                />
                <div
                  class="feeling-text absolute inset-0 flex items-center justify-center text-center m-[1vw]"
                >
                  {{ getCurrentFeeling(0) }}
                </div>
              </div>

              <!-- 右箭頭 -->
              <button @click="nextFeeling(0)" class="arrow-btn">
                <img src="../../assets/Statistics/right-arrow.svg" alt="Next" class="w-6 h-6" />
              </button>
            </div>
          </div>

          <!-- 第二個 feeling box -->
          <div class="feeling-container">
            <div class="category-title">【創客交流組】</div>
            <div class="flex items-center justify-center">
              <!-- 左箭頭 -->
              <button @click="previousFeeling(1)" class="arrow-btn">
                <img src="../../assets/Statistics/left-arrow.svg" alt="Previous" class="w-6 h-6" />
              </button>

              <!-- 感言內容 -->
              <div class="feeling-content relative w-full">
                <img
                  :src="getFeelingImageUrl(currentFeelings[1])"
                  :alt="`感言 ${currentFeelings[1]}`"
                  class="w-full h-auto"
                />
                <div
                  class="feeling-text absolute inset-0 flex items-center justify-center text-center m-[1vw]"
                >
                  {{ getCurrentFeeling(1) }}
                </div>
              </div>

              <!-- 右箭頭 -->
              <button @click="nextFeeling(1)" class="arrow-btn">
                <img src="../../assets/Statistics/right-arrow.svg" alt="Next" class="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineOptions({
  name: 'ParticipantFeelings',
})

const isOpen = ref(false)

const currentFeelings = ref([0, 0]) // 改為從 0 開始
const totalFeelings = 3 // 總共有多少個感言

// 黑客組感言內容
const hackerFeelings = [
  '參加梅竹黑客松讓我們非常有成就感！我們花了很多時間鑽研自己未曾涉足的領域，通過團隊討論與協作嘗試新技術，也從中收穫不少知識和經驗，並且也順利在比賽中取得佳績，這讓大家都很滿足。',
  '這是我第一次參加黑客松，也很高興是和好朋友們一起完成這次比賽。我們每個人都投入各自的任務，全程沒有閒著的人，每個人都在努力完成自己的部分、彼此支持，即使我的部分很晚才完成，其他人也一直等我，這讓我非常感動。',
  '我本身是一位創客，會參加各種黑客松，創客的生活，就是不同的創造及研發，雖然說不一定能實際改變生活，但可以為大家帶來一些啟發，人具有影響力，我們今天的發表也可以為台下的人帶來腦力激盪，期許有一天，總有一個產品是可以影響世界的。',
]

// 創客組感言內容
const makerFeelings = [
  '這次活動讓我們都感到非常開心，相較於之前參賽的經驗，我們這次對比賽的流程和目標有了更深入的理解，尤其在報告方面，我們能更精確地表達作品概念。同時，也感受到團隊間的成長，並因此取得成果，感到非常欣慰。',
  '原本想要做公車相關的主題，不過第一天和交通處長討論過後，發現我們的發現和實際情況會有些不足。但是處長給我們很多不同的數據和實質建議，一開始的挫折反而是讓我們收穫最多的地方。可以直接和交通部的處長講到話非常難得，也在這裡看到很多值得學習的強者，參加梅竹黑客松真的是很棒的機會。',
  '今年的活動氛圍比以往更輕鬆愉快，競爭雖然激烈，但參賽者間的互動更具交流性，少了緊張的競爭感。可能因為角色的轉換，從工作人員變成參賽者後，我們更能放鬆，享受活動的樂趣。',
]

const getFeelingImageUrl = (index) => {
  return new URL(`../../assets/Statistics/feeling-box${index + 1}.svg`, import.meta.url).href
}

// 獲取當前感言文字
const getCurrentFeeling = (boxIndex) => {
  if (boxIndex === 0) {
    return hackerFeelings[currentFeelings.value[0]]
  } else {
    return makerFeelings[currentFeelings.value[1]]
  }
}

function toggleFeelings() {
  isOpen.value = !isOpen.value
}

// 切換到下一個感言
function nextFeeling(boxIndex) {
  if (currentFeelings.value[boxIndex] < totalFeelings - 1) {
    currentFeelings.value[boxIndex]++
  } else {
    currentFeelings.value[boxIndex] = 0 // 回到第一個
  }
}

// 切換到上一個感言
function previousFeeling(boxIndex) {
  if (currentFeelings.value[boxIndex] > 0) {
    currentFeelings.value[boxIndex]--
  } else {
    currentFeelings.value[boxIndex] = totalFeelings - 1 // 回到最後一個
  }
}
</script>

<style scoped>
.responsive-icon {
  font-size: max(24px, 3.33vw);
}

.statistics-bar {
  position: relative;
  background: transparent;
}

.svg-container {
  background: transparent !important;
}

/* 感言容器樣式 */
.feeling-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  gap: 1.5rem; /* 增加標題和感言內容之間的間距 */
}

/* 分類標題樣式 */
.category-title {
  color: #d6a0b2;
  text-align: center;
  font-family: 'Chiron Hei HK Text', sans-serif;
  font-size: max(16px, 2.3vw); /* 響應式字體大小 */
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.arrow-btn {
  padding: 0.5rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.8);
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);
  flex-shrink: 0; /* 防止箭頭被壓縮 */
}

.arrow-btn:hover {
  background: rgba(255, 255, 255, 0.9);
  transform: scale(1.1);
}

.arrow-btn:active {
  transform: scale(0.95);
}

/* 折疊動畫 */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.slide-down-enter-from,
.slide-down-leave-to {
  max-height: 0;
  opacity: 0;
  transform: translateY(-10px);
}

.slide-down-enter-to,
.slide-down-leave-from {
  max-height: 800px;
  opacity: 1;
  transform: translateY(0);
}
.feeling-content img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: contain; /* Ensure the image is fully visible */
}
.feeling-text {
  color: #2d3e63;
  font-family: 'Chiron Hei HK Text', sans-serif;
  font-size: max(12px, 1.5vw); /* 響應式字體大小 */
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>
