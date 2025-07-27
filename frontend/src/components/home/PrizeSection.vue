<!-- Prize Section : Apple -->

<template>
  <!-- layout for computer -->
  <div class="hidden md:block relative w-full min-h-screen overflow-hidden">
    <img
      src="../../assets/Home/cursor.svg"
      alt="light-cursor3"
      id="light-cursor3"
      class="hidden md:block"
    />
    <div
      class="min-h-[calc(100vh-56px)] bg-[#2D3E63] flex flex-col w-full overflow-hidden"
      id="target-areas3"
    >
      <!-- wscreen 會撐太多導致有 scroll bar ，所以使用 w-full !!! -->
      <div
        class="mx-auto title mb-[10px] mt-[14vh] text-center justify-start text-white font-black font-['Chiron_Hei_HK']"
      >
        獎項資訊
      </div>

      <!-- hacker -->
      <div
        class="hacker target-area relative bg-gradient-to-br from-blue-100/50 to-blue-100/10 rounded-[30px] shadow-[0px_4px_25px_-5px_rgba(28,27,31,1.00)] border border-blue-100/40"
        @mouseenter="showCursor = true"
        @mouseleave="showCursor = false"
      >
        <div>
          <!-- img 加 overflow 是沒用的 !!! -->
          <img src="../../assets/Home/Ellipse-29.svg" class="absolute left-[94%] bottom-[5%]" />
          <img
            src="../../assets/Home/star-02-02-1.svg"
            class="absolute w-[250px] left-[100%] top-[40%]"
          />
        </div>

        <div class="ml-[3vw] mt-[3vh] mr-[2vh]">
          <!-- subtitle -->
          <div class="mb-[2vh] text-white text-[28px] font-black font-['Chiron_Hei_HK'] leading-10">
            黑客組
            <div
              class="info leading-[25px] text-slate-700 text-sm font-bold font-['Chiron_Hei_HK']"
            >
              每間企業獨立評選
            </div>
          </div>

          <div class="content">
            <!-- content -->
            <div class="flex text-white font-bold font-['Chiron_Hei_HK'] leading-10">
              第一名：新台幣 25,000 元整、企業實體獎品、實習或實習面試機會
            </div>
            <div class="flex text-white font-bold font-['Chiron_Hei_HK'] leading-10">
              第二名：新台幣 20,000 元整、企業實體獎品
            </div>
            <div class="flex flex-col text-white font-bold font-['Chiron_Hei_HK'] leading-10">
              第三名：新台幣 15,000 元整、企業實體獎品
              <!-- additional info-->
              <div class="leading-normal text-slate-700 text-sm font-bold font-['Chiron_Hei_HK']">
                *實習機會主要依據企業本身而定
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- maker -->
      <div
        class="maker target-area relative bg-gradient-to-br from-blue-100/50 to-blue-100/10 rounded-[30px] shadow-[0px_4px_25px_-5px_rgba(28,27,31,1.00)] border border-blue-100/40"
        @mouseenter="showCursor = true"
        @mouseleave="showCursor = false"
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
            class="absolute star1-anim right-[83%]"
          />
        </div>

        <div class="ml-[3vw] mt-[3vh] mr-[2vh] mb-[2vh]">
          <!-- subtitle -->
          <div class="mb-[2vh] text-white text-[28px] font-black font-['Chiron_Hei_HK'] leading-10">
            創客交流組
          </div>

          <!-- content -->
          <div
            class="content2 flex text-white font-bold font-['Chiron_Hei_HK'] leading-10 justify-between"
          >
            <!-- justify between 各自對齊左右側的排版
                    <div class="flex justify-between">
                        <div class="text-[17px]">第一名：新台幣 50,000 元整</div>
                        <div class="text-[17px]">創意獎一：新台幣 12,000 元整</div>
                    </div>
                    <div class="flex justify-between">
                        <div class="text-[17px]">第二名：新台幣 40,000 元整</div>
                        <div class="text-[17px]">創意獎二：新台幣 10,000 元整</div>
                    </div>
                    <div class="flex justify-between">
                        <div class="text-[17px]">第三名：新台幣 30,000 元整</div>
                        <div class="text-[17px]">創意獎三：新台幣 8,000 元整</div>
                    </div> -->

            <!-- 左邊欄 -->
            <div class="flex flex-col w-4.5/10">
              <div>第一名：新台幣 50,000 元整</div>
              <div>第二名：新台幣 40,000 元整</div>
              <div>第三名：新台幣 30,000 元整</div>
            </div>

            <!-- 右邊欄 -->
            <div class="flex flex-col w-5.5/10">
              <div>創意獎一：新台幣 12,000 元整</div>
              <div>創意獎二：新台幣 10,000 元整</div>
              <div>創意獎三：新台幣 8,000 元整</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Meichu big prize -->

      <div
        class="MH relative bg-gradient-to-b from-blue-100/50 to-blue-100/10 rounded-[30px] shadow-[0px_4px_25px_-5px_rgba(28,27,31,1.00)] border border-blue-100/40"
        @mouseenter="showCursor = true"
        @mouseleave="showCursor = false"
      >
        <div>
          <img
            src="../../assets/Home/Vector_red.svg"
            alt="vector_red"
            class="absolute left-[80%] top-[10%] w-[40vw]"
          />
          <img
            src="../../assets/Home/Vector_blue.svg"
            alt="vector_blue"
            class="absolute left-[120%] top-[10%] w-[40vw]"
          />
          <img
            src="../../assets/Home/curve.svg"
            alt="curve"
            class="absolute top-[5%] left-[85%] w-[33vw] -rotate-10 brightness-105 pointer-events-none"
          />
        </div>

        <div class="ml-[3vw] mt-[3vh] mr-[2vh]">
          <!-- subtitle -->
          <div class="mb-[2vh] text-white text-[28px] font-black font-['Chiron_Hei_HK'] leading-10">
            梅竹大獎

            <div class="info leading-5 text-slate-700 text-sm font-bold font-['Chiron_Hei_HK']">
              為黑客組複賽，由各間企業之第一名獲獎組別共同角逐
            </div>
          </div>

          <div class="content">
            <!-- content -->
            <div class="flex text-white font-bold font-['Chiron_Hei_HK'] leading-10">
              第一名：新台幣 30,000 元整
            </div>
            <div class="flex text-white font-bold font-['Chiron_Hei_HK'] leading-10">
              第二名：新台幣 16,000 元整
            </div>
            <div class="flex text-white font-bold font-['Chiron_Hei_HK'] leading-10">
              第三名：新台幣 8,000 元整
            </div>
            <div class="flex text-white font-bold font-['Chiron_Hei_HK'] leading-10">
              最佳人氣獎：新台幣 3,000 元整
            </div>
          </div>
        </div>
      </div>

      <!-- signup button -->
      <!-- 記得調 button 的 z-index 才可以不被 img 蓋住 ! -->
      <!-- <button
        class="mx-auto z-8 sign-up-button mb-[8vh] mt-[10vh] cursor-pointer"
        @click="showOptions = true"
      ></button> -->

      <div class="h-[45vh]">
        <div
          class="relative flex justify-center items-center sign-up opacity-[0.8] mb-[8vh] mt-[22vh] cursor-pointer mx-auto w-[21.5vw] h-[10.5vh] relative z-8 bg-slate-400/20 rounded-[20px] shadow-[0px_4px_20px_-1px_rgba(28,27,31,0.60)] outline outline-1 outline-offset-[-1px] outline-blue-100/80 overflow-hidden"
          @click="showOptions = true"
        >
          <div class="z-2 flex font-black text-[#F4F5F5] font-['Chiron_Hei_HK']">點我報名</div>
          <img class="btn2 absolute z-1" src="../../assets/Home/btn2.svg" alt="btn2" />
          <img class="btn1 absolute z-1" src="../../assets/Home/btn1.svg" alt="btn1" />
        </div>
      </div>

      <!-- hover => w-[25vw] h-[12vh] -->

      <SignUpGroup v-if="showOptions" @close="showOptions = false"> </SignUpGroup>
    </div>
  </div>

  <!-- layout for phone < 768px -->
  <div class="block md:hidden bg-[white] flex flex-col w-full overflow-hidden">
    <!-- <h1>手機板排版</h1> -->
    <div
      class="w-[90vw] text-[20px] mx-auto text-center text-[#2D3E63] mt-[5vh] mb-[7vh] text-slate-700 text-base font-bold font-['Chiron_Hei_HK']"
    >
      獎項資訊
    </div>

    <!-- Card : 獎項 -->
    <div class="w-[80vw] relative mx-auto select-none">
      <!-- tab ! -->
      <div class="flex flex-row tab-list justify-start">
        <!-- tab 黑客組 -->
        <div
          :class="[
            activeTab === '黑客組' ? 'bg-[#db8396] active' : 'bg-[#F4DAE1] inactive',
            'target-area tab w-[15vw] pt-[1vh]',
          ]"
          @click="activeTab = '黑客組'"
        >
          黑客組
        </div>

        <!-- tab 創客交流組 -->
        <div
          :class="[
            activeTab === '創客組' ? 'bg-[#db8396] active' : 'bg-[#F4DAE1] inactive',
            'target-area tab w-[20vw] pt-[1vh]',
          ]"
          @click="activeTab = '創客組'"
        >
          創客交流組
        </div>
        <!-- tab 梅竹大獎 -->
        <div
          :class="[
            activeTab === '梅竹' ? 'bg-[#db8396] active' : 'bg-[#F4DAE1] inactive',
            'target-area tab w-[16vw] pt-[1vh]',
          ]"
          @click="activeTab = '梅竹'"
        >
          梅竹大獎
        </div>
      </div>

      <!-- 卡片背景 -->
      <!-- left-[7vw] 差不多在中間左右 !-->
      <!-- 要使用 mt 才可以撐開距離 !! 如果只使用 top 的話只是離父容器 top 多少，但超過的部分部會有撐開的功能 ! -->
      <!-- 為了讓切換 tag 的時候大小不變 => 設 vh -->
      <div
        class="w-[65vw] mx-auto relative bg-neutral-100 rounded-tr-2xl rounded-bl-2xl rounded-br-2xl"
      >
        <!-- content -->
        <div class="">
          <!-- 內容區 -->
          <div v-if="activeTab === '黑客組'" class="card relative flex flex-col">
            <div class="info leading-[10px]">每間企業獨立評選</div>
            <div class="content text-[#656565] flex flex-col font-bold font-[Chiron_Hei_HK]">
              <div>第一名：新台幣 25,000 元、企業實體獎品、實習或實習面試機會</div>
              <div>第二名：新台幣 20,000 元整、企業實體獎品</div>
              <div>第三名：新台幣 15,000 元整、企業實體獎品</div>
            </div>
            <div class="info leading-[10px]">*實習機會主要依據企業本身而定</div>
          </div>

          <div v-if="activeTab === '創客組'" class="card space-y-[1.5vh] relative flex flex-col">
            <div class="content-maker text-[#656565] flex flex-col font-bold font-[Chiron_Hei_HK]">
              <div>第一名：新台幣 50,000 元整</div>
              <div>第二名：新台幣 40,000 元整</div>
              <div>第三名：新台幣 30,000 元整</div>
            </div>

            <div class="content-maker text-[#656565] flex flex-col font-bold font-[Chiron_Hei_HK]">
              <div>創意獎一：新台幣 12,000 元整</div>
              <div>創意獎二：新台幣 10,000 元整</div>
              <div>創意獎三：新台幣 8,000 元整</div>
            </div>

            <div></div>
          </div>

          <div v-if="activeTab === '梅竹'" class="card relative">
            <div class="info">為黑客組決賽，由各間企業之第一名獲獎組別共同角逐</div>
            <div class="content text-[#656565] flex flex-col font-bold font-[Chiron_Hei_HK]">
              <div>第一名：新台幣 30,000 元整</div>
              <div>第二名：新台幣 16,000 元整</div>
              <div>第三名：新台幣 8,000 元整</div>
              <div>最佳人氣獎：新台幣 3,000 元整</div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="../../assets/Home/curve_dark.svg"
        alt="curve_dark"
        class="swinging absolute scale-[1.5] left-[70%] top-[60%]"
      />
    </div>

    <div class="mb-[20vh]"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import SignUpGroup from './SignUpGroup.vue'

defineOptions({
  name: 'PrizeSection',
})

const showOptions = ref(false)
const activeTab = ref('黑客組')

defineExpose({
  showOptions,
})

watch(showOptions, (val) => {
  document.body.style.overflow = val ? 'hidden' : ''
})

// function closeMenu() {
//   showOptions.value = false
//   console.log('close menu\n')
// }

// function handleClick() {
//   console.log('click button');
// }

// function selectOption(option, id) {
//   alert(`你選擇了：${option} id=${id}`)

//   closeMenu()
// }

const showCursor = ref(false)

// light cursor
onMounted(() => {
  const glow = document.getElementById('light-cursor3')
  const area = document.getElementById('target-areas3')

  glow.style.display = 'none'

  area.addEventListener('mousemove', (e) => {
    // console.log(showCursor.value)
    if (!showCursor.value) {
      glow.style.display = 'none' // 選單開啟不顯示光標
      return
    }

    glow.style.display = 'block'
    const rect = area.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    glow.style.left = `${x}px`
    glow.style.display = 'block'

    glow.style.top = `${y}px`
  })

  area.addEventListener('mouseleave', () => {
    glow.style.display = 'none'
  })
})

onUnmounted(() => {
  // 離開頁面的時候自動恢復 y 軸滾輪 !
  document.body.style.overflow = ''
})
</script>

<style scoped>
.title {
  width: 90vw;
  /* font-size: 32px; */
  font-size: clamp(30px, 2.3vw, 36px);
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
  z-index: 2;
}

.MH {
  /* border: 3px solid pink; */
  width: 37vw;
  margin-top: 5vh;
  margin-left: 15vw;
  padding: 3vh 2vh;
  z-index: 2;
}
.title,
.subtitle,
.content {
  position: relative;
  z-index: 8; /* 確保一定在 light-cursor 上方 */
}

.content {
  /* margin-left: 1vw; */
  margin-right: 2vw;
  /* margin-top: 1vh; */
  margin-bottom: 1vh;
  font-size: clamp(16px, 1.8vw, 22px);
  text-align: justify;
  /* border: 3px solid blue; */
}

.content2 {
  /* margin-left: 1vw; */
  margin-right: 1vw;
  /* margin-top: 1vh; */
  margin-bottom: 1vh;
  font-size: clamp(16px, 1.8vw, 20px);
  text-align: justify;
  /* border: 3px solid blue; */
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

.sign-up-button {
  padding-top: 15vh;
  width: 25vw;

  background-image: url('../../assets/Home/signupButton.svg');
  background-size: contain; /* 保持圖片完整顯示 */
  background-repeat: no-repeat;
  background-position: center;
}

.sign-up-button:hover {
  background-image: url('../../assets/Home/signupButton-hover.svg');
}

.sign-up {
  font-size: 2vw;
  /* transition: 0.3s ease-in-out; */
  /* transition-property: transform, color, background-color; */
  transition-duration: 0.4s, 0.3s, 0.3s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1), ease, ease;
}

.sign-up:hover {
  opacity: 1;
  /* <!-- hover => w-[25vw] h-[12vh] --> */
  width: 25vw;
  height: 12vh;
  font-size: 2.5vw;
  border: 3px solid rgba(191, 219, 254, 0.8);
}

.btn1 {
  opacity: 0;
  /* transition: 0.3s ease-in-out; */
  /* animation-play-state: paused; */
  /* animation: none; */
}

.btn2 {
  opacity: 0;
  /* transition: 0.3s ease-in-out; */
  /* animation-play-state: paused;
  animation: none; */
}

.sign-up:hover .btn1 {
  /* 一定要先調回 1 才可以被觸發動畫 !!!!!! */
  opacity: 1;
  animation: showbg1 4s infinite;
  animation-fill-mode: forwards;
}

.sign-up:hover .btn2 {
  /* 一定要先調回 1 才可以被觸發動畫 !!!!!! */
  opacity: 1;
  animation: showbg2 4s infinite;
  /* animation-delay: 2s; */
  animation-fill-mode: forwards;
}

@keyframes moveRight {
  0% {
    transform: translateX(0px);
    /* transform: scale(1.2); */
  }
  50% {
    transform: translateX(15px); /* 可調整位移距離 */
  }
  100% {
    transform: translateX(0);
  }
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

.option {
  /* width: 400px;
  height: 100px; */
  border: 3px solid #d9d9d9;
  width: 32vw;
  height: 20vh;
  /* background-image: url('../../assets/Home/Frame-29.svg');
  background-repeat: no-repeat;
  background-position:20% 50%;
  transition: ease-in-out;
  cursor: pointer; */
}

.text-shadow {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  /* fix : 這裡調成 none 才不會因為這不適 background 所以 hover 沒反應 !!!!!!!(可以流暢的一職轉換顏色 !) */
  pointer-events: none;
}

.target-area {
  /* border: 3px solid red; */
  z-index: 2;
}

.container {
  border: red solid 3px;
}

#light-cursor3 {
  position: absolute;
  pointer-events: none; /* 不阻擋滑鼠事件，避免影響點擊 */
  z-index: 0;
  /* z-index: 9999; */
  width: 16vw;
  height: 15vw;
  user-select: none; /* 禁止選取圖片 */
  border-radius: 50%;
  transform-origin: 100% 50%;
  transform: translate(-60%, -50%);
  filter: blur(60px);
  /* box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.5); */
  /* mix-blend-mode: screen; */
}

/* for phone */

@media (max-width: 768px) {
  .title {
    width: 90vw;
    font-size: 20px;
    /* font-size: clamp(20px, 2.3vw, 20px); */
  }

  .active {
    font-size: clamp(12px, 1vw, 14px);
    /* font-size: 16px; */
  }

  .inactive {
    font-size: clamp(10px, 0.8vw, 12px);
    /* font-size: 14px; */
  }

  .tab {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    min-height: 5vh;
    max-height: 7vh;
    /* height:7vh; */
    /* padding: 1.5rem 1rem; */
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 900;
    font-family: 'Chiron Hei HK', sans-serif;
    border: 1.5px solid #f4f5f5;
  }

  .tab-list {
    margin-left: 7.5vw;
  }

  .content {
    margin-left: 20px;
    margin-right: 20px;
    /* margin-top: 1vh; */
    /* margin-bottom: ; */
    font-size: 12px;
    text-align: justify;
    /* border: 3px solid blue; */
  }

  .content-maker {
    margin-left: 20px;
    margin-right: 20px;
    /* margin-top: 2vh; */
    /* margin-bottom:2vh ; */
    font-size: 12px;
    text-align: justify;
    /* border: 3px solid blue; */
  }

  .info {
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 1.3vh;
    margin-bottom: 1.5vh;
    font-size: 10px;
    font-weight: 500;
    color: #a2a2a2;
    font-family: 'Chiron Hei HK', sans-serif;
  }

  .card {
    justify-content: center;
    display: flex;
    /* items-stretch */
    align-items: stretch;
    /* align-items: center; */
    /* height: 34vh; */
    min-height: 30vh;
    padding: 1.5rem 1rem;
    /* aspect-ratio: 16 / 7; */
    /* border: 3px solid pink; */
    flex-direction: column;
  }

  .swinging {
    animation: swing 4s ease-in-out infinite;
    /* transform-origin: top center; 以上方中心為旋轉點 */
  }
}

@keyframes swing {
  0% {
    transform: rotate(-10deg);
  }
  50% {
    transform: rotate(10deg);
  }
  /* 75% {
    transform: rotate(-10deg);
  } */
  100% {
    transform: rotate(-10deg);
  }
}
</style>
