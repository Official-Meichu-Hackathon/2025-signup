<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-4">選擇一項任務</h2>
    <ul class="list-disc list-inside text-lg text-gray-700">
      <li
        v-for="(task, index) in tasks"
        :key="index"
        @click="selected = index"
        :class="
          selected === index ? 'text-pink-600 font-bold' : 'cursor-pointer hover:text-gray-900'
        "
      >
        {{ task }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tasks = ['完成報告撰寫', '提交作業', '整理會議筆記', '回覆電子郵件']

const selected = ref(null)
</script>
