<script setup>
import { ref, provide, computed } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import LoadingAnimation from './components/home/LoadingAnimation.vue'
const route = useRoute()
const isEntryAnimationLoaded = ref(false)

const setEntryAnimationLoaded = () => {
  isEntryAnimationLoaded.value = true
}

// 只在首頁時才需要等待 EntryAnimation 載入
const shouldShowLoading = computed(() => {
  return route.path === '/' && !isEntryAnimationLoaded.value
})

provide('setEntryAnimationLoaded', setEntryAnimationLoaded)
</script>

<template>
  <div>
    <!-- Loading Screen with transition -->
    <Transition name="loading-fade" appear>
      <div v-if="shouldShowLoading" class="loading-screen">
        <div class="loading-content">
          <LoadingAnimation />
        </div>
      </div>
    </Transition>

    <!-- Main Content -->
    <div v-show="!shouldShowLoading">
      <Navbar />
      <div class="main-content">
        <router-view />
      </div>
      <Footer />
    </div>
  </div>
</template>

<style>
.loading-fade-enter-active,
.loading-fade-leave-active {
  transition: opacity 0.3s ease-out;
}

.loading-fade-enter-from,
.loading-fade-leave-to {
  opacity: 0;
}

.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #f4f5f4; /* Use the background color from LoadingAnimation */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loading-content {
  text-align: center;
  color: #333; /* Change text color to be visible on light background */
}

.main-content {
  padding-top: 56px;
}
</style>
