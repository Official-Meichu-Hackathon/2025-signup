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
  name: 'ChartAge',
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
        labels: ['大四', '大一', '大三', '大二', '碩博'],
        datasets: [
          {
            data: [26.7, 5.8, 46.9, 14.8, 5.3],
            backgroundColor: ['#2D3E63', '#D6A0B2', '#C27992', '#4B5C82', '#7489B8'],
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
