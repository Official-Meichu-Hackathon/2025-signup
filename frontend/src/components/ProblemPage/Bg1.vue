<template>
  <!-- 上方背景與橢圓疊加 -->
  <div class="relative">
    <img
      src="../../assets/Problems/background/bg.svg"
      alt="上方背景"
      class="w-full h-full object-fill -z-10"
    />

    <img
      src="../../assets/Problems/background/ellipse28.svg"
      alt="中央橢圓"
      class="absolute top-1/2 left-1/2 w-[80%] h-auto -translate-x-1/2 -translate-y-1/2 -z-10"
    />
  </div>
</template>

<script setup>
defineOptions({
  name: 'BackgroundOne',
})
</script>
