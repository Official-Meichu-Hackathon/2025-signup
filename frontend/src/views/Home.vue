<template>
  <div class="bg-[#fff] flex flex-col justify-center">
    <div class="flex items-center gap-2 py-20 overflow-hidden">
      <span
        class="text-center text-slate-700 text-xl md:text-2xl font-black font-['Chiron_Hei_HK_Text']"
      >
        {{ typedText }}
      </span>
      <span class="w-1 h-7 bg-neutral-400 rounded transition-all duration-700"></span>
    </div>
  </div>
  <div class="min-h-[calc(100vh-56px)] bg-[#2D3E63] flex flex-col items-center justify-center">
    <div class="text-3xl font-bold text-center text-[#F4F5F5]">Home Page</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const fullText = '距離活動開始還有'
const typedText = ref('')

onMounted(() => {
  let index = 0
  const interval = setInterval(() => {
    if (index < fullText.length) {
      typedText.value += fullText[index]
      index++
    } else if (index == fullText.length) {
      index = 0
      typedText.value = '' // Reset the text after completing the full text
    } else {
      clearInterval(interval)
    }
  }, 200) // Adjust typing speed here
})

defineOptions({
  name: 'HomePage',
})
</script>

<style scoped></style>
