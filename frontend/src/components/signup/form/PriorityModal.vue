<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  options: {
    type: Array,
    required: true,
  },
  currentOrder: {
    type: Array,
    default: () => [],
  },
})

const emit = defineEmits(['close', 'apply'])

const tempPriorities = ref({})

const chineseNumbers = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十']

const priorityOptions = computed(() => {
  return Array.from({ length: props.options.length }, (_, i) => ({
    value: i + 1,
    label: `志願${chineseNumbers[i] || i + 1}`,
  }))
})

watch(
  () => props.visible,
  (visible) => {
    if (visible) {
      initializePriorities()
    }
  }
)

const initializePriorities = () => {
  tempPriorities.value = {}
  props.currentOrder.forEach((option, index) => {
    tempPriorities.value[option] = index + 1
  })
}

const updatePriority = (option, priority) => {
  tempPriorities.value[option] = parseInt(priority)
}

const closeModal = () => {
  tempPriorities.value = {}
  emit('close')
}

const applyPriorities = () => {
  const priorities = { ...tempPriorities.value }

  const hasAllPriorities = props.options.every((option) => priorities[option])
  if (!hasAllPriorities) {
    alert('請為所有選項設定優先順序')
    return
  }

  const priorityValues = Object.values(priorities)
  const uniquePriorities = new Set(priorityValues)
  if (priorityValues.length !== uniquePriorities.size) {
    alert('優先順序不能重複，請確認每個選項都有不同的順位')
    return
  }

  const sortedItems = [...props.options].sort((a, b) => {
    return priorities[a] - priorities[b]
  })

  emit('apply', sortedItems)
  closeModal()
}
</script>

<template>
  <div
    v-if="visible"
    class="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50"
    @click.self="closeModal"
  >
    <div
      class="bg-white rounded-lg p-6 max-w-md w-full mx-4 max-h-[80vh] overflow-y-auto border-2 shadow-md"
    >
      <div class="flex justify-between items-center mb-4">
        <h4 class="text-lg font-bold">設定志願序</h4>
        <button
          @click="closeModal"
          class="text-gray-500 hover:text-gray-700 text-xl cursor-pointer"
        >
          ×
        </button>
      </div>

      <p class="text-sm text-gray-600 mb-4">請為每個志願選擇優先順序（1 為最優先）</p>

      <div class="space-y-3">
        <div
          v-for="option in options"
          :key="option"
          class="flex items-center justify-between p-3 border rounded-lg"
        >
          <span class="flex-1 mr-3">{{ option }}</span>
          <select
            :value="tempPriorities[option] || ''"
            @change="updatePriority(option, $event.target.value)"
            class="border rounded px-2 py-1 min-w-28 cursor-pointer"
          >
            <option value="">選擇志願</option>
            <option
              v-for="priorityOption in priorityOptions"
              :key="priorityOption.value"
              :value="priorityOption.value"
            >
              {{ priorityOption.label }}
            </option>
          </select>
        </div>
      </div>

      <div class="flex gap-12 mt-6 mx-6">
        <button @click="closeModal" class="flex-1 py-2 cursor-pointer action-button cancel-button">
          取消
        </button>
        <button
          @click="applyPriorities"
          class="flex-1 py-2 cursor-pointer action-button confirm-button"
        >
          確定
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.action-button {
  border-radius: 30px;
  border: 1px solid #fff;
  box-shadow:
    0 0.9px 1.08px 0 rgba(255, 255, 255, 0.87) inset,
    0 0 2px 0 rgba(255, 255, 255, 0.7) inset,
    0 0 16.19px 0 rgba(255, 255, 255, 0.2) inset,
    0 16.19px 32.39px 0 rgba(255, 255, 255, 0.13) inset,
    0 3px 15.8px 7px rgba(76, 103, 171, 0.15);
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    transform 0.15s ease,
    box-shadow 0.2s ease;
}
.cancel-button {
  background: rgba(219, 131, 150, 0.05);
  color: #374151;
}
.cancel-button:hover {
  background: rgba(219, 131, 150, 0.15);
  transform: translateY(-1px);
}
.cancel-button:active {
  transform: translateY(0);
}
.confirm-button {
  background: #2d3e63;
  color: #ffffff;
  border: 0px;
}
.confirm-button:hover {
  background: #253650;
  transform: translateY(-1px);
}
.confirm-button:active {
  transform: translateY(0);
}
</style>
