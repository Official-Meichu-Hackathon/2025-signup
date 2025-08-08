<script setup>
defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  isLastStep: {
    type: Boolean,
    default: false,
  },
  isSubmitting: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['click'])

const handleClick = () => {
  emit('click')
}
</script>

<template>
  <div class="w-full flex items-center justify-center">
    <button
      @click="handleClick"
      :disabled="disabled"
      class="relative overflow-hidden group rounded-3xl text-white font-black flex items-center justify-center select-none transition-all duration-400 px-8 py-3 md:px-16 md:py-4 xl:px-22 xl:py-5 text-base md:text-lg xl:text-xl shadow-[0px_4px_20px_-1px_rgba(28,27,31,0.60)] outline-1 outline-offset-[-1px] outline-blue-100/80 hover:scale-105"
      :class="disabled ? 'bg-[#8A99AE26] cursor-not-allowed' : 'bg-[#2D3E63C2] cursor-pointer'"
    >
      <div
        class="pointer-events-none absolute bottom-[-40px] left-[-20px] w-16 h-16 bg-[#F4DAE1] rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"
      ></div>
      <div
        class="pointer-events-none absolute bottom-[-50px] right-[-30px] w-16 h-16 bg-[#F4DAE1] rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"
      ></div>
      <div
        v-if="isSubmitting && isLastStep"
        class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-4"
      ></div>
      <p>
        {{ isSubmitting && isLastStep ? '送出中...' : isLastStep ? '送出' : '下一步' }}
      </p>
    </button>
  </div>
</template>
