<template>
  <!-- Halo Effects -->
  <div
    class="fixed top-[3.61vh] left-[0vw] w-[17.81vw] h-[37.59vh] bg-[#DEEAFA] z-0"
    style="filter: blur(100px)"
  ></div>
  <div
    class="fixed top-[24.79vh] left-[0vw] w-[12.92vw] h-[14.54vh] bg-[#F4DAE1] z-0"
    style="transform: rotate(19.822deg); filter: blur(100px)"
  ></div>
  <!-- New Blue Halo -->
  <div
    class="fixed top-[21.39vh] right-[0vw] w-[18.23vw] h-[32.41vh] bg-[#DEEAFA] z-0"
    style="filter: blur(100px)"
  ></div>
  <!-- New Pink Halo -->
  <div
    class="fixed top-[10.74vh] right-[0vw] w-[12.9vw] h-[17.12vh] bg-[#F4DAE1] z-0"
    style="transform: rotate(19.822deg); filter: blur(100px)"
  ></div>

  <div>
    <!-- New parent div for conditional rendering -->

    <div class="bg-[#F4F5F5] pt-8 sm:pt-12 md:pt-16" v-if="!isMobile">
      <div class="container mx-auto max-w-[1453px] px-4">
        <div class="relative z-0 mb-8 md:mb-12 mt-24">
          <h1
            class="relative text-[#2D3E63] font-bold font-chiron text-4xl sm:text-5xl md:text-6xl"
          >
            賽程
            <img
              src="../assets/Schedule/twinkle_1.svg"
              alt="Twinkle decoration"
              :class="showTwinkle1 ? 'opacity-100' : 'opacity-0'"
              class="absolute top-[-90px] left-[100px] w-[128.447px] h-[116.625px] transition-opacity duration-100 hidden sm:block"
            />
            <img
              src="../assets/Schedule/twinkle_2.svg"
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

        <div class="relative" style="margin-left: 0px; display: flex; justify-content: center">
          <!-- Decorative rectangles (behind) -->
          <div class="absolute cursor-pointer" :style="decorativeRectStyle" @click="toggleDay0920">
            <span :style="dateTextStyle">0920 Sat.</span>
          </div>
          <div class="absolute cursor-pointer" :style="decorativeRectStyle2" @click="toggleDay0921">
            <span :style="dateTextStyle2">0921 Sun.</span>
          </div>

          <!-- White content box (in front) -->
          <div
            class="relative bg-white p-4 sm:p-6 md:p-8 z-10"
            style="
              width: 132.28vw;
              z-index: 10;
              padding-bottom: 35vh;
              box-shadow: 2px -2px 5px 0px rgba(0, 0, 0, 0.15);
            "
          >
            <div class="flex flex-col space-y-4 md:space-y-5">
              <template v-if="scheduleItems && scheduleItems.length">
                <div
                  v-for="(item, index) in scheduleItems"
                  :key="index"
                  class="w-full flex items-center relative"
                  :style="{
                    minHeight: '10.79vh',
                    backgroundColor: item.isSplit ? 'transparent' : '#E9E9E9',
                  }"
                >
                  <!-- Small circle -->
                  <div
                    class="absolute"
                    :style="{
                      width: '1.4vw', // 30px / 1920
                      height: '1.4vw', // Make it a perfect circle
                      backgroundColor: getCircleColor(index),
                      borderRadius: '50%',
                      right: '2.45vw', // 47px / 1920
                      top: '50%', // Vertically center
                      transform: 'translateY(-50%)', // Adjust for its own height
                    }"
                  ></div>

                  <template v-if="item.isSplit">
                    <div class="flex flex-grow items-center" :style="{ gap: '17px' }">
                      <!-- First split rectangle -->
                      <div
                        class="bg-[#E9E9E9] flex items-center relative"
                        :style="{ flex: '1', height: '10.79vh', paddingLeft: '3.19vw' }"
                      >
                        <!-- Small circle for split box -->
                        <div
                          class="absolute"
                          :style="{
                            width: '1.56vw', // 30px / 1920
                            height: '1.56vw', // Make it a perfect circle
                            backgroundColor: getCircleColor(index),
                            borderRadius: '50%',
                            right: '2.45vw', // 47px / 1920
                            top: '50%', // Vertically center
                            transform: 'translateY(-50%)', // Adjust for its own height
                          }"
                        ></div>
                        <div :style="timeStyle">{{ item.time }}</div>
                        <h3 :style="titleStyle">{{ item.title }}</h3>
                      </div>
                      <!-- Second split rectangle -->
                      <div
                        class="bg-[#E9E9E9] flex items-center"
                        :style="{ flex: '1', height: '10.79vh', paddingLeft: '3.19vw' }"
                      >
                        <div :style="timeStyle">{{ item.time2 }}</div>
                        <h3 :style="titleStyle">{{ item.title2 }}</h3>
                      </div>
                    </div>
                  </template>
                  <template v-else>
                    <div class="flex items-center w-full" :style="{ paddingLeft: '3.19vw' }">
                      <div :style="timeStyle">{{ item.time }}</div>
                      <h3 :style="titleStyle">{{ item.title }}</h3>
                    </div>
                  </template>
                </div>
              </template>
            </div>
            <div class="text-center mt-8" style="position: relative; z-index: 11">
              <p :style="noticeStyle">實際流程將以現場公佈為準，屆時請參賽者留意大會推播通知</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-[#F4F5F5] pt-1" v-else>
      <!-- Mobile Header Section -->
      <div class="mb-[6vh] mt-[2.8vh]">
        <img
          src="../assets/Schedule/halo.svg"
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
          src="../assets/Schedule/halo2.svg"
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
          src="../assets/Schedule/twinkle_1.svg"
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
          src="../assets/Schedule/twinkle_2.svg"
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

      <div class="relative min-h-full">
        <!-- Mobile Decorative rectangles (behind) -->
        <div
          class="absolute cursor-pointer w-[22.1vw] h-[8.1vh] rounded-2xl flex justify-center items-start z-0 mt-[-4.1vh] right-[32.3vw]"
          :class="
            selectedDay === '0920'
              ? 'bg-[#DB8396] shadow-[2px_-2px_5px_rgba(0,0,0,0.22)]'
              : 'bg-[#F4DAE1]'
          "
          @click="selectedDay = '0920'"
        >
          <span
            class="font-chiron text-white pt-[1vh]"
            :class="
              selectedDay === '0920'
                ? 'opacity-100 text-[4.1vw] pt-[0.7vh]'
                : 'opacity-75 text-[3.6vw] pt-[1vh]'
            "
            >0920 Sat.</span
          >
        </div>
        <div
          class="absolute cursor-pointer w-[22.1vw] h-[8.1vh] rounded-2xl flex justify-center items-start z-0 mt-[-4.1vh] right-[10.3vw]"
          :class="
            selectedDay === '0921'
              ? 'bg-[#DB8396] shadow-[2px_-2px_5px_rgba(0,0,0,0.22)]'
              : 'bg-[#F4DAE1]'
          "
          @click="selectedDay = '0921'"
        >
          <span
            class="font-chiron text-white pt-[1vh]"
            :class="
              selectedDay === '0921'
                ? 'opacity-100 text-[4.1vw] pt-[0.7vh]'
                : 'opacity-75 text-[3.6vw] pt-[1vh]'
            "
            >0921 Sun.</span
          >
        </div>

        <!-- Mobile Schedule List -->
        <div
          class="relative bg-white p-[4vw] w-full pt-[2.4vh] pl-[7.4vw] z-10 mt-[6vh]"
          style="box-shadow: 2px -2px 5px 0px rgba(0, 0, 0, 0.15)"
        >
          <div class="flex flex-col space-y-[1.3vh]">
            <template v-if="scheduleItems && scheduleItems.length">
              <div
                v-for="(item, index) in scheduleItems"
                :key="index"
                class="flex items-center relative py-[1.5vh] w-[85.9vw] h-[8.3vh] flex-none mx-auto"
                :class="{ 'bg-transparent': item.isSplit, 'bg-[#E9E9E9]': !item.isSplit }"
              >
                <!-- Small circle for mobile -->
                <div
                  class="absolute w-[3.6vw] h-[3.6vw] rounded-full right-[6.4vw] top-1/2 -translate-y-1/2"
                  :style="{ backgroundColor: getCircleColor(index) }"
                ></div>

                <template v-if="item.isSplit">
                  <div class="flex flex-row justify-center space-x-[2.8vw] w-full">
                    <!-- First split item for mobile -->
                    <div
                      class="bg-[#E9E9E9] py-[1vh] pl-[4.9vw] pr-[3vw] flex flex-col justify-center w-[41.5vw] h-[8.3vh] flex-none relative"
                    >
                      <!-- Small circle for split box -->
                      <div
                        class="absolute w-[3.6vw] h-[3.6vw] rounded-full right-[6.4vw] top-1/2 -translate-y-1/2"
                        :style="{ backgroundColor: getCircleColor(index) }"
                      ></div>
                      <div class="text-[3.1vw] font-bold font-chiron text-[#656565]">
                        {{ item.time }}
                      </div>
                      <h3
                        class="text-[3.1vw] font-bold font-chiron text-[#656565]"
                        v-html="formatTitle(item.title)"
                      ></h3>
                    </div>
                    <!-- Second split item for mobile -->
                    <div
                      class="bg-[#E9E9E9] py-[1vh] pl-[4.9vw] pr-[3vw] flex flex-col justify-center w-[41.5vw] h-[8.3vh] flex-none"
                    >
                      <div class="text-[3.1vw] font-bold font-chiron text-[#656565]">
                        {{ item.time2 }}
                      </div>
                      <h3
                        class="text-[3.1vw] font-bold font-chiron text-[#656565]"
                        v-html="formatTitle(item.title2)"
                      ></h3>
                    </div>
                  </div>
                </template>
                <template v-else>
                  <div class="flex items-center w-full pl-[4.9vw] pr-[1vw]">
                    <div class="text-[3.1vw] font-bold font-chiron text-[#656565] mr-[7.7vw]">
                      {{ item.time }}
                    </div>
                    <h3
                      class="text-[3.1vw] font-bold font-chiron text-[#656565]"
                      v-html="formatTitle(item.title)"
                    ></h3>
                  </div>
                </template>
              </div>
            </template>
          </div>
          <div class="text-center mt-[3vh] text-[3.1vw] text-[#656565] font-bold">
            <p class="font-chiron">實際流程將以現場公佈為準，<br />屆時請參賽者留意大會推播通知</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

defineOptions({
  name: 'SchedulePage',
})

const decorativeRectStyle = computed(() => ({
  width: '9.27vw',
  height: '18.33vh',
  backgroundColor: selectedDay.value === '0920' ? '#DB8396' : '#F4DAE1',
  borderRadius: '2.34vw',
  boxShadow: selectedDay.value === '0920' ? '2px -2px 5px rgba(0, 0, 0, 0.22)' : 'none',
  top: '-8.36vh',
  right: '11.72vw', // Moved right by one rectangle width
  zIndex: 5,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
}))

const decorativeRectStyle2 = computed(() => ({
  width: '9.27vw',
  height: '18.33vh',
  backgroundColor: selectedDay.value === '0920' ? '#F4DAE1' : '#DB8396',
  borderRadius: '2.34vw',
  boxShadow: selectedDay.value === '0920' ? 'none' : '2px -2px 5px rgba(0, 0, 0, 0.22)',
  top: '-8.36vh',
  right: '2.45vw', // Moved right by one rectangle width
  zIndex: 4,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
}))

const dateTextStyle = computed(() => ({
  color: '#FFF',
  fontFamily: '"Chiron Hei HK Text", sans-serif',
  fontSize: selectedDay.value === '0920' ? '1.56vw' : '1.25vw',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: 'normal',
  paddingTop: '2.56vh',
}))

const dateTextStyle2 = computed(() => ({
  color: '#FFF',
  fontFamily: '"Chiron Hei HK Text", sans-serif',
  fontSize: selectedDay.value === '0920' ? '1.25vw' : '1.56vw',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: 'normal',
  paddingTop: '2.56vh',
}))

const timeStyle = ref({
  width: '10vw',
  height: '3.8vh',
  flexShrink: '0',
  color: '#656565',
  fontFamily: '"Chiron Hei HK", sans-serif',
  fontSize: 'clamp(18px, 1.25vw, 24px)',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: '3.8vh', // Vertically center text
  whiteSpace: 'nowrap',
})

const titleStyle = ref({
  flexGrow: 1,
  color: '#656565',
  fontFamily: '"Chiron Hei HK"',
  fontSize: 'clamp(18px, 1.25vw, 24px)',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: 'normal',
  marginLeft: '2vw',
})

const noticeStyle = ref({
  color: '#656565',
  fontFamily: '"Chiron Hei HK Text"',
  fontSize: 'clamp(18px, 1.25vw, 24px)',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: 'normal',
})

const scheduleItems0920 = [
  { time: '0830 - 0900', title: '參賽者報到' },
  { time: '0900 - 1030', title: '開幕式' },
  { time: '1030 - 1200', title: 'Coding / 企業博覽會 / 娛樂交流活動' },
  { time: '1200 - 1330', title: '午餐' },
  { time: '1330 - 1800', title: 'Coding / 企業博覽會 / 娛樂交流活動' },
  { time: '1800 - 1930', title: '晚餐' },
  { time: '1930 - 2200', title: 'Coding / 娛樂交流活動' },
  { time: '2200 - 2230', title: '宵夜' },
  { time: '2200 - 2230', title: '參賽者休息' },
]

const scheduleItems0921 = [
  { time: '0000 - 0800', title: '參賽者休息' },
  { time: '0800 - 0900', title: '早餐' },
  { time: '0900 - 1100', title: 'Coding / 企業博覽會 / 娛樂交流活動' },
  { time: '1100 - 1150', title: '午餐 / 活動攤位' },
  {
    time: '1150 - 1510',
    title: '創客交流組決賽',
    isSplit: true,
    time2: '1210 - 1400',
    title2: '黑客組初賽',
  },
  { time: '1520 - 1730', title: '黑客組決賽' },
  { time: '1730 - 1830', title: '頒獎 / 抽獎' },
  { time: '1830 - 1930', title: '閉幕式' },
]

const selectedDay = ref('0920')

const scheduleItems = computed(() => {
  return selectedDay.value === '0920' ? scheduleItems0920 : scheduleItems0921
})

const toggleDay0920 = () => {
  selectedDay.value = '0920'
}

const toggleDay0921 = () => {
  selectedDay.value = '0921'
}

const formatTitle = (title) => {
  return title.replace(/\//g, '<br/>')
}

const getCircleColor = computed(() => (index) => {
  if (!scheduleItems.value) {
    return `rgba(219, 131, 150, ${Math.max(0, 1.0 - index * 0.15)})` // Default if not ready
  }

  if (selectedDay.value === '0921') {
    if (index === 0) {
      return 'rgba(244, 245, 245, 0.64)'
    } else if (index === 1) {
      return 'rgba(219, 131, 150, 0.19)'
    } else if (index === 2) {
      return 'rgba(219, 131, 150, 0.25)'
    } else {
      const baseAlpha = 0.25
      const increment = 0.15
      const alpha = baseAlpha + (index - 2) * increment
      return `rgba(219, 131, 150, ${Math.min(1.0, alpha)})`
    }
  } else {
    const length = scheduleItems.value.length
    if (index === length - 2) {
      return 'rgba(244, 245, 245, 0.64)'
    } else if (index === length - 1) {
      return 'rgba(255, 255, 255, 0.24)'
    } else {
      return `rgba(219, 131, 150, ${Math.max(0, 1.0 - index * 0.15)})`
    }
  }
})

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
