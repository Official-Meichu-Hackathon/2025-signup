<template>
  <div class="relative w-full min-h-screen overflow-hidden bg-[#2D3E63]">
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
        <!-- tab 黑客組 -->
        <div
          :class="[
            activeTab === '黑客組'
              ? 'bg-[#db8396] left-[7vw] active'
              : 'bg-[#F4DAE1] left-[7vw] inactive',
            'target-area tab pt-[1vh] w-[12vw] h-[9vh] absolute',
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
            'target-area tab pt-[1vh] left-[19vw] w-[12vw] h-[9vh] absolute ',
          ]"
          @click="activeTab = '工作坊'"
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
          class="target-area w-[63vw] h-[42vh] mt-[9vh] ml-[7vw] relative bg-neutral-100 rounded-tr-2xl rounded-bl-2xl rounded-br-2xl justify-center items-center"
          @mouseenter="showCursor = true"
          @mouseleave="showCursor = false"
        >
          <!-- content -->
          <div class="justify-center h-[42vh] items-center flex flex-row">
            <!-- 內容區 -->
            <div v-if="activeTab === '黑客組'" class="card">
              <div class="content w-[27vw] h-[32vh] bg-zinc-300 rounded-[30px]"></div>

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
          class="target-area w-[63vw] h-[42vh] mt-[9vh] ml-[7vw] relative bg-neutral-100 rounded-tl-2xl rounded-bl-2xl rounded-br-2xl"
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
          class="z-3 scale-[0.7] absolute pointer-events-none bottom-[3%] left-[-1%]"
        />
        <!--@mouseenter="showCursor = true"
          @mouseleave="showCursor = false" -->
        <!-- 改用 pointer-event-none 來正確 hover 到 target-area 上 -->
      </div>
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
const showCursor = ref(false)

function openDoc() {
  console.log('open doc')
}

function openDoc2() {
  console.log('open doc2')
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
</script>

<style scoped>
.title {
  width: 90vw;
  /* font-size: clamp(30px, 2.3vw, 32px); */
  font-size: 32px;
}

.active {
  /* font-size: clamp(22px, 2vw, 28px); */
  font-size: 22px;
}

.inactive {
  /* font-size: clamp(20px, 2vw, 24px); */
  font-size: 18px;
}

.tab {
  padding: 5px 5px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
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
  font-size: 17px;
  text-align: justify;
  /* border: 3px solid blue; */
}

.card {
  justify-content: center;
  display: flex;
  align-items: center;
  height: 38vh;
  /* border: 3px solid pink; */
  /* flex-direction: column; */
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
</style>
