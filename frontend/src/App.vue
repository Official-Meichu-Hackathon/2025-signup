<script setup>
import { ref, provide, computed } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

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
    <!-- Loading Screen (only for home page) -->
    <div v-if="shouldShowLoading" class="loading-screen">
      <div class="loading-content">
        <div class="loading-spinner"></div>
        <p class="loading-text">載入中...</p>
      </div>
    </div>

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
.main-content {
  padding-top: 56px;
}

.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loading-content {
  text-align: center;
  color: white;
}

.loading-spinner {
  width: 60px;
  height: 60px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 20px;
}

.loading-text {
  font-size: 18px;
  font-weight: 500;
  margin: 0;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
