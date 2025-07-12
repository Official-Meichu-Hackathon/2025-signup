<template>
  <div class="relative w-full">
    <!-- 背景圖片 - 垂直排列 -->
    <div class="absolute inset-0 w-full -z-10">
      <div class="flex flex-col">
        <!-- 上方背景與橢圓疊加 -->
        <div class="relative">
          <!-- vector32 元素 -->
          <img
            src="../../assets/Problems/element/vector32.svg"
            alt="上面的小元件"
            class="absolute top-[195px] left-[357px] w-[340px] h-[46px] z-10 rounded-[20px] pointer-events-none"
          />

          <img src="../../assets/Problems/background/bg.svg" alt="上方背景" class="w-full -z-10" />
          <img
            src="../../assets/Problems/background/ellipse28.svg"
            alt="中央橢圓"
            class="absolute top-[-50px] left-[187px] w-[1075px] h-[1056px] -z-10 pointer-events-none"
          />
          <img
            src="../../assets/Problems/element/vector31.svg"
            alt="下面的小元件"
            class="absolute top-[558px] left-[742px] w-[340px] h-[46px] z-10 rounded-[20px] pointer-events-none"
          />
        </div>

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
