<template>
  <div>
    <div ref="scrollContainer" class="scroll-container">
      <canvas ref="canvasRef" :class="['sticky-canvas', { breathing: isBreathing }]"></canvas>
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
    drawFrame(frameIndex)
  })
}

const particles = []
const particleCount = 75

class Particle {
  constructor(canvas) {
    this.canvas = canvas
    this.reset() // Initialize with random position
  }

  update() {
    this.x += this.vx
    this.y += this.vy
    this.life--

    const fadeInDuration = 50
    const fadeOutDuration = 50

    if (this.life > this.maxLife - fadeInDuration) {
      // Fade in
      const timePassed = this.maxLife - this.life
      const fadeRatio = Math.min(1, timePassed / fadeInDuration)
      this.opacity = this.maxOpacity * (fadeRatio * fadeRatio * fadeRatio)
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
    drawFrame(0) // Initial draw
    window.addEventListener('scroll', handleScroll)
    animate() // Start the particle animation loop
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
</style>
