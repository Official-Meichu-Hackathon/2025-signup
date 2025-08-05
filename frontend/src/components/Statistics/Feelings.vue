<template>
  <div class="statistics-bar z-[101]">
    <div class="hidden md:block" style="margin-bottom: -5vw">
      <div
        class="relative svg-container overflow-hidden rounded-t-lg"
        style="aspect-ratio: 1440/210"
      >
        <img
          src="../../assets/Statistics/bar-pc.svg"
          class="absolute inset-0 w-full h-full object-cover"
          alt="背景裝飾"
        />
        <div class="relative z-10 flex items-center justify-center" style="padding-top: 3vw">
          <h3 class="blue-text bar-title-pc shadow-text">參賽者感言</h3>
          <span class="absolute toggle-icon-pc" @click="toggleFeelings">
            {{ isOpen ? '−' : '+' }}
          </span>
        </div>
      </div>
      <transition name="slide-down">
        <div v-if="isOpen" class="px-[5vw] pb-[8vw]" style="margin-top: -2vw">
          <!-- 左右雙欄佈局 -->
          <div class="grid grid-cols-2 gap-8">
            <div
              v-for="(category, index) in feelingCategories"
              :key="index"
              class="feeling-container"
            >
              <div class="category-title">{{ category.title }}</div>
              <div class="flex items-center justify-center">
                <!-- 左箭頭 -->
                <button @click="previousFeeling(index)" class="arrow-btn">
                  <img
                    src="../../assets/Statistics/left-arrow.svg"
                    alt="Previous"
                    class="arrow-pc"
                  />
                </button>

                <!-- 感言內容 -->
                <div class="feeling-content relative w-full">
                  <img
                    :src="getFeelingImageUrl(currentFeelings[index])"
                    :alt="`感言 ${currentFeelings[index]}`"
                    class="w-full h-auto"
                  />
                  <img
                    src="../../assets/Statistics/sparkle-left.svg"
                    alt="Sparkle Left"
                    class="absolute sparkle-animation sparkle-left"
                    v-if="index === 0"
                  />
                  <img
                    src="../../assets/Statistics/sparkle-right.svg"
                    alt="Sparkle Right"
                    class="absolute sparkle-animation sparkle-right"
                    v-if="index === 1"
                  />
                  <div
                    class="feeling-text absolute inset-0 flex items-center justify-center m-[1vw]"
                  >
                    <pre class="whitespace-pre-wrap">{{
                      category.feelings[currentFeelings[index]]
                    }}</pre>
                  </div>
                </div>

                <!-- 右箭頭 -->
                <button @click="nextFeeling(index)" class="arrow-btn">
                  <img src="../../assets/Statistics/right-arrow.svg" alt="Next" class="arrow-pc" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <!-- mobile -->
    <div class="md:hidden" style="margin-bottom: -8vw">
      <div class="relative svg-container overflow-hidden rounded-t-lg" style="aspect-ratio: 393/80">
        <img
          src="../../assets/Statistics/bar-mobile-top.svg"
          class="absolute inset-0 w-full h-full object-cover"
          alt="背景裝飾"
        />
        <div class="relative z-10 flex items-center justify-center" style="padding-top: 4vw">
          <h3 class="blue-text bar-title-mobile shadow-text">參賽者感言</h3>
          <span class="absolute toggle-icon-mobile" @click="toggleFeelings">
            {{ isOpen ? '−' : '+' }}
          </span>
        </div>
      </div>
      <transition name="slide-down">
        <div v-if="isOpen" class="px-[5vw] pb-[8vw]" style="margin-top: -2vw">
          <!-- 左右雙欄佈局 -->
          <div class="grid grid-rows-2 gap-8" style="margin-bottom: 10vw">
            <!-- 第一個 feeling box -->
            <div
              class="feeling-container"
              v-for="(category, index) in feelingCategories"
              :key="index"
            >
              <div class="pink-text" style="font-size: 3vw">{{ category.title }}</div>
              <div class="w-full flex items-center justify-center">
                <!-- 左箭頭 -->
                <button @click="previousFeeling(index)" class="arrow-btn">
                  <img
                    src="../../assets/Statistics/left-arrow.svg"
                    alt="Previous"
                    class="arrow-mobile"
                  />
                </button>

                <!-- 感言內容 -->
                <div class="feeling-content relative" style="width: 60vw; height: auto">
                  <img
                    :src="getFeelingImageUrl(currentFeelings[index])"
                    :alt="`感言 ${currentFeelings[index]}`"
                    class="w-full h-auto"
                  />
                  <img
                    src="../../assets/Statistics/sparkle-left.svg"
                    alt="Sparkle Left"
                    class="absolute sparkle-animation-mobile sparkle-left-mobile"
                    v-if="index === 0"
                  />
                  <img
                    src="../../assets/Statistics/sparkle-right.svg"
                    alt="Sparkle Right"
                    class="absolute sparkle-animation-mobile sparkle-right-mobile"
                    v-if="index === 1"
                  />
                  <div
                    class="feeling-text absolute inset-0 flex items-center justify-center m-[1vw]"
                  >
                    <pre class="whitespace-pre-wrap">{{
                      category.feelings[currentFeelings[index]]
                    }}</pre>
                  </div>
                </div>

                <!-- 右箭頭 -->
                <button @click="nextFeeling(index)" class="arrow-btn">
                  <img
                    src="../../assets/Statistics/right-arrow.svg"
                    alt="Next"
                    class="arrow-mobile"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

defineOptions({
  name: 'ParticipantFeelings',
})

const isOpen = ref(false)
const isMobile = ref(false)

const currentFeelings = ref([0, 0]) // 改為從 0 開始
const totalFeelings = 3 // 總共有多少個感言

// 檢測螢幕尺寸
const checkScreenSize = () => {
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize)
})

// 整合感言數據
const feelingCategories = [
  {
    title: '【黑客組】',
    feelings: [
      '“參加梅竹黑客松讓我們非常有成就感！我\n們花了很多時間鑽研自己未曾涉足的領域，\n通過團隊討論與協作嘗試新技術，也從中收\n穫不少知識和經驗，並且也順利在比賽中取\n得佳績，這讓大家都很滿足。”',
      '“這是我第一次參加黑客松，也很高興是和\n好朋友們一起完成這次比賽。我們每個人都\n投入各自的任務，全程沒有閒著的人，每個\n人都在努力完成自己的部分、彼此支持，即\n使我的部分很晚才完成，其他人也一直等我\n，這讓我非常感動。”',
      '“我本身是一位創客，會參加各種黑客松，\n創客的生活，就是不同的創造及研發，雖然\n說不一定能實際改變生活，但可以為大家帶\n來一些啟發，人具有影響力，我們今天的發\n表也可以為台下的人帶來腦力激盪，期許有\n一天，總有一個產品是可以影響世界的。”',
    ],
  },
  {
    title: '【創客交流組】',
    feelings: [
      '“這次活動讓我們都感到非常開心，相較於\n之前參賽的經驗，我們這次對比賽的流程和\n目標有了更深入的理解，尤其在報告方面，\n我們能更精確地表達作品概念。同時，也感\n受到團隊間的成長，並因此取得成果，感到\n非常欣慰。”',
      '“原本想要做公車相關的主題，不過第一天\n和交通處長討論過後，發現我們的發現和實\n際情況會有些不足。但是處長給我們很多不\n同的數據和實質建議，一開始的挫折反而是\n讓我們收穫最多的地方。可以直接和交通部\n的處長講到話非常難得，也在這裡看到很多\n值得學習的強者，參加梅竹黑客松真的是很\n棒的機會。”',
      '“今年的活動氛圍比以往更輕鬆愉快，競爭\n雖然激烈，但參賽者間的互動更具交流性，\n少了緊張的競爭感。可能因為角色的轉換，\n從工作人員變成參賽者後，我們更能放鬆，\n享受活動的樂趣。”',
    ],
  },
]

const getFeelingImageUrl = (index) => {
  const suffix = isMobile.value ? '-mobile' : '-pc'
  return new URL(`../../assets/Statistics/feeling-box${index + 1}${suffix}.svg`, import.meta.url)
    .href
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
  gap: 1.5rem;
}

.category-title {
  color: #d6a0b2;
  text-align: center;
  font-family: 'Chiron Hei HK Text', sans-serif;
  font-size: max(16px, 2.3vw);
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.arrow-pc {
  width: 2.5vw;
  height: 2.5vw;
}
.arrow-mobile {
  width: 4vw;
  height: 4vw;
}

.arrow-btn {
  padding: 1vw;
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

.feeling-text {
  color: #2d3e63;
  font-family: 'Chiron Hei HK Text', sans-serif;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  font-size: 2.5vw; /* default: mobile */
  letter-spacing: 0.03em;
  line-height: 1.5;
}

@media (min-width: 768px) {
  .feeling-text {
    font-size: 1.5vw;
  }
}

@media (min-width: 1536px) {
  .feeling-text {
    font-size: min(1.5vw, 23px);
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.sparkle-animation {
  position: absolute;
  width: 10vw;
  height: auto;
  object-fit: cover;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  animation: rotate 5s linear infinite;
}
.sparkle-animation-mobile {
  position: absolute;
  width: 13vw;
  height: auto;
  object-fit: cover;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  animation: rotate 5s linear infinite;
}
.sparkle-left {
  left: -5vw;
  top: -5vw;
}
.sparkle-right {
  right: -4vw;
  bottom: -4vw;
}

.sparkle-left-mobile {
  left: -4vw;
  top: -4vw;
}
.sparkle-right-mobile {
  right: -3vw;
  bottom: -3vw;
}
</style>
