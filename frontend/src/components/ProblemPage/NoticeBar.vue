<template>
  <div class="absolute top-[50vh] left-[20vw] w-[60vw] h-[20vh] rounded-[5vh]">
    <!-- 背景圖片 -->
    <div class="absolute inset-0 z-0">
      <img
        src="../../assets/Problems/element/component56.svg"
        alt="通知欄背景"
        class="w-full h-full"
      />
    </div>

    <!-- 內容 -->
    <div class="relative flex items-center justify-center h-full z-3 p-[2vh]">
      <p
        class="text-center text-[#2D3E63] text-[1.5vh] md:text-[2.0vh] font-medium leading-relaxed font-['Chiron_Hei_HK']"
      >
        為保護梅竹黑客松協辦企業之權益，關於合作企業所提供之專屬技術或資源，<br />
        若有需要參賽者簽署技術保密協定，參賽者必須配合簽署。<br />
        無法配合者，主辦方有權取消參賽資格，感謝您的理解！
      </p>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'NoticeBar',
})
</script>
