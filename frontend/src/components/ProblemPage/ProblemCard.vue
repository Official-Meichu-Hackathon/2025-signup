<template>
  <div
    v-if="isDesktop"
    class="relative w-[45vw] h-[45vw] overflow-hidden flex items-center justify-center bg-white rounded-[2vw] shadow-lg border-[2px] border-dashed border-[#EBD5D8]"
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
      <div class="flex items-center justify-center w-[70%] h-[20%]">
        <img :src="logo" alt="公司 Logo" class="max-h-full" />
      </div>
      <!-- 公司名稱 -->
      <h2
        class="flex items-center text-[2.0vh] font-bold text-[#CD8A98] font-[Chiron_Hei_HK] m-[1vh]"
      >
        {{ companyName }}
      </h2>

      <!-- 分隔線 -->
      <div class="bg-[#CD8A98] w-[90%] h-[0.2vh]"></div>

      <!-- 題目標題 -->
      <p class="text-[2vh] font-semibold text-[#2D3E63] font-[Chiron_Hei_HK] m-[0.5vh]">
        {{ problemTitle }}
      </p>

      <!-- 題目內容 -->
      <p
        class="text-[1.8vh] text-[#2D3E63] font-bold tracking-wider leading-relaxed font-[Chiron_Hei_HK] w-[85%] m-[1vh]"
      >
        {{ problemContent }}
      </p>

      <!-- 題目連結 -->
      <a
        :href="problemLink"
        target="_blank"
        class="text-[1.8vh] text-white font-bold font-[Chiron_Hei_HK] m-[2vw] m-[3vh] rounded-[1vh]"
      >
        詳細題目說明 >>
      </a>
    </div>
  </div>

  <div
    v-else
    class="relative w-[70vw] h-[70vw] overflow-hidden flex items-center justify-center bg-white rounded-[5vw] shadow-lg border-[2px] border-dashed border-[#EBD5D8]"
  >
    <!-- items-center : 水平置中 justify-center : 垂直置中 -->
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
      <div class="flex items-center justify-center w-[70%] h-[28%]">
        <img :src="logo" alt="公司 Logo" class="max-w-full max-h-full" />
      </div>

      <!-- 公司名稱 -->
      <h2
        class="flex items-center text-[2.0vh] font-bold text-[#CD8A98] font-[Chiron_Hei_HK] top-[27%]"
      >
        {{ companyName }}
      </h2>

      <!-- 分隔線 -->
      <div class="bg-[#CD8A98] w-[80%] h-[0.2vh]"></div>

      <!-- 題目標題 -->
      <div class="text-[1.5vh] font-semibold text-[#2D3E63] m-[1.5vh] font-[Chiron_Hei_HK] h-[5%]">
        <p>
          {{ problemTitle }}
        </p>
      </div>

      <!-- 題目內容 -->
      <p
        class="text-[1.7vw] sm:text-[1.3vh] text-[#2D3E63] font-bold leading-relaxed font-[Chiron_Hei_HK] h-[30%]"
      >
        {{ problemContent }}
      </p>

      <!-- 題目連結 -->
      <a
        :href="problemLink"
        target="_blank"
        class="text-[1.3vh] text-white font-bold font-[Chiron_Hei_HK] rounded-[1vh] mt-[5%]"
      >
        詳細題目說明 >>
      </a>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'

const isDesktop = inject('isDesktop')

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

<style scoped>
@media (max-width: 768px) {
  .small-screen-text {
    font-size: 1vh;
  }
}
</style>
