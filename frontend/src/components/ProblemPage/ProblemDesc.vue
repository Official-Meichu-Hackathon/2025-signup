<template>
  <div class="w-full h-auto">
    <Background>
      <div class="transform -translate-y-[5vh] w-full">
        <!-- 標題 -->
        <div class="flex flex-col items-center justify-center min-h-[100vh]">
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
          <h1 class="font-bold text-[8vh] text-center text-[#2D3E63] font-['Chiron_Hei_HK']">
            題目說明
          </h1>
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

        <!-- 通知欄 - 使用絕對定位 -->
        <div class="absolute top-[30vh] left-[1/2] transform -translate-x-[50%]">
          <NoticeBar />
        </div>

        <div>
          <!-- 企業卡片輪播 - 黑客組 -->
          <div class="w-full mt-[25vh]">
            <!-- <img
            src="../../assets/Problems/element/Frame59.svg"
            alt="黑客組後面的圖"
            class="absolute left-[35vh] top-[10vh] animate-fade"
            /> -->
            <h2
              class="tracking-wide text-[5vh] font-bold text-center text-[#2D3E63] mb-[23vh] font-['Chiron_Hei_HK']"
            >
              黑客組
            </h2>

            <ProblemCardGroup />
          </div>
          <!-- <img
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
          /> -->

          <!-- 企業卡片 - 創客交流組 -->
          <div class="w-full mt-[25vh]">
            <h2
              class="tracking-wide text-[5vh] font-bold text-center text-[#2D3E63] mb-[23vh] font-['Chiron_Hei_HK']"
            >
              創客交流組
            </h2>
            <!-- <ProblemCardGroup /> -->
            <div class="relative w-full h-[70vh] flex items-center justify-center mb-[6vh]">
              <ProblemCard
                :logo="HsinchuLogo"
                companyName="新竹市政府"
                problemTitle="題目"
                problem-content="題目題目題目之後改"
                problemLink="https://example.com/problem"
              />
            </div>
            <img
              src="../../assets/Problems/element/Frame52.svg"
              alt="星星"
              class="w-[18vh] h-[18vh] relative -top-[90vh] left-[110vh] z-30 animate-star-motion"
            />
          </div>
        </div>
      </div>
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
</style>
