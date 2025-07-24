<template>
  <!-- Halo Effects -->
  <div
    class="fixed top-[3.61vh] left-[-4.09vw] w-[17.81vw] h-[37.59vh] bg-[#DEEAFA] z-0"
    style="filter: blur(100px)"
  ></div>
  <div
    class="fixed top-[24.79vh] left-[-1.95vw] w-[12.92vw] h-[14.54vh] bg-[#F4DAE1] z-0"
    style="transform: rotate(19.822deg); filter: blur(100px)"
  ></div>
  <!-- New Blue Halo -->
  <div
    class="fixed top-[21.39vh] left-[70.35vw] w-[18.23vw] h-[32.41vh] bg-[#DEEAFA] z-0"
    style="filter: blur(100px)"
  ></div>
  <!-- New Pink Halo -->
  <div
    class="fixed top-[10.74vh] left-[62.5vw] w-[12.9vw] h-[17.12vh] bg-[#F4DAE1] z-0"
    style="transform: rotate(19.822deg); filter: blur(100px)"
  ></div>

  <div class="bg-[#F4F5F5] pt-8 sm:pt-12 md:pt-16" v-if="!isMobile">
    <div class="container mx-auto max-w-[1453px] px-4">
      <div class="relative z-10 mb-8 md:mb-12 mt-24">
        <h1 class="relative text-[#2D3E63] font-bold font-chiron text-4xl sm:text-5xl md:text-6xl">
          賽程
          <img
            src="../../assets/Schedule/twinkle_1.svg"
            alt="Twinkle decoration"
            :class="showTwinkle1 ? 'opacity-100' : 'opacity-0'"
            class="absolute top-[-90px] left-[100px] w-[128.447px] h-[116.625px] transition-opacity duration-100 hidden sm:block"
          />
          <img
            src="../../assets/Schedule/twinkle_2.svg"
            alt="Twinkle decoration"
            :class="!showTwinkle1 ? 'opacity-100' : 'opacity-0'"
            class="absolute top-[-50px] left-[130px] w-[100.781px] h-[65.445px] transition-opacity duration-100 animate-scale-y hidden sm:block"
          />
        </h1>
        <div class="text-[#2D3E63] font-chiron text-xl sm:text-2xl mt-4 space-y-2">
          <p>地點｜國立清華大學</p>
          <p>時間｜2025. 09. 20 (六) - 09. 21 (日)</p>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-[#F4F5F5] pt-1" v-else>
    <!-- Mobile Header Section -->
    <div class="mb-[6vh] mt-[2.8vh]">
      <img
        src="../../assets/Schedule/halo.svg"
        alt="Halo decoration"
        style="
          position: absolute;
          width: 28.7vw;
          height: 16.1vh;
          flex-shrink: 0;
          right: 0;
          top: 3.9vh;
        "
      />
      <img
        src="../../assets/Schedule/halo2.svg"
        alt="Halo decoration"
        style="
          position: absolute;
          width: 28.7vw;
          height: 16.1vh;
          flex-shrink: 0;
          left: 0;
          top: 8.4vh;
          z-index: 0;
        "
      />
      <img
        src="../../assets/Schedule/twinkle_1.svg"
        alt="Twinkle decoration"
        :class="showTwinkle1 ? 'opacity-100' : 'opacity-0'"
        style="
          position: absolute;
          width: 13.1vw;
          height: 5.9vh;
          flex-shrink: 0;
          left: 19.7vw;
          top: 6.9vh;
        "
      />
      <img
        src="../../assets/Schedule/twinkle_2.svg"
        alt="Twinkle decoration"
        :class="showTwinkle1 ? 'opacity-0' : 'opacity-100'"
        style="
          position: absolute;
          width: 5.1vw;
          height: 2.4vh;
          flex-shrink: 0;
          left: 25.6vw;
          top: 10.7vh;
        "
      />
      <h1 class="relative z-10 text-[#2D3E63] font-bold font-chiron text-[5.1vw] ml-[9.7vw]">
        賽程
      </h1>
      <div
        class="relative z-10 text-[#2D3E63] font-bold font-chiron text-[3.1vw] mt-[1.7vh] space-y-1 ml-[9.7vw]"
      >
        <p>地點｜國立清華大學</p>
        <p>時間｜2025. 09. 20 (六) - 09. 21 (日)</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const showTwinkle1 = ref(true)
const isMobile = ref(false)

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768 // Assuming 768px as the breakpoint for mobile
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
  setInterval(() => {
    showTwinkle1.value = !showTwinkle1.value
  }, 2000)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>

<style scoped>
.font-chiron {
  font-family: 'Chiron Hei HK', sans-serif;
}

@keyframes scaleUpDown {
  0%,
  100% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(1.4);
  }
}

.animate-scale-y {
  animation: scaleUpDown 1.5s ease-in-out infinite;
}
</style>
