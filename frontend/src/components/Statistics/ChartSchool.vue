<template>
  <div class="items-center justify-center w-full h-full">
    <canvas ref="canvasRef" id="myChart"></canvas>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { Chart, PieController, ArcElement, Tooltip } from 'chart.js'

Chart.register(PieController, ArcElement, Tooltip)

defineOptions({
  name: 'ChartSchool',
})

let chartInstance = null
const canvasRef = ref(null)

onMounted(() => {
  if (canvasRef.value) {
    if (chartInstance) {
      chartInstance.destroy()
    }
    chartInstance = new Chart(canvasRef.value, {
      type: 'pie',
      data: {
        labels: [
          '國立清華大學',
          '國立陽明交通大學',
          '其他',
          '國立臺灣大學',
          '國立成功大學',
          '國立臺灣科技大學',
          '國立中央大學',
          '國立政治大學',
        ],
        datasets: [
          {
            data: [37.0, 38.0, 8.1, 2.4, 5.1, 1.5, 6.0, 1.8],
            backgroundColor: [
              '#C27992',
              '#2D3E63',
              '#4B5C82',
              '#7489B8',
              '#A6B3CF',
              '#EDDFE2',
              '#DBBDC7',
              '#D6A0B2',
            ],
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          tooltip: {
            enabled: true,
            callbacks: {
              label: function (context) {
                const value = context.parsed
                return `${value}%`
              },
            },
          },
        },
      },
    })
  }
})

// 清理圖表
onUnmounted(() => {
  if (chartInstance) {
    chartInstance.destroy()
  }
})
</script>

<style scoped>
canvas {
  max-width: 100%;
  width: 100%;
  height: auto;
}
</style>
