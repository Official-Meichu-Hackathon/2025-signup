<template>
  <!-- 遮罩 + 彈出選單 -->
  <div class="menu fixed inset-0 z-40 flex items-center justify-center" @click.self="closeMenu">
    <!-- 背景遮罩 -->
    <div
      @click="closeMenu"
      class="menu2 absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300"
    ></div>

    <!-- 彈出選單 -->
    <div class="relative z-10 p-6 flex flex-col md:flex-row gap-[10vw]">
      <router-link :to="{ path: '/signup', query: { ref: 'hacker' } }">
        <!-- 黑客組 button -->
        <button
          @click="selectOption('選項一', 0)"
          class="option relative overflow-hidden rounded-[30px] text-white cursor-pointer"
        >
          <img
            src="../../assets/Home/Frame-30.svg"
            class="bg2 absolute transform scale-250 md:scale-200 bottom-[5%] left-[30%] z-0"
            alt="bg2"
          />
          <img
            src="../../assets/Home/Frame-29.svg"
            class="bg1 absolute transform scale-200 bottom-[5%] left-[30%] z-0"
            alt="bg1"
          />
          <span
            class="text-shadow w-[30vw] text-[3vw] font-black font-['Chiron_Hei_HK'] relative z-50"
            >黑客組</span
          >
        </button>
      </router-link>

      <!-- 創客組 button -->
      <router-link :to="{ path: '/signup', query: { ref: 'maker' } }">
        <button
          @click="selectOption('選項二', 1)"
          class="option relative overflow-hidden rounded-[30px] text-white cursor-pointer"
        >
          <img
            src="../../assets/Home/Frame-30.svg"
            class="bg2 absolute transform scale-300 md:scale-200 bottom-[5%] left-[30%] z-0"
            alt="bg2"
          />
          <img
            src="../../assets/Home/Frame-29.svg"
            class="bg1 absolute transform scale-200 bottom-[5%] left-[30%] z-0"
            alt="bg1"
          />

          <span
            class="text-shadow w-[50vw] text-[3vw] font-black font-['Chiron_Hei_HK'] relative z-50"
            >創客交流組</span
          >
        </button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'SignupGroup',
})

const emit = defineEmits(['close', 'select'])

function closeMenu() {
  // console.log('close menu')
  emit('close')
}

function selectOption(option, id) {
  // console.log('select ', option, id)
  emit('select', { option, id })
  emit('close')
}
</script>

<style scoped>
.option {
  border: 3px solid #d9d9d9;
  width: 32vw;
  height: 20vh;
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
    height: 10vh;
  }
}
</style>
