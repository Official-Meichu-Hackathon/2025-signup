<template>
  <Entry_animation></Entry_animation>
  <Home_pg1></Home_pg1>

  <DarkBlueSection></DarkBlueSection>
  <!-- <Groups></Groups> -->
  <!-- <Test></Test> -->

  <!-- bottom section -->
  <StaffSection></StaffSection>
</template>

// 李聿宸：基本介紹、合作企業 ~ 特別感謝
<script setup>
import Home_pg1 from '../components/home/HomePg1.vue'
import Entry_animation from '../components/home/EntryAnimation.vue'
import DarkBlueSection from '../components/home/DarkBlueSection.vue'
import StaffSection from '../components/home/StaffSection.vue'
// import Groups from '../components/home/Groups.vue';
// import Test from '../components/home/Test.vue';

defineOptions({
  name: 'HomePage',
})
</script>

<style scoped></style>
