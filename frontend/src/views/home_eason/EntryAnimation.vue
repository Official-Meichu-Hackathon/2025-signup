<template>
  <div>
    <div ref="scrollContainer" class="scroll-container">
      <canvas ref="canvasRef" class="sticky-canvas"></canvas>
    </div>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
defineOptions({
  name: 'EntryAnimation',
})

const scrollContainer = ref(null)
const canvasRef = ref(null)

const frameCnt = 27 // 23
const imageSrc = []
const loadedImages = []

for (let i = 1; i <= frameCnt; i++) {
  imageSrc.push(`/EntryAnimation/frame-${i}.png`)
}

let context = null

const drawFrame = (idx) => {
  if (context && loadedImages[idx]) {
    context.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height)
    context.drawImage(loadedImages[idx], 0, 0, canvasRef.value.width, canvasRef.value.height)
  } else {
    console.error(`Image at index ${idx} is not loaded.`)
  }
}

const handleScroll = () => {
  if (!scrollContainer.value) {
    console.error('Scroll container is not defined.')
    return
  }

  const rect = scrollContainer.value.getBoundingClientRect()
  const { top, height } = rect //top is the dist relative to viewport (positive when element top is below viewport)
  const scrollableDist = height - window.innerHeight // canvas contiainer height - viewport height
  const scrollProgress = Math.max(0, Math.min(1, -top / scrollableDist))
  const frameIndex = Math.min(frameCnt - 1, Math.floor(scrollProgress * frameCnt))

  requestAnimationFrame(() => {
    // using requestAnimationFrame for smoother animation
    drawFrame(frameIndex) // this will work too, but might not sync with browser repaint
  })
}
onMounted(() => {
  context = canvasRef.value.getContext('2d')

  canvasRef.value.width = 1440
  canvasRef.value.height = 1020

  const imagePromises = imageSrc.map((src) => {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.src = src
      img.onload = () => resolve(img)
      img.onerror = reject
    })
  })

  Promise.all(imagePromises).then((images) => {
    loadedImages.push(...images)
    drawFrame(0)
    window.addEventListener('scroll', handleScroll)
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.scroll-container {
  height: 200vh;
  position: relative;
  width: 100%;
  background-color: #f0f0f0;
}

.sticky-canvas {
  position: sticky;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  object-fit: cover;
}
</style>
