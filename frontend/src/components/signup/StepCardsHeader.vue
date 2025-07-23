<script setup>
import { computed } from 'vue'
import StepCard from './StepCard.vue'

const { playerCount, currentStep } = defineProps({
  playerCount: {
    type: Number,
    default: 5,
    validator: (value) => value >= 3 && value <= 5,
  },
  currentStep: {
    type: Number,
    default: 1,
  },
})

const steps = computed(() => {
  const steps = ['報名選項']

  for (let i = 1; i <= playerCount; i++) {
    const playerOrders = ['一', '二', '三', '四', '五']
    steps.push(`參賽者${playerOrders[i - 1]}基本資料`)
  }

  steps.push('填寫同意書', '其他')

  return steps.map((stepName, index) => ({
    order: index + 1,
    title: stepName,
    current: currentStep === index + 1,
  }))
})

const firstRowSteps = computed(() => steps.value.slice(0, 6))
const secondRowSteps = computed(() => steps.value.slice(6))
</script>

<template>
  <div class="flex mx-10 items-center justify-center mb-5">
    <StepCard v-for="step in firstRowSteps" :key="step.order" v-bind="step" class="mx-2" />
  </div>
  <div v-if="secondRowSteps.length > 0" class="flex mx-10 items-center justify-center mb-5">
    <StepCard v-for="step in secondRowSteps" :key="step.order" v-bind="step" class="mx-2" />
  </div>
</template>
