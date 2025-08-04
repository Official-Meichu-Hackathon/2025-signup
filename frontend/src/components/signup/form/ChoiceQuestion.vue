<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  pdf: {
    type: String,
  },
  description: {
    type: String,
  },
  referenceLink: {
    type: String,
  },
  referenceLinkText: {
    type: String,
    default: '參考連結',
  },
  options: {
    type: Array,
    required: true,
  },
})

const selectedValue = defineModel()
</script>

<template>
  <div class="py-4 whitespace-pre-line">
    <h3>{{ title }}</h3>
    <iframe
      v-if="pdf"
      :src="`https://drive.google.com/file/d/${pdf}/preview`"
      class="w-full h-[60vh] my-5"
      allow="autoplay"
    ></iframe>
    <p v-if="pdf" class="mx-4 mt-2 whitespace-pre-line">
      若pdf無法正確內嵌顯示，你可以
      <a
        :href="`https://drive.google.com/file/d/${pdf}/view`"
        class="text-blue-600 hover:underline"
        target="_blank"
        >點擊我下載</a
      >（在新分頁中開啟）
    </p>
    <p v-if="description" class="mx-4 mt-2 whitespace-pre-line">{{ description }}</p>
    <p v-if="referenceLink" class="mx-4 mt-2">
      <a :href="referenceLink" class="text-blue-600 hover:underline" target="_blank">{{
        referenceLinkText
      }}</a
      >（在新分頁中開啟）
    </p>

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
