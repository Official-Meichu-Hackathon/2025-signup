<template>
  <!-- Big Word-->
  <div
    class="w-full min-h-[80px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
    style="background-color: white; position: relative"
  >
    <!-- Wings -->
    <img
      src="/src/assets/Registration/wingleft.svg"
      class="absolute pointer-events-none z-20 h-auto scale-120 top-[42%] right-[50%] w-[20vw] wing-animate-left"
    />
    <img
      src="/src/assets/Registration/wingright.svg"
      class="absolute pointer-events-none z-20 h-auto scale-120 top-[42%] left-[50%] w-[20vw] wing-animate-right"
    />

    <div class="relative z-10 flex items-center justify-center w-full">
      <img
        src="/src/assets/Registration/Title.svg"
        alt="報名方式"
        class="w-[40vw] h-auto scale-60"
      />
    </div>
  </div>

  <!-- Schedule -->
  <div
    class="w-full min-h-[360px] flex items-center pt-10"
    style="background-color: white; position: relative"
  >
    <div class="flex items-center ml-10 h-80">
      <div class="w-0.5 h-full bg-[#2D3E63]"></div>
      <div class="flex flex-col ml-8 text-[#2D3E63] h-full justify-between">
        <div
          v-for="(item, idx) in scheduleItems"
          :key="idx"
          class="justify-start text-slate-700 text-lg font-bold font-['Chiron_Hei_HK_Text'] animate-fade-in-left"
          :style="{ animationDelay: `${idx * 0.2}s` }"
        >
          <div>{{ item.date }}</div>
          <div>{{ item.text }}</div>
          <div><br /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegistrationMobile',
  data() {
    return {
      scheduleItems: [
        { date: '8 / 11 (一) - 8 / 24 (日) 20:00 前', text: '開始報名' },
        { date: '8 / 25 (一) 08:00 前', text: '正取隊伍與所屬企業公布' },
        { date: '8 / 25 (一) -  8 / 28 (四)', text: '繳費期間' },
        { date: '8 / 29 (五) -  8 / 30 (六)', text: '備取遞補期間' },
      ],
    }
  },
}
</script>

<style scoped>
@keyframes fade-in-left {
  0% {
    opacity: 0;
    transform: translateX(-40px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
.animate-fade-in-left {
  animation: fade-in-left 0.6s cubic-bezier(0.4, 0.2, 0.2, 1) both;
}
</style>
