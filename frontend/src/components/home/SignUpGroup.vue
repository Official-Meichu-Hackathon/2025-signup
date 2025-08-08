<template>
  <!-- 遮罩 + 彈出選單 -->
  <div class="menu fixed inset-0 z-40 flex items-center justify-center" @click.self="closeMenu">
    <!-- 背景遮罩 -->
    <div
      @click="closeMenu"
      class="menu2 absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300"
    ></div>

    <transition
      enter-active-class="transition-all duration-500 ease-out"
      leave-active-class="transition-all duration-400 ease-in"
      enter-from-class="translate-y-[50%] opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-[50%] opacity-0"
    >
      <!-- 彈出選單 -->
      <div v-if="showOptions" class="relative z-10 p-6 flex flex-col md:flex-row gap-[15vw]">
        <router-link :to="{ path: '/signup', query: { ref: 'hacker' } }">
          <!-- 黑客組 button -->
          <button
            @click="selectOption('選項一', 0)"
            class="option relative overflow-hidden rounded-[80px] text-white cursor-pointer flex items-center justify-center"
          >
            <!-- <img
              v-show="!isMobile"
              src="../../assets/Home/Frame-30.svg"
              class="bg2 absolute transform scale-250 md:scale-200 bottom-[5%] left-[30%] z-0"
              alt="bg2"
            />
            <img
              v-show="!isMobile"
              src="../../assets/Home/Frame-29.svg"
              class="bg1 absolute transform scale-200 bottom-[5%] left-[30%] z-0"
              alt="bg1"
            /> -->

            <img
              v-show="!isMobile"
              src="../../assets/Home/Frame101.svg"
              class="bg2 absolute transform scale-100 md:scale-250 bottom-[-50%] left-[30%] z-0"
              alt="bg2"
            />
            <img
              v-show="!isMobile"
              src="../../assets/Home/Frame100.svg"
              class="bg1 absolute transform scale-250 bottom-[-65%] left-[40%] z-0"
              alt="bg1"
            />

            <img
              v-show="isMobile"
              src="../../assets/Home/phoneGroup-btn1.svg"
              class="bg1 absolute top-[-10%] left-[10%] scale-150"
              alt="phoneGroup-btn1"
            />

            <span
              class="text-shadow w-[30vw] md:text-[2.5vw] text-[5vw] leading-none font-black font-['Chiron_Hei_HK'] relative z-50"
              >黑客組</span
            >
          </button>
        </router-link>

        <!-- 創客組 button -->
        <router-link :to="{ path: '/signup', query: { ref: 'maker' } }">
          <button
            @click="selectOption('選項二', 1)"
            class="option relative overflow-hidden rounded-[80px] text-white cursor-pointer flex items-center justify-center"
          >
            <!-- <img
              v-show="!isMobile"
              src="../../assets/Home/Frame-30.svg"
              class="bg2 absolute transform scale-250 md:scale-200 bottom-[5%] left-[30%] z-0"
              alt="bg2"
            />
            <img
              v-show="!isMobile"
              src="../../assets/Home/Frame-29.svg"
              class="bg1 absolute transform scale-200 bottom-[5%] left-[30%] z-0"
              alt="bg1"
            /> -->

            <img
              v-show="!isMobile"
              src="../../assets/Home/Frame101.svg"
              class="bg2 absolute transform scale-100 md:scale-250 bottom-[-50%] left-[30%] z-0"
              alt="bg2"
            />
            <img
              v-show="!isMobile"
              src="../../assets/Home/Frame100.svg"
              class="bg1 absolute transform scale-200 bottom-[-65%] left-[40%] z-0"
              alt="bg1"
            />

            <img
              v-show="isMobile"
              src="../../assets/Home/phoneGroup-btn2.svg"
              class="bg2 absolute top-[-15%] left-[10%] scale-150"
              alt="phoneGroup-btn2"
            />

            <span
              class="text-shadow w-[50vw] md:text-[2.5vw] text-[5vw] leading-none font-black font-['Chiron_Hei_HK'] relative z-50"
              >創客交流組</span
            >
          </button>
        </router-link>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

defineOptions({
  name: 'SignupGroup',
})

const isMobile = ref(false)
const showOptions = ref(false)

const emit = defineEmits(['close', 'select'])

function closeMenu() {
  showOptions.value = false
  // console.log("close menu");
  setTimeout(() => {
    emit('close')
  }, 400)
}

function selectOption(option, id) {
  // console.log('select ', option, id)
  emit('select', { option, id })
  emit('close')
}

onMounted(() => {
  isMobile.value = window.innerWidth <= 768

  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth <= 768
    console.log('isMobile', isMobile.value)
  })

  setTimeout(() => {
    showOptions.value = true
  }, 50)
})
</script>

<style scoped>
.option {
  border: 4px solid #d9d9d9;
  width: 22vw;
  /* height: 12vh; */
  height: 120px;
}

.text-shadow {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  pointer-events: none;
}

.bg1 {
  opacity: 1;
  animation-play-state: paused;
  animation: none;
}

.bg2 {
  opacity: 1; /* 這個 opacity 設成 0 的話就會在需要出現的時候疑似因為這裡是 0 出現不了 ! */
  animation-play-state: paused;
  animation: none;
}

/* hover 時啟動動畫 */
.bg1:hover {
  animation: showbg1 4s infinite;
  animation-play-state: running;
  animation-fill-mode: forwards;
}

.bg2:hover {
  animation: showbg2 4s infinite;
  animation-delay: 2s;
  animation-play-state: running;
  animation-fill-mode: forwards;
}

.container {
  border: red solid 3px;
}

@keyframes showbg1 {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

@keyframes showbg2 {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .option {
    width: 60vw;
    height: 64px;
    border: 5px solid #d9d9d9;
  }
}
</style>
