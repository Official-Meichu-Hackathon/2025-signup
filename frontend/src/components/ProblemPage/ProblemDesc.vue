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
