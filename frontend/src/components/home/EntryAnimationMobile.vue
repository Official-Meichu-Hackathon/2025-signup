<template>
  <div class="animation-container">
    <canvas ref="canvas" class="animation-canvas"></canvas>
  </div>
</template>

<script setup>
import { onMounted, ref, onUnmounted, inject } from 'vue'

const canvas = ref(null)
const frameCnt = 14
const imageSrc = []
const loadedImages = []
let animationId = null
let currentFrame = 0
const fps = 10 // Frames per second
const frameInterval = 1000 / fps
let lastFrameTime = 0

// Inject the function to notify parent that animation is loaded
const setEntryAnimationLoaded = inject('setEntryAnimationLoaded', null)

for (let i = 1; i <= frameCnt; i++) {
  imageSrc.push(`/EntryAnimationMobile/frame-${i}.webp`)
}

const imagePromises = imageSrc.map((src) => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.src = src
    img.onload = () => resolve(img)
    img.onerror = reject
  })
})

const animate = (timestamp) => {
  if (timestamp - lastFrameTime >= frameInterval) {
    const ctx = canvas.value.getContext('2d')
    const currentImage = loadedImages[currentFrame]

    if (currentImage) {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)

      // Draw current frame
      ctx.drawImage(currentImage, 0, 0, canvas.value.width, canvas.value.height)
    }

    // Move to next frame, but stop at the last frame
    if (currentFrame < frameCnt - 1) {
      currentFrame++
      lastFrameTime = timestamp
      animationId = requestAnimationFrame(animate)
    } else {
      // Animation complete, stop here
      animationId = null
    }
  } else {
    // Continue animation if we haven't reached the frame interval yet
    animationId = requestAnimationFrame(animate)
  }
}

const startAnimation = () => {
  if (loadedImages.length === frameCnt) {
    animationId = requestAnimationFrame(animate)
  }
}

onMounted(() => {
  Promise.all(imagePromises)
    .then((images) => {
      images.forEach((img, index) => {
        loadedImages[index] = img
      })

      // Set canvas size based on first image
      const firstImage = loadedImages[0]
      if (firstImage && canvas.value) {
        canvas.value.width = firstImage.width
        canvas.value.height = firstImage.height

        // Notify parent that animation is loaded
        if (setEntryAnimationLoaded) {
          setEntryAnimationLoaded()
        }

        startAnimation()
      }
    })
    .catch((error) => {
      console.error('Error loading images:', error)
      // Even on error, notify that loading is complete
      if (setEntryAnimationLoaded) {
        setEntryAnimationLoaded()
      }
    })
})

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
})
</script>

<style scoped>
.animation-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.animation-canvas {
  width: 100%;
  height: 100%;
}
</style>
