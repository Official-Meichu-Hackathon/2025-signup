<template>
  <div class="w-full h-auto flex flex-col">
    <Background>
      <!-- <div class="transform -translate-y-[5vh] w-full"> -->

      <!-- 封面component container -->
      <div class="flex flex-col items-center justify-center">
        <!-- 上面翅膠 -->
        <div class="relative w-full h-[20vh] mx-auto left-[25vw] top-[10vh] mb-[5%]">
          <!-- 上藍色小圓 -->
          <img
            src="../../assets/Problems/element/component40.svg"
            alt="上藍色小圓"
            class="absolute w-[2.5%] z-11 rounded-full animate-pulse-scale"
          />
          <!-- 上面的小元件 -->
          <img
            src="../../assets/Problems/element/vector32.svg"
            alt="上面的小元件"
            class="absolute w-[23%] h-[90%] z-10"
          />
          <!-- 粉色小圓 -->
          <img
            src="../../assets/Problems/element/component25.svg"
            alt="粉色小圓"
            class="absolute left-[14%] w-[3%] top-[20%] z-11 rounded-full animate-float"
          />
        </div>
        <!----------->

        <h1
          class="font-bold text-[7vw] text-center text-[#2D3E63] font-['Chiron_Hei_HK'] tracking-wider"
        >
          題目說明
        </h1>

        <!-- 下面翅膠 -->
        <div class="relative w-full h-[20vh] mx-auto left-[51vw]">
          <img
            src="../../assets/Problems/element/component40.svg"
            alt="下藍色小圓"
            class="absolute w-[2.5%] top-[9%] left-[5%] z-11 rounded-[2vh] animate-pulse-scale"
          />
          <img
            src="../../assets/Problems/element/vector31.svg"
            alt="下面的小元件"
            class="absolute w-[23%] h-[90%] z-10 top-0"
          />
          <img
            src="../../assets/Problems/element/component25.svg"
            alt="粉色小圓"
            class="absolute left-[19%] w-[3%] top-[20%] z-11 rounded-full animate-float"
          />
        </div>
        <!---------->

        <!-- notice bar -->
        <div class="relative">
          <NoticeBar />
        </div>
        <!---------->
      </div>
      <!-- 封面container end -->

      <!-- 黑客組container -->
      <div class="flex flex-col items-center justify-center h-[130vh] mb-[7vw]">
        <!-- 黑客組字樣 with element -->
        <div class="relative m-[18vh] w-full h-[30vh]">
          <img
            src="../../assets/Problems/element/Frame59.svg"
            alt="黑客組後面的圖"
            class="absolute w-90% top-[50%] left-[50%] transform -translate-x-[65%] -translate-y-[53%] animate-fade"
          />
          <h2
            class="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] tracking-wider text-[3vw] font-bold text-center text-[#2D3E63] font-['Chiron_Hei_HK']"
          >
            黑客組
          </h2>
        </div>
        <!---------------------->

        <ProblemCardGroup></ProblemCardGroup>
      </div>
      <!-- 黑客組container end-->

      <!-- 創客交流組 container -->
      <div class="relative h-[130vh] flex flex-col items-center justify-center mt-[7vw]">
        <!-- 創客交流組字樣 -->
        <div class="relative h-[30%] flex flex-col items-center justify-center">
          <h2
            class="tracking-wide text-[5vh] font-bold text-center text-[#2D3E63] font-['Chiron_Hei_HK']"
          >
            創客交流組
          </h2>
          <!-- 流星 -->
          <img
            src="../../assets/Problems/element/star.svg"
            alt="會動的流星"
            class="absolute w-[30vw] h-[30vw] top-[5%] right-[-120%] -z-10 animate-shooting-star"
          />
        </div>

        <!-- 卡片 -->
        <div class="relative w-full h-[70vh] flex items-center justify-center mb-[6vh] mt-[8vh]">
          <ProblemCard
            :logo="HsinchuLogo"
            companyName="新竹市政府"
            problemTitle="題目"
            problem-content="題目題目題目之後改"
            problemLink="https://example.com/problem"
          />

          <!-- 閃電 -->
          <img
            src="../../assets/Problems/element/Frame51.svg"
            alt="閃電"
            class="absolute w-[100%] h-[100%] bottom-[-20%] left-[-25%] -z-10 animate-blur-fade"
          />

          <!-- 星星 -->
          <img
            src="../../assets/Problems/element/Frame52.svg"
            alt="星星"
            class="absolute w-[8vw] h-[8vw] top-[-5vw] right-[24vw] z-30 animate-star-motion"
          />

          <!-- 發亮的星星 -->
          <img
            src="../../assets/Problems/element/Layer2.svg"
            alt="閃閃發亮的星星"
            class="absolute w-[10vw] h-[10vw] top-[5vw] left-[5%] z-20 animate-star-motion"
          />
        </div>
      </div>

      <!-- 創客交流組 container end -->
    </Background>
  </div>
</template>

<script setup>
import Background from '../ProblemPage/Background.vue'
import NoticeBar from '../ProblemPage/NoticeBar.vue'
import ProblemCardGroup from '../ProblemPage/ProblemCardGroup.vue'
import ProblemCard from '../ProblemPage/ProblemCard.vue'
import HsinchuLogo from '../../assets/Problems/Card/HsinchuLogo.svg'

defineOptions({
  name: 'ProblemDesc',
  components: {
    Background,
    NoticeBar,
    ProblemCardGroup,
  },
})
</script>

<style scoped>
/* 定義星星的漸變消失和浮出動畫 */
@keyframes star-motion {
  0% {
    opacity: 1; /* 完全可見 */
  }
  25% {
    opacity: 0.5; /* 半透明 */
  }
  50% {
    opacity: 0; /* 完全消失 */
  }
  75% {
    opacity: 0.5; /* 半透明 */
  }
  100% {
    opacity: 1; /* 完全可見 */
  }
}

.animate-star-motion {
  animation: star-motion 6s infinite; /* 動畫持續 6 秒，無限循環 */
}

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

@keyframes shooting-star {
  0% {
    transform: translate(0, 0) scale(2);
  }
  50% {
    transform: translate(-10vw, -8vw) scale(2); /* 射出去一小段 */
  }
  100% {
    transform: translate(0, 0) scale(2); /* 回到原位 */
  }
}

.animate-shooting-star {
  animation: shooting-star 5s cubic-bezier(0.4, 0, 1, 1) infinite;
}

@keyframes blur-fade {
  0% {
    opacity: 1; /* 完全可見 */
    filter: blur(0px); /* 無模糊 */
  }
  25% {
    opacity: 0.5; /* 半透明 */
    filter: blur(2px); /* 輕微模糊 */
  }
  50% {
    opacity: 0.3; /* 完全消失 */
    filter: blur(4px); /* 更模糊 */
  }
  75% {
    opacity: 0.5; /* 半透明 */
    filter: blur(2px); /* 輕微模糊 */
  }
  100% {
    opacity: 1; /* 完全可見 */
    filter: blur(0px); /* 無模糊 */
  }
}

.animate-blur-fade {
  animation: star-motion 6s infinite; /* 動畫持續 6 秒，無限循環 */
}

@keyframes fade {
  0% {
    opacity: 0.2; /* 初始透明 */
  }
  50% {
    opacity: 1; /* 半透明 */
  }
  100% {
    opacity: 0.2; /* 最終完全可見 */
  }
}
.animate-fade {
  animation: fade 5s ease-in-out infinite; /* 動畫持續 3 秒，並在結束時保持最終狀態 */
}
</style>
