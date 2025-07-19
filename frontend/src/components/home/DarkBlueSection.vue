<template>
  <div class="relative w-full min-h-screen overflow-hidden">
    <img src="../../assets/Home/state=active.svg" alt="light-cursor" id="light-cursor" />
    <div
      class="min-h-[calc(100vh-56px)] bg-[#2D3E63] z-1 flex flex-col w-full overflow-hidden"
      id="target-area"
    >
      <Groups></Groups>
      <RuleSection></RuleSection>
      <PrizeSection ref="prizeRef"></PrizeSection>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onUnmounted, onMounted } from 'vue'

import Groups from './Groups.vue'
import RuleSection from './RuleSection.vue'
import PrizeSection from './PrizeSection.vue'

defineOptions({
  name: 'DarkBlueSection',
})

// 這裡只是宣告一個 ref 變數，還沒有指定它跟哪個元件綁定
const prizeRef = ref()

// light cursor
onMounted(() => {
  const glow = document.getElementById('light-cursor')
  const area = document.getElementById('target-area')

  glow.style.display = 'none'

  area.addEventListener('mousemove', (e) => {
    console.log(prizeRef.value.showOptions)
    if (prizeRef.value.showOptions) {
      glow.style.display = 'none' // 選單開啟不顯示光標
      return
    }

    glow.style.display = 'block'
    const rect = area.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    glow.style.left = `${x}px`
    glow.style.display = 'block'

    glow.style.top = `${y}px`
  })

  area.addEventListener('mouseleave', () => {
    glow.style.display = 'none'
  })
})

watch(
  () => prizeRef.value?.showOptions,
  (val) => {
    const glow = document.getElementById('light-cursor')
    document.body.style.overflow = val ? 'hidden' : ''
    if (val) {
      glow.style.display = 'none'
    }
  },
  { immediate: true }
)

onUnmounted(() => {
  // 離開頁面的時候自動恢復 y 軸滾輪 !
  document.body.style.overflow = ''
})
</script>

<style scoped>
#light-cursor {
  position: absolute;
  pointer-events: none; /* 不阻擋滑鼠事件，避免影響點擊 */
  z-index: 9;
  width: 20vw;
  height: 20vw;
  user-select: none; /* 禁止選取圖片 */
  border-radius: 50%;
  transform-origin: 100% 50%;
  transform: translate(-60%, -50%);
  filter: brightness(1.1) blur(20px);
  /* box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.5); */
}
</style>
