<template>
  <!-- Schedule -->
  <div
    id="cursor-area"
    class="w-full min-h-[1000px] flex items-center justify-center"
    style="background-color: #2d3e63; position: relative"
  >
    <img src="/src/assets/Registration/state=active.svg" alt="light-cursor" id="light-cursor" />
    <!-- Flowers -->
    <img
      src="/src/assets/Registration/BlueFlowerSmall.svg"
      class="absolute pointer-events-none h-auto scale-60 top-[60%] left-[10%] w-[20vw] flower-animate-small-left"
      alt="aFk4J4L0LanmFpiYgUxuL5ER1eUZ4O7wFGy3ulY5Fgk="
      style="z-index: 10"
    />

    <img
      src="/src/assets/Registration/BlueFlowerBig.svg"
      class="absolute pointer-events-none h-auto scale-80 top-[60%] left-[10%] w-[20vw] flower-animate-big-left"
      alt="PAgrJN0gYaY8Vb5QSykPnEVMv9q9k9rppTqK8mje7As="
      style="z-index: 11"
    />

    <img
      src="/src/assets/Registration/PinkFlowerSmall.svg"
      class="absolute pointer-events-none h-auto scale-60 top-[10%] right-[10%] w-[20vw] flower-animate-small-right"
      style="z-index: 12"
    />

    <img
      src="/src/assets/Registration/PinkFlowerBig.svg"
      class="absolute pointer-events-none h-auto scale-80 top-[10%] right-[10%] w-[20vw] flower-animate-big-right"
      style="z-index: 13"
    />

    <!-- Schedule -->
    <div class="relative z-20 flex items-center justify-center">
      <div class="bg-transparent p-8">
        <div class="flex items-center justify-center gap-8">
          <!-- Left Column -->
          <div
            class="text-white text-2xl font-bold font-['Chiron_Hei_HK_Text'] space-y-12 text-right pr-12"
          >
            <div
              v-for="(item, idx) in leftSchedule"
              :key="idx"
              :ref="(el) => (leftRefs[idx] = el)"
              :class="['fade-in-up', { show: leftVisible[idx] }]"
              :style="{ transitionDelay: idx * 0.18 + 's' }"
            >
              {{ item }}
            </div>
          </div>

          <!-- Divider -->
          <div class="w-px h-72 bg-white"></div>

          <!-- Right Column -->
          <div
            class="text-white text-2xl font-bold font-['Chiron_Hei_HK_Text'] space-y-12 text-left pl-12"
          >
            <div
              v-for="(item, idx) in rightSchedule"
              :key="idx"
              :ref="(el) => (rightRefs[idx] = el)"
              :class="['fade-in-up', { show: rightVisible[idx] }]"
              :style="{ transitionDelay: idx * 0.18 + 's' }"
            >
              {{ item }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-in-up {
  opacity: 0;
  transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-in-up.show {
  opacity: 1;
}

@keyframes flowerAlternate {
  0% {
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  75% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.flower-animate-small-left {
  animation: flowerAlternate 3s ease-in-out infinite;
  animation-delay: 1.5s;
}

.flower-animate-big-left {
  animation: flowerAlternate 3s ease-in-out infinite;
}

.flower-animate-small-right {
  animation: flowerAlternate 3s ease-in-out infinite;
}

.flower-animate-big-right {
  animation: flowerAlternate 3s ease-in-out infinite;
  animation-delay: 1.5s;
}

#light-cursor {
  position: absolute;
  pointer-events: none;
  z-index: 9;
  width: 20vw;
  height: 20vw;
  user-select: none;
  border-radius: 50%;
  transform-origin: 100% 50%;
  transform: translate(-60%, -50%);
  filter: blur(30px);
}
</style>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'RegistrationSchedule',
  setup() {
    const leftSchedule = [
      '8 / 11 (一) - 8 / 24 (日) 20:00 前',
      '8 / 25 (一) 08:00 前',
      '8 / 25 (一) - 8 / 28 (四)',
      '8 / 29 (五) - 8 / 30 (六)',
    ]
    const rightSchedule = ['開始報名', '正取隊伍與所屬企業公布', '繳費期間', '備取遞補期間']
    const leftRefs = []
    const rightRefs = []
    const leftVisible = ref([false, false, false, false])
    const rightVisible = ref([false, false, false, false])

    function observeRows(refs, visibleArr) {
      if (typeof window === 'undefined') return
      const observer = new window.IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const idx = refs.indexOf(entry.target)
              if (idx !== -1) visibleArr.value[idx] = true
            }
          })
        },
        { threshold: 0.2 }
      )
      refs.forEach((el) => {
        if (el) observer.observe(el)
      })
    }

    // Light-cursor logic
    function handleMouseMove(e, glow, area) {
      glow.style.display = 'block'
      const rect = area.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      glow.style.left = `${x}px`
      glow.style.top = `${y}px`
    }

    function handleMouseLeave(glow) {
      glow.style.display = 'none'
    }

    let mouseMoveHandler = null
    let mouseLeaveHandler = null

    onMounted(() => {
      observeRows(leftRefs, leftVisible)
      observeRows(rightRefs, rightVisible)

      const glow = document.getElementById('light-cursor')
      const area = document.getElementById('cursor-area')
      if (!glow || !area) return
      glow.style.display = 'none'

      mouseMoveHandler = (e) => handleMouseMove(e, glow, area)
      mouseLeaveHandler = () => handleMouseLeave(glow)
      area.addEventListener('mousemove', mouseMoveHandler)
      area.addEventListener('mouseleave', mouseLeaveHandler)
    })

    onUnmounted(() => {
      const glow = document.getElementById('light-cursor')
      const area = document.getElementById('cursor-area')
      if (!glow || !area) return
      if (mouseMoveHandler) area.removeEventListener('mousemove', mouseMoveHandler)
      if (mouseLeaveHandler) area.removeEventListener('mouseleave', mouseLeaveHandler)
    })

    return {
      leftSchedule,
      rightSchedule,
      leftRefs,
      rightRefs,
      leftVisible,
      rightVisible,
    }
  },
}
</script>
