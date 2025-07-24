<template>
  <div>
    <div ref="scrollContainer" class="scroll-container">
      <canvas ref="canvasRef" :class="['sticky-canvas', { breathing: isBreathing }]"></canvas>
      <div v-if="showScrollHint" class="scroll-hint">
        <div class="scroll-indicator">↓</div>
        <p>Scroll again to continue</p>
      </div>
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
const hasReachedEnd = ref(false)
const lastScrollY = ref(0)
const showScrollHint = ref(false)
const isLocked = ref(false) // Add this new state

const frameCnt = 23 // 27
const imageSrc = []
const loadedImages = []

for (let i = 1; i <= frameCnt; i++) {
  imageSrc.push(`/EntryAnimation/frame-${i}.webp`)
}

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

const handleScroll = () => {
  if (!scrollContainer.value || isLocked.value) {
    return
  }

  const rect = scrollContainer.value.getBoundingClientRect()
  const { top, height } = rect
  const scrollableDist = height - window.innerHeight
  const rawScrollProgress = Math.max(0, Math.min(1, (-top + 56) / scrollableDist))

  let scrollProgress = rawScrollProgress
  const frameIndex = Math.min(frameCnt - 1, Math.floor(scrollProgress * frameCnt))

  // Lock scroll at the final frame
  // console.log(`Top: ${top}, Scrollable Dist: ${scrollableDist}, Progress: ${scrollProgress}, Frame Index: ${frameIndex}`)

  requestAnimationFrame(() => {
    drawFrame(frameIndex)
    animate()
  })

  lastScrollY.value = window.scrollY
}

const unlockScroll = (event) => {
  // Only unlock on downward scroll
  if (event.deltaY > 0) {
    hasReachedEnd.value = true
    isLocked.value = false
    showScrollHint.value = false
  } else {
    // If scrolling up, re-listen for the next wheel event
    window.addEventListener('wheel', unlockScroll, { once: true })
  }
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
  // We only need to animate if the user isn't scrolling.
  // The scroll handler will draw frames.
  // We can get the current frame from the scroll progress if needed,
  // but for now, let's just keep the particles moving.
  const rect = scrollContainer.value.getBoundingClientRect()
  // Only run this animation loop if the element is not being scrolled through
  if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
    // It's in the main viewport and being scrolled, so handleScroll will manage drawing
  } else {
    // It's either fully visible or not in the scroll path, animate the current frame
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
  window.removeEventListener('wheel', unlockScroll) // Clean up wheel listener
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
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

.scroll-hint {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: #666;
  pointer-events: none;
  opacity: 0.8;
}

.scroll-indicator {
  font-size: 24px;
  animation: bounce 1s infinite;
}

@keyframes breathe {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.02);
  }
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

@media (max-width: 768px) {
  .scroll-container {
    display: none !important;
  }
}
</style>
