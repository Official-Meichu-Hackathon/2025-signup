<template>
  <div class="w-[45vw] h-[44vw] overflow-hidden relative flex items-center justify-center">
    <!-- 卡片背景 -->
    <div class="absolute">
      <!-- 卡片底圖 -->
      <img
        src="../../assets/Problems/Card/RectangleCard.svg"
        alt="卡片底圖"
        class="w-full h-full object-cover"
      />

      <!-- 左下角覆蓋的 Cardleft -->
      <img
        src="../../assets/Problems/Card/Cardleft.svg"
        alt="左下角漸層"
        class="absolute left-0 bottom-0 w-[50%] h-[30%] rounded-[3vh]"
      />

      <!-- 右下角覆蓋的 Cardright -->
      <img
        src="../../assets/Problems/Card/Cardright.svg"
        alt="右下角漸層"
        class="absolute right-0 bottom-0 w-[50%] h-[30%] rounded-[2.5vh]"
      />
    </div>

    <!-- 卡片內容 -->
    <div class="relative flex flex-col items-center justify-between text-center w-[90%] h-[90%]">
      <!-- 公司 Logo -->
      <div class="flex items-center justify-center w-full h-[33%]">
        <img :src="logo" alt="公司 Logo" class="max-w-[60%] max-h-full" />
      </div>
      <!-- 公司名稱 -->
      <!-- <h2 class="absolute text-[2.0vh] font-bold text-[#CD8A98] font-[Chiron_Hei_HK] top-[27%]">
        {{ companyName }}
      </h2> -->

      <!-- 分隔線 -->
      <div class="absolute bg-[#CD8A98] w-[80%] h-[0.2vh] top-[33%]"></div>

      <!-- 題目標題 -->
      <h3
        class="absolute text-[2vh] font-semibold text-[#2D3E63] mb-[1.5vh] font-[Chiron_Hei_HK] top-[36%]"
      >
        {{ problemTitle }}
      </h3>

      <!-- 題目內容 -->
      <p
        class="text-[1.8vh] text-[#2D3E63] font-bold leading-relaxed mb-[2vh] font-[Chiron_Hei_HK] top-[38%]"
      >
        {{ problemContent }}
      </p>

      <!-- 題目連結 -->
      <a
        :href="problemLink"
        target="_blank"
        class="text-[1.8vh] text-white font-bold font-[Chiron_Hei_HK] bg-[#2D3E63] px-[2vw] py-[0.5vh] rounded-[1vh]"
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
