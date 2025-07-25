<template>
  <div
    class="relative w-[45vw] h-[45vw] overflow-hidden flex items-center justify-center bg-white rounded-[2vw] shadow-lg border-3 border-dashed border-[#c9b3b8]"
  >
    <!-- 卡片背景 -->

    <!-- 左下角漸層 -->
    <img
      src="../../assets/Problems/Card/Cardleft.svg"
      alt="左下角漸層"
      class="absolute left-0 -bottom-[30%] w-full h-full"
    />
    <img
      src="../../assets/Problems/Card/Cardright.svg"
      alt="右下角漸層"
      class="absolute right-0 bottom-[-30%] w-full h-full"
    />
    <!-- 卡片內容 -->
    <div class="relative flex flex-col items-center justify-between text-center w-[80%] h-[80%]">
      <!-- 公司 Logo -->
      <div class="flex items-center justify-center w-full h-[33%]">
        <img :src="logo" alt="公司 Logo" class="max-w-[80%] max-h-full" />
      </div>
      <!-- 公司名稱 -->
      <!-- <h2 class="absolute text-[2.0vh] font-bold text-[#CD8A98] font-[Chiron_Hei_HK] top-[27%]">
        {{ companyName }}
      </h2> -->

      <!-- 分隔線 -->
      <div class="absolute bg-[#CD8A98] w-[90%] h-[0.2vh] top-[33%]"></div>

      <!-- 題目標題 -->
      <p
        class="absolute text-[2vh] font-semibold text-[#2D3E63] m-[1.5vh] font-[Chiron_Hei_HK] top-[36%] h-[5%]"
      >
        {{ problemTitle }}
      </p>

      <!-- 題目內容 -->
      <p
        class="absolute text-[1.8vh] text-[#2D3E63] font-bold leading-relaxed font-[Chiron_Hei_HK] top-[50%] h-[27%]"
      >
        {{ problemContent }}
      </p>

      <!-- 題目連結 -->
      <a
        :href="problemLink"
        target="_blank"
        class="text-[1.8vh] text-white font-bold font-[Chiron_Hei_HK] px-[2vw] py-[0.5vh] rounded-[1vh]"
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
