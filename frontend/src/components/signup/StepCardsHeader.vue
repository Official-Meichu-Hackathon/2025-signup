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

const emit = defineEmits(['step-click'])

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
    clickable: currentStep > index + 1,
  }))
})

const handleStepClick = (stepOrder) => {
  if (currentStep > stepOrder) {
    emit('step-click', stepOrder)
  }
}

const firstRowSteps = computed(() =>
  playerCount === 3 ? steps.value.slice(0, 6) : steps.value.slice(0, 4)
)
const secondRowSteps = computed(() =>
  playerCount === 3 ? steps.value.slice(6) : steps.value.slice(4)
)

const mobileFirstRowSteps = computed(() => steps.value.slice(0, 4))
const mobileSecondRowSteps = computed(() => steps.value.slice(4))
</script>

<template>
  <div class="hidden md:block">
    <div class="flex mx-10 gap-2 mb-5 2xl:mx-70">
      <StepCard
        v-for="step in firstRowSteps"
        :key="step.order"
        v-bind="step"
        @click="handleStepClick(step.order)"
      />
    </div>
    <div v-if="secondRowSteps.length > 0" class="flex mx-10 gap-2 mb-5 justify-center 2xl:mx-70">
      <div
        class="flex gap-2"
        :style="{ width: `${(secondRowSteps.length / firstRowSteps.length) * 100}%` }"
      >
        <StepCard
          v-for="step in secondRowSteps"
          :key="step.order"
          v-bind="step"
          @click="handleStepClick(step.order)"
        />
      </div>
    </div>
  </div>

  <div class="block md:hidden">
    <div class="flex mx-3 gap-2 mb-5">
      <StepCard
        v-for="step in mobileFirstRowSteps"
        :key="step.order"
        v-bind="step"
        @click="handleStepClick(step.order)"
      />
    </div>
    <div v-if="mobileSecondRowSteps.length > 0" class="flex mx-3 gap-2 mb-5 justify-center">
      <div
        class="flex gap-2"
        :style="{ width: `${(mobileSecondRowSteps.length / mobileFirstRowSteps.length) * 100}%` }"
      >
        <StepCard
          v-for="step in mobileSecondRowSteps"
          :key="step.order"
          v-bind="step"
          @click="handleStepClick(step.order)"
        />
      </div>
    </div>
  </div>
</template>
