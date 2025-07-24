<template>
  <div
    class="w-full flex items-center relative"
    :style="{
      minHeight: '10.79vh',
      backgroundColor: item.isSplit ? 'transparent' : '#E9E9E9',
    }"
  >
    <!-- Small circle -->
    <div
      class="absolute"
      :style="{
        width: '1.4vw', // 30px / 1920
        height: '1.4vw', // Make it a perfect circle
        backgroundColor: getCircleColor(index),
        borderRadius: '50%',
        right: '2.45vw', // 47px / 1920
        top: '50%', // Vertically center
        transform: 'translateY(-50%)', // Adjust for its own height
      }"
    ></div>

    <template v-if="item.isSplit">
      <div class="flex flex-grow items-center" :style="{ gap: '17px' }">
        <!-- First split rectangle -->
        <div
          class="bg-[#E9E9E9] flex items-center relative"
          :style="{ flex: '1', height: '10.79vh', paddingLeft: '3.19vw' }"
        >
          <!-- Small circle for split box -->
          <div
            class="absolute"
            :style="{
              width: '1.56vw', // 30px / 1920
              height: '1.56vw', // Make it a perfect circle
              backgroundColor: getCircleColor(index),
              borderRadius: '50%',
              right: '2.45vw', // 47px / 1920
              top: '50%', // Vertically center
              transform: 'translateY(-50%)', // Adjust for its own height
            }"
          ></div>
          <div :style="timeStyle">{{ item.time }}</div>
          <h3 :style="titleStyle">{{ item.title }}</h3>
        </div>
        <!-- Second split rectangle -->
        <div
          class="bg-[#E9E9E9] flex items-center"
          :style="{ flex: '1', height: '10.79vh', paddingLeft: '3.19vw' }"
        >
          <div :style="timeStyle">{{ item.time2 }}</div>
          <h3 :style="titleStyle">{{ item.title2 }}</h3>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="flex items-center w-full" :style="{ paddingLeft: '3.19vw' }">
        <div :style="timeStyle">{{ item.time }}</div>
        <h3 :style="titleStyle">{{ item.title }}</h3>
      </div>
    </template>
  </div>
</template>

<script setup>
defineProps({
  item: Object,
  index: Number,
  getCircleColor: Function,
  formatTitle: Function,
  timeStyle: Object,
  titleStyle: Object,
})
</script>

<style scoped>
.font-chiron {
  font-family: 'Chiron Hei HK', sans-serif;
}
</style>
