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
import BigWord from '../components/Registration/BigWord.vue'
import RegistrationSchedule from '../components/Registration/RegistrationSchedule.vue'
import RegistrationInfo from '../components/Registration/RegistrationInfo.vue'

export default {
  name: 'RegistrationPage',
  components: {
    BigWord,
    RegistrationSchedule,
    RegistrationInfo,
  },
}
</script>
