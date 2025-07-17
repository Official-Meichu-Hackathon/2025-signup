<template>
  <div class="relative w-full min-h-screen overflow-hidden">
    <img src="../../assets/Home/state=active.svg" alt="light-cursor" id="light-cursor" />
    <div
      class="min-h-[calc(100vh-56px)] bg-[#2D3E63] z-1 flex flex-col w-full overflow-hidden"
      id="target-area"
    >
      <!-- wscreen 會撐太多導致有 scroll bar ，所以使用 w-full !!! -->
      <div
        class="mx-auto title mb-[10px] mt-[5px] text-center justify-start text-white text-3xl font-black font-['Chiron_Hei_HK']"
      >
        獎項資訊
      </div>

      <!-- hacker -->
      <div
        class="hacker relative bg-gradient-to-br from-blue-100/50 to-blue-100/10 rounded-[30px] shadow-[0px_4px_25px_-5px_rgba(28,27,31,1.00)] border border-blue-100/40"
      >
        <div>
          <!-- img 加 overflow 是沒用的 !!! -->
          <img src="../../assets/Home/Ellipse-29.svg" class="absolute left-[94%] bottom-[5%]" />
          <img
            src="../../assets/Home/star-02-02-1.svg"
            class="absolute w-[250px] left-[100%] top-[40%]"
          />
        </div>

        <div class="z-10 ml-[5vh] mt-[3vh] mr-[2vh]">
          <!-- subtitle -->
          <div class="text-white text-[2.2vw] font-black font-['Chiron_Hei_HK'] leading-10">
            黑客組
          </div>
          <div class="info text-slate-700 text-sm font-bold font-['Chiron_Hei_HK'] leading-10">
            每間企業獨立評選
          </div>

          <!-- content -->
          <div class="flex text-[1.3vw] text-white font-bold font-['Chiron_Hei_HK'] leading-10">
            第一名：新台幣 25,000 元整、企業實體獎品、實習或實習面試機會
          </div>
          <div class="flex text-[1.3vw] text-white font-bold font-['Chiron_Hei_HK'] leading-10">
            第二名：新台幣 20,000 元整、企業實體獎品
          </div>
          <div class="flex text-[1.3vw] text-white font-bold font-['Chiron_Hei_HK'] leading-10">
            第三名：新台幣 15,000 元整、企業實體獎品
          </div>

          <!-- additional info-->
          <div class="text-slate-700 text-sm font-bold font-['Chiron_Hei_HK'] leading-10">
            *實習機會主要依據企業本身而定
          </div>
        </div>
      </div>

      <!-- maker -->
      <div
        class="maker relative bg-gradient-to-br from-blue-100/50 to-blue-100/10 rounded-[30px] shadow-[0px_4px_25px_-5px_rgba(28,27,31,1.00)] border border-blue-100/40"
      >
        <div>
          <img
            src="../../assets/Home/Ellipse-30.svg"
            alt="ellipse-30"
            class="absolute right-[90%] bottom-[5%]"
          />
          <img
            src="../../assets/Home/star1.svg"
            alt="star1-anim"
            class="absolute star1-anim right-[78%]"
          />
        </div>

        <div class="z-10 ml-[5vh] mt-[3vh] mr-[2vh] mb-[2vh]">
          <!-- subtitle -->
          <div
            class="mb-[2vh] text-white text-[2.2vw] font-black font-['Chiron_Hei_HK'] leading-10"
          >
            創客交流組
          </div>

          <!-- content -->
          <div
            class="z-10 flex text-white font-bold font-['Chiron_Hei_HK'] leading-10 text-[1.3vw]"
          >
            <!-- justify between 各自對齊左右側的排版
                    <div class="flex justify-between">
                        <div class="text-[1.3vw]">第一名：新台幣 50,000 元整</div>
                        <div class="text-[1.3vw]">創意獎一：新台幣 12,000 元整</div>
                    </div>
                    <div class="flex justify-between">
                        <div class="text-[1.3vw]">第二名：新台幣 40,000 元整</div>
                        <div class="text-[1.3vw]">創意獎二：新台幣 10,000 元整</div>
                    </div>
                    <div class="flex justify-between">
                        <div class="text-[1.3vw]">第三名：新台幣 30,000 元整</div>
                        <div class="text-[1.3vw]">創意獎三：新台幣 8,000 元整</div>
                    </div> -->

            <!-- 左邊欄 -->
            <div class="flex flex-col w-1/2 text-[1.3vw]">
              <div>第一名：新台幣 50,000 元整</div>
              <div>第二名：新台幣 40,000 元整</div>
              <div>第三名：新台幣 30,000 元整</div>
            </div>

            <!-- 右邊欄 -->
            <div class="flex flex-col w-1/2 text-[1.3vw]">
              <div>創意獎一：新台幣 12,000 元整</div>
              <div>創意獎二：新台幣 10,000 元整</div>
              <div>創意獎三：新台幣 8,000 元整</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Meichu big prize -->

      <div
        class="MH bg-gradient-to-b from-blue-100/50 to-blue-100/10 rounded-[30px] shadow-[0px_4px_25px_-5px_rgba(28,27,31,1.00)] border border-blue-100/40"
      >
        <div>
          <img
            src="../../assets/Home/Vector_red.svg"
            alt="vector_red"
            class="absolute left-[45%]"
          />
          <img
            src="../../assets/Home/Vector_blue.svg"
            alt="vector_blue"
            class="absolute left-[60%] bottom-[10%]"
          />
          <img
            src="../../assets/Home/curve.svg"
            alt="curve"
            class="absolute brightness-210 bottom-[2%] left-[39%] scale-90"
          />
        </div>

        <div class="z-10 ml-[5vh] mt-[3vh] mr-[2vh]">
          <!-- subtitle -->
          <div class="text-white text-[2.2vw] font-black font-['Chiron_Hei_HK'] leading-10">
            梅竹大獎
          </div>
          <div class="info text-slate-700 text-sm font-bold font-['Chiron_Hei_HK'] leading-10">
            為黑客組複賽，由各間企業之第一名獲獎組別共同角逐
          </div>

          <!-- content -->
          <div class="flex text-[1.3vw] text-white font-bold font-['Chiron_Hei_HK'] leading-10">
            第一名：新台幣 30,000 元整
          </div>
          <div class="flex text-[1.3vw] text-white font-bold font-['Chiron_Hei_HK'] leading-10">
            第二名：新台幣 16,000 元整
          </div>
          <div class="flex text-[1.3vw] text-white font-bold font-['Chiron_Hei_HK'] leading-10">
            第三名：新台幣 8,000 元整
          </div>
          <div class="flex text-[1.3vw] text-white font-bold font-['Chiron_Hei_HK'] leading-10">
            最佳人氣獎：新台幣 3,000 元整
          </div>
        </div>
      </div>

      <!-- signup button -->
      <!-- 記得調 button 的 z-index 才可以不被 img 蓋住 ! -->
      <button
        class="mx-auto z-8 sign-up mb-[8vh] mt-[10vh] cursor-pointer"
        @click="showOptions = true"
      ></button>

      <!-- 遮罩 + 彈出選單 -->
      <div
        v-if="showOptions"
        class="menu fixed inset-0 z-40 flex items-center justify-center"
        @click.self="closeMenu"
      >
        <!-- 背景遮罩 -->
        <div
          @click="closeMenu"
          class="menu2 absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300"
        ></div>

        <!-- 彈出選單 -->
        <div class="relative z-10 p-6 flex flex-row gap-4">
          <button
            @click="selectOption('選項一', 0)"
            class="option relative overflow-hidden rounded-[30px] text-white"
          >
            <img
              src="../../assets/Home/Frame-30.svg"
              class="bg2 absolute transform scale-200 bottom-[5%] left-[30%] z-0"
              alt="bg2"
            />
            <img
              src="../../assets/Home/Frame-29.svg"
              class="bg1 absolute transform scale-200 bottom-[5%] left-[30%] z-0"
              alt="bg1"
            />
            <span class="w-[30vw] text-[3vw] font-black font-['Chiron_Hei_HK'] relative z-50"
              >黑客組</span
            >
          </button>
          <button
            @click="selectOption('選項二', 1)"
            class="option overflow-hidden rounded-[30px] text-white"
          >
            <!-- <img src="../../assets/Home/Frame-30.svg" alt="bg2">
            <img src="../../assets/Home/Frame-29.svg" alt="bg1"> -->

            <span class="w-[50vw] text-[3vw] font-black font-['Chiron_Hei_HK'] relative z-50"
              >創客交流組</span
            >
          </button>
          <!-- <button @click="closeMenu" class="text-white text-sm text-gray-500 mt-2 hover:underline">
            關閉
          </button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onUnmounted, onMounted } from 'vue'

defineOptions({
  name: 'PrizeSection',
})

const showOptions = ref(false)

function closeMenu() {
  showOptions.value = false
  console.log('close menu\n')
}

watch(showOptions, (val) => {
  const glow = document.getElementById('light-cursor')
  document.body.style.overflow = val ? 'hidden' : '' // 鎖住滾輪
  // NEED !!! 監聽 showOptions 變化
  if (val) {
    console.log('close light cursor')
    glow.style.display = 'none' // showOptions=true 時隱藏
  }
})

onUnmounted(() => {
  // 離開頁面的時候自動恢復 y 軸滾輪 !
  document.body.style.overflow = ''
})

// function handleClick() {
//   console.log('click button')
// }

function selectOption(option, id) {
  alert(`你選擇了：${option} id=${id}`)

  closeMenu()
}

// light cursor
onMounted(() => {
  const glow = document.getElementById('light-cursor')
  const area = document.getElementById('target-area')

  glow.style.display = 'none'

  area.addEventListener('mousemove', (e) => {
    glow.style.display = 'block'
    const rect = area.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    glow.style.left = `${x}px`
    glow.style.top = `${y}px`
  })

  area.addEventListener('mouseleave', () => {
    glow.style.display = 'none'
  })
})
</script>

<style scoped>
.title {
  /* must stay in the middle as one whole line */
  width: 90vw;
  font-size: 2.3vw;
}
.hacker {
  /* border: 3px solid pink; */
  margin-top: 5vh;
  width: 50vw;
  margin-left: 15vw;
  padding: 3vh 2vh;
}

.maker {
  /* border: 3px solid pink; */
  margin-top: 5vh;
  width: 50vw;
  margin-left: 35vw;
  padding: 3vh 2vh;
  padding-right: 5vh;
}

.MH {
  /* border: 3px solid pink; */
  width: 35vw;
  margin-top: 5vh;
  margin-left: 15vw;
  padding: 3vh 2vh;
}

span {
  border: solid 3px black;
}
img {
  /* border: solid 3px blue; */
}

/* .object-container {
    border: 3px solid red;
} */

@keyframes Zoom-in-out {
  0%,
  100% {
    transform: scale(0.65);
  }
  20% {
    transform: scale(0.7);
  }
  /* 55% {
    transform: scale(0.9);
  } */
  70% {
    transform: scale(0.9);
  }
}

.star1-anim {
  animation: Zoom-in-out 2.5s infinite ease-in-out;
  transform-origin: top left; /* 以左上角當作放大縮小的基準點 */
}

.sign-up {
  padding-top: 15vh;
  width: 25vw;
  /* transition: 0.2s; */

  background-image: url('../../assets/Home/signupButton.svg');
  background-size: contain; /* 保持圖片完整顯示 */
  background-repeat: no-repeat;
  background-position: center;
}

.sign-up:hover {
  background-image: url('../../assets/Home/signupButton-hover.svg');
}

/* .menu {
  border: 3px solid red;
}
.menu2 {
  border: 3px solid pink;
} */

.bg1 {
  opacity: 1;
  animation-play-state: paused;
  animation: none;
}

.bg2 {
  opacity: 0;
  animation-play-state: paused;
  animation: none;
}

/* hover 時啟動動畫 */
.option:hover .bg1 {
  animation: fadeInOut 4s linear infinite;
  animation-delay: 2s;
  animation-play-state: running;
  animation-fill-mode: forwards;
}

.option:hover .bg2 {
  animation: fadeInOut 4s linear infinite;
  animation-play-state: running;
  animation-fill-mode: forwards;
}

@keyframes fadeInOut {
  0%,
  50% {
    opacity: 1;
  }
  50.01%,
  100% {
    opacity: 0;
  }
}

@keyframes bgSwitch {
  0% {
    background-image: url('../../assets/Home/Frame-29.svg');
  }
  50% {
    background-image: url('../../assets/Home/Frame-30.svg');
  }
  100% {
    background-image: url('../../assets/Home/Frame-29.svg');
  }
}

.option {
  /* width: 400px;
  height: 100px; */
  border: 3px solid red;
  width: 32vw;
  height: 20vh;
  /* background-image: url('../../assets/Home/Frame-29.svg');
  background-repeat: no-repeat;
  background-position:20% 50%;
  transition: ease-in-out;
  cursor: pointer; */
}

#light-cursor {
  position: absolute;
  pointer-events: none; /* 不阻擋滑鼠事件，避免影響點擊 */
  z-index: 9;
  width: 20vw;
  height: 20vw;
  user-select: none; /* 禁止選取圖片 */
  border-radius: 50%;
  transform-origin: 100% 50%;
  transform: translate(-60%, -50%);
  filter: blur(10px);
  /* box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.5); */
}
</style>
