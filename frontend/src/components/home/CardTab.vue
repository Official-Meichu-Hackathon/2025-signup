<!-- Tab.vue -->
<template>
  <div
    :class="[
      'w-40 h-16 text-center text-white text-2xl font-black leading-10 cursor-pointer',
      active ? 'bg-red-100' : 'bg-rose-400',
      'rounded-tl-[30px] rounded-tr-[30px]',
    ]"
    @click="$emit('click')"
  >
    <slot />
    <!-- 這裡是顯示標籤文字的位置 -->
  </div>
</template>

<script setup>
defineProps({ active: Boolean }) // 接收是否為選中的標籤
</script>
