<template>
  <!-- Big Word-->
  <div
    class="w-full min-h-[1000px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
    style="background-color: white; position: relative"
  >
    <!-- Wings -->
    <img
      src="/src/assets/Registration/wingleft.svg"
      class="absolute pointer-events-none z-20 h-auto scale-175 top-[50%] right-[54%] w-[20vw] wing-animate-left"
    />
    <img
      src="/src/assets/Registration/wingright.svg"
      class="absolute pointer-events-none z-20 h-auto scale-175 top-[50%] left-[54%] w-[20vw] wing-animate-right"
    />

    <div class="relative z-10 flex items-center justify-center w-full">
      <img
        src="/src/assets/Registration/Title.svg"
        alt="報名方式"
        class="w-[40vw] h-auto scale-84"
      />
    </div>
    <!-- Background Images -->
    <img
      src="/src/assets/Registration/spray.svg"
      style="
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        pointer-events: none;
        z-index: 1;
      "
    />
    <img
      src="/src/assets/Registration/registration_bg.webp"
      style="
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        pointer-events: none;
        z-index: 2;
      "
    />
  </div>
</template>

<style scoped>
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
export default {
  name: 'BigWord',
}
</script>
