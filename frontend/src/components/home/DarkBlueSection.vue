<!-- DarkBlue Section : Apple -->

<template>
  <div class="relative w-full min-h-screen overflow-hidden">
    <!-- <img src="../../assets/Home/cursor.svg" alt="light-cursor" id="light-cursor" /> -->
    <div
      class="min-h-[calc(100vh-56px)] bg-[#2D3E63] z-1 flex flex-col w-full overflow-hidden"
      id="target-area"
    >
      <Groups></Groups>
      <RuleSection></RuleSection>
      <PrizeSection></PrizeSection>
    </div>
  </div>
</template>

<script setup>
import Groups from './Groups.vue'
import RuleSection from './RuleSection.vue'
import PrizeSection from './PrizeSection.vue'

defineOptions({
  name: 'DarkBlueSection',
})
</script>

<style scoped></style>
