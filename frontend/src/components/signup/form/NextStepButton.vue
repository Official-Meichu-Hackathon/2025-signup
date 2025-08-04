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
      class="px-22 py-5 rounded-2xl border-[#D3E4FCCC] border-1 shadow-xl text-white font-black text-xl flex"
      :class="
        disabled
          ? 'bg-[#8A99AE26] cursor-not-allowed'
          : 'bg-[#E9D1D599] hover:bg-[#E9D1D5] cursor-pointer'
      "
    >
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
