<script setup>
import { ref } from 'vue'
const { verifyFunction, verifyMessage } = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  verifyFunction: {
    type: Function,
    default: () => true,
  },
  verifyMessage: {
    type: String,
    default: '你的輸入格式錯誤',
  },
})

const isNotVerify = ref(false)

const handleVerify = () => {
  if (!text.value || text.value.length === 0 || !verifyFunction) return
  isNotVerify.value = !verifyFunction(text.value)
}

const handleInput = (event) => {
  if (isNotVerify.value) {
    const currentValue = event.target.value
    if (!currentValue || currentValue.length === 0 || !verifyFunction) return
    isNotVerify.value = !verifyFunction(currentValue)
  }
}

const text = defineModel()
</script>

<template>
  <div class="py-4">
    <h3>{{ title }}</h3>
    <p v-if="description" class="mx-4 mt-2 whitespace-pre-line">{{ description }}</p>
    <input
      type="text"
      v-model="text"
      class="bg-white border-1 rounded-lg mt-3 p-2 text-lg w-[96%] mx-[2%]"
      required
      @blur="handleVerify"
      @input="handleInput"
    />
    <p v-if="isNotVerify" class="text-red-500 text-sm mt-2 mx-4">
      {{ verifyMessage }}
    </p>
  </div>
</template>
