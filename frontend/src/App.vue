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
    <!-- Navbar shown during loading too -->
    <Navbar />

    <!-- Loading Screen with transition -->
    <Transition name="loading-fade" appear>
      <div v-if="shouldShowLoading" class="loading-screen-with-navbar">
        <div class="loading-content">
          <LoadingAnimation />
        </div>
      </div>
    </Transition>

    <!-- Main Content -->
    <div v-show="!shouldShowLoading" class="main-content">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
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

.loading-screen-with-navbar {
  position: fixed;
  top: 56px; /* Account for navbar height */
  left: 0;
  width: 100%;
  height: calc(100vh - 56px);
  background-color: #f4f5f4;
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
