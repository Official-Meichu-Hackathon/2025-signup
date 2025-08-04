<template>
  <!-- 上方背景與橢圓疊加 -->
  <!-- 原有中間背景 -->
  <div class="relative flex w-full justify-center items-center -z-20">
    <img
      src="../../assets/Problems/background/vector59.svg"
      alt="藍暈"
      class="absolute w-[110%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%]"
    />
    <img
      src="../../assets/Problems/background/vector59pink.svg"
      alt="粉暈"
      class="absolute w-[110%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-[20%]"
    />
  </div>
  <!-- 疊加的 Frame59 - 向右上方移動 -->
</template>

<script setup>
defineOptions({
  name: 'BackgroundThree',
})
</script>
