<template>
  <div class="w-full flex flex-col">
    <!-- 參賽數據封面 -->
    <div class="relative w-full overflow-hidden">
      <img src="../../assets/Statistics/background.svg" class="w-full h-auto" alt="background" />
      <div class="absolute inset-0 flex items-center justify-center z-10">
        <img
          src="../../assets/Statistics/center-icon.svg"
          class="w-[62%] h-auto"
          alt="center-icon"
        />
      </div>
      <div class="absolute top-[25%] left-[25%] z-20">
        <img
          src="../../assets/Statistics/left-upper-icon.svg"
          class="w-[75%] h-auto"
          alt="left-upper-icon"
        />
      </div>
      <div class="absolute bottom-[33%] right-[18%] z-20">
        <img
          src="../../assets/Statistics/right-lower-icon.svg"
          class="w-[80%] h-auto"
          alt="right-lower-icon"
        />
      </div>
      <div class="absolute inset-0 flex items-center justify-center z-30">
        <h3 class="blue-text page-title">參賽數據</h3>
      </div>
    </div>

    <!-- StatisticsBar -->
    <div class="relative" style="margin-top: -2.78vw">
      <!-- ratio: 1440:40  -->
      <!-- 梅竹黑客松參賽數據 -->
      <StatisticsCharts />
      <!-- 參賽者感言 -->
      <ParticipantFeelings />
      <!-- 成果平台網址 -->
      <div class="statistics-bar z-[102]" style="margin-bottom: 0">
        <div class="relative overflow-hidden" style="aspect-ratio: 1440/210">
          <img
            src="../../assets/Statistics/bar-top.svg"
            class="absolute inset-0 w-full h-full object-cover"
            alt="背景裝飾"
          />
          <div class="relative z-10 flex items-center justify-center top-[20%]">
            <h3 class="blue-text bar-title">成果平台網址</h3>
          </div>
          <div class="relative flex items-center justify-center top-[40%]">
            <a
              href="#"
              class="pink-text responsive-small hover:underline transition-all duration-200"
            >
              點擊文字即可進入
            </a>
          </div>
        </div>
        <div class="bg-white border-t-0" style="height: 200px">
          <!-- blank space area -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import StatisticsCharts from './Charts.vue'
import ParticipantFeelings from './Feelings.vue'

defineOptions({
  name: 'FoldablePage',
})
</script>

<style>
/* 基礎字體樣式 */
.blue-text {
  color: #2d3e63;
  text-align: center;
  font-family: 'Chiron Hei HK Text', sans-serif;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.pink-text {
  color: #d6a0b2;
  text-align: center;
  font-family: 'Chiron Hei HK Text', sans-serif;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

/* 字體大小設定 */
.page-title {
  font-size: max(36px, 6.5vw);
}

.bar-title {
  font-size: max(18px, 2.5vw);
}

.responsive-icon {
  font-size: max(24px, 3.33vw);
}

.responsive-small {
  font-size: max(12px, 1.2vw);
}

/* 其他樣式 */
.statistics-bar {
  position: relative;
  background: transparent;
}

.svg-container {
  background: transparent !important;
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
</style>
