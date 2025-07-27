<script setup>
import { computed } from 'vue'
import NextStepButton from './NextStepButton.vue'

const { requiredValues, totalStepOrder } = defineProps({
  formStepOrder: Number,
  totalStepOrder: Number,
  stepName: String,
  requiredValues: Array,
})

const currentStepOrder = defineModel('currentStepOrder', { type: Number })

const emit = defineEmits(['submit'])

const allRequiredFilled = computed(() => {
  if (!requiredValues) return true
  if (requiredValues.length === 0) return true
  return requiredValues.every((value) => {
    if (value === null || value === undefined) {
      return false
    }
    if (typeof value === 'string') {
      return value.trim() !== ''
    }
    return true
  })
})

const isLastStep = computed(() => currentStepOrder.value === totalStepOrder)

const handleNextStep = () => {
  if (isLastStep.value) return emit('submit')
  currentStepOrder.value += 1
}
</script>

<template>
  <div class="py-5 px-10 md:px-30 2xl:px-80">
    <div
      v-if="formStepOrder === currentStepOrder"
      class="bg-lightblue shadow-lg p-15 rounded-3xl font-bold text-darkblue"
    >
      <div class="pb-4 flex items-center">
        <div
          class="bg-white rounded-full w-9 h-9 flex items-center justify-center mr-3 text-darkblue font-bold"
        >
          {{ formStepOrder }}
        </div>
        <p class="text-3xl">{{ stepName }}</p>
      </div>

      <slot></slot>
      <NextStepButton
        @click="handleNextStep"
        :disabled="!allRequiredFilled"
        :isLastStep
      ></NextStepButton>
    </div>
    <div v-else class="bg-[#D9D9D9] rounded-3xl px-15 py-8 font-bold text-white">
      <p class="text-3xl whitespace-pre">{{ formStepOrder }}&nbsp;&nbsp;{{ stepName }}</p>
    </div>
  </div>
</template>
