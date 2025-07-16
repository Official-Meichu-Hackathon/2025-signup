<template>
  <Entry_animation></Entry_animation>
  <Home_pg1></Home_pg1>

  <div class="min-h-[calc(100vh-56px)] bg-[#2D3E63] flex flex-col items-center justify-center">
    <div class="text-3xl font-bold text-center text-[#F4F5F5]">Home Page</div>
  </div>

  <!-- test section -->
  <WorkshopSection></WorkshopSection>
</template>

// 李聿宸：基本介紹、合作企業 ~ 特別感謝
<script setup>
import WorkshopSection from '../components/home/WorkshopSection.vue'
import Home_pg1 from './home_eason/HomePg1.vue'
import Entry_animation from './home_eason/EntryAnimation.vue'

defineOptions({
  name: 'HomePage',
})
</script>

<style scoped></style>
