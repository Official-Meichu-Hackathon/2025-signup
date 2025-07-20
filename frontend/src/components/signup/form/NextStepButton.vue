<script setup>
defineProps({
  disabled: {
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
      class="px-22 py-5 rounded-2xl border-[#D3E4FCCC] border-1 shadow-2xl text-white font-black drop-shadow-lg text-xl"
      :class="
        disabled
          ? 'bg-[#8A99AE26] cursor-not-allowed'
          : 'bg-[#E9D1D599] hover:bg-[#E9D1D5] cursor-pointer'
      "
    >
      <p>下一步</p>
    </button>
  </div>
</template>
