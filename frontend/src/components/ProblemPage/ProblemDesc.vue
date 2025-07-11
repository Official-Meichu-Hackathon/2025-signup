<template>
  <Background>
    <div class="flex flex-col items-center justify-center min-h-[100vh]">
      <!-- 字體應該還沒引用 -->
      <h1
        class="font-bold text-[96px] leading-none text-center text-[#2D3E63] font-['Chiron_Hei_HK_Text']"
      >
        題目說明
      </h1>

      <!-- 通知欄位置在下方 -->
      <div class="w-full mt-16">
        <NoticeBar />
      </div>
    </div>

    <div>
      <!-- 企業卡片輪播 - 黑客組 -->
      <div class="w-full mt-16">
        <h2 class="text-[32px] font-bold text-center text-[#2D3E63] mb-8">黑客組</h2>
        <ProblemCardGroup group-type="hacker" />
      </div>

      <!-- 企業卡片 - 創客交流組 -->
      <div class="w-full mt-16">
        <h2 class="text-[32px] font-bold text-center text-[#2D3E63] mb-8">創客交流組</h2>
        <ProblemCardGroup group-type="maker" />
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
