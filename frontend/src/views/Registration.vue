<template>
  <component :is="currentComponent" />
</template>

<style scoped></style>

<script>
import { ref, onMounted } from 'vue'
import RegistrationDesktop from '../components/Registration/RegistrationDesktop.vue'
import RegistrationMobile from '../components/Registration/RegistrationMobile.vue'

export default {
  name: 'RegistrationPage',
  components: {
    RegistrationDesktop,
    RegistrationMobile,
  },
  setup() {
    const currentComponent = ref('RegistrationDesktop')
    const mobileQuery = window.matchMedia('(max-width: 768px)')

    function updateComponent() {
      currentComponent.value = mobileQuery.matches ? 'RegistrationMobile' : 'RegistrationDesktop'
    }

    onMounted(() => {
      updateComponent()
      mobileQuery.addEventListener('change', updateComponent)
    })

    return { currentComponent }
  },
}
</script>
