import { ref, onMounted, onUnmounted } from 'vue'

export function useAlternatingFade(duration = 1000, overlap = 250) {
  const showFirst = ref(true)
  const showSecond = ref(false)
  const timeouts = []

  onMounted(() => {
    let isFirst = true

    function loop() {
      if (isFirst) {
        showSecond.value = true
        timeouts.push(
          setTimeout(() => {
            showFirst.value = false
          }, overlap)
        )

        timeouts.push(
          setTimeout(() => {
            isFirst = false
            loop()
          }, duration)
        )
      } else {
        showFirst.value = true
        timeouts.push(
          setTimeout(() => {
            showSecond.value = false
          }, overlap)
        )

        timeouts.push(
          setTimeout(() => {
            isFirst = true
            loop()
          }, duration)
        )
      }
    }

    loop()
  })

  onUnmounted(() => {
    timeouts.forEach(clearTimeout)
  })

  return { showFirst, showSecond }
}
