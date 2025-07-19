<template>
  <div class="w-full h-auto">
    <Background>
      <div class="transform -translate-y-[5vh] w-full">
        <!-- 標題 -->
        <div class="flex flex-col items-center justify-center min-h-[100vh]">
          <h1 class="font-bold text-[8vh] text-center text-[#2D3E63] font-['Chiron_Hei_HK']">
            題目說明
          </h1>
        </div>

        <!-- 通知欄 - 使用絕對定位 -->
        <div class="absolute top-[30vh] left-[1/2] transform -translate-x-[50%]">
          <NoticeBar />
        </div>

        <div>
          <!-- 企業卡片輪播 - 黑客組 -->
          <div class="w-full mt-[25vh]">
            <h2
              class="tracking-wide text-[5vh] font-bold text-center text-[#2D3E63] mb-[23vh] font-['Chiron_Hei_HK']"
            >
              黑客組
            </h2>
            <ProblemCardGroup />
          </div>

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
</style>
