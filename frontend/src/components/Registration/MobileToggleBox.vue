<template>
  <div
    class="rounded-tl-2xl rounded-tr-2xl border-2 border-neutral-100 border-b-0 relative transition-all duration-300 cursor-pointer"
    :class="[minHeight, isActive ? 'bg-[#7B8EBF]' : backgroundClass, marginClass]"
    @click="handleToggle"
  >
    <div class="p-4 flex justify-between items-center">
      <span
        class="font-bold text-xl font-['Chiron_Hei_HK']"
        :class="isActive ? 'text-[#FFFFFF]' : 'text-[#2D3E63]'"
      >
        {{ title }}
      </span>
      <svg
        class="w-4 h-4 transition-transform duration-300"
        fill="none"
        :stroke="isActive ? '#FFFFFF' : '#2D3E63'"
        viewBox="0 0 24 24"
      >
        <path
          v-if="!isActive"
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
    </div>
    <div
      class="expandable-content overflow-hidden transition-all duration-300"
      :class="[{ expanded: isActive }, isActive ? expandedBackgroundClass : '']"
    >
      <div
        class="px-8 text-base font-['Chiron_Hei_HK']"
        :class="[isActive ? 'text-[#FFFFFF]' : 'text-[#2D3E63]', contentPadding]"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobileToggleBox',
  props: {
    title: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    index: {
      type: Number,
      required: true,
    },
    backgroundClass: {
      type: String,
      default: 'bg-blue-100',
    },
    marginClass: {
      type: String,
      default: '-mt-8',
    },
    expandedBackgroundClass: {
      type: String,
      default: 'expanded-bg',
    },
    minHeight: {
      type: String,
      default: 'min-h-[72px]',
    },
    contentPadding: {
      type: String,
      default: 'pb-8',
    },
  },
  emits: ['toggle'],
  methods: {
    handleToggle() {
      this.$emit('toggle', this.index)
    },
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

.expandable-content {
  max-height: 0;
  transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.expandable-content.expanded {
  max-height: 1000px;
}

.expanded-bg {
  background-color: #7b8ebf;
}

.expanded-bg-gradient {
  background: linear-gradient(to bottom, #7b8ebf 90%, white);
}
</style>
