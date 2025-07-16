<script setup>
defineOptions({
  name: 'StepCardComponent',
})

defineProps({
  order: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  current: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div
    class="w-40 h-20 flex items-center justify-center flex-col text-white rounded-2xl text-sm"
    :class="current ? 'bg-darkblue shadow-lg' : 'bg-[#D9D9D9]'"
  >
    <p>{{ order }}</p>
    <p class="px-2">{{ title }}</p>
  </div>
</template>
