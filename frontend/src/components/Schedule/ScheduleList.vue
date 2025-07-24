<template>
  <!-- White content box (in front) -->
  <div
    class="relative bg-white p-4 sm:p-6 md:p-8 z-10"
    style="
      width: 132.28vw;
      z-index: 10;
      padding-bottom: 35vh;
      box-shadow: 2px -2px 5px 0px rgba(0, 0, 0, 0.15);
    "
  >
    <div class="flex flex-col space-y-4 md:space-y-5">
      <template v-if="scheduleItems && scheduleItems.length">
        <ScheduleItem
          v-for="(item, index) in scheduleItems"
          :key="index"
          :item="item"
          :index="index"
          :getCircleColor="getCircleColor"
          :formatTitle="formatTitle"
          :timeStyle="timeStyle"
          :titleStyle="titleStyle"
        />
      </template>
    </div>
    <div class="text-center mt-8" style="position: relative; z-index: 11">
      <p :style="noticeStyle">實際流程將以現場公佈為準，屆時請參賽者留意大會推播通知</p>
    </div>
  </div>
</template>

<script setup>
import ScheduleItem from './ScheduleItem.vue'

defineProps({
  scheduleItems: Array,
  getCircleColor: Function,
  formatTitle: Function,
  timeStyle: Object,
  titleStyle: Object,
  noticeStyle: Object,
})
</script>

<style scoped>
.font-chiron {
  font-family: 'Chiron Hei HK', sans-serif;
}
</style>
