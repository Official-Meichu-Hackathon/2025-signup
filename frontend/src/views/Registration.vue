<template>
  <div>
    <div class="hidden md:block">
      <RegistrationDesktop />
    </div>
    <div class="block md:hidden">
      <RegistrationMobile />
    </div>
  </div>
</template>

<style>
@keyframes rotateWingLeft {
  0% {
    transform: rotate(0deg);
  }
  20% {
    transform: rotate(16.5deg);
  }
  50% {
    transform: rotate(16.5deg);
  }
  70% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

@keyframes rotateWingRight {
  0% {
    transform: rotate(0deg);
  }
  20% {
    transform: rotate(-16.5deg);
  }
  50% {
    transform: rotate(-16.5deg);
  }
  70% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.wing-animate-left {
  animation: rotateWingLeft 1.8s ease-in-out infinite;
}

.wing-animate-right {
  animation: rotateWingRight 1.8s ease-in-out infinite;
}
</style>

<script>
import RegistrationDesktop from '../components/Registration/RegistrationDesktop.vue'
import RegistrationMobile from '../components/Registration/RegistrationMobile.vue'

export default {
  name: 'RegistrationPage',
  components: {
    RegistrationDesktop,
    RegistrationMobile,
  },
}
</script>
