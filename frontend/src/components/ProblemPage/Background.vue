<template>
  <div class="relative w-full">
    <!-- 背景圖片 - 垂直排列 -->
    <div class="absolute inset-0 w-full -z-10">
      <div class="flex flex-col">
        <img src="../../assets/Problems/background/bg.svg" alt="上方背景" class="w-full" />
        <img
          src="../../assets/Problems/background/vector58.svg"
          alt="中間背景"
          class="w-full -mt-8"
        />
        <img src="../../assets/Problems/background/vector59.svg" alt="下方背景" class="w-full" />
      </div>
    </div>

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
