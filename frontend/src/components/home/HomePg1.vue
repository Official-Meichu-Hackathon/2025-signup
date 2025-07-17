<template>
  <div class="bg-[#fff] flex flex-col justify-center">
    <div
      class="flex items-center py-[clamp(3rem,10vw,5rem)] px-[clamp(1rem,5vw,5rem)] gap-[clamp(0.5rem,1vw,1rem)] overflow-hidden"
    >
      <span
        class="text-center text-slate-700 text-xl md:text-2xl font-black font-['Chiron_Hei_HK_Text'] min-h-[2rem]"
      >
        {{ typedText }}
      </span>
      <span class="w-1 h-7 bg-neutral-400 rounded transition-all duration-700"></span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const fullText = '距離活動開始還有'
const typedText = ref(' ')

onMounted(() => {
  let index = 0
  const interval = setInterval(() => {
    if (index < fullText.length) {
      typedText.value += fullText[index]
      index++
    } else if (index == fullText.length) {
      index = 0
      typedText.value = ' '
    } else {
      clearInterval(interval)
    }
  }, 200) // Adjust typing speed here
})

defineOptions({
  name: 'Page_1',
})
</script>

<style scoped></style>
