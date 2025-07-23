<template>
  <BigWord />
  <div id="schedule">
    <RegistrationSchedule />
  </div>
  <div id="info">
    <RegistrationInfo />
  </div>
</template>

<style scoped></style>

<script>
import BigWord from './BigWord.vue'
import RegistrationSchedule from './RegistrationSchedule.vue'
import RegistrationInfo from './RegistrationInfo.vue'

const RegistrationDesktop = {
  name: 'RegistrationDesktop',
  components: {
    BigWord,
    RegistrationSchedule,
    RegistrationInfo,
  },
}

export default RegistrationDesktop
export { RegistrationDesktop }
</script>
