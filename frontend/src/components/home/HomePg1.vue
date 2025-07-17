<template>
  <div class="bg-[#fff] flex flex-col justify-center">
    <div
      class="flex items-center justify-start pl-[clamp(0rem,15vw,60rem)] py-[clamp(3rem,10vw,5rem)] overflow-hidden"
    >
      <div class="flex items-center overflow-hidden">
        <span
          class="text-center text-slate-700 text-xl md:text-2xl font-['Chiron_Hei_HK'] min-h-[2rem] extrabold"
        >
          {{ typedText }}
        </span>
        <span class="w-1 h-7 ml-1 bg-neutral-400 rounded flash"></span>
      </div>
    </div>

    <!-- Restructure: Group numbers and labels together -->
    <div class="flex items-center justify-center rwd-gap">
      <!-- Days -->
      <div class="flex flex-col items-center">
        <div class="timestamp-number">{{ String(days).padStart(2, '0') }}</div>
        <div class="timestamp-word">DAYS</div>
      </div>

      <!-- Colon -->
      <div class="text-rose-400 text-8xl font-bold font-['Chiron_Hei_HK'] self-start flash-colon">
        :
      </div>

      <!-- Hours -->
      <div class="flex flex-col items-center">
        <div class="timestamp-number blink">{{ String(hours).padStart(2, '0') }}</div>
        <div class="timestamp-word">HOURS</div>
      </div>

      <!-- Colon -->
      <div class="text-rose-400 text-8xl font-bold font-['Chiron_Hei_HK'] self-start flash-colon">
        :
      </div>

      <!-- Minutes -->
      <div class="flex flex-col items-center">
        <div class="timestamp-number">{{ String(minutes).padStart(2, '0') }}</div>
        <div class="timestamp-word">MINUTES</div>
      </div>

      <!-- Colon -->
      <div class="text-rose-400 text-8xl font-bold font-['Chiron_Hei_HK'] self-start flash-colon">
        :
      </div>

      <!-- Seconds -->
      <div class="flex flex-col items-center">
        <div class="timestamp-number">{{ String(seconds).padStart(2, '0') }}</div>
        <div class="timestamp-word">SECONDS</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const fullText = '距離活動開始還有'
const typedText = ref(' ')
let index = 0
let interval = null

const startTyping = () => {
  typedText.value = ''
  index = 0
  interval = setInterval(() => {
    if (index < fullText.length) {
      typedText.value += fullText[index]
      index++
    } else {
      clearInterval(interval)
      setTimeout(startTyping, 1000)
    }
  }, 250)
}

let days = ref(0)
let hours = ref(0)
let minutes = ref(0)
let seconds = ref(0)

const targetDate = new Date('2025-09-20T00:00:00+08:00')

let countdownInterval = null

const updateCountdown = () => {
  const now = new Date()
  const diff = targetDate - now
  if (diff <= 0) {
    days.value = 0
    hours.value = 0
    minutes.value = 0
    seconds.value = 0
    clearInterval(countdownInterval)
    return
  }

  days.value = Math.floor(diff / (1000 * 60 * 60 * 24))
  hours.value = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  minutes.value = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  seconds.value = Math.floor((diff % (1000 * 60)) / 1000)
}

onMounted(() => {
  startTyping()
  updateCountdown()
  countdownInterval = setInterval(updateCountdown, 1000)
})

onBeforeUnmount(() => {
  if (interval) clearInterval(interval)
  if (countdownInterval) clearInterval(countdownInterval)
})

defineOptions({
  name: 'Page_1',
})
</script>

<style scoped>
.extrabold {
  font-weight: 900;
}

.rwd-gap {
  gap: 4vw;
}

.flash {
  animation: blink 1s step-end infinite;
}

.flash-colon {
  animation: blink-colon 1.8s ease-in-out infinite;
  color: #db8396;
}

.timestamp-number {
  color: #2d3e63;
  text-align: center;
  font-family: 'Chiron Hei HK';
  font-size: clamp(48px, 8vw, 96px);
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.timestamp-word {
  color: #2d3e63;
  text-align: center;
  font-family: 'Chiron Hei HK';
  font-size: clamp(18px, 2.5vw, 30px);
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: clamp(30px, 0.5vw, 50px) 0;
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

@keyframes blink-colon {
  0% {
    opacity: 1;
  }
  40% {
    opacity: 1;
  }
  60% {
    opacity: 0;
  }
  90% {
    opacity: 0;
  }
}
</style>
