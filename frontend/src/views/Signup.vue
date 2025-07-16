<script setup>
import { ref } from 'vue'
import '../assets/css/signup.css'
import Header from '../components/signup/Header.vue'
import Steps from '../components/signup/Steps.vue'

defineOptions({
  name: 'SignupPage',
})

const playerCount = ref(5)
const currentStep = ref(0)
</script>

<template>
  <Header />
  <Steps :player-count="playerCount" :current-step="currentStep" />
</template>
