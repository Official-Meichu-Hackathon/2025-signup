<script setup>
import '../assets/css/signup.css'
</script>

<template>
  <div
    class="flex items-center justify-center bg-gray-50 p-4"
    style="min-height: calc(100vh - 56px - 134px)"
  >
    <div
      class="bg-white border border-gray-200 shadow-2xl rounded-3xl p-8 text-center flex items-center justify-center flex-col py-35 px-30 relative"
    >
      <h1 class="text-6xl font-extrabold text-darkblue mb-6 relative z-10">報名成功</h1>
      <img
        src="/src/assets/signup/success-center-light.svg"
        alt="Background light"
        class="absolute top-3/7 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none"
      />
      <img src="/src/assets/signup/success-creatures.svg" alt="Cute creatures" class="w-48 z-10" />
      <a
        target="_blank"
        href="/"
        class="text-[#B4B4B4] z-10 mt-12 px-12 py-3 font-black"
        style="
          border-radius: 40px;
          background: rgba(244, 218, 225, 0.02);
          box-shadow: 0 4px 20px -1px rgba(0, 0, 0, 0.47);
        "
        >返回首頁</a
      >
    </div>
  </div>
</template>
