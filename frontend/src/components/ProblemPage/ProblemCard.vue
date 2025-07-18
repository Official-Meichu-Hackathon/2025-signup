<template>
  <div
    class="problem-card transition-all duration-300 ease-in-out"
    :class="{
      'scale-100 z-20 opacity-100': isActive,
      'scale-[0.85] z-10 opacity-70': !isActive && isAdjacent,
      'scale-[0.7] z-0 opacity-50': !isActive && !isAdjacent,
    }"
  >
    <div class="bg-white rounded-xl shadow-lg overflow-hidden max-w-md w-full">
      <!-- 企業標誌區域 -->
      <div class="bg-[#2D3E63] p-[2vh] text-white">
        <h3 class="text-xl font-bold">{{ companyName }}</h3>
      </div>

      <!-- 題目內容區域 -->
      <div class="p-[3vh]">
        <h4 class="text-lg font-semibold mb-[1.5vh] text-[#2D3E63]">題目</h4>
        <p class="text-gray-700">{{ problemContent }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  companyName: {
    type: String,
    required: true,
  },
  problemContent: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  isAdjacent: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped>
.problem-card {
  width: 20vw; /* 寬度改為螢幕寬度的 20% */
  min-height: 30vh; /* 高度改為螢幕高度的 30% */
}
</style>
