<template>
  <div class="relative" style="margin-left: 0px; display: flex; justify-content: center">
    <!-- Decorative rectangles (behind) -->
    <div class="absolute cursor-pointer" :style="decorativeRectStyle" @click="toggleDay">
      <span :style="dateTextStyle">0920 Sat.</span>
    </div>
    <div class="absolute cursor-pointer" :style="decorativeRectStyle2" @click="toggleDay">
      <span :style="dateTextStyle2">0921 Sun.</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  selectedDay: String,
  toggleDay: Function,
})

const decorativeRectStyle = computed(() => ({
  width: '9.27vw',
  height: '18.33vh',
  backgroundColor: props.selectedDay === '0920' ? '#DB8396' : '#F4DAE1',
  borderRadius: '2.34vw',
  boxShadow: props.selectedDay === '0920' ? '2px -2px 5px rgba(0, 0, 0, 0.22)' : 'none',
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
  backgroundColor: props.selectedDay === '0920' ? '#F4DAE1' : '#DB8396',
  borderRadius: '2.34vw',
  boxShadow: props.selectedDay === '0920' ? 'none' : '2px -2px 5px rgba(0, 0, 0, 0.22)',
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
  fontSize: props.selectedDay === '0920' ? '1.56vw' : '1.25vw',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: 'normal',
  paddingTop: '2.56vh',
}))

const dateTextStyle2 = computed(() => ({
  color: '#FFF',
  fontFamily: '"Chiron Hei HK Text", sans-serif',
  fontSize: props.selectedDay === '0920' ? '1.25vw' : '1.56vw',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: 'normal',
  paddingTop: '2.56vh',
}))
</script>
