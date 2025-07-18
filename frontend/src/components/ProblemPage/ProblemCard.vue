<template>
  <div class="relative w-[55vh] h-[55vh] overflow-hidden">
    <!-- 卡片底圖 -->
    <img src="../../assets/Problems/Card/RectangleCard.svg" alt="卡片底圖" />

    <!-- 左下角覆蓋的 Cardleft -->
    <img
      src="../../assets/Problems/Card/Cardleft.svg"
      alt="左下角裝飾"
      class="absolute bottom-2.5 left-0 w-[50vh] h-[30vh]"
    />

    <!-- 右下角覆蓋的 Cardright -->
    <img
      src="../../assets/Problems/Card/Cardright.svg"
      alt="右下角裝飾"
      class="absolute bottom-2.5 right-0 w-[50vh] h-[30vh] rounded-[2.5vh]"
    />

    <!-- 卡片內容 -->
    <div class="absolute inset-0 flex flex-col items-center justify-center text-center px-[3vh]">
      <!-- 公司 Logo -->
      <img
        :src="logo"
        alt="公司 Logo"
        class="w-[30vh] h-[20vh] object-contain mb-[1vh] -mt-[14vh]"
      />
      <div class="bg-[#CD8A98] w-[80%] h-[0.1vh] mb-[2.5vh]"></div>

      <!-- 公司名稱 -->
      <!-- <h2 class="text-[3vh] font-bold text-[#2D3E63] mb-[1.5vh] font-[Chiron_Hei_HK]">
        {{ companyName }}
      </h2> -->

      <!-- 題目標題 -->
      <h3 class="text-[2vh] font-semibold text-[#2D3E63] mb-[1.5vh] font-[Chiron_Hei_HK]">
        {{ problemTitle }}
      </h3>

      <!-- 題目內容 -->
      <p class="text-[2vh] text-[#2D3E63] font-bold leading-relaxed mb-[2vh] font-[Chiron_Hei_HK]">
        {{ problemContent }}
      </p>

      <!-- 題目連結 -->
      <a
        :href="problemLink"
        target="_blank"
        class="text-[2vh] text-white font-bold font-[Chiron_Hei_HK]"
      >
        詳細題目說明 >>
      </a>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'ProblemCard',
})
defineProps({
  logo: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  problemTitle: {
    type: String,
    required: true,
  },
  problemContent: {
    type: String,
    required: true,
  },
  problemLink: {
    type: String,
    required: true,
  },
})
</script>
