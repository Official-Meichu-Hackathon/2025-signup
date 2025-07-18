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
    <div class="flex justify-center mb-10">
      <div class="relative">
        <img
          src="/HomeImages/imageDecorator1.svg"
          alt="Top Decoration"
          class="absolute top-27"
          style="left: -8rem"
        />
        <img
          src="/HomeImages/imagePlaceholder.png"
          alt="Entry Animation"
          class="w-[clamp(500px,60vw,1080px)] h-auto mt-40 object-contain"
        />

        <img
          src="/HomeImages/imageDecorator2.svg"
          alt="Bottom Decoration"
          class="absolute bottom-[-clamp(2rem,5vw,3rem)]"
          style="right: -3.5rem; bottom: -3.5rem"
        />
      </div>
    </div>
    <div class="flex flex-col justify-center items-center px-8 py-10">
      <p class="intro-text">
        梅竹黑客松競賽的核心在於促進跨領域的意見交流，並以團隊合作的方式開發出最小可行性產品（MVP,
        minimum viable product）。
      </p>

      <p class="intro-text">
        在這場活動中，參賽者可自行選擇合作企業，以企業所提供的資源，在有限時間、夜以繼日地將想法碰撞及融合、整合技能、完成原型，並向觀眾與評審展示他們的解決方案。除競賽主題以外，活動中幾乎沒有其他限制，參與者可以自由激盪更多創意及靈感。我們相信，透過這樣的挑戰與協作，參賽者不僅能突破既有框架，更有機會為社會帶來前所未有的創新與改變，在這個充滿挑戰、瞬息萬變的時代，打造出自己的
        MVP，更成為一代人的 MVP。
      </p>
      <p class="intro-text">
        梅竹黑客松現為全台最大的校園黑客松，於 2013 年起步，每年定期在9月下旬到 10
        月中旬間舉行大型黑客松年會，邀請全台學生在新竹參與熱血的盛會，進行一場難以忘懷的腦力激盪。期盼透過這場年度盛會，拉近企業與學生的距離，連結各方力量與資源，為科技領域注入創新動力，在以科技業聞名的新竹，留下深刻的印記。
      </p>
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
  font-weight: 700;
}

.rwd-gap {
  gap: clamp(1rem, 4vw, 20rem);
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

.intro-text {
  color: #2d3e63;
  text-align: justify;
  font-family: 'Chiron Hei HK';
  font-size: clamp(16px, 2vw, 24px);
  font-style: normal;
  font-weight: 370;
  line-height: normal;
  line-height: 1.8;
  letter-spacing: clamp(0.02em, 0.5vw, 0.08em);
  margin-bottom: 50px;
  width: clamp(500px, 60vw, 1080px);
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
