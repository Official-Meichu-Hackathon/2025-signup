<template>
  <div class="statistics-bar statistics-container z-[100]">
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
        <div class="relative z-10 flex items-center justify-center top-[20%]">
          <h3 class="blue-text bar-title-pc shadow-text">梅竹黑客松參賽數據</h3>
          <span class="absolute toggle-icon-pc" @click="toggleStats">
            {{ isOpen ? '−' : '+' }}
          </span>
        </div>
      </div>
      <transition name="slide-down">
        <div v-if="isOpen" class="flex justify-center items-center mb-8">
          <div class="chart-box">
            <!-- 1x4 Flex Row Layout -->
            <div class="chart-grid flex flex-row flex-wrap justify-center items-center">
              <!-- 上半部左側 -->
              <div class="flex flex-col items-center justify-center">
                <div class="text-center">
                  <h3 class="blue-text chart-title upper-chart-title">參賽者年級比</h3>
                </div>
                <div class="chart-image">
                  <ChartAge />
                </div>
              </div>

              <!-- 上半部右側 -->
              <div class="flex flex-col items-center justify-center">
                <div class="text-center">
                  <h3 class="blue-text chart-title upper-chart-title">參賽者學校分佈</h3>
                </div>
                <div class="chart-image">
                  <ChartSchool />
                </div>
              </div>

              <!-- 下半部左側 -->
              <div class="flex flex-col items-center justify-center">
                <div class="text-center">
                  <h3 class="blue-text chart-title lower-chart-title">參賽者科系分佈</h3>
                  <p class="pink-text chart-subtitle text-gray-600">【黑客組】</p>
                </div>
                <div class="chart-image">
                  <ChartHacker />
                </div>
              </div>

              <!-- 下半部右側 -->
              <div class="flex flex-col items-center justify-center">
                <div class="text-center">
                  <h3 class="blue-text chart-title lower-chart-title">參賽者科系分佈</h3>
                  <p class="pink-text chart-subtitle text-gray-600">【創客交流組】</p>
                </div>
                <div class="chart-image">
                  <ChartMaker />
                </div>
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
        <div class="relative z-10 flex items-center justify-center top-[20%]">
          <h3 class="blue-text bar-title-mobile shadow-text">梅竹黑客松參賽數據</h3>
          <span class="absolute toggle-icon-mobile" @click="toggleStats">
            {{ isOpen ? '−' : '+' }}
          </span>
        </div>
      </div>
      <transition name="slide-down">
        <div v-if="isOpen" class="flex justify-center items-center mb-8">
          <div class="chart-box-mobile">
            <img
              src="../../assets/Statistics/chartbg-left.svg"
              class="chartbg-left-mobile"
              alt="bg-left"
            />
            <img
              src="../../assets/Statistics/chartbg-right.svg"
              class="chartbg-right-mobile"
              alt="bg-right"
            />
            <div
              class="chart-grid-mobile h-full flex flex-col justify-evenly items-center"
              style="position: relative"
            >
              <div class="chart-item items-center justify-center">
                <div class="text-center">
                  <h3 class="blue-text chart-title-mobile">參賽者年級比</h3>
                </div>
                <div class="pie-chart-mobile">
                  <ChartAge />
                </div>
              </div>
              <div class="chart-item items-center justify-center">
                <div class="text-center">
                  <h3 class="blue-text chart-title-mobile">參賽者學校分佈</h3>
                </div>
                <div class="pie-chart-mobile">
                  <ChartSchool />
                </div>
              </div>
              <div class="chart-item items-center justify-center">
                <div class="text-center">
                  <h3 class="blue-text chart-title-mobile">參賽者科系分佈</h3>
                  <p class="pink-text chart-subtitle-mobile text-gray-600">【黑客組】</p>
                </div>
                <div class="pie-chart-mobile">
                  <ChartHacker />
                </div>
              </div>
              <div class="chart-item items-center justify-center">
                <div class="text-center">
                  <h3 class="blue-text chart-title-mobile">參賽者科系分佈</h3>
                  <p class="pink-text chart-subtitle-mobile text-gray-600">【創客交流組】</p>
                </div>
                <div class="pie-chart-mobile">
                  <ChartMaker />
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ChartAge from './ChartAge.vue'
import ChartSchool from './ChartSchool.vue'
import ChartMaker from './ChartMaker.vue'
import ChartHacker from './ChartHacker.vue'

defineOptions({
  name: 'StatisticsCharts',
})

const isOpen = ref(false)

function toggleStats() {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
@import './statistics.css';
.chart-title-mobile {
  font-size: 3.5vw;
  margin: 1.7vw 0;
}
.chart-subtitle-mobile {
  font-size: 3vw;
  margin-top: -1vw;
  margin-bottom: 1.7vw;
}
body {
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
}

#chartdiv {
  width: 100%;
  height: 500px;
  margin-top: 20px;
}

.responsive-subtitle {
  font-size: max(18px, 2.5vw);
}

.statistics-bar {
  position: relative;
  background: transparent;
}

.svg-container {
  background: transparent !important;
}

.chart-box {
  /* 背景圖片 */
  background-image: url('../../assets/Statistics/chart-background.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  width: 80vw;
  height: 60vw;
  padding: 3vw 4vw; /* 上下2vw 左右5vw */
  margin-bottom: 6vw;

  border-radius: 24px;
  position: relative;
}
.chart-box-mobile {
  background-image: url('../../assets/Statistics/chart-background-mobile.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 70vw;
  height: 200vw;
  padding: 3vw;
  margin-bottom: 6vw;
  border-radius: 24px;
  position: relative;
}
/* 自定義虛線邊框 */
.chart-box::before {
  content: '';
  position: absolute;
  top: -0.8px;
  left: -0.8px;
  right: -0.8px;
  bottom: -0.8px;
  background: repeating-linear-gradient(
    -45deg,
    #d6a0b2 0,
    #d6a0b2 7px,
    transparent 5px,
    /* 虛線長度 */ transparent 12px /* 虛線間距 */
  );
  border-radius: 24px;
  pointer-events: none;
  z-index: -1;
}
.chart-box-mobile::before {
  content: '';
  position: absolute;
  top: -0.8px;
  left: -0.8px;
  right: -0.8px;
  bottom: -0.8px;
  background: repeating-linear-gradient(
    -45deg,
    #d6a0b2 0,
    #d6a0b2 7px,
    transparent 5px,
    /* 虛線長度 */ transparent 12px /* 虛線間距 */
  );
  border-radius: 24px;
  pointer-events: none;
  z-index: -1;
}
/* Grid layout with custom proportions */
.chart-grid {
  display: grid;
  grid-template-columns: 1fr 1fr; /* 2 columns */
  grid-template-rows: 10fr 10.5fr;
  gap: 2vw;
  height: 100%;
}

.chart-image {
  max-width: 20vw;
  height: auto;
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

/* mobile chart-item 樣式 */
.chart-grid-mobile .chart-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 0;
  max-width: none;
  margin: 0.5rem 0;
}

.chartbg-left-mobile {
  position: absolute;
  top: 0;
  left: 0;
  width: 350px;
  height: auto;
  border-top-left-radius: 24px;
  z-index: 0;
}
.chartbg-right-mobile {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 350px;
  height: auto;
  border-bottom-right-radius: 24px;
  z-index: 0;
}
.pie-chart-mobile {
  width: 30vw;
  height: 30vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
