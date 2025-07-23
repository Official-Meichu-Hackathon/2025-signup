<template>
  <div class="min-h-[calc(100vh-56px)] flex flex-col items-center overflow-hidden">
    <div class="w-full mx-auto relative">
      <FoldablePage />
    </div>
  </div>
</template>

<script setup>
import FoldablePage from '../components/Statistics/FoldablePage.vue'

defineOptions({
  name: 'DataPage',
})
</script>

<style scoped></style>
