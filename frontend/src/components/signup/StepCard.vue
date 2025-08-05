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
  clickable: {
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
  <div
    class="font-bold flex-1 h-26 flex items-center justify-center flex-col text-white rounded-4xl text-sm md:text-md xl:text-lg min-w-0 transition-colors duration-200"
    :class="[
      current ? 'bg-darkblue' : 'bg-[#D9D9D9]',
      clickable ? 'cursor-pointer hover:opacity-80' : 'cursor-default',
    ]"
    @click="handleClick"
  >
    <p>{{ order }}</p>
    <p class="text-center" :class="title.length === 5 ? 'px-2' : 'px-3'">{{ title }}</p>
  </div>
</template>
