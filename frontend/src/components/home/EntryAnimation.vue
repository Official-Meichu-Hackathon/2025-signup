<template>
  <div>
    <div ref="scrollContainer" class="scroll-container">
      <canvas ref="canvasRef" :class="['sticky-canvas', { glowing: isBreathing }]"></canvas>
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
const isBreathing = ref(false)

const drawFrame = (idx) => {
  if (context && loadedImages[idx]) {
    context.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height)
    context.drawImage(loadedImages[idx], 0, 0, canvasRef.value.width, canvasRef.value.height)
    isBreathing.value = idx <= 9
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
  //let navbarOffset = 14;
  const scrollableDist = height - window.innerHeight // canvas contiainer height - viewport height
  const scrollProgress = Math.max(0, Math.min(1, (-top + 56) / scrollableDist))
  const frameIndex = Math.min(frameCnt - 1, Math.floor(scrollProgress * frameCnt))

  requestAnimationFrame(() => {
    // using requestAnimationFrame for smoother animation
    drawFrame(frameIndex) // this will work too, but might not sync with browser repaint
  })
}

const particles = []
const particleCount = 100

class Particle {
  constructor(canvas) {
    this.canvas = canvas
    // Start particles near the center
    this.x = this.canvas.width / 2
    this.y = this.canvas.height / 2
    // Random velocity
    this.vx = (Math.random() - 0.5) * 0.5
    this.vy = (Math.random() - 0.5) * 0.5
    this.size = Math.random() * 2 + 1
    this.life = Math.random() * 100 + 50
    this.opacity = 1
  }

  update() {
    this.x += this.vx
    this.y += this.vy
    this.life--
    if (this.life < 50) {
      this.opacity = this.life / 50
    }
    // Reset particle when it dies
    if (this.life <= 0) {
      this.reset()
    }
  }

  draw(context) {
    context.fillStyle = `rgba(255, 220, 180, ${this.opacity})` // Warm glow color
    context.beginPath()
    context.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    context.fill()
  }

  reset() {
    // Re-initialize the particle at the center
    this.x = this.canvas.width / 2
    this.y = this.canvas.height / 2
    this.vx = (Math.random() - 0.5) * 0.5
    this.vy = (Math.random() - 0.5) * 0.5
    this.life = Math.random() * 100 + 50
    this.opacity = 1
  }
}

let animationFrameId
const animate = () => {
  // Clear only if you don't have a background image being drawn by the scroll
  // context.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height);

  // Note: The scroll animation will draw the main image.
  // We just need to draw the particles on top.

  // To see particles without scrolling, you'd draw the first frame here:
  // if (loadedImages[0]) context.drawImage(loadedImages[0], ...);

  particles.forEach((p) => {
    p.update()
    p.draw(context)
  })
  animationFrameId = requestAnimationFrame(animate)
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
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(canvasRef.value))
    }
    animate() // Start the particle animation
  })
  //loads scroll event listener for scrolling animation

  // Regular animation without scroll
  // let animationInterval = null;
  // Promise.all(imagePromises).then((images) => {
  //   loadedImages.push(...images);
  //   let frameIdx = 0;
  //   drawFrame(frameIdx);
  //   animationInterval = setInterval(() => {
  //     frameIdx++;
  //     if(frameIdx < frameCnt) {
  //       drawFrame(frameIdx);
  //     } else {
  //       clearInterval(animationInterval);
  //     }
  //   }, 65);
  // })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }
})
</script>

<style scoped>
.scroll-container {
  height: 180vh;
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

.sticky-canvas.breathing {
  animation: breathe 1.5s ease-in-out infinite alternate;
}

@keyframes glow {
  0% {
    filter: brightness(100%) saturate(100%) blur(0px) scale(1);
  }
  50% {
    filter: brightness(130%) saturate(150%) blur(2px) scale(1.1);
  }
  100% {
    filter: brightness(100%) saturate(100%) blur(0px) scale(1);
  }
}

.sticky-canvas.glowing {
  animation: glow 4s ease-in-out infinite alternate;
}
@keyframes breathe {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.2);
  }
}
</style>
