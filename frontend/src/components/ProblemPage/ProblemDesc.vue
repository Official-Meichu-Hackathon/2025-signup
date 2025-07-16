<template>
  <Background>
    <div class="transform -translate-y-[50px] w-full">
      <!-- 標題 -->
      <div class="flex flex-col items-center justify-center min-h-[100vh]">
        <h1
          class="font-bold text-[96px] leading-none text-center text-[#2D3E63] font-['Chiron_Hei_HK']"
        >
          題目說明
        </h1>
      </div>

      <!-- 通知欄 - 使用絕對定位 -->
      <NoticeBar />

      <div>
        <!-- 企業卡片輪播 - 黑客組 -->
        <div class="w-full mt-16">
          <h2 class="text-[50px] font-bold text-center text-[#2D3E63] mb-8 font-['Chiron_Hei_HK']">
            黑客組
          </h2>
          <ProblemCardGroup group-type="hacker" />
        </div>

        <!-- 企業卡片 - 創客交流組 -->
        <div class="w-full mt-16">
          <h2 class="text-[50px] font-bold text-center text-[#2D3E63] mb-8 font-['Chiron_Hei_HK']">
            創客交流組
          </h2>
          <ProblemCardGroup group-type="maker" />
        </div>
      </div>
    </div>
  </Background>
</template>

<script setup>
import Background from '../ProblemPage/Background.vue'
import NoticeBar from '../ProblemPage/NoticeBar.vue'
import ProblemCardGroup from '../ProblemPage/ProblemCardGroup.vue'

defineOptions({
  name: 'ProblemDesc',
  components: {
    Background,
    NoticeBar,
    ProblemCardGroup,
  },
})
</script>
