<template>
  <div class="relative w-full">
    <!-- 背景圖片 - 垂直排列 -->
    <div class="absolute inset-0 w-full -z-10">
      <div class="flex flex-col">
        <!-- 上方背景與橢圓疊加 -->
        <div class="relative">
          <img
            src="../../assets/Problems/element/component40.svg"
            alt="上藍色小圓"
            class="absolute top-[162px] left-[342px] w-[30px] h-[30px] z-11 rounded-[20px] pointer-events-none animate-pulse-scale"
          />
          <!-- wing -->
          <img
            src="../../assets/Problems/element/vector32.svg"
            alt="上面的小元件"
            class="absolute top-[195px] left-[357px] w-[340px] h-[46px] z-10 rounded-[20px] pointer-events-none"
          />
          <img
            src="../../assets/Problems/element/component25.svg"
            alt="粉色小圓"
            class="absolute top-[168px] left-[525px] w-[100px] h-[100px] z-11 rounded-[20px] pointer-events-none animate-float"
          />
          <img src="../../assets/Problems/background/bg.svg" alt="上方背景" class="w-full -z-10" />
          <img
            src="../../assets/Problems/background/ellipse28.svg"
            alt="中央橢圓"
            class="absolute top-[-50px] left-[187px] w-[1075px] h-[1056px] -z-10 pointer-events-none"
          />
          <img
            src="../../assets/Problems/element/component40.svg"
            alt="下藍色小圓"
            class="absolute top-[532px] left-[823px] w-[30px] h-[30px] z-11 rounded-[20px] pointer-events-none animate-pulse-scale"
          />
          <img
            src="../../assets/Problems/element/vector31.svg"
            alt="下面的小元件"
            class="absolute top-[558px] left-[742px] w-[340px] h-[46px] z-10 rounded-[20px] pointer-events-none"
          />
          <img
            src="../../assets/Problems/element/component25.svg"
            alt="粉色小圓"
            class="absolute top-[532px] left-[970px] w-[100px] h-[100px] z-11 rounded-[20px] pointer-events-none animate-float"
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

<style scoped>
@keyframes pulse-scale {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
.animate-pulse-scale {
  animation: pulse-scale 2s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}
.animate-float {
  animation: float 1s ease-in-out infinite;
}
</style>
