<template>
  <BigWord />
  <RegistrationSchedule />
  <RegistrationNotice />
</template>

<style scoped></style>

<script>
import BigWord from '../components/Registration/BigWord.vue'
import RegistrationSchedule from '../components/Registration/RegistrationSchedule.vue'
import RegistrationNotice from '../components/Registration/RegistrationNotice.vue'

export default {
  name: 'RegistrationPage',
  components: {
    BigWord,
    RegistrationSchedule,
    RegistrationNotice,
  },
}
</script>
