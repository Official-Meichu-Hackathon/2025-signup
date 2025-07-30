<template>
  <Entry_animation v-if="!isMobile"></Entry_animation>
  <EntryAnimationMobile v-else></EntryAnimationMobile>
  <Home_pg1></Home_pg1>

  <DarkBlueSection></DarkBlueSection>
  <!-- <Groups></Groups> -->
  <!-- <Test></Test> -->

  <!-- bottom section -->
  <BottomSection></BottomSection>
  <StaffSection></StaffSection>
</template>

// 李聿宸：基本介紹、合作企業 ~ 特別感謝
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Home_pg1 from '../components/home/HomePg1.vue'
import Entry_animation from '../components/home/EntryAnimation.vue'
import DarkBlueSection from '../components/home/DarkBlueSection.vue'
import StaffSection from '../components/home/StaffSection.vue'
import BottomSection from '../components/home/BottomSection.vue'
import EntryAnimationMobile from '../components/home/EntryAnimationMobile.vue'
// import Groups from '../components/home/Groups.vue';
// import Test from '../components/home/Test.vue';
const isMobile = ref(window.innerWidth <= 768)

const checkIsMobile = () => {
  isMobile.value = window.innerWidth <= 768
}

onMounted(() => {
  window.addEventListener('resize', checkIsMobile)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkIsMobile)
})

defineOptions({
  name: 'HomePage',
})
</script>

<style scoped></style>
