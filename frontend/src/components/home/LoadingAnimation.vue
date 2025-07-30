<template>
  <div class="loading-animation flex flex-col items-center justify-center">
    <div v-show="imagesLoaded" class="frames-container">
      <img
        v-for="(frame, index) in loadingFrames"
        :key="index"
        :src="frame"
        alt="Loading animation"
        class="loading-frame"
        :class="{ 'frame-visible': frameVisible && currentFrame === index }"
      />
    </div>
    <div v-show="!imagesLoaded" class="loading-placeholder">Loading...</div>
    <div v-show="imagesLoaded && fontLoaded" class="font-[Chiron_Hei_HK] font-size-16 font-bold">
      {{ LoadingWord }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentFrame = ref(0)
const imagesLoaded = ref(false)
const fontLoaded = ref(false)
const frameVisible = ref(true)
const LoadingWord = ref('LOADING...')
let animationTimeout = null

const loadingFrames = [
  '/loading_animation/loading_frame1.svg',
  '/loading_animation/loading_frame2.svg',
  '/loading_animation/loading_frame3.svg',
]

// Preload all images and check font
const preloadAssets = async () => {
  const imagePromises = loadingFrames.map((src) => {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.onload = () => resolve(img)
      img.onerror = reject
      img.src = src
    })
  })

  try {
    // Wait for both images and the font to load in parallel
    await Promise.all([
      ...imagePromises,
      loadCustomFont(), // Wait for the font to be truly ready
    ])

    imagesLoaded.value = true
    fontLoaded.value = true
    startAnimation()
  } catch (error) {
    console.error('Failed to load assets:', error)
    // Fallback: show the animation anyway
    imagesLoaded.value = true
    fontLoaded.value = true
    startAnimation()
  }
}

const loadCustomFont = () => {
  return document.fonts.load('16px "Chiron Hei HK"')
}

const startAnimation = () => {
  const animateFrame = () => {
    frameVisible.value = false
    setTimeout(() => {
      currentFrame.value = (currentFrame.value + 1) % loadingFrames.length
      frameVisible.value = true
      animationTimeout = setTimeout(animateFrame, 900)
    }, 100)
  }
  frameVisible.value = true
  animationTimeout = setTimeout(animateFrame, 1000)
}

onMounted(() => {
  preloadAssets()
})

onUnmounted(() => {
  if (animationTimeout) {
    clearTimeout(animationTimeout)
  }
})
</script>

<style scoped>
.loading-animation {
  width: 15vw;
  height: 15vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.frames-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.loading-frame {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: blur(10px);
  opacity: 0;
  transition:
    opacity 0.45s ease-in-out,
    filter 0.45s ease-in-out;
}

.loading-frame.frame-visible {
  filter: blur(0px);
  opacity: 1;
}

.loading-placeholder {
  color: #666;
  font-size: 14px;
}
</style>
