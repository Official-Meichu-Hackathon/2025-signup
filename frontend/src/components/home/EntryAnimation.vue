<template>
  <Navbar @navigateToSection="handleNavigateToSection" />
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
import Navbar from '../Navbar.vue'

defineOptions({
  name: 'EntryAnimation',
})

const setEntryAnimationLoaded = inject('setEntryAnimationLoaded')

const scrollContainer = ref(null)
const canvasRef = ref(null)
const lastScrollY = ref(0)
const isLoaded = ref(false)
const oneSecondLoaded = ref(false)
const showScrollIndicator = ref(false)
const isScrollLocked = ref(false)
const isAnimationComplete = ref(false)
const userScrolls = ref(false)
const navbarScroll = ref(false)
const unlockScrollTimer = ref(null) // NEW: To hold the setTimeout ID

const frameCnt = 23
const imageSrc = []
const loadedImages = []

const getQualityForBandwidth = () => {
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection
  if (connection && connection.downlink) {
    const downlinkMbps = connection.downlink
    if (downlinkMbps < 1.5) {
      return 'low'
    }
    if (downlinkMbps < 8) {
      return 'medium'
    }
    return 'high'
  }
  return 'medium'
}

const quality = getQualityForBandwidth()

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

// --- MODIFIED FUNCTION ---
function handleNavigateToSection() {
  navbarScroll.value = true
  console.log('Navigating to section, bypassing scroll lock.')

  // Clear the scheduled unlock to prevent it from interfering.
  if (unlockScrollTimer.value) {
    clearTimeout(unlockScrollTimer.value)
    unlockScrollTimer.value = null
  }

  // If locked, just undo the lock styles. DO NOT scroll.
  // The browser will handle scrolling to the new section.
  if (isScrollLocked.value) {
    document.body.style.overflow = ''
    document.body.style.position = ''
    document.body.style.top = ''
    document.body.style.width = ''
    isScrollLocked.value = false
  }
}

const lockScroll = () => {
  if (navbarScroll.value) return
  isScrollLocked.value = true
  document.body.style.overflow = 'hidden'
  document.body.style.position = 'fixed'
  document.body.style.top = `-${window.scrollY}px`
  document.body.style.width = '100%'
}

// --- MODIFIED FUNCTION ---
// Restored the scroll position restoration logic for the normal unlock flow.
const unlockScroll = () => {
  if (navbarScroll.value) return
  if (isScrollLocked.value) {
    const scrollY = document.body.style.top
    document.body.style.overflow = ''
    document.body.style.position = ''
    document.body.style.top = ''
    document.body.style.width = ''
    window.scrollTo(0, parseInt(scrollY || '0') * -1) // Restore scroll position
    isScrollLocked.value = false
  }
}

const handleScroll = () => {
  if (isScrollLocked.value && !navbarScroll.value) {
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

  if (frameIndex === frameCnt - 1 && !isAnimationComplete.value) {
    isAnimationComplete.value = true
    scrollContainer.value.style.height = '100vh'

    if (navbarScroll.value) {
      return
    }
    lockScroll()
    // --- MODIFIED LOGIC ---
    // Store the timer ID so we can cancel it if needed.
    unlockScrollTimer.value = setTimeout(() => {
      unlockScroll()
      unlockScrollTimer.value = null
    }, 1000)
  }

  requestAnimationFrame(() => {
    drawFrame(frameIndex)
    animate()
  })

  lastScrollY.value = window.scrollY
}

// The Particle class and other logic remains the same...
class Particle {
  constructor(canvas) {
    this.canvas = canvas
    this.display = 0
    this.reset()
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
      const timePassed = this.maxLife - this.life
      const fadeRatio = Math.min(1, timePassed / fadeInDuration)
      this.opacity = this.maxOpacity * (fadeRatio * fadeRatio * fadeRatio) + 0.3
    } else if (this.life < fadeOutDuration) {
      const fadeRatio = Math.max(0, this.life / fadeOutDuration)
      this.opacity = this.maxOpacity * (fadeRatio * fadeRatio * fadeRatio)
    } else {
      this.opacity = this.maxOpacity
    }

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
    this.vx = (Math.random() - 0.5) * 0.3
    this.vy = (Math.random() - 0.5) * 0.3
    this.size = Math.random() * 1.5 + 0.5
    this.maxLife = Math.random() * 200 + 200
    this.life = this.maxLife
    this.opacity = 0
    this.maxOpacity = Math.random() * 0.5 + 0.2
    const baseColors = ['255, 255, 255', '173, 216, 230', '220, 220, 255']
    this.baseColor = baseColors[Math.floor(Math.random() * baseColors.length)]
  }
}
const particles = []
const particleCount = 150
let animationFrameId

const animate = () => {
  const rect = scrollContainer.value.getBoundingClientRect()
  if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
    //
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

  const oneSecondPromise = new Promise((resolve) => {
    setTimeout(resolve, 2000)
  })

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
})

// --- MODIFIED LIFECYCLE HOOK ---
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }
  // NEW: Clean up the timer on unmount
  if (unlockScrollTimer.value) {
    clearTimeout(unlockScrollTimer.value)
  }
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
