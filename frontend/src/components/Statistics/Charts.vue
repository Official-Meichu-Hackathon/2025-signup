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
            <!-- 2x2 Grid Layout with custom proportions -->
            <div class="chart-grid">
              <!-- 上半部左側 -->
              <div class="upper-section flex flex-col items-center justify-center">
                <div class="text-center">
                  <h3 class="blue-text chart-title upper-chart-title">參賽者年級比</h3>
                </div>
                <div class="chart-image">
                  <img src="../../assets/Statistics/chart2.svg" alt="圖表2" class="mx-auto" />
                </div>
              </div>

              <!-- 上半部右側 -->
              <div class="upper-section flex flex-col items-center justify-center">
                <div class="text-center">
                  <h3 class="blue-text chart-title upper-chart-title">參賽者學校分佈</h3>
                </div>
                <div class="chart-image">
                  <img src="../../assets/Statistics/chart2.svg" alt="圖表2" class="mx-auto" />
                </div>
              </div>

              <!-- 下半部左側 -->
              <div class="lower-section flex flex-col items-center justify-center">
                <div class="text-center">
                  <h3 class="blue-text chart-title lower-chart-title">參賽者科系分佈</h3>
                  <p class="pink-text chart-subtitle text-gray-600">【黑客組】</p>
                </div>
                <div class="chart-image">
                  <img src="../../assets/Statistics/chart1.svg" alt="圖表1" class="mx-auto" />
                </div>
              </div>

              <!-- 下半部右側 -->
              <div class="lower-section flex flex-col items-center justify-center">
                <div class="text-center">
                  <h3 class="blue-text chart-title lower-chart-title">參賽者科系分佈</h3>
                  <p class="pink-text chart-subtitle text-gray-600">【創客交流組】</p>
                </div>
                <div class="chart-image">
                  <img src="../../assets/Statistics/chart2.svg" alt="圖表2" class="mx-auto" />
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
          <div class="chart-box">
            <!-- 2x2 Grid Layout with custom proportions -->
            <div class="chart-grid">
              <!-- 上半部左側 -->
              <div class="upper-section flex flex-col items-center justify-center">
                <div class="text-center">
                  <h3 class="blue-text chart-title upper-chart-title">參賽者年級比</h3>
                </div>
                <div class="chart-image">
                  <img src="../../assets/Statistics/chart2.svg" alt="圖表2" class="mx-auto" />
                </div>
              </div>

              <!-- 上半部右側 -->
              <div class="upper-section flex flex-col items-center justify-center">
                <div class="text-center">
                  <h3 class="blue-text chart-title upper-chart-title">參賽者學校分佈</h3>
                </div>
                <div class="chart-image">
                  <img src="../../assets/Statistics/chart2.svg" alt="圖表2" class="mx-auto" />
                </div>
              </div>

              <!-- 下半部左側 -->
              <div class="lower-section flex flex-col items-center justify-center">
                <div class="text-center">
                  <h3 class="blue-text chart-title lower-chart-title">參賽者科系分佈</h3>
                  <p class="pink-text chart-subtitle text-gray-600">【黑客組】</p>
                </div>
                <div class="chart-image">
                  <img src="../../assets/Statistics/chart1.svg" alt="圖表1" class="mx-auto" />
                </div>
              </div>

              <!-- 下半部右側 -->
              <div class="lower-section flex flex-col items-center justify-center">
                <div class="text-center">
                  <h3 class="blue-text chart-title lower-chart-title">參賽者科系分佈</h3>
                  <p class="pink-text chart-subtitle text-gray-600">【創客交流組】</p>
                </div>
                <div class="chart-image">
                  <img src="../../assets/Statistics/chart2.svg" alt="圖表2" class="mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <!-- <div id="chartdiv" style="width: 100%; height: 500px; margin-top: 20px;"></div> -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
// import * as am4core from "@amcharts/amcharts4/core"
// import * as am4charts from "@amcharts/amcharts4/charts"

defineOptions({
  name: 'StatisticsCharts',
})

const isOpen = ref(false)
// let chart = null

function toggleStats() {
  isOpen.value = !isOpen.value
}

// onMounted(() => {
//   // 創建圖表
//   chart = am4core.create("chartdiv", am4charts.PieChart);

//   // 添加數據
//   chart.data = [{
//     "country": "Lithuania",
//     "litres": 501.9
//   }, {
//     "country": "Czech Republic",
//     "litres": 301.9
//   }, {
//     "country": "Ireland",
//     "litres": 201.1
//   }, {
//     "country": "Germany",
//     "litres": 165.8
//   }, {
//     "country": "Australia",
//     "litres": 139.9
//   }, {
//     "country": "Austria",
//     "litres": 128.3
//   }, {
//     "country": "UK",
//     "litres": 99
//   }, {
//     "country": "Belgium",
//     "litres": 60
//   }, {
//     "country": "The Netherlands",
//     "litres": 50
//   }];

//   // 添加和配置圓餅圖系列
//   var pieSeries = chart.series.push(new am4charts.PieSeries());
//   pieSeries.dataFields.value = "litres";
//   pieSeries.dataFields.category = "country";

//   // 添加標籤
//   pieSeries.labels.template.text = "{category}: {value.percent.formatNumber('#.0')}%";

// })

// onUnmounted(() => {
//   // 清理圖表資源
//   if (chart) {
//     chart.dispose();
//   }
// })
</script>

<style scoped>
@import './statistics.css';
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
    /* 虛線長度 */ transparent 5px,
    transparent 12px /* 虛線間距 */
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

.chart-image img {
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
</style>
