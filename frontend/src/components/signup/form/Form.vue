<script setup>
import { ref, computed } from 'vue'
import TextQuestion from './TextQuestion.vue'
import ChoiceQuestion from './ChoiceQuestion.vue'

defineOptions({
  name: 'FormComponent',
})

const playerCount = defineModel('playerCount')

const groupName = ref('')
const playerCountChoice = computed({
  get() {
    return playerCount.value ? `${playerCount.value}人` : ''
  },
  set(value) {
    if (value) {
      const count = parseInt(value.replace('人', ''))
      playerCount.value = count
    }
  },
})
const isCrossDomain = ref()
</script>

<template>
  <div class="px-35 py-10">
    <div class="bg-lightblue shadow-lg p-15 rounded-3xl font-bold text-darkblue">
      <div class="pb-4 flex items-center">
        <div
          class="bg-white rounded-full w-9 h-9 flex items-center justify-center mr-3 text-darkblue font-bold"
        >
          1
        </div>
        <p class="text-3xl">報名選項</p>
      </div>

      <TextQuestion title="*隊伍名稱（上限20字）" :maxLength="20" v-model="groupName" />

      <ChoiceQuestion
        title="*隊伍人數"
        :options="['3人', '4人', '5人']"
        v-model="playerCountChoice"
      />

      <ChoiceQuestion
        title="*跨域組隊"
        description="備註：符合以下任一條件，全隊報名費可減免 100 元
(1) 報名隊伍內有三個（含）以上不同科系
(2) 組內含高中職、大專院校生或碩博生、社會人士兩種（含）以上身份別之參賽者（限創客交流組）"
        :options="['是', '否']"
        v-model="isCrossDomain"
      />
    </div>
  </div>
</template>
