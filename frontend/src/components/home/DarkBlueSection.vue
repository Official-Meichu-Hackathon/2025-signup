<!-- DarkBlue Section : Apple -->

<template>
  <!-- layout for computer -->
  <div class="relative w-full min-h-screen overflow-hidden">
    <!-- <img src="../../assets/Home/cursor.svg" alt="light-cursor" id="light-cursor" /> -->
    <div
      v-if="isDesktop"
      class="min-h-[calc(100vh-56px)] bg-[#2D3E63] z-1 flex flex-col w-full overflow-hidden"
    >
      <Groups></Groups>
      <RuleSection></RuleSection>
      <PrizeSection></PrizeSection>
    </div>

    <!-- layout for phone ( white bg ) -->
    <div
      v-else
      class="block md:hidden min-h-[calc(100vh-56px)] bg-[white] z-1 flex flex-col w-full overflow-hidden"
    >
      <Groups></Groups>
      <RuleSection></RuleSection>
      <PrizeSection></PrizeSection>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Groups from './Groups.vue'
import RuleSection from './RuleSection.vue'
import PrizeSection from './PrizeSection.vue'

defineOptions({
  name: 'DarkBlueSection',
})

const isDesktop = ref(window.innerWidth >= 768)

onMounted(() => {
  window.addEventListener('resize', () => {
    isDesktop.value = window.innerWidth >= 768
  })
})
</script>

<style scoped></style>
