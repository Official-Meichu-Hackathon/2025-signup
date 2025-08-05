<script setup>
import { computed, ref, watch, nextTick } from 'vue'
import NextStepButton from './NextStepButton.vue'

const { formStepOrder, requiredValues, totalStepOrder, isSubmitting } = defineProps({
  formStepOrder: Number,
  totalStepOrder: Number,
  stepName: String,
  requiredValues: Array,
  isSubmitting: {
    type: Boolean,
    default: false,
  },
})

const currentStepOrder = defineModel('currentStepOrder', { type: Number })

const emit = defineEmits(['submit'])

const formRef = ref(null)

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

const handleClickCollapsed = () => {
  if (currentStepOrder.value > formStepOrder) {
    currentStepOrder.value = formStepOrder
  }
}

const canClickCollapsed = computed(() => currentStepOrder.value > formStepOrder)

watch(
  currentStepOrder,
  async (newStep) => {
    if (newStep === 1 && formStepOrder === 1) {
      await nextTick()
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 650)
      return
    }
    if (newStep === formStepOrder + 1) {
      await nextTick()
      setTimeout(() => {
        if (formRef.value) {
          formRef.value.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'start',
          })
        }
      }, 650)
    }
  },
  { immediate: false }
)
</script>

<template>
  <div class="py-5 px-3 md:px-30 2xl:px-80">
    <Transition
      name="form-expand"
      enter-active-class="transition-all duration-600 ease-out"
      leave-active-class="transition-all duration-400 ease-in"
      enter-from-class="opacity-0 max-h-0 overflow-hidden"
      enter-to-class="opacity-100 max-h-screen overflow-hidden"
      leave-from-class="opacity-100 max-h-screen overflow-hidden"
      leave-to-class="opacity-0 max-h-0 overflow-hidden"
    >
      <div
        v-if="formStepOrder === currentStepOrder"
        class="bg-lightblue shadow-lg px-7 py-11 md:p-15 rounded-3xl font-bold text-darkblue"
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
          :isSubmitting="isSubmitting"
        ></NextStepButton>
      </div>
    </Transition>
    <Transition
      name="form-collapse"
      enter-active-class="transition-all duration-400 ease-out"
      leave-active-class="transition-all duration-600 ease-in"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        ref="formRef"
        v-if="formStepOrder !== currentStepOrder"
        class="bg-[#D9D9D9] rounded-3xl px-13 md:px-15 py-8 font-bold text-white transition-colors duration-200"
        :class="canClickCollapsed ? 'cursor-pointer hover:bg-[#C0C0C0]' : 'cursor-default'"
        @click="handleClickCollapsed"
      >
        <p class="text-2xl md:text-3xl whitespace-pre">
          {{ formStepOrder }}&nbsp;&nbsp;{{ stepName }}
        </p>
      </div>
    </Transition>
  </div>
</template>
