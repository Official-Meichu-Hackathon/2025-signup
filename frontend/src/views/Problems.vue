<template>
  <!-- <div class="min-h-[calc(100vh-56px)] bg-[#2D3E63] flex flex-col items-center justify-center">
    <div class="text-3xl font-bold text-center text-[#F4F5F5]">Problems Page</div> -->
  <ProblemDesc />
  <!-- </div> -->
</template>

<script setup>
import ProblemDesc from '../components/ProblemPage/ProblemDesc.vue'
defineOptions({
  name: 'ProblemsPage',
  components: {
    ProblemDesc,
  },
})
</script>

<style scoped></style>
