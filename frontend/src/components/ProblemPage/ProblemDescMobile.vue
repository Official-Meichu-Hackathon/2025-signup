<template>
  <div class="w-full h-auto flex flex-col overflow-hidden relative">
    <!-- Background，保持 absolute -->
    <div class="absolute inset-0 w-full overflow-x-hidden -z-10">
      <BackgroundMobile />
    </div>

    <!-- ======= 封面 container ======= -->
    <div class="flex flex-col items-center justify-center py-[2vh]">
      <!-- 上面翅膠 -->
      <div class="relative w-full mx-auto h-[3vh]">
        <img
          src="../../assets/Problems/element/vector32.svg"
          alt="上面的小元件"
          class="absolute w-[15%] h-auto z-10 right-[50%]"
        />
      </div>

      <h1
        class="font-bold text-[20px] text-center text-[#2D3E63] font-['Chiron_Hei_HK'] tracking-wider z-20"
      >
        題目說明
      </h1>

      <!-- 下面翅膠 -->
      <div class="relative w-full mx-auto h-[3vh]">
        <img
          src="../../assets/Problems/element/vector31.svg"
          alt="下面的小元件"
          class="absolute w-[15%] h-auto z-10 left-[50%] bottom-0"
        />
      </div>

      <!-- notice bar -->
      <div class="relative m-[3vh]">
        <NoticeBar />
      </div>
    </div>

    <!-- ======= 黑客組 container ======= -->
    <section class="w-full flex flex-col items-center justify-start">
      <!-- 標題區域 -->
      <header class="w-full relative py-[2vh] flex items-center justify-center">
        <!-- 中間標題 -->
        <h2
          class="tracking-wider text-[4vw] font-bold text-center text-[#2D3E63] font-['Chiron_Hei_HK'] leading-tight relative z-10"
        >
          黑客組
        </h2>
        <!-- 流星 (絕對定位，固定在標題右側) -->
        <img
          src="../../assets/Problems/element/star.svg"
          alt="會動的流星"
          class="absolute w-[10vw] h-[10vw] left-1/2 ml-[6vw] top-1/2 -translate-y-1/2 animate-shooting-star"
        />
      </header>

      <!-- 卡片區域 -->
      <main class="w-full flex flex-col items-center justify-center min-h-[50vh]">
        <ProblemCardGroup />
      </main>
    </section>

    <!-- ======= 創客交流組 container ======= -->
    <div class="relative flex flex-col items-center justify-center mb-[5%]">
      <!-- 標題 -->
      <div class="flex flex-col items-center justify-center">
        <h2
          class="tracking-wide text-[4vw] font-bold text-center text-[#2D3E63] font-['Chiron_Hei_HK']"
        >
          創客交流組
        </h2>
      </div>

      <!-- 卡片 -->
      <div class="relative w-full flex items-center justify-center min-h-[50vh]">
        <ProblemCard
          :logo="HsinchuLogo"
          companyName="新竹市政府"
          problemTitle="題目"
          problem-content="題目題目題目之後改"
          problemLink="https://example.com/problem"
        />
        <img
          src="../../assets/Problems/element/Frame51.svg"
          alt="閃電"
          class="absolute w-[40vw] h-[40vw] bottom-[80%] left-[3%] -z-10 animate-blur-fade"
        />
        <img
          src="../../assets/Problems/element/Frame52.svg"
          alt="星星"
          class="absolute w-[13vw] h-[13vw] bottom-[0vw] right-[10vw] z-30 animate-star-motion"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import BackgroundMobile from './BackgroundMobile.vue'
import NoticeBar from '../ProblemPage/NoticeBar.vue'
import ProblemCardGroup from '../ProblemPage/ProblemCardGroup.vue'
import ProblemCard from '../ProblemPage/ProblemCard.vue'
import HsinchuLogo from '../../assets/Problems/Card/Hsinchulogo.svg'
</script>

<style scoped>
@keyframes star-motion {
  0% {
    opacity: 1;
  }
  25% {
    opacity: 0.5;
  }
  50% {
    opacity: 0;
  }
  75% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
.animate-star-motion {
  animation: star-motion 6s infinite;
}

@keyframes shooting-star {
  0% {
    transform: translate(0, 0) scale(1.5);
  }
  50% {
    transform: translate(-10vw, -8vw) scale(1.5);
  }
  100% {
    transform: translate(0, 0) scale(1.5);
  }
}
.animate-shooting-star {
  animation: shooting-star 5s cubic-bezier(0.4, 0, 1, 1) infinite;
}

@keyframes blur-fade {
  0% {
    opacity: 1;
    filter: blur(0px);
  }
  25% {
    opacity: 0.5;
    filter: blur(2px);
  }
  50% {
    opacity: 0.3;
    filter: blur(4px);
  }
  75% {
    opacity: 0.5;
    filter: blur(2px);
  }
  100% {
    opacity: 1;
    filter: blur(0px);
  }
}
.animate-blur-fade {
  animation: blur-fade 6s infinite;
}
</style>
