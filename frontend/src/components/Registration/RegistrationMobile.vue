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
    class="w-full min-h-[380px] flex items-center"
    style="background-color: white; position: relative"
  >
    <div class="flex items-center ml-8 sm:ml-12 md:ml-24 h-80 pt-2">
      <div class="w-0.5 h-full bg-[#2D3E63] translate-y-1"></div>
      <div class="flex flex-col ml-8 sm:ml-12 md:ml-24 text-[#2D3E63] h-full justify-between">
        <div
          v-for="(item, idx) in scheduleItems"
          :key="idx"
          class="justify-start text-slate-700 text-xl sm:text-2xl md:text-5xl font-bold font-['Chiron_Hei_HK_Text'] animate-fade-in-left"
          :style="{ animationDelay: `${idx * 0.2}s` }"
        >
          <div>{{ item.date }}</div>
          <div>{{ item.text }}</div>
          <div><br /></div>
        </div>
      </div>
    </div>
  </div>
  <!-- Registration Info -->
  <div
    class="w-full h-auto bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center pt-12 pb-2"
    style="background-color: white; position: relative"
  >
    <!-- Toggle Boxes -->
    <div class="w-[80vw] space-y-4">
      <!-- Box 1 - 報名費用 -->
      <div
        class="min-h-[72px] rounded-tl-2xl rounded-tr-2xl border-2 border-neutral-100 border-b-0 relative transition-all duration-300 cursor-pointer"
        :class="activeBox === 0 ? 'bg-[#7B8EBF]' : 'bg-blue-100'"
        @click="toggleBox(0)"
      >
        <div class="p-4 flex justify-between items-center">
          <span
            class="font-bold text-lg"
            :class="activeBox === 0 ? 'text-[#FFFFFF]' : 'text-[#2D3E63]'"
            >報名費用</span
          >
          <svg
            class="w-6 h-6 transition-transform duration-300 toggle-flicker"
            fill="none"
            :stroke="activeBox === 0 ? '#FFFFFF' : '#2D3E63'"
            viewBox="0 0 24 24"
          >
            <path
              v-if="activeBox !== 0"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M12 1v22M1 12h22"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M1 12h22"
            />
          </svg>
        </div>
        <div
          class="expandable-content overflow-hidden transition-all duration-300"
          :class="{ expanded: activeBox === 0, 'expanded-bg': activeBox === 0 }"
        >
          <div
            class="px-4 pb-8 text-sm"
            :class="activeBox === 0 ? 'text-[#FFFFFF]' : 'text-[#2D3E63]'"
          >
            ＄900／人（含保證金 ＄200）<br />
            跨域組隊優惠：每人減免＄100
          </div>
        </div>
      </div>

      <!-- Box 2 - 保證金制度 -->
      <div
        class="min-h-[72px] rounded-tl-2xl rounded-tr-2xl border-2 border-neutral-100 border-b-0 relative transition-all duration-300 cursor-pointer -mt-8"
        :class="activeBox === 1 ? 'bg-[#7B8EBF]' : 'bg-blue-100'"
        @click="toggleBox(1)"
      >
        <div class="p-4 flex justify-between items-center">
          <span
            class="font-bold text-lg"
            :class="activeBox === 1 ? 'text-[#FFFFFF]' : 'text-[#2D3E63]'"
            >保證金制度</span
          >
          <svg
            class="w-6 h-6 transition-transform duration-300 toggle-flicker"
            fill="none"
            :stroke="activeBox === 1 ? '#FFFFFF' : '#2D3E63'"
            viewBox="0 0 24 24"
          >
            <path
              v-if="activeBox !== 1"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M12 1v22M1 12h22"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M1 12h22"
            />
          </svg>
        </div>
        <div
          class="expandable-content overflow-hidden transition-all duration-300"
          :class="{ expanded: activeBox === 1, 'expanded-bg': activeBox === 1 }"
        >
          <div
            class="px-4 pb-8 text-sm"
            :class="activeBox === 1 ? 'text-[#FFFFFF]' : 'text-[#2D3E63]'"
          >
            符合活動參與條件即可退還保證金<br />
            詳細退還條件請參閱報名須知
          </div>
        </div>
      </div>

      <!-- Box 3 - 報名資格 -->
      <div
        class="min-h-[72px] rounded-tl-2xl rounded-tr-2xl border-2 border-neutral-100 border-b-0 relative transition-all duration-300 cursor-pointer -mt-8"
        :class="activeBox === 2 ? 'bg-[#7B8EBF]' : 'bg-blue-100'"
        @click="toggleBox(2)"
      >
        <div class="p-4 flex justify-between items-center">
          <span
            class="font-bold text-lg"
            :class="activeBox === 2 ? 'text-[#FFFFFF]' : 'text-[#2D3E63]'"
            >報名資格</span
          >
          <svg
            class="w-6 h-6 transition-transform duration-300 toggle-flicker"
            fill="none"
            :stroke="activeBox === 2 ? '#FFFFFF' : '#2D3E63'"
            viewBox="0 0 24 24"
          >
            <path
              v-if="activeBox !== 2"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M12 1v22M1 12h22"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M1 12h22"
            />
          </svg>
        </div>
        <div
          class="expandable-content overflow-hidden transition-all duration-300"
          :class="{ expanded: activeBox === 2, 'expanded-bg': activeBox === 2 }"
        >
          <div
            class="px-4 pb-8 text-sm"
            :class="activeBox === 2 ? 'text-[#FFFFFF]' : 'text-[#2D3E63]'"
          >
            黑客組：大專院校生及碩博士生<br />
            創客交流組：高中職、大專、碩博、社會人士皆可
          </div>
        </div>
      </div>

      <!-- Box 4 - 報名方式 -->
      <div
        class="min-h-[72px] rounded-tl-2xl rounded-tr-2xl border-2 border-neutral-100 border-b-0 relative transition-all duration-300 cursor-pointer -mt-8"
        :class="activeBox === 3 ? 'bg-[#7B8EBF]' : 'bg-blue-100'"
        @click="toggleBox(3)"
      >
        <div class="p-4 flex justify-between items-center">
          <span
            class="font-bold text-lg"
            :class="activeBox === 3 ? 'text-[#FFFFFF]' : 'text-[#2D3E63]'"
            >報名方式</span
          >
          <svg
            class="w-6 h-6 transition-transform duration-300 toggle-flicker"
            fill="none"
            :stroke="activeBox === 3 ? '#FFFFFF' : '#2D3E63'"
            viewBox="0 0 24 24"
          >
            <path
              v-if="activeBox !== 3"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M12 1v22M1 12h22"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M1 12h22"
            />
          </svg>
        </div>
        <div
          class="expandable-content overflow-hidden transition-all duration-300"
          :class="{ expanded: activeBox === 3, 'expanded-bg': activeBox === 3 }"
        >
          <div
            class="px-4 pb-8 text-sm"
            :class="activeBox === 3 ? 'text-[#FFFFFF]' : 'text-[#2D3E63]'"
          >
            自行組隊報名，每隊 3-5 人<br />
            提供臉書媒合社群協助找隊友
          </div>
        </div>
      </div>

      <!-- Box 5 - 其他注意事項 -->
      <div
        class="min-h-[80px] rounded-tl-2xl rounded-tr-2xl border-2 border-neutral-100 border-b-0 relative transition-all duration-300 cursor-pointer -mt-8"
        :class="activeBox === 4 ? 'bg-[#7B8EBF]' : 'bg-gradient-to-b from-blue-100 to-white'"
        @click="toggleBox(4)"
      >
        <div class="p-4 flex justify-between items-center">
          <span
            class="font-bold text-lg"
            :class="activeBox === 4 ? 'text-[#FFFFFF]' : 'text-[#2D3E63]'"
            >其他注意事項</span
          >
          <svg
            class="w-6 h-6 transition-transform duration-300 toggle-flicker"
            fill="none"
            :stroke="activeBox === 4 ? '#FFFFFF' : '#2D3E63'"
            viewBox="0 0 24 24"
          >
            <path
              v-if="activeBox !== 4"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M12 1v22M1 12h22"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M1 12h22"
            />
          </svg>
        </div>
        <div
          class="expandable-content overflow-hidden transition-all duration-300"
          :class="{ expanded: activeBox === 4, 'expanded-bg-gradient': activeBox === 4 }"
        >
          <div
            class="px-4 pb-8 text-sm"
            :class="activeBox === 4 ? 'text-[#FFFFFF]' : 'text-[#2D3E63]'"
          >
            需簽署智慧財產權聲明及個資同意書<br />
            活動不包含過夜，需自行處理住宿
          </div>
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
      activeBox: null, // 當前展開的方塊索引，null 表示沒有展開的方塊
    }
  },
  methods: {
    toggleBox(index) {
      // 如果點擊的是已經展開的方塊，則收起它
      if (this.activeBox === index) {
        this.activeBox = null
      } else {
        // 否則展開點擊的方塊
        this.activeBox = index
      }
    },
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

@keyframes flicker {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.animate-fade-in-left {
  animation: fade-in-left 0.6s cubic-bezier(0.4, 0.2, 0.2, 1) both;
}

::v-deep(.toggle-flicker:hover) {
  animation: flicker 0.6s ease-in-out infinite;
}

.expandable-content {
  max-height: 0;
  transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.expandable-content.expanded {
  max-height: 300px;
}

.expanded-bg {
  background-color: #7b8ebf;
}

.expanded-bg-gradient {
  background: linear-gradient(to bottom, #7b8ebf, white);
}
</style>
