<template>
  <!-- Big Word-->
  <div
    class="w-full min-h-[80px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
    style="background-color: white; position: relative"
  >
    <!-- Wings -->
    <img
      src="/src/assets/Registration/wingleft.svg"
      class="absolute pointer-events-none z-20 h-auto scale-120 top-[45%] right-[50%] w-[20vw] wing-animate-left"
    />
    <img
      src="/src/assets/Registration/wingright.svg"
      class="absolute pointer-events-none z-20 h-auto scale-120 top-[45%] left-[50%] w-[20vw] wing-animate-right"
    />

    <div class="relative z-10 flex items-center justify-center w-full">
      <img
        src="/src/assets/Registration/Title.svg"
        alt="報名方式"
        class="w-[40vw] h-auto scale-60"
      />
    </div>
  </div>
</template>

<script>
const RegistrationMobile = {
  name: 'RegistrationMobile',
}

export default RegistrationMobile
export { RegistrationMobile }
</script>

<style scoped></style>
