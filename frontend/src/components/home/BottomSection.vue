<template>
  <div class="flex justify-center relative w-full min-h-screen overflow-hidden">
    <div class="min-h-[calc(100vh-56px)] flex flex-col w-full">
      <div
        class="mx-auto title mt-[5vh] text-center text-[#2D3E63] font-black font-['Chiron_Hei_HK']"
      >
        協辦單位

        <div class="w-[80vw] mt-[7vh] mb-[7vh] flex flex-row justify-around">
          <div class="mt-[2vh] w-[28vw] flex flex-col justify-center text-[black]">
            <div class="font-bold text-[1.8vw]">國立陽明交通大學資訊與工程學系</div>
            <div class="font-bold text-[0.7vw]">
              Department of Computer Science, National Yang Ming Chiao Tung University
            </div>
          </div>
          <img
            class="w-[23vw]"
            src="../../assets/Home/company/NCTU-foundation.svg"
            alt="NCTU-foundation"
          />
          <img class="w-[23vw]" src="../../assets/Home/company/ita.svg" alt="ita" />
        </div>
      </div>

      <div
        class="mx-auto title mt-[2vh] text-center text-[#2D3E63] font-black font-['Chiron_Hei_HK']"
      >
        特別感謝
      </div>

      <div class="text-[1.8vw] mx-auto flex flex-col text-[black] font-bold font-['Chiron_Hei_HK']">
        <div class="mt-[5vh] w-[80vw] flex flex-row justify-around">
          <div>國立陽明交通大學產學運籌中心</div>
          <div>國立陽明交通大學電機工程學系</div>
          <div>國立清華大學資訊工程學系</div>
        </div>

        <div class="pl-[3vw] mx-auto mt-[4vh] w-[63vw] flex flex-row justify-between">
          <div>國立清華大學電機資訊學院學士班</div>
          <div>國立清華大學清華學院學士班系學會</div>
        </div>

        <div class="mx-auto mt-[4vh]">
          <div>Colde Garage</div>
        </div>

        <div class="mb-[20vh]"></div>
      </div>

      <div
        class="mx-auto title mt-[2vh] text-center text-[#2D3E63] font-black font-['Chiron_Hei_HK']"
      >
        企業廣告
      </div>
      <div class="mt-[8vh] mb-[10vh] mx-auto w-[65vw] h-[70vh] bg-neutral-100"></div>

      <div
        class="mx-auto title mt-[2vh] text-center text-[#2D3E63] font-black font-['Chiron_Hei_HK']"
      >
        Youtube 影片
      </div>

      <div
        class="flex justify-center mt-[8vh] mb-[10vh] mx-auto w-[65vw] h-[70vh] bg-neutral-100"
        @click="Play = !Play"
      >
        <img v-if="!Play" src="../../assets/Home/play_circle.svg" alt="play_circle" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

defineOptions({
  name: 'BottomSection',
})

const Play = ref(false)
watch(Play, (newVal) => {
  console.log('Play 狀態變更為:', newVal)
})
</script>

<style scoped>
.title {
  width: 90vw;
  font-size: 2.5vw;
}

.container {
  border: red solid 3px;
}
</style>
