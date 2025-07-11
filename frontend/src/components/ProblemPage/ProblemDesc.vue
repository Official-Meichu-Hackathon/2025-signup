<template>
  <Background>
    <div class="flex flex-col items-center justify-center min-h-[100vh]">
      <!-- 字體應該還沒引用 -->
      <h2
        class="font-bold text-[96px] leading-none text-center text-[#2D3E63] font-['Chiron_Hei_HK_Text']"
      >
        題目說明
      </h2>

      <!-- 通知欄位置在下方 -->
      <div class="w-full mt-16">
        <NoticeBar />
      </div>
    </div>
  </Background>
</template>

<script setup>
import Background from '../ProblemPage/Background.vue'
import NoticeBar from '../ProblemPage/NoticeBar.vue'

defineOptions({
  name: 'ProblemDesc',
  components: {
    Background,
    NoticeBar,
  },
})
</script>
