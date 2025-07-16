<template>
  <div class="relative w-full">
    <!-- 背景圖片 - 垂直排列 -->
    <div class="absolute inset-0 w-full -z-10">
      <div class="flex flex-col">
        <!-- 上方背景與橢圓疊加 -->
        <div class="relative">
          <img src="../../assets/Problems/background/bg.svg" alt="上方背景" class="w-full -z-10" />
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

        <!-- 中間背景容器 -->
        <div class="relative">
          <!-- 原有中間背景 -->
          <img
            src="../../assets/Problems/background/vector58.svg"
            alt="中間背景"
            class="w-full relative -top-170"
          />

          <!-- 疊加的 Frame59 - 向右上方移動 -->
          <img
            src="../../assets/Problems/element/Frame59.svg"
            alt="黑客組後面的圖"
            class="absolute left-[400px] -top-[400px] animate-fade"
          />
        </div>

        <img src="../../assets/Problems/background/vector59.svg" alt="藍暈" class="w-full" />
        <img
          src="../../assets/Problems/background/vector59pink.svg"
          alt="粉暈"
          class="w-full relative -top-[30px]"
        />
        <img
          src="../../assets/Problems/element/star.svg"
          alt="閃電"
          class="w-124 h-100 relative -top-[30px]"
        />
        <img
          src="../../assets/Problems/element/component37.svg"
          alt="閃電"
          class="w-124 h-100 relative -top-[30px]"
        />
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

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.animate-fade {
  animation: fade 3s ease-in-out forwards;
}
</style>
