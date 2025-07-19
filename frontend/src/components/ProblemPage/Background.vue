<template>
  <div class="relative w-full overflow-hidden">
    <!-- 背景圖片 - 垂直排列 -->
    <div class="absolute w-full -z-10 h-auto">
      <div class="flex flex-col">
        <!-- 上方背景與橢圓疊加 -->
        <div class="relative">
          <img src="../../assets/Problems/background/bg.svg" alt="上方背景" class="w-full -z-10" />
          <img
            src="../../assets/Problems/element/component40.svg"
            alt="上藍色小圓"
            class="absolute top-[16vh] left-[34vh] w-[3vh] h-[3vh] z-11 rounded-[2vh] animate-pulse-scale"
          />
          <!-- wing -->
          <img
            src="../../assets/Problems/element/vector32.svg"
            alt="上面的小元件"
            class="absolute top-[19.5vh] left-[35.7vh] w-[34vh] h-[4.6vh] z-10 rounded-[2vh]"
          />
          <img
            src="../../assets/Problems/element/component25.svg"
            alt="粉色小圓"
            class="absolute top-[16.8vh] left-[52.5vh] w-[10vh] h-[10vh] z-11 rounded-[2vh] animate-float"
          />
          <img
            src="../../assets/Problems/background/ellipse28.svg"
            alt="中央橢圓"
            class="absolute top-[-5vh] left-[18.7vh] w-[107.5vh] h-[105.6vh] -z-10"
          />
          <img
            src="../../assets/Problems/element/component40.svg"
            alt="下藍色小圓"
            class="absolute top-[53.2vh] left-[100vh] w-[3vh] h-[3vh] z-11 rounded-[2vh] animate-pulse-scale"
          />
          <img
            src="../../assets/Problems/element/vector31.svg"
            alt="下面的小元件"
            class="absolute top-[55.8vh] left-[100vh] w-[34vh] h-[4.6vh] z-10 rounded-[2vh]"
          />
          <img
            src="../../assets/Problems/element/component25.svg"
            alt="粉色小圓"
            class="absolute top-[53.2vh] left-[125vh] w-[10vh] h-[10vh] z-11 rounded-[2vh] animate-float"
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
          <img
            src="../../assets/Problems/element/Frame59.svg"
            alt="黑客組後面的圖"
            class="absolute left-[35vh] top-[-32vh] animate-fade"
          />
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
        <img
          src="../../assets/Problems/element/star.svg"
          alt="流星"
          class="w-[38vh] h-[38vh] relative -top-[245vh] left-[86vh] animate-star-motion"
        />
        <img
          src="../../assets/Problems/element/Frame51.svg"
          alt="閃電"
          class="w-[60vh] h-[60vh] relative -top-[210vh] left-[8vh] animate-blur-fade"
        />
        <img
          src="../../assets/Problems/element/Layer2.svg"
          alt="閃閃發亮的星星"
          class="w-[12vh] h-[12vh] relative -top-[280vh] left-[5vh] z-30"
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
    transform: translateY(-2vh);
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
