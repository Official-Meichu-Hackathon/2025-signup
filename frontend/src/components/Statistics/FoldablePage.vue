<template>
  <div class="w-full flex flex-col">
    <!-- 參賽數據封面 -->
    <div class="hidden md:block">
      <div class="relative w-full overflow-hidden">
        <img
          src="../../assets/Statistics/background-pc.svg"
          class="w-full h-auto"
          alt="background"
        />
        <div class="absolute inset-0 flex items-center justify-center z-10">
          <img
            src="../../assets/Statistics/center-icon.svg"
            style="width: 55vw; height: auto"
            alt="center-icon"
          />
        </div>
        <div class="absolute top-[30%] left-[25%] z-20">
          <img
            src="../../assets/Statistics/left-upper-icon.svg"
            style="width: 6vw; height: auto"
            alt="left-upper-icon"
          />
        </div>
        <div class="absolute bottom-[35%] right-[22%] z-20">
          <img
            src="../../assets/Statistics/right-lower-icon.svg"
            style="width: 7vw; height: auto"
            alt="right-lower-icon"
          />
        </div>
        <div class="absolute inset-0 flex items-center justify-center z-30">
          <h3 class="blue-text" style="font-size: 7vw">參賽數據</h3>
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
        <div class="statistics-bar z-[102]">
          <div class="relative overflow-hidden" style="aspect-ratio: 1440/210">
            <img
              src="../../assets/Statistics/bar-pc.svg"
              class="absolute inset-0 w-full h-full object-cover"
              alt="背景裝飾"
            />
            <div class="relative z-10 flex items-center justify-center top-[20%]">
              <h3 class="blue-text bar-title-pc shadow-text">成果平台網址</h3>
            </div>
            <div
              class="relative flex items-center justify-center top-[40%]"
              style="margin-top: -1.5vw"
            >
              <a
                href="#"
                class="pink-text hover:underline transition-all duration-200"
                style="font-size: 1.7vw"
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
    <div class="block md:hidden">
      <!-- 手機版內容 -->
      <div class="relative w-full overflow-hidden">
        <img
          src="../../assets/Statistics/background-mobile.svg"
          class="w-full h-auto"
          alt="background"
        />
        <div class="absolute inset-0 flex items-center justify-center">
          <img
            src="../../assets/Statistics/center-icon-mobile.svg"
            class="absolute z-10"
            style="width: 40vw; height: auto"
          />
          <h3 class="blue-text absolute z-30" style="font-size: 5vw; margin-top: -2vw">參賽數據</h3>
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
        <div class="statistics-bar z-[102]">
          <div class="relative overflow-hidden" style="aspect-ratio: 393/210">
            <img
              src="../../assets/Statistics/bar-mobile-bottom.svg"
              class="absolute inset-0 w-full h-full object-cover"
              alt="背景裝飾"
            />
            <div class="relative z-10 flex items-center justify-center top-[7%]">
              <h3 class="blue-text bar-title-mobile shadow-text">成果平台網址</h3>
            </div>
            <div class="relative flex items-center justify-center top-[13%]">
              <a
                href="#"
                class="pink-text hover:underline transition-all duration-200"
                style="font-size: 2.7vw"
              >
                點擊文字即可進入
              </a>
            </div>
          </div>
          <div class="bg-white border-t-0" style="height: 5vw">
            <!-- blank space area -->
          </div>
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

.shadow-text {
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
}

/* 字體大小設定 */

.bar-title-pc {
  font-size: 2.5vw;
}
.bar-title-mobile {
  font-size: 4vw;
}

.toggle-icon-pc {
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
  font-size: max(24px, 3.33vw);
  color: #2d3e63;
  cursor: pointer;
  right: 3vw;
}
.toggle-icon-mobile {
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
  font-size: 5vw;
  color: #2d3e63;
  cursor: pointer;
  right: 3vw;
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
