<template>
  <div class="relative w-full max-w-3xl mx-auto my-8 overflow-hidden rounded-xl shadow-lg">
    <!-- 背景圖片 -->
    <div class="absolute inset-0 z-0">
      <img
        src="../../assets/Problems/element/component56.svg"
        alt="通知欄背景"
        class="w-full h-full object-cover"
      />
    </div>

    <!-- 內容 -->
    <div class="relative z-10 p-4 md:p-6">
      <p class="text-center text-white text-sm md:text-base font-medium leading-relaxed">
        為保護梅竹黑客松協辦企業之權益，關於合作企業所提供之專屬技術或資源，
        若有需要參賽者簽署技術保密協定，參賽者必須配合簽署。
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
