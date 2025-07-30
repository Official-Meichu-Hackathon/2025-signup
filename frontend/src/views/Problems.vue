<template>
  <div>
    <ProblemDesc v-if="isDesktop" />
    <ProblemDescMobile v-else />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, provide } from 'vue'
import ProblemDesc from '../components/ProblemPage/ProblemDesc.vue'
import ProblemDescMobile from '../components/ProblemPage/ProblemDescMobile.vue'

const isDesktop = ref(window.innerWidth >= 768)

const handleResize = () => {
  isDesktop.value = window.innerWidth >= 768
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

defineOptions({
  name: 'ProblemsPage',
  components: {
    ProblemDesc,
    ProblemDescMobile,
  },
})

provide('isDesktop', isDesktop)
</script>

<style scoped></style>
