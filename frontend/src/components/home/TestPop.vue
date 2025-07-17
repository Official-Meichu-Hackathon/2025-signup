<template>
  <div
    class="relative min-h-screen bg-cover bg-center"
    style="background-image: url('https://source.unsplash.com/random/1600x900')"
  >
    <!-- 主按鈕 -->
    <button
      @click="showOptions = true"
      class="absolute top-10 left-10 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 z-10"
    >
      開啟選單
    </button>

    <!-- 遮罩 + 彈出選單 -->
    <div
      v-if="showOptions"
      class="fixed inset-0 z-50 flex items-center justify-center"
      @click.self="closeMenu"
    >
      <!-- 背景遮罩 -->
      <div
        @click="closeMenu"
        class="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300"
      ></div>

      <!-- 彈出選單 -->
      <div class="relative z-10 bg-white p-6 rounded-xl shadow-lg flex flex-col gap-4">
        <button
          @click="selectOption('選項一')"
          class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          選項一
        </button>
        <button
          @click="selectOption('選項二')"
          class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          選項二
        </button>
        <button @click="closeMenu" class="text-sm text-gray-500 mt-2 hover:underline">關閉</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onUnmounted } from 'vue'

const showOptions = ref(false)

watch(showOptions, (val) => {
  document.body.style.overflow = val ? 'hidden' : ''
})

onUnmounted(() => {
  document.body.style.overflow = ''
})

function closeMenu() {
  showOptions.value = false
}

function selectOption(option) {
  alert(`你選擇了：${option}`)
  closeMenu()
}
</script>
