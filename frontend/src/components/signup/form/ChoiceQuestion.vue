<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  options: {
    type: Array,
    required: true,
  },
})

const selectedValue = defineModel()
</script>

<template>
  <div class="py-4">
    <h3>{{ title }}</h3>
    <p v-if="description" class="mx-4 mt-2 whitespace-pre-line">{{ description }}</p>

    <div class="mx-4 mt-3 flex flex-wrap gap-4">
      <div v-for="(option, index) in options" :key="index" class="cursor-pointer">
        <label class="flex items-center cursor-pointer">
          <input
            type="radio"
            :value="option"
            v-model="selectedValue"
            class="mr-2 w-4 h-4 text-darkblue border-gray-300 focus:ring-darkblue cursor-pointer"
          />
          <span class="text-lg whitespace-nowrap">{{ option }}</span>
        </label>
      </div>
    </div>
  </div>
</template>
