<template>
  <div>
    <div ref="scrollContainer" class="scroll-container">
      <div
        v-if="showScrollIndicator || (isAnimationComplete && !userScrolls)"
        :class="['scroll-indicator']"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="arrow-icon"
        >
          <path
            d="M12 5V19M12 19L19 12M12 19L5 12"
            :stroke="showScrollIndicator ? '#FFFFFF' : '#2D3E63'"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <canvas ref="canvasRef" :class="['sticky-canvas', { breathing: isBreathing }]"></canvas>
    </div>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref, inject } from 'vue'
defineOptions({
  name: 'EntryAnimation',
})

const setEntryAnimationLoaded = inject('setEntryAnimationLoaded')

const scrollContainer = ref(null)
const canvasRef = ref(null)
const lastScrollY = ref(0)
const isLoaded = ref(false)
const oneSecondLoaded = ref(false) // Track if one second has passed
const showScrollIndicator = ref(false)
// Add new reactive variables for scroll locking
const isScrollLocked = ref(false)
const isAnimationComplete = ref(false)
const userScrolls = ref(false)

const frameCnt = 23 // 27
const imageSrc = []
const loadedImages = []

const getQualityForBandwidth = () => {
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection
  if (connection && connection.downlink) {
    const downlinkMbps = connection.downlink
    if (downlinkMbps < 1.5) {
      // Speeds below 1.5 Mbps get low quality
      return 'low'
    }
    if (downlinkMbps < 8) {
      // Speeds between 1.5 and 5 Mbps get medium quality
      return 'medium'
    }
    // Speeds above 5 Mbps get high quality
    return 'high'
  }
  // Fallback to a default if the API isn't supported
  return 'medium'
}

const quality = getQualityForBandwidth()

// NOTE: You will need to organize your images into subfolders and name them accordingly.
// Example structure:
// - /public/EntryAnimation/high/frame-1.webp
// - /public/EntryAnimation/medium/frame-1_compressed.webp
// - /public/EntryAnimation/low/frame-1_very_compressed.webp

for (let i = 1; i <= frameCnt; i++) {
  let path = ''
  switch (quality) {
    case 'high':
      path = `/EntryAnimation/high/frame-${i}.webp`
      break
    case 'medium':
      path = `/EntryAnimation/medium/frame-${i}_compressed.webp`
      break
    case 'low':
      path = `/EntryAnimation/medium/frame-${i}_compressed.webp`
      break
  }
  imageSrc.push(path)
}

// Preload images as soon as the script runs
const imagePromises = imageSrc.map((src) => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.src = src
    img.onload = () => resolve(img)
    img.onerror = reject
  })
})

let context = null
const isBreathing = ref(false)
const prevFrameIndex = ref(-1)

const drawFrame = (idx) => {
  if (context && loadedImages[idx]) {
    context.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height)
    context.drawImage(loadedImages[idx], 0, 0, canvasRef.value.width, canvasRef.value.height)

    if (prevFrameIndex.value !== idx) {
      prevFrameIndex.value = idx
      particles.forEach((p) => {
        p.updatePosition(idx)
      })
    }
    particles.forEach((p) => {
      p.update()
      p.draw(context)
    })
    isBreathing.value = idx <= 9
  } else {
    console.error(`Image at index ${idx} is not loaded.`)
  }
}

// Add scroll lock function
const lockScroll = () => {
  isScrollLocked.value = true
  document.body.style.overflow = 'hidden'
  document.body.style.position = 'fixed'
  document.body.style.top = `-${window.scrollY}px`
  document.body.style.width = '100%'
}

// Add scroll unlock function
const unlockScroll = () => {
  const scrollY = document.body.style.top
  document.body.style.overflow = ''
  document.body.style.position = ''
  document.body.style.top = ''
  document.body.style.width = ''
  window.scrollTo(0, parseInt(scrollY || '0') * -1)
  isScrollLocked.value = false
}

const handleScroll = () => {
  // Prevent scrolling if locked
  if (isScrollLocked.value) {
    return
  }

  if (isAnimationComplete.value) {
    userScrolls.value = true
    return
  }
  if (showScrollIndicator.value) {
    showScrollIndicator.value = false
  }
  if (!scrollContainer.value) {
    return
  }

  const rect = scrollContainer.value.getBoundingClientRect()
  const { top, height } = rect
  const scrollableDist = height - window.innerHeight
  const rawScrollProgress = Math.max(0, Math.min(1, (-top + 56) / scrollableDist))

  let scrollProgress = rawScrollProgress
  const frameIndex = Math.min(frameCnt - 1, Math.floor(scrollProgress * frameCnt))

  // Check if we've reached the last frame
  if (frameIndex === frameCnt - 1 && !isAnimationComplete.value) {
    isAnimationComplete.value = true

    // Change scroll container height to 100vh
    scrollContainer.value.style.height = '100vh'

    // Lock scrolling for 0.3 seconds
    lockScroll()
    setTimeout(() => {
      unlockScroll()
    }, 1500)
  }

  requestAnimationFrame(() => {
    drawFrame(frameIndex)
    animate()
  })

  lastScrollY.value = window.scrollY
}

const particles = []
const particleCount = 150

class Particle {
  constructor(canvas) {
    this.canvas = canvas
    this.display = 0
    this.reset() // Initialize with random position
  }

  update() {
    this.x += this.vx
    this.y += this.vy
    this.life--

    const fadeInDuration = 50
    const fadeOutDuration = 50
    if (!this.display) {
      this.opacity = 0
    } else if (this.life > this.maxLife - fadeInDuration) {
      // Fade in
      const timePassed = this.maxLife - this.life
      const fadeRatio = Math.min(1, timePassed / fadeInDuration)
      this.opacity = this.maxOpacity * (fadeRatio * fadeRatio * fadeRatio) + 0.3
    } else if (this.life < fadeOutDuration) {
      // Fade out
      const fadeRatio = Math.max(0, this.life / fadeOutDuration)
      this.opacity = this.maxOpacity * (fadeRatio * fadeRatio * fadeRatio)
    } else {
      this.opacity = this.maxOpacity
    }

    // Reset particle if it's dead or off-screen
    if (this.life <= 0) {
      this.reset()
    }
  }

  updatePosition(frameIndex) {
    const centerX = this.canvas.width / 2
    const centerY = this.canvas.height / 2

    const radius = (radiusPercentage) => {
      const maxRadius = Math.min(centerX, centerY)
      return maxRadius * radiusPercentage
    }

    const distanceFromCenter = Math.sqrt((this.x - centerX) ** 2 + (this.y - centerY) ** 2)

    const inRadius = (radiusPercentage) => {
      return distanceFromCenter < radius(radiusPercentage)
    }
    switch (frameIndex) {
      case 0:
        if (inRadius(0.6)) {
          this.display = 1
        }
        break
      case 1:
        if (inRadius(0.7)) {
          this.display = 1
        }
        break
      case 2:
        if (inRadius(0.8)) {
          this.display = 1
        }
        break
      case 3:
        if (inRadius(0.85)) {
          this.display = 1
        }
        break
      case 4:
        if (inRadius(0.9)) {
          this.display = 1
        }
        break
      case 5:
        if (inRadius(0.95)) {
          this.display = 1
        }
        break
      case 6:
        if (inRadius(1)) {
          this.display = 1
        }
        break
      default:
        this.display = 0
        break
    }
  }
  draw(context) {
    context.fillStyle = `rgba(${this.baseColor}, ${this.opacity})`
    context.beginPath()
    context.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    context.fill()
  }

  reset() {
    this.x = Math.random() * this.canvas.width
    this.y = Math.random() * this.canvas.height
    this.vx = (Math.random() - 0.5) * 0.3 // Slower movement
    this.vy = (Math.random() - 0.5) * 0.3
    this.size = Math.random() * 1.5 + 0.5 // Smaller particles
    this.maxLife = Math.random() * 200 + 200 // Longer life
    this.life = this.maxLife
    this.opacity = 0 // Start transparent for fade-in
    this.maxOpacity = Math.random() * 0.5 + 0.2 // Target opacity
    const baseColors = [
      '255, 255, 255', // White
      '173, 216, 230', // Light Blue
      '220, 220, 255', // Light Lavender
    ]
    this.baseColor = baseColors[Math.floor(Math.random() * baseColors.length)]
  }
}

let animationFrameId
const animate = () => {
  const rect = scrollContainer.value.getBoundingClientRect()
  if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
    // It's in the main viewport and being scrolled, so handleScroll will manage drawing
  } else {
    const currentFrame = isBreathing.value ? 0 : frameCnt - 1
    drawFrame(currentFrame)
  }

  animationFrameId = requestAnimationFrame(animate)
}

onMounted(() => {
  context = canvasRef.value.getContext('2d')
  lastScrollY.value = window.scrollY
  canvasRef.value.width = 1440
  canvasRef.value.height = 1020

  // Create a promise that resolves after 1 second
  const oneSecondPromise = new Promise((resolve) => {
    setTimeout(resolve, 2000)
  })

  // Wait for both images and minimum time
  Promise.all([Promise.all(imagePromises), oneSecondPromise]).then(([images]) => {
    loadedImages.push(...images)
    isLoaded.value = true
    oneSecondLoaded.value = true
    if (setEntryAnimationLoaded) {
      setEntryAnimationLoaded()
    }
    showScrollIndicator.value = true
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(canvasRef.value))
    }
    drawFrame(0)
    animate()
    window.addEventListener('scroll', handleScroll)
  })
  //loads scroll event listener for scrolling animation
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }
  // Clean up scroll lock if component unmounts
  if (isScrollLocked.value) {
    unlockScroll()
  }
})
</script>

<style>
/* Hide scrollbar for Chrome, Safari, Opera, and Arc */
html::-webkit-scrollbar,
body::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
html,
body {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>

<style scoped>
.scroll-container {
  height: 320vh;
  position: relative;
  top: -56px;
  width: 100%;
  background-color: #f0f0f0;
}

.scroll-indicator {
  position: fixed;
  bottom: 30px;
  right: 1%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: black;
  font-family: sans-serif;
  z-index: 10;
  animation: bounce 2s infinite;
  transition: opacity 0.5s ease-out;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translate(-50%, 0);
  }
  40% {
    transform: translate(-50%, -20px);
  }
  60% {
    transform: translate(-50%, -10px);
  }
}

.sticky-canvas {
  position: sticky;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  object-fit: cover;
}

.sticky-canvas.breathing {
  animation: breathe 2s ease-in-out infinite alternate;
}

@keyframes breathe {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.02);
  }
}

@media (max-width: 768px) {
  .scroll-container {
    display: none !important;
  }

  .loading-overlay {
    display: none !important;
  }
}
</style>
