<script setup>
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
    class="w-50 h-26 flex items-center justify-center flex-col text-white rounded-2xl text-md"
    :class="current ? 'bg-darkblue ' : 'bg-[#D9D9D9]'"
  >
    <p>{{ order }}</p>
    <p class="px-2">{{ title }}</p>
  </div>
</template>
