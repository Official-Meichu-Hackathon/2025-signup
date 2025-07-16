<template>
  <div class="min-h-[calc(100vh-56px)] bg-[#2D3E63] flex flex-col">
    <div
      class="mx-auto w-96 text-center justify-start text-white text-4xl font-black font-['Chiron_Hei_HK_Text']"
    >
      獎項資訊
    </div>

    <!-- first prize -->
    <div
      class="first-prize w-[709px] h-80 bg-gradient-to-br from-blue-100/50 to-blue-100/10 rounded-[30px] shadow-[0px_4px_25px_-5px_rgba(28,27,31,1.00)] border border-blue-100"
    >
      <!-- <div class="w-28 text-center justify-start text-white text-3xl font-black font-['Chiron_Hei_HK_Text'] leading-10">黑客組</div> -->
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'PrizeSection',
})
</script>

<style scoped>
.first-prize {
  margin-left: 20vh;
}
</style>
