<template>
  <div
    v-if="isDesktop"
    ref="cardContainer"
    class="relative w-[45vw] flex items-start justify-center bg-white rounded-[2vw] shadow-lg border-[2px] border-dashed border-[#EBD5D8] pt-[5vh] overflow-hidden"
    :style="{ height: cardHeight + 'px' }"
  >
    <!-- 卡片背景 -->
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
    <div
      class="relative z-10 flex flex-col items-center justify-center text-center w-[80%] min-h-[90%] gap-[1vh] pb-[2vw]"
    >
      <!-- 公司 Logo -->
      <div class="flex items-center justify-center w-[100%] min-h-[30%] flex-shrink-0 mt-[2vh]">
        <img :src="logo" alt="公司 Logo" class="max-w-full max-h-[20vh] object-contain" />
      </div>
      <!-- 公司名稱 -->
      <h2
        class="mt-2 flex items-center text-[1.5vh] md:text-[2.0vh] font-bold text-[#CD8A98] font-[Chiron_Hei_HK] flex-shrink-0"
      >
        {{ companyName }}
      </h2>

      <!-- 分隔線 -->
      <div class="mt-2 bg-[#CD8A98] w-[90%] h-[0.2vh] flex-shrink-0"></div>

      <!-- 題目標題 -->
      <p
        class="mt-4 text-[2vh] font-semibold text-[#2D3E63] font-[Chiron_Hei_HK] m-[0.5vh] flex-shrink-0"
      >
        {{ problemTitle }}
      </p>

      <!-- 題目內容 -->
      <div class="w-[85%]">
        <p
          class="text-[1.4vh] sm:text-[1.6vh] md:text-[1.8vh] text-[#2D3E63] font-bold tracking-wider leading-[1.4] font-[Chiron_Hei_HK] break-words"
        >
          {{ problemContent }}
        </p>
      </div>

      <!-- 題目連結 -->
      <a
        :href="problemLink"
        target="_blank"
        class="text-[1.8vh] text-[#C27992] font-bold font-[Chiron_Hei_HK] m-[2vw] rounded-[1vh] flex-shrink-0"
      >
        詳細題目說明 >>
      </a>
    </div>
  </div>

  <div
    v-else
    ref="cardContainer"
    class="relative w-[70vw] flex items-start justify-center bg-white rounded-[5vw] shadow-lg border-[2px] border-dashed border-[#EBD5D8] pt-[3vw] overflow-hidden"
    :style="{ height: cardHeight + 'px' }"
  >
    <!-- 卡片背景 -->
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
    <div
      class="relative z-10 flex flex-col items-center justify-center text-center w-[80%] min-h-[90%] gap-[1.5vh] pb-[3vw]"
    >
      <!-- 公司 Logo -->
      <div class="flex items-center justify-center w-[100%] min-h-[30%] flex-shrink-0 mt-[1.5vh]">
        <img :src="logo" alt="公司 Logo" class="max-w-full max-h-[20vh] object-contain" />
      </div>

      <!-- 公司名稱 -->
      <h2
        class="flex items-center text-[1.0vh] md:text-[1.0vh] font-bold text-[#CD8A98] font-[Chiron_Hei_HK] flex-shrink-0"
      >
        {{ companyName }}
      </h2>

      <!-- 分隔線 -->
      <div class="bg-[#CD8A98] w-[80%] h-[0.2vh] flex-shrink-0"></div>

      <!-- 題目標題 -->
      <div class="text-[1.5vh] font-semibold text-[#2D3E63] font-[Chiron_Hei_HK] flex-shrink-0">
        <p>
          {{ problemTitle }}
        </p>
      </div>

      <!-- 題目內容 -->
      <div class="w-full px-[2%]">
        <p
          class="text-[1.0vh] sm:text-[1.1vh] md:text-[1.3vh] text-[#2D3E63] font-bold leading-[1.3] font-[Chiron_Hei_HK] break-words"
        >
          {{ problemContent }}
        </p>
      </div>

      <!-- 題目連結 -->
      <a
        :href="problemLink"
        target="_blank"
        class="text-[1.3vh] text-[#C27992] font-bold font-[Chiron_Hei_HK] rounded-[1vh] mt-[2vh] flex-shrink-0"
      >
        詳細題目說明 >>
      </a>
    </div>
  </div>
</template>

<script setup>
import { inject, ref, onMounted, onUnmounted, nextTick, watch } from 'vue'

const isDesktop = inject('isDesktop')
const cardContainer = ref(null)
const minHeight = ref(isDesktop.value ? window.innerWidth * 0.45 : window.innerWidth * 0.7)
const cardHeight = ref(minHeight.value)

defineOptions({
  name: 'ProblemCard',
})

const props = defineProps({
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
  maxHeight: {
    type: Number,
    default: null,
  },
})

const calculateNaturalHeight = async () => {
  if (!cardContainer.value) return 0

  const originalHeight = cardContainer.value.style.height
  cardContainer.value.style.height = 'auto'

  await nextTick()
  const naturalHeight = cardContainer.value.offsetHeight

  cardContainer.value.style.height = originalHeight

  return naturalHeight
}

const updateMinHeight = () => {
  minHeight.value = isDesktop.value ? window.innerWidth * 0.45 : window.innerWidth * 0.7
  if (props.maxHeight) {
    cardHeight.value = Math.max(props.maxHeight, minHeight.value)
  } else {
    cardHeight.value = minHeight.value
  }
}

const handleResize = () => {
  updateMinHeight()
}

watch(
  () => props.maxHeight,
  (newMaxHeight) => {
    if (newMaxHeight) {
      cardHeight.value = Math.max(newMaxHeight, minHeight.value)
    }
  },
  { immediate: true }
)

defineExpose({
  calculateNaturalHeight,
})

onMounted(async () => {
  window.addEventListener('resize', handleResize)

  if (!props.maxHeight) {
    const naturalHeight = await calculateNaturalHeight()
    cardHeight.value = Math.max(naturalHeight, minHeight.value)
  }
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
@media (max-width: 768px) {
  .small-screen-text {
    font-size: 1vh;
  }
}

.scrollbar-auto {
  scrollbar-width: thin;
  scrollbar-color: rgba(205, 138, 152, 0.3) transparent;
  padding-right: 8px;
}

.scrollbar-auto::-webkit-scrollbar {
  width: 8px;
}

.scrollbar-auto::-webkit-scrollbar-track {
  background: transparent;
}

.scrollbar-auto::-webkit-scrollbar-thumb {
  background-color: rgba(205, 138, 152, 0.3);
  border-radius: 4px;
}

.scrollbar-auto::-webkit-scrollbar-thumb:hover {
  background-color: rgba(205, 138, 152, 0.5);
}
</style>
