<!-- Rule Section : Apple -->

<template>
  <div id="rules"></div>
  <!-- layout for computer -->
  <div class="hidden md:block relative w-full min-h-screen overflow-hidden bg-[#2D3E63]">
    <img src="../../assets/Home/cursor.svg" alt="light-cursor" id="light-cursor2" />
    <div class="min-h-[calc(100vh-56px)] bg-[#2D3E63] flex flex-col w-full" id="target-areas2">
      <div
        class="mx-auto title mb-[10vh] mt-[8vh] text-center text-white font-black font-['Chiron_Hei_HK']"
      >
        比賽規則
      </div>

      <!-- Card : 比賽規則 -->
      <div class="w-[80vw] relative mx-auto select-none">
        <!-- tab ! -->

        <div class="tab-list flex flex-row items-end">
          <div
            :class="[
              activeTab === '黑客組'
                ? 'bg-[#db8396] left-[7vw] active'
                : 'bg-[#F4DAE1] left-[7vw] inactive',
              'target-area pt-[1vh] w-[12vw] tab cursor-pointer flex items-center justify-center text-white font-black font-[\'Chiron_Hei_HK\']',
            ]"
            @click="activeTab = '黑客組'"
            @mouseenter="showCursor = true"
            @mouseleave="showCursor = false"
          >
            黑客組
          </div>

          <!-- tab 創客 -->
          <div
            :class="[
              activeTab === '創客' ? 'bg-[#db8396] active' : 'bg-[#F4DAE1] inactive',
              'target-area pt-[1vh] left-[19vw] w-[16vw] tab cursor-pointer flex items-center justify-center text-white font-black font-[\'Chiron_Hei_HK\']',
            ]"
            @click="activeTab = '創客'"
            @mouseenter="showCursor = true"
            @mouseleave="showCursor = false"
          >
            創客交流組
          </div>
        </div>

        <!-- 卡片背景 -->
        <!-- left-[7vw] 差不多在中間左右 !-->
        <!-- 要使用 mt 才可以撐開距離 !! 如果只使用 top 的話只是離父容器 top 多少，但超過的部分部會有撐開的功能 ! -->
        <!-- 為了讓切換 tag 的時候大小不變 => 設 vh -->
        <div
          class="target-area w-[66vw] ml-[7vw] relative bg-neutral-100 rounded-tr-2xl rounded-bl-2xl rounded-br-2xl"
          @mouseenter="showCursor = true"
          @mouseleave="showCursor = false"
        >
          <!-- content -->
          <div class="pl-[5vw] pr-[5vw] pt-[8vh] pb-[8vh] flex justify-center">
            <!-- 內容區 -->
            <template v-if="activeTab === '黑客組'">
              <!-- twinkle deco -->
              <img
                src="../../assets/Home/twinkle-1.svg"
                alt="twinkle"
                class="twinkle absolute w-[20vw] left-[-12%] bottom-[-15%]"
              />
              <div
                class="justify-start text-justify text-left content w-[55vw] text-[#656565] text-[1.6vw] flex items-center justify-center font-bold font-[Chiron_Hei_HK]"
              >
                <ul class="list-disc space-y-[1.2vh] leading-[35px]">
                  <!-- 第一項 -->
                  <li>
                    分為初賽與決賽（梅竹大獎），且黑客組不允許採用影片
                    Demo，需以實際操作展現作品功能，否則不予計分。
                  </li>

                  <!-- 第二項 -->
                  <li>
                    初賽由六間合作企業各自評選，選出該企業所屬隊伍的前三名
                    <ul class="list-disc pl-[3vw]">
                      <li>
                        黑客組初賽前，參賽者需以組別為單位上傳簡報終稿、程式碼或其他作品連結；
                        並且於指定時間至各企業攤位進行設備測試。
                      </li>
                      <li>
                        初賽 Demo 時，黑客組 Demo 時間為 13 分鐘，包含 7 分鐘發表及 6 分鐘評審 QA。
                        工作人員將於發表 7 分鐘時響短鈴一次，表示發表結束進入 QA 環節。 QA 環節 12.5
                        分鐘響短鈴兩次，13 分鐘響長鈴，參賽者需要馬上停止回答，否則將斟酌扣分。
                      </li>
                    </ul>
                  </li>

                  <!-- 第三項 -->
                  <li>
                    初賽獲得第一名的六支隊伍將進入最終梅竹大獎的評選
                    <ul class="list-disc pl-[3vw]">
                      <li>梅竹大獎評選前，隊伍需於指定時間至主舞台旁進行設備測試。</li>

                      <li>
                        決賽 Demo 時，每組 15 分鐘，包括 8 分鐘的發表與 7 分鐘的評審 QA 時間， Demo
                        若未出席則順延一組，順延後仍未出席則取消資格； 6.5 分鐘時短鈴兩次，8
                        分鐘時長鈴一次，進入 QA 時間，15 分鐘時長鈴一次，
                        也會有大字海報提醒，此時麻煩評審停止提問，參賽者也不能夠繼續回答，Demo
                        結束。
                      </li>

                      <li>梅竹大獎前三名由評審決定；最佳人氣獎則由現場觀眾投票產生。</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </template>

            <template v-else>
              <img
                src="../../assets/Home/people1.svg"
                alt="people1"
                class="people1 absolute w-[30vw] left-[60%] top-[77%] pointer-events-none"
              />
              <img
                src="../../assets/Home/people2.svg"
                alt="people2"
                class="people2 absolute w-[30vw] left-[60%] top-[77%] pointer-events-none"
              />
              <div
                class="text-justify text-left content w-[55vw] text-[#656565] text-[1.6vw] flex items-center justify-center font-bold font-[Chiron_Hei_HK]"
              >
                <ul class="list-disc space-y-[1.2vh] leading-[35px]">
                  <!-- 第一項 -->
                  <li>
                    創客組僅有一次 Demo，創客組接受多元形式的 Demo 與作品，唯需於比賽 Demo
                    時讓評審實際操作作品。 <br />
                    （參考工具：figma、Miro、Webflow、Sketch）
                    <ul class="list-disc pl-[3vw] space-y-[1.2vh]">
                      <li>
                        創客組 Demo
                        前，參賽者需以組別為單位上傳簡報終稿、程式碼或其他作品連結；並且於指定時間至主舞台旁進行設備測試。
                      </li>

                      <li>
                        創客組 Demo 時，每組 13 分鐘，包括 8 分鐘發表與 5 分鐘評審 QA，
                        工作人員將於發表 7 分鐘時響短鈴兩次， 8 分鐘時響長鈴一次，
                        表示發表結束進入評審提問環節，提問採統問統答形式，評審全部提問結束後，
                        參賽者統一回答。QA 環節 5
                        分鐘響長鈴，響鈴後請即刻終止發言，如繼續發言將斟酌扣分。
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </template>
          </div>
        </div>
      </div>

      <div class="mt-[30vh]"></div>
    </div>
  </div>

  <!-- layout for phone -->
  <div class="block md:hidden relative w-full overflow-hidden bg-[white]">
    <div
      class="w-[90vw] text-[20px] mx-auto relative text-center text-[#2D3E63] mt-[5vh] mb-[5vh] text-slate-700 text-base font-bold font-['Chiron_Hei_HK']"
    >
      比賽規則
      <img
        src="../../assets/Home/Vector_pink.svg"
        alt="Vector_pink"
        class="z-2 absolute w-[40vw] vector_pink"
      />
      <img
        src="../../assets/Home/star-02-02-3.svg"
        alt="star-02-02-3"
        class="z-2 absolute star-move"
      />
    </div>

    <!-- Card 組別介紹 -->
    <div class="w-[80vw] relative mx-auto select-none">
      <!-- tab ! -->
      <div class="tab-list flex flex-row items-end">
        <!-- tab 黑客組 -->
        <div
          :class="[
            activeTabPhone === '黑客組' ? 'bg-[#5B74B0] active' : 'bg-[#D3E4FC] inactive',
            'target-area tab left-[7.5vw] w-[15vw] pt-[0.25vh]',
          ]"
          @click="activeTabPhone = '黑客組'"
        >
          黑客組
        </div>

        <!-- tab 創客交流組 -->
        <div
          :class="[
            activeTabPhone === '創客組' ? 'bg-[#5B74B0] active' : 'bg-[#D3E4FC] inactive',
            'target-area tab w-[20vw] pt-[0.25vh] left-[22.5vw]',
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
        <!-- content -->
        <div class="pt-[2vh] pb-[2vh] pl-[5vw] pr-[5vw] relative">
          <!-- 內容區 -->
          <div v-if="activeTabPhone === '黑客組'" class="relative flex flex-col">
            <div
              class="justify-start text-justify content w-[50vw] text-[#656565] flex items-center justify-center font-bold font-[Chiron_Hei_HK]"
            >
              <ul class="list-disc space-y-[1.2vh] leading-[18px]">
                <!-- 第一項 -->
                <li>
                  分為初賽與決賽（梅竹大獎），且黑客組不允許採用影片
                  Demo，需以實際操作展現作品功能，否則不予計分。
                </li>

                <!-- 第二項 -->
                <li>
                  初賽由六間合作企業各自評選，選出該企業所屬隊伍的前三名
                  <ul class="list-disc pl-[5vw]">
                    <li>
                      黑客組初賽前，參賽者需以組別為單位上傳簡報終稿、程式碼或其他作品連結；
                      並且於指定時間至各企業攤位進行設備測試。
                    </li>
                    <li>
                      初賽 Demo 時，黑客組 Demo 時間為 13 分鐘，包含 7 分鐘發表及 6 分鐘評審 QA。
                      工作人員將於發表 7 分鐘時響短鈴一次，表示發表結束進入 QA 環節。 QA 環節 12.5
                      分鐘響短鈴兩次，13 分鐘響長鈴，參賽者需要馬上停止回答，否則將斟酌扣分。
                    </li>
                  </ul>
                </li>

                <!-- 第三項 -->
                <li>
                  初賽獲得第一名的六支隊伍將進入最終梅竹大獎的評選
                  <ul class="list-disc pl-[3vw]">
                    <li>梅竹大獎評選前，隊伍需於指定時間至主舞台旁進行設備測試。</li>

                    <li>
                      決賽 Demo 時，每組 15 分鐘，包括 8 分鐘的發表與 7 分鐘的評審 QA 時間， Demo
                      若未出席則順延一組，順延後仍未出席則取消資格； 6.5 分鐘時短鈴兩次，8
                      分鐘時長鈴一次，進入 QA 時間，15 分鐘時長鈴一次，
                      也會有大字海報提醒，此時麻煩評審停止提問，參賽者也不能夠繼續回答，Demo 結束。
                    </li>

                    <li>梅竹大獎前三名由評審決定；最佳人氣獎則由現場觀眾投票產生。</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div v-if="activeTabPhone === '創客組'" class="relative flex flex-col">
            <div
              class="text-justify content w-[50vw] text-[#656565] flex items-center justify-center font-bold font-[Chiron_Hei_HK]"
            >
              <ul class="list-disc space-y-[1.2vh] leading-[18px]">
                <!-- 第一項 -->
                <li>
                  創客組僅有一次 Demo，創客組接受多元形式的 Demo 與作品，唯需於比賽 Demo
                  時讓評審實際操作作品。 <br />
                  <div class="text-left">（參考工具：figma、Miro、Webflow、Sketch）</div>

                  <ul class="list-disc pl-[5vw] space-y-[1.2vh]">
                    <li>
                      創客組 Demo
                      前，參賽者需以組別為單位上傳簡報終稿、程式碼或其他作品連結；並且於指定時間至主舞台旁進行設備測試。
                    </li>

                    <li>
                      創客組 Demo 時，每組 13 分鐘，包括 8 分鐘發表與 5 分鐘評審 QA，
                      工作人員將於發表 7 分鐘時響短鈴兩次， 8 分鐘時響長鈴一次，
                      表示發表結束進入評審提問環節，提問採統問統答形式，評審全部提問結束後，
                      參賽者統一回答。QA 環節 5
                      分鐘響長鈴，響鈴後請即刻終止發言，如繼續發言將斟酌扣分。
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- moving star => 原本被父元素套到樣式所以才不能跑去最左-->
    <div
      v-if="activeTabPhone === '創客組'"
      class="w-[110vw] relative flex flex-col px-0 ml-0 mr-0 pl-[0]"
    >
      <!-- <div class="relative flex">
        <img src="../../assets/Home/bluestar-10-1.svg" alt="bluestar-10-1" class="bluestar-1">
        <img src="../../assets/Home/bluestar-11-3.svg" alt="bluestar-11-3" class="bluestar-2">
      </div> -->
      <StarMove></StarMove>
    </div>

    <div class="mb-[3vh]"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import StarMove from './StarMove.vue'

defineOptions({
  name: 'RuleSection',
})
const activeTab = ref('黑客組')
const activeTabPhone = ref('黑客組')
const showCursor = ref(false)

// light cursor
onMounted(() => {
  const glow = document.getElementById('light-cursor2')
  const area = document.getElementById('target-areas2')

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
  /* font-size: 2.3vw; */
  font-size: clamp(30px, 2.3vw, 36px);
}

.tab {
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

.tab-list {
  margin-left: 7vw;
  height: 15vh;
}

.active {
  /* font-size: 22px; */
  font-size: clamp(20px, 1.6vw, 26px);
  height: 9vh;
}

.inactive {
  /* font-size: 18px; */
  font-size: clamp(16px, 1.4vw, 22px);
  font-weight: 500; /* font-medium */
  height: 7.3vh;
}

.inactive:hover {
  color: #2d3e63;
  /* 用 .inactive :hover 會套用的是 class inactive 的後代元素，所以不要有空格 */
}

.content {
  margin-left: 1vw;
  margin-right: 1vw;
  margin-top: 1vh;
  margin-bottom: 1vh;
  font-size: clamp(16px, 1.8vw, 22px);
  text-align: justify;
  /* border: blue 3px solid; */
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  65% {
    opacity: 0;
  }
}

@keyframes blink1 {
  0%,
  95% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

@keyframes blink2 {
  0%,
  100% {
    opacity: 0;
  }
  45% {
    opacity: 1;
  }
}

.twinkle {
  animation: blink 2s infinite;
}

.people1 {
  animation: blink1 4s infinite;
  /* transition: ease-in-out; */
}
.people2 {
  animation: blink2 4s infinite;
  /* transition: ease-in-out; */
}

.target-area {
  /* border: 3px solid red; */
  z-index: 2;
}

#light-cursor2 {
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

@media (max-width: 768px) {
  .title {
    width: 90vw;
    font-size: 20px;
    /* font-size: clamp(20px, 2.3vw, 20px); */
  }

  .active {
    font-size: clamp(11px, 1vw, 12px);
    height: 4vh;
    /* font-size: 16px; */
  }

  .inactive {
    font-size: clamp(9px, 0.8vw, 10px);
    height: 3.3vh;
    /* font-size: 14px; */
  }

  .inactive:hover {
    color: #5b74b0;
  }

  .tab {
    border-top-left-radius: 13px;
    border-top-right-radius: 13px;
    min-height: 3.3vh;
    max-height: 5vh;
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
    /* margin-left: 20px; */
    margin-left: 3vw;
    margin-right: 3vw;
    /* font-size: 12px; */
    font-size: clamp(12px, 1.4vw, 14px);
    text-align: justify;
    /* border: 3px solid blue; */
  }

  .content-maker {
    margin-left: 20px;
    margin-right: 20px;
    /* margin-top: 2vh; */
    /* margin-bottom:2vh ; */
    /* font-size: 12px; */
    font-size: clamp(13px, 1.4vw, 15px);
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

  .vector_pink {
    filter: blur(20px);
    left: 70%;
    top: -200%;
    /* bottom: 0.5%; */

    animation: flash-brightness 4s infinite;
  }
}

.star-move {
  left: 70%;
  scale: 0.8;
  animation: star-move 4s infinite;
}

.bluestar-1 {
  animation: move-a 5s steps(10) infinite;
}

.bluestar-2 {
  animation: move-b 5s infinite;
}

@keyframes flash-brightness {
  0% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(0.92);
  }
  100% {
    filter: brightness(1);
  }
}

@keyframes star-move {
  0% {
    transform: translateY(0) scale(0.8);
  }
  50% {
    transform: translateY(20px) scale(1);
  }
  100% {
    transform: translateY(0) scale(0.8);
  }
}

@keyframes move-a {
  0%,
  9% {
    visibility: hidden;
    transform: translateX(0px);
  }
  10%,
  19% {
    visibility: visible;
    transform: translateX(0px);
  }
  20%,
  29% {
    visibility: hidden;
    transform: translateX(150px);
  }
  30%,
  39% {
    visibility: visible;
    transform: translateX(150px);
  }
  40%,
  100% {
    visibility: hidden;
  }
}

@keyframes move-b {
  0%,
  29% {
    opacity: 0;
  }
  30%,
  39% {
    opacity: 0;
  }
  40%,
  49% {
    opacity: 1;
    transform: translateX(75px);
  }
  50%,
  59% {
    opacity: 0;
    transform: translateX(200px);
  }
  60%,
  69% {
    opacity: 1;
    transform: translateX(200px);
  }
  70%,
  100% {
    opacity: 0;
  }
}
</style>
