<script setup>
defineOptions({
  name: 'TextQuestionComponent',
})

defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  maxLength: {
    type: Number,
    default: 100,
  },
})

const text = defineModel()
</script>

<template>
  <div class="py-4">
    <h3>{{ title }}</h3>
    <p v-if="description" class="mx-4 mt-2 whitespace-pre-line">{{ description }}</p>
    <input
      type="text"
      v-model="text"
      class="bg-white border-1 rounded-lg mx-4 mt-3 p-2 text-lg w-[95%] md:w-full"
      required
    />
    <p v-if="maxLength && text.length > maxLength" class="text-red-500 text-sm mt-2 mx-4">
      字數超過限制！請保持在 {{ maxLength }} 字以內
    </p>
  </div>
</template>
