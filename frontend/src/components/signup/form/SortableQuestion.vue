<script setup>
import { ref, watch } from 'vue'
import PriorityModal from './PriorityModal.vue'

const props = defineProps({
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

const sortedOptions = defineModel()

const draggedIndex = ref(null)
const dragOnIndex = ref(null)
const showModal = ref(false)

const mandarinNumbers = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十']

watch(
  () => props.options,
  (newOptions) => {
    if (!sortedOptions.value) {
      sortedOptions.value = [...newOptions]
    }
  },
  { immediate: true }
)

const handleDragStart = (event, index) => {
  draggedIndex.value = index
  event.dataTransfer.effectAllowed = 'move'
}

const handleDragEnd = () => {
  draggedIndex.value = null
  dragOnIndex.value = null
}

const handleDragOver = (event) => {
  event.preventDefault()
  event.dataTransfer.dropEffect = 'move'
}

const handleDragEnter = (index) => {
  dragOnIndex.value = index
}

const handleDrop = (event, dropIndex) => {
  event.preventDefault()

  if (draggedIndex.value === null || draggedIndex.value === dropIndex) return

  const items = [...sortedOptions.value]
  const [draggedItem] = items.splice(draggedIndex.value, 1)
  items.splice(dropIndex, 0, draggedItem)

  sortedOptions.value = items
}

const swapItems = (fromIndex, toIndex) => {
  const items = [...sortedOptions.value]
  const temp = items[fromIndex]
  items[fromIndex] = items[toIndex]
  items[toIndex] = temp
  sortedOptions.value = items
}

const moveUp = (index) => {
  if (index === 0) return
  swapItems(index, index - 1)
}

const moveDown = (index) => {
  if (index === sortedOptions.value.length - 1) return
  swapItems(index, index + 1)
}

// const resetOrder = () => {
//   sortedOptions.value = [...props.options]
// }

const handleApplyPriorities = (sortedItems) => {
  sortedOptions.value = sortedItems
}

const getItemClass = (index) => {
  const baseClass =
    'group relative bg-white border-2 rounded-lg p-3 md:cursor-move transition-all duration-200 flex-1'

  if (dragOnIndex.value === index && draggedIndex.value !== index) {
    return `${baseClass} border-darkblue bg-blue-50`
  }

  if (draggedIndex.value === index) {
    return `${baseClass} border-gray-300 opacity-50`
  }

  return `${baseClass} border-gray-300 hover:border-gray-400 shadow-md`
}
</script>

<template>
  <div class="py-4">
    <h3>{{ title }}</h3>
    <p v-if="description" class="mx-4 mt-2 whitespace-pre-line">{{ description }}</p>

    <div class="mx-4 mt-3">
      <div class="flex gap-2 mb-3 flex-wrap">
        <!-- <button
          @click="resetOrder"
          class="px-3 py-1 text-sm bg-gray-200 hover:bg-gray-300 rounded-md transition-colors cursor-pointer"
        >
          重置順序
        </button> -->

        <!-- <button
          @click="() => (inDragMode = !inDragMode)"
          class="px-3 py-1 text-sm bg-blue-200 hover:bg-blue-300 rounded-md transition-colors cursor-pointer"
        >
          {{ inDragMode ? '按鈕模式' : '拖拉模式' }}
        </button> -->

        <button
          @click="() => (showModal = true)"
          class="px-3 py-1 text-sm bg-green-200 hover:bg-green-300 rounded-md transition-colors cursor-pointer"
        >
          數字輸入模式
        </button>
      </div>

      <div class="space-y-2">
        <div
          v-for="(option, index) in sortedOptions"
          :key="`${option}-${index}`"
          class="flex items-center gap-3"
        >
          <div class="text-darkblue px-3 py-2 rounded-lg font-bold whitespace-nowrap">
            {{ `志願${mandarinNumbers[index] || index + 1}` }}
          </div>

          <div
            draggable="true"
            class="hidden md:block"
            :class="getItemClass(index)"
            @dragstart="handleDragStart($event, index)"
            @dragend="handleDragEnd"
            @dragover="handleDragOver"
            @dragenter="handleDragEnter(index)"
            @drop="handleDrop($event, index)"
          >
            <div class="flex items-center">
              <svg
                class="w-3 h-3 mr-3 text-gray-400 group-hover:text-gray-600 transition-colors"
                fill="currentColor"
                viewBox="0 0 6 10"
              >
                <circle cx="1" cy="1" r="1" />
                <circle cx="1" cy="5" r="1" />
                <circle cx="1" cy="9" r="1" />
                <circle cx="5" cy="1" r="1" />
                <circle cx="5" cy="5" r="1" />
                <circle cx="5" cy="9" r="1" />
              </svg>

              <span class="text-lg">{{ option }}</span>
            </div>

            <div
              v-if="dragOnIndex === index && draggedIndex !== index"
              class="absolute inset-0 border-2 border-dashed border-darkblue rounded-lg pointer-events-none"
            />
          </div>

          <div class="block md:hidden" :class="getItemClass(index)">
            <div class="flex items-center justify-between">
              <span class="text-lg">{{ option }}</span>

              <div class="flex gap-1">
                <button
                  @click="moveUp(index)"
                  :disabled="index === 0"
                  :class="[
                    'px-2 py-1 text-xs rounded transition-colors',
                    index === 0
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-lightblue hover:bg-blue-200 text-blue-700 cursor-pointer',
                  ]"
                  title="向上移動"
                >
                  ↑
                </button>

                <button
                  @click="moveDown(index)"
                  :disabled="index === sortedOptions.length - 1"
                  :class="[
                    'px-2 py-1 text-xs rounded transition-colors',
                    index === sortedOptions.length - 1
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-lightblue hover:bg-blue-200 text-blue-700 cursor-pointer',
                  ]"
                  title="向下移動"
                >
                  ↓
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-3 text-sm text-gray-600 hidden md:block">
        💡 提示： 拖拉項目來調整項目順序，或是點擊數字輸入模式作為其他方案
      </div>
      <div class="mt-3 text-sm text-gray-600 block md:hidden">
        💡 提示： 使用按鈕來調整項目順序，或是點擊數字輸入模式作為其他方案
      </div>
    </div>

    <PriorityModal
      :visible="showModal"
      :options="props.options"
      :current-order="sortedOptions"
      @close="() => (showModal = false)"
      @apply="handleApplyPriorities"
    />
  </div>
</template>
