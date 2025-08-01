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
  name: 'ChartHacker',
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
        labels: ['電機資訊學院', '理學院', '管理學院', '藝術學院', '生命科學院', '工學院', '其他'],
        datasets: [
          {
            data: [67.0, 3.2, 20.7, 3.2, 2.1, 0.5, 3.2],
            backgroundColor: [
              '#C27992',
              '#D6A0B2',
              '#2D3E63',
              '#4B5C82',
              '#7489B8',
              '#A6B3CF',
              '#DBBDC7',
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
