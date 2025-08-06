<template>
  <div v-if="isDesktop" class="relative flex justify-center w-[60vw] h-[20vh] rounded-[5vh]">
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
      class="absolute inset-0 flex items-center justify-center text-center text-[#566797] text-[0.9vw] md:text-[1vw] lg:text-[1.1vw] font-medium leading-[1.6] font-['Chiron_Hei_HK'] z-10 px-[3%] py-[2%]"
    >
      為保護梅竹黑客松協辦企業之權益，關於合作企業所提供之專屬技術或資源，<br />
      若有需要參賽者簽署技術保密協定，參賽者必須配合簽署。<br />
      無法配合者，主辦方有權取消參賽資格，感謝您的理解！
    </p>
  </div>
  <div
    v-else
    class="relative flex justify-center items-center w-[70vw] h-[28vw] rounded-[2vh] bg-white border-2 border-dashed border-[#EBD5D8]"
  >
    <!-- 文字內容 -->
    <p
      class="absolute p-[4%] text-center text-[#566797] text-[2.5vw] font-medium leading-relaxed font-['Chiron_Hei_HK']"
    >
      為保護梅竹黑客松協辦企業之權益，<br />
      關於合作企業所提供之專屬技術或資源，<br />
      若有需要參賽者簽署技術保密協定，<br />
      參賽者必須配合簽署。<br />
      無法配合者，主辦方有權取消參賽資格，感謝您的理解！
    </p>
  </div>
</template>

<script setup>
import { inject } from 'vue'
import BackgroundTwo from '../ProblemPage/Bg2.vue'

const isDesktop = inject('isDesktop')

defineOptions({
  name: 'NoticeBar',
  components: {
    BackgroundTwo,
  },
})
</script>
