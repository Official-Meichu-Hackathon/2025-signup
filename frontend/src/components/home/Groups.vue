<!-- Group Section : Apple -->

<template>
  <!-- layout for computer -->
  <div class="hidden md:block relative w-full min-h-screen overflow-hidden bg-[#2D3E63]">
    <img src="../../assets/Home/cursor.svg" alt="light-cursor" id="light-cursor" />
    <div class="min-h-[calc(100vh-56px)] bg-[#2D3E63] flex flex-col w-full" id="target-areas">
      <!-- <div class="text-3xl font-bold text-center text-[#F4F5F5]">Workshop</div> -->

      <div
        class="mx-auto title mb-[10vh] mt-[10vh] text-center text-white font-black font-['Chiron_Hei_HK']"
      >
        組別介紹、工作坊
      </div>

      <!-- Card1 : 黑客組 -->
      <div class="w-[80vw] relative mx-auto select-none">
        <!-- tab ! -->

        <div class="tab-list flex flex-row">
          <!-- tab 黑客組 -->
          <div
            :class="[
              activeTab === '黑客組' ? 'bg-[#db8396] active' : 'bg-[#F4DAE1] inactive',
              'target-area tab pt-[1vh] w-[12vw]',
            ]"
            @click="activeTab = '黑客組'"
            @mouseenter="showCursor = true"
            @mouseleave="showCursor = false"
          >
            黑客組
          </div>

          <!-- tab 工作坊 -->
          <div
            :class="[
              activeTab === '工作坊' ? 'bg-[#db8396] active' : 'bg-[#F4DAE1] inactive',
              'target-area tab pt-[1vh] w-[12vw]',
            ]"
            @click="activeTab = '工作坊'"
            @mouseenter="showCursor = true"
            @mouseleave="showCursor = false"
          >
            工作坊
          </div>
        </div>
        <!-- 卡片背景 -->
        <!-- left-[7vw] 差不多在中間左右 !-->
        <!-- 要使用 mt 才可以撐開距離 !! 如果只使用 top 的話只是離父容器 top 多少，但超過的部分部會有撐開的功能 ! -->
        <!-- 為了讓切換 tag 的時候大小不變 => 設 vh -->
        <div
          class="target-area w-[63vw] h-[42vh] ml-[7vw] bg-card relative bg-neutral-100 rounded-tr-2xl rounded-bl-2xl rounded-br-2xl justify-center items-center"
          @mouseenter="showCursor = true"
          @mouseleave="showCursor = false"
        >
          <!-- content -->
          <div class="justify-center h-[42vh] items-center flex flex-row">
            <!-- 內容區 -->
            <div v-if="activeTab === '黑客組'" class="card">
              <div class="content w-[27vw] h-[30vh] bg-zinc-300 rounded-[30px]"></div>

              <div
                class="content w-[26vw] text-[#656565] flex items-center justify-center font-bold font-[Chiron_Hei_HK]"
              >
                <!-- 字置中 ! -->
                致力於搭起學界與業界之間的橋樑，參賽者將運用企業資源並發揮創意回應企業命題，讓想像力與實作並存！2025
                年梅竹黑客松將由以下六家企業作為引導單位：CloudMosa、恩智浦半導體、台積電、羅技、Google、AMD。
              </div>
            </div>

            <div v-else class="card">
              <div
                class="content mx-auto w-[27vw] text-[#656565] flex items-center justify-center font-bold font-[Chiron_Hei_HK]"
              >
                每間合作企業皆會舉辦工作坊，透過工作坊，
                參賽者將領取到企業所提供的硬體設備或軟體資源，並且由企業之技術人員親自教學，
                簡易的指導參賽者如何使用相關技術或資源。舉辦地點與時間將依不同企業而定，
                點擊右側箭頭查看詳細內容。
              </div>

              <!-- info -->
              <div
                class="content w-[25vw] h-[29vh] flex flex-col items-center justify-center font-bold font-[Chiron_Hei_HK]"
                @click="openDoc"
              >
                <img src="../../assets/Home/double_arrow.svg" alt="arrow" class="cursor-pointer" />
                <div class="text-center text-[#B4B4B4] text-xs font-bold font-[Chiron_Hei_HK]">
                  詳細文件參考
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- deco img => absolute to Card1 -->
      <img
        src="../../assets/Home/star-06-1.svg"
        alt="star06-1"
        class="absolute right-[6%] scale-[0.8]"
      />
      <img
        src="../../assets/Home/star-07-2.svg"
        alt="star07-2"
        class="absolute right-[15%] top-[13%] scale-[0.8]"
      />
      <div class="mt-[8vh]"></div>

      <!-- Card 2 : 創客組 -->
      <div class="w-[80vw] relative mx-auto select-none">
        <!-- tab ! -->
        <!-- tab 創客組 -->
        <div
          :class="[
            activeTab2 === '創客組' ? 'bg-[#db8396] active' : 'bg-[#F4DAE1] inactive',
            'tab target-area pt-[1vh] left-[55vw] w-[15vw] h-[9vh] absolute rounded-tl-[30px] rounded-tr-[30px] cursor-pointer flex items-center justify-center text-white font-black font-[\'Chiron_Hei_HK\']',
          ]"
          @click="activeTab2 = '創客組'"
          @mouseenter="showCursor = true"
          @mouseleave="showCursor = false"
        >
          創客交流組
        </div>

        <!-- tab 工作坊 -->
        <div
          :class="[
            activeTab2 === '工作坊'
              ? 'bg-[#db8396] left-[7vw] active'
              : 'bg-[#F4DAE1] left-[7vw] inactive',
            'target-area tab pt-[1vh] left-[43vw] w-[12vw] h-[9vh] absolute',
          ]"
          @click="activeTab2 = '工作坊'"
          @mouseenter="showCursor = true"
          @mouseleave="showCursor = false"
        >
          工作坊
        </div>

        <!-- 卡片背景 -->
        <!-- left-[7vw] 差不多在中間左右 !-->
        <!-- 要使用 mt 才可以撐開距離 !! 如果只使用 top 的話只是離父容器 top 多少，但超過的部分部會有撐開的功能 ! -->
        <!-- 為了讓切換 tag 的時候大小不變 => 設 vh -->
        <div
          class="target-area w-[63vw] h-[42vh] mt-[9vh] ml-[7vw] bg-card relative bg-neutral-100 rounded-tl-2xl rounded-bl-2xl rounded-br-2xl"
          @mouseenter="showCursor = true"
          @mouseleave="showCursor = false"
        >
          <!-- content -->
          <div class="justify-center h-[42vh] items-center flex flex-row">
            <!-- 內容區 -->
            <div v-if="activeTab2 === '創客組'" class="card">
              <div class="content w-[27vw] h-[32vh] bg-zinc-300 rounded-[30px]"></div>

              <div
                class="content w-[26vw] text-[#656565] flex items-center justify-center font-bold font-[Chiron_Hei_HK]"
              >
                <!-- 字置中 ! -->
                由新竹市政府命題，鼓勵參賽者運用
                AI、大數據、物聯網等科技，針對市政服務提出創新解方，
                從智慧交通、公共安全到環境監測，打造更即時、便利、貼近市民需求的智慧應用，共創友善高效的未來城市。
              </div>
            </div>

            <div v-else class="card">
              <div
                class="content mx-auto w-[27vw] text-[#656565] flex items-center justify-center font-bold font-[Chiron_Hei_HK]"
              >
                由市府團隊主辦，工作坊將包含技術教學、題目講解等內容，並包含參賽團隊選題之流程。
                過程中參賽者將與講師討論應用技術，共同激盪出更多的靈感與創意。
                點擊右側箭頭查看詳細內容。
              </div>

              <!-- info -->
              <div
                class="content w-[25vw] h-[29vh] flex flex-col items-center justify-center font-bold font-[Chiron_Hei_HK]"
                @click="openDoc2"
              >
                <img src="../../assets/Home/double_arrow.svg" alt="arrow" class="cursor-pointer" />
                <div class="text-center text-[#B4B4B4] text-xs font-bold font-[Chiron_Hei_HK]">
                  詳細文件參考
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mb-[10vh] w-[20vw] h-[20vh]">
        <img
          src="../../assets/Home/star-07-1.svg"
          alt="start07-1"
          class="z-3 scale-[0.7] absolute pointer-events-none bottom-[6%] left-[3%]"
        />
        <!--@mouseenter="showCursor = true"
          @mouseleave="showCursor = false" -->
        <!-- 改用 pointer-event-none 來正確 hover 到 target-area 上 -->
      </div>
    </div>
  </div>

  <!-- layout for phone -->
  <div class="block md:hidden relative w-full bg-[white] flex flex-col w-full overflow-hidden">
    <!-- <h1>手機板排版</h1> -->
    <div
      class="relative w-[90vw] text-[20px] mx-auto text-center text-[#2D3E63] mt-[5vh] mb-[5vh] text-slate-700 text-base font-bold font-['Chiron_Hei_HK']"
    >
      組別介紹、工作坊
      <img
        src="../../assets/Home/6star-14-5.svg"
        alt="6star-14-5"
        class="w-[13vw] absolute left-[65%] top-[4%] border-none"
      />
      <img
        src="../../assets/Home/6star-14-6.svg"
        alt="6star-14-6"
        class="w-[5vw] absolute left-[75%] top-[4%] border-none"
      />
    </div>

    <!-- Card 組別介紹 -->
    <div class="w-[80vw] relative mx-auto min-h-screen select-none">
      <!-- tab ! -->
      <div class="tab-list flex flex-row">
        <!-- tab 黑客組 -->
        <div
          :class="[
            activeTabPhone === '黑客組' ? 'bg-[#db8396] active' : 'bg-[#F4DAE1] inactive',
            'target-area tab left-[7.5vw] w-[15vw] pt-[1vh]',
          ]"
          @click="activeTabPhone = '黑客組'"
        >
          黑客組
        </div>

        <!-- tab 創客交流組 -->
        <div
          :class="[
            activeTabPhone === '創客組' ? 'bg-[#db8396] active' : 'bg-[#F4DAE1] inactive',
            'target-area tab w-[20vw] pt-[1vh] left-[22.5vw]',
          ]"
          @click="activeTabPhone = '創客組'"
        >
          創客交流組
        </div>
      </div>

      <!-- 卡片背景 -->
      <!-- left-[7vw] 差不多在中間左右 !-->
      <!-- 要使用 mt 才可以撐開距離 !! 如果只使用 top 的話只是離父容器 top 多少，但超過的部分部會有撐開的功能 ! -->
      <!-- 為了讓切換 tag 的時候大小不變 => 設 vh -->
      <div
        class="w-[65vw] mx-auto relative bg-neutral-100 rounded-tr-2xl rounded-bl-2xl rounded-br-2xl"
      >
        <img
          src="../../assets/Home/people1.svg"
          alt="people1"
          class="swinging absolute z-2 w-[30vw] left-[-5%] top-[86%]"
        />
        <!-- content -->
        <div class="pt-[3vh] pb-[3vh] pl-[3vw] pr-[3vw] relative">
          <!-- 內容區 -->
          <div v-if="activeTabPhone === '黑客組'" class="relative flex flex-col space-y-[1.5vh]">
            <div class="mx-auto w-[52vw] h-[25vh] bg-zinc-300 rounded-2xl"></div>

            <div class="">
              <div class="content text-[#656565] flex flex-col font-bold font-[Chiron_Hei_HK]">
                致力於搭起學界與業界之間的橋樑，參賽者將運用企業資源並發揮創意回應企業命題，讓想像力與實作並存！
                2025
                年梅竹黑客松將由以下六家企業作為引導單位：CloudMosa、恩智浦半導體、台積電、羅技、Google、AMD。
              </div>
              <div class="content text-[#656565] flex flex-col font-bold font-[Chiron_Hei_HK]">
                每間合作企業皆會舉辦工作坊，透過工作坊，參賽者將領取到企業所提供的硬體設備或軟體資源，
                並且由企業之技術人員親自教學，簡易的指導參賽者如何使用相關技術或資源。舉辦地點與時間將依不同企業而定。
              </div>
            </div>
          </div>

          <div v-if="activeTabPhone === '創客組'" class="space-y-[1.5vh] relative flex flex-col">
            <div class="mx-auto w-[52vw] h-[25vh] bg-zinc-300 rounded-2xl"></div>

            <div class="">
              <div class="content text-[#656565] flex flex-col font-bold font-[Chiron_Hei_HK]">
                由新竹市政府命題，融入新竹居民的民生交通情境，鼓勵參賽者跨領域，運用共享、共創的資源，實際動手解決問題。
                過程中將促進各方人才創作交流，激發新穎想法並提升日常生活的用戶體驗，打造數位科技的創客精神！
              </div>
              <div class="content text-[#656565] flex flex-col font-bold font-[Chiron_Hei_HK]">
                由市府團隊主辦，工作坊將包含技術教學、題目講解等內容，並包含參賽團隊選題之流程。
                過程中參賽者將與講師討論應用技術，共同激盪出更多的靈感與創意。
              </div>
            </div>
          </div>

          <!-- <div class="workshop-btn mx-auto"></div> -->
          <div class="mt-[2vh] items-stretch">
            <img
              ref="workshopBtn"
              :src="frames[0]"
              class="mx-auto cursor-pointer"
              @click="handleClick"
            />
          </div>
        </div>
      </div>

      <div class="mb-[5vh]"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onUnmounted, onMounted } from 'vue'

defineOptions({
  name: 'GroupSection',
})
const activeTab = ref('黑客組')
const activeTab2 = ref('創客組')
const activeTabPhone = ref('黑客組')
const showCursor = ref(false)

function openDoc() {
  // console.log('open doc')
}

function openDoc2() {
  // console.log('open doc2')
}

function handleClick() {
  // console.log('click info button')
}

// light cursor
onMounted(() => {
  const glow = document.getElementById('light-cursor')
  const area = document.getElementById('target-areas')

  glow.style.display = 'none'

  area.addEventListener('mousemove', (e) => {
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

const frames = [
  new URL('../../assets/Home/workshop-btn-anim/workshop-btn1.svg', import.meta.url).href,
  new URL('../../assets/Home/workshop-btn-anim/workshop-btn2.svg', import.meta.url).href,
  new URL('../../assets/Home/workshop-btn-anim/workshop-btn3.svg', import.meta.url).href,
  new URL('../../assets/Home/workshop-btn-anim/workshop-btn4.svg', import.meta.url).href,
]
const delays = [200, 180, 190, 175] // 每張圖的停留時間

const workshopBtn = ref(null)
let index = 0

onMounted(() => {
  function playFrame() {
    if (!workshopBtn.value) return

    workshopBtn.value.src = frames[index]

    const delay = delays[index]
    index = (index + 1) % frames.length

    setTimeout(playFrame, delay)
  }

  playFrame() // 啟動動畫
})
</script>

<style scoped>
.title {
  width: 90vw;
  font-size: clamp(30px, 2.3vw, 36px);
  /* font-size: 32px; */
}

.active {
  font-size: clamp(20px, 1.6vw, 26px);
  /* font-size: 24px; */
}

.inactive {
  font-size: clamp(16px, 1.4vw, 22px);
  /* font-size: 20px; */
}

.tab-list {
  margin-left: 7vw;
  height: 9vh;
  /* border: 3px solid red; */
  /* min-height: 7vh; */
}

.tab {
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  /* aspect-ratio: 16 / 7; */
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 900;
  font-family: 'Chiron Hei HK', sans-serif;
}

.container {
  border: red solid 3px;
}

.content {
  margin-left: 1vw;
  margin-right: 1vw;
  margin-top: 1vh;
  margin-bottom: 1vh;
  font-size: clamp(16px, 1.8vw, 22.5px);
  text-align: justify;
  /* border: 3px solid blue; */
}

.card {
  justify-content: center;
  display: flex;
  align-items: center;
  /* padding: 1.5rem 1rem; */
  /* border: 3px solid pink; */
  /* flex-direction: column; */
}

.bg-card {
  /* padding: 1.5rem 1rem; */
}

.target-area {
  /* border: 3px solid red; */
  z-index: 2;
}

#light-cursor {
  position: absolute;
  pointer-events: none; /* 不阻擋滑鼠事件，避免影響點擊 */
  z-index: 1;
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
    font-size: 20px;
    font-weight: 900;
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
    /* height: 7vh; */
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
    /* height:; */
    max-height: 5vh;
    padding-left: 0.5vw;
  }

  .content {
    width: 52vw;
    margin-left: 3vw;
    margin-right: 3vw;
    /* margin-top: 1vh; */
    /* margin-bottom:; */
    font-size: 12px;
    text-align: justify;
    /* border: 3px solid blue; */
  }

  .info {
    margin-left: 3vw;
    margin-right: 3vw;
    margin-top: 1.5vh;
    margin-bottom: 1.8vh;
    font-size: 13px;
    font-weight: 500;
    color: #a2a2a2;
    font-family: 'Chiron Hei HK', sans-serif;
  }

  .card {
    justify-content: center;
    display: flex;
    /* align-items: center; */
    height: 50vh;
    /* min-height: 58vh; */
    border: 3px solid pink;
    flex-direction: column;
  }

  .swinging {
    animation: swing 4s ease-in-out infinite;
  }
}
.workshop-btn {
  justify-content: center;
  display: flex;
  align-items: center;
  width: 45vw;
  height: 5vh;
  /* background-color:red; */
  background-image: url('../../assets/Home/workshop-btn-anim/workshop-btn1.svg');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  animation: lineFlow 1.5s infinite steps(4);
}

@keyframes swing {
  0% {
    transform: rotate(-20deg);
  }
  50% {
    transform: rotate(10deg);
  }
  /* 75% {
    transform: rotate(-10deg);
  } */
  100% {
    transform: rotate(-20deg);
  }
}

@keyframes lineFlow {
  0% {
    background-image: url('../../assets/Home/workshop-btn-anim/workshop-btn1.svg');
  }
  20% {
    background-image: url('../../assets/Home/workshop-btn-anim/workshop-btn2.svg');
  }
  45% {
    background-image: url('../../assets/Home/workshop-btn-anim/workshop-btn3.svg');
  }
  70% {
    background-image: url('../../assets/Home/workshop-btn-anim/workshop-btn4.svg');
  }
  100% {
    background-image: url('../../assets/Home/workshop-btn-anim/workshop-btn1.svg');
  }
}
</style>
