<template>
  <div
    class="min-h-[calc(100vh-56px)] relative w-full flex flex-col items-center justify-center overflow-hidden"
  >
    <!-- 背景圖片 -->
    <img
      src="../../assets/Problems/background/bg.svg"
      alt="背景"
      class="absolute inset-0 w-full h-full object-cover z-0"
    />

    <!-- 內容插槽 -->
    <div class="relative z-10 w-full">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'BackgroundComponent',
})
</script>

<style scoped>
.background-container {
  min-height: calc(100vh - 56px);
  width: 100%;
  background-image: linear-gradient(to bottom, #d83671, #1a2c55);
  position: relative;
  overflow: hidden;
}

/* 您可以添加其他背景元素 */
.background-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('@/assets/Problems/background-pattern.svg');
  background-repeat: repeat;
  opacity: 0.05;
  z-index: 0;
}
</style>
