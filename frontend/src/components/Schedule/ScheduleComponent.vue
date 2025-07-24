<template>
  <div>
    <ScheduleHeader :isMobile="isMobile" />

    <div
      class="relative"
      style="margin-left: 0px; display: flex; justify-content: center"
      v-if="!isMobile"
    >
      <DayToggle :selectedDay="selectedDay" :toggleDay="toggleDay" />
      <ScheduleList
        :scheduleItems="scheduleItems"
        :getCircleColor="getCircleColor"
        :formatTitle="formatTitle"
        :timeStyle="timeStyle"
        :titleStyle="titleStyle"
        :noticeStyle="noticeStyle"
      />
    </div>

    <div class="relative min-h-full" v-else>
      <DayToggle :selectedDay="selectedDay" :toggleDay="toggleDay" />
      <ScheduleList
        :scheduleItems="scheduleItems"
        :getCircleColor="getCircleColor"
        :formatTitle="formatTitle"
        :timeStyle="timeStyle"
        :titleStyle="titleStyle"
        :noticeStyle="noticeStyle"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import ScheduleHeader from './ScheduleHeader.vue'
import DayToggle from './DayToggle.vue'
import ScheduleList from './ScheduleList.vue'

defineOptions({
  name: 'SchedulePage',
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

const toggleDay = () => {
  selectedDay.value = selectedDay.value === '0920' ? '0921' : '0920'
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

const isMobile = ref(false)

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768 // Assuming 768px as the breakpoint for mobile
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
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
