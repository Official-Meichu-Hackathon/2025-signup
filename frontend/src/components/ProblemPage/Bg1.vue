<template>
  <!-- 上方背景與橢圓疊加 -->
  <div class="flex flex-col w-full justify-center">
    <div class="relative">
      <img src="../../assets/Problems/background/bg.svg" alt="上方背景" class="w-full -z-10" />

      <img
        src="../../assets/Problems/background/ellipse28.svg"
        alt="中央橢圓"
        class="absolute top-[-5vh] left-[18.7vh] w-[107.5vh] h-[105.6vh] -z-10"
      />
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'BackgroundOne',
})
</script>
