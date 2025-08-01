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
  name: 'ChartMaker',
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
          '電機資訊學院',
          '其他',
          '管理學院',
          '教育學院',
          '工學院',
          '藝術學院',
          '原子科學院',
          '人文社會學院',
        ],
        datasets: [
          {
            data: [47.7, 13.6, 18.2, 4.5, 2.3, 2.3, 2.3, 9.1],
            backgroundColor: [
              '#C27992',
              '#D6A0B2',
              '#2D3E63',
              '#4B5C82',
              '#7489B8',
              '#A6B3CF',
              '#EDDFE2',
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
