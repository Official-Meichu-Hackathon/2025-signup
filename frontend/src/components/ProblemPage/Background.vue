<template>
  <div class="relative w-full overflow-hidden">
    <!-- 背景圖片 - 垂直排列 -->
    <div class="absolute w-full -z-10 h-auto">
      <div class="flex flex-col">
        <!-- 上方背景與橢圓疊加 -->
        <div class="relative">
          <img src="../../assets/Problems/background/bg.svg" alt="上方背景" class="w-full -z-10" />

          <img
            src="../../assets/Problems/background/ellipse28.svg"
            alt="中央橢圓"
            class="absolute top-[-5vh] left-[18.7vh] w-[107.5vh] h-[105.6vh] -z-10"
          />
        </div>

        <!-- 中間背景容器 -->
        <div class="relative">
          <!-- 原有中間背景 -->
          <img
            src="../../assets/Problems/background/vector58.svg"
            alt="中間背景"
            class="w-full relative -top-[95vh] z-10"
          />
          <!-- 疊加的 Frame59 - 向右上方移動 -->
        </div>

        <img
          src="../../assets/Problems/background/vector59.svg"
          alt="藍暈"
          class="w-full relative -top-[120vh]"
        />
        <img
          src="../../assets/Problems/background/vector59pink.svg"
          alt="粉暈"
          class="w-full relative -top-[185vh]"
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

/* 定義星星的往復運動動畫 */
@keyframes star-motion {
  0% {
    transform: translate(8vh, 8vh);
    animation-timing-function: cubic-bezier(0.55, 0, 1, 1); /* 加速 */
  }
  50% {
    transform: translate(-8vh, -8vh);
    animation-timing-function: linear; /* 勻速 */
  }
  100% {
    transform: translate(8vh, 8vh);
    animation-timing-function: cubic-bezier(0.55, 0, 1, 1); /* 加速 */
  }
}

.animate-star-motion {
  animation: star-motion 4s infinite; /* 動畫持續 6 秒，無限循環 */
}

@keyframes blur-fade {
  0% {
    filter: blur(0); /* 初始清晰 */
    opacity: 1; /* 完全可見 */
  }
  50% {
    filter: blur(10px); /* 中間模糊 */
    opacity: 0.6; /* 半透明 */
  }
  100% {
    filter: blur(0); /* 恢復清晰 */
    opacity: 1; /* 完全可見 */
  }
}

.animate-blur-fade {
  animation: blur-fade 5s infinite; /* 動畫持續 3 秒，無限循環 */
}
</style>
