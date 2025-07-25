<template>
  <div class="relative flex justify-center w-[60vw] h-[20vh] rounded-[5vh]">
    <div class="absolute w-[100vw] h-auto -z-10 top-[-20vh]">
      <BackgroundTwo />
    </div>
    <!-- 背景圖片 -->
    <div class="absolute inset-0 z-0">
      <img
        src="../../assets/Problems/element/component56.svg"
        alt="通知欄背景"
        class="w-full h-full"
      />
    </div>
    <!-- 文字內容 -->
    <p
      class="absolute inset-0 flex items-center justify-center text-center text-[#566797] text-[1.2vw] md:text-[1.3vw] font-medium leading-relaxed font-['Chiron_Hei_HK'] z-10"
    >
      為保護梅竹黑客松協辦企業之權益，關於合作企業所提供之專屬技術或資源，<br />
      若有需要參賽者簽署技術保密協定，參賽者必須配合簽署。<br />
      無法配合者，主辦方有權取消參賽資格，感謝您的理解！
    </p>
  </div>
</template>

<script setup>
import BackgroundTwo from '../ProblemPage/Bg2.vue'

defineOptions({
  name: 'NoticeBar',
  components: {
    BackgroundTwo,
  },
})
</script>
