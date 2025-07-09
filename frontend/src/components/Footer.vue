<template>
  <footer class="footer-gradient w-full py-6 flex flex-col items-center justify-center">
    <div class="flex gap-8 mb-2">
      <a
        href="https://www.facebook.com/HackMeiChu"
        aria-label="Facebook"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="../assets/Footer/facebook.svg" alt="Facebook" width="50" height="50" />
      </a>
      <a
        href="https://www.instagram.com/mc_hackathon"
        aria-label="Instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="../assets/Footer/instagram.svg" alt="Instagram" width="50" height="50" />
      </a>
      <a
        href="mailto:2025mchackathon@gmail.com"
        aria-label="Email"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="../assets/Footer/gmail.svg" alt="Email" width="50" height="50" />
      </a>
    </div>
    <div class="text-[#656565] text-center font-['Chiron_Hei_HK',sans-serif] text-lg font-bold">
      Copyright © 2025 Meichu Hackathon
    </div>
  </footer>
</template>

<script setup>
defineOptions({
  name: 'FooterComponent',
})
</script>

<style scoped>
.footer-gradient {
  background: linear-gradient(94deg, #f4dae1 0.72%, #d3e4fc 111.29%);
}
</style>
