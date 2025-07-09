<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div>
    <Navbar />
    <div class="main-content">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<style>
.main-content {
  padding-top: 56px;
}
</style>
