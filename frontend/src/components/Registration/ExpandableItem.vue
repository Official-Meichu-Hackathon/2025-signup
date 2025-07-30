<template>
  <div class="border-b-3 pb-6" style="border-color: #2d3e63">
    <button
      @click="toggleExpanded"
      class="w-full flex justify-between items-center text-left text-[#2D3E63] text-2xl font-bold font-['Chiron_Hei_HK_Text'] hover:text-[#2D3E63] transition-colors"
    >
      <div
        class="w-40 h-12 flex items-center justify-start text-[#2D3E63] text-4xl font-bold font-['Noto Serif',serif] whitespace-nowrap pl-3 mb-[2px]"
      >
        {{ title }}
      </div>
      <svg
        class="w-8 h-8 transition-transform duration-300 toggle-flicker"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          v-if="!expanded"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M12 1v22M1 12h22"
        />
        <path
          v-else
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M1 12h22"
        />
      </svg>
    </button>
    <div class="expandable-content" :class="{ expanded: expanded }">
      <div
        class="content-wrapper mt-6 text-[#2D3E63] text-2xl font-['Chiron_Hei_HK_Text'] leading-relaxed"
      >
        <div class="font-['Chiron_Hei_HK_Text',sans-serif] pl-12">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExpandableItem',
  props: {
    title: {
      type: String,
      required: true,
    },
    expanded: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['toggle'],
  setup(props, { emit }) {
    const toggleExpanded = () => {
      emit('toggle', props.title, !props.expanded)
    }

    return {
      toggleExpanded,
    }
  },
}
</script>

<style scoped>
@keyframes flicker {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

::v-deep(.toggle-flicker:hover) {
  animation: flicker 0.6s ease-in-out infinite;
}

.hollow-circle-list {
  list-style-type: circle;
}

/* Expandable content animation */
.expandable-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.expandable-content.expanded {
  max-height: 1000px;
}

.content-wrapper {
  transition:
    opacity 0.3s ease 0.1s,
    transform 0.3s ease 0.1s;
  transform: translateY(-10px);
  opacity: 0;
}

.expandable-content.expanded .content-wrapper {
  transform: translateY(0);
  opacity: 1;
}
</style>
