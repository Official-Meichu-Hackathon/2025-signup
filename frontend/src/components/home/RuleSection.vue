<template>
  <div class="relative w-full min-h-screen overflow-hidden bg-[#2D3E63]">
    <div class="min-h-[calc(100vh-56px)] bg-[#2D3E63] flex flex-col w-full">
      <div
        class="mx-auto title mb-[10vh] mt-[8vh] text-center text-white font-black font-['Chiron_Hei_HK']"
      >
        比賽規則
      </div>

      <!-- Card : 比賽規則 -->
      <div class="w-[80vw] relative mx-auto select-none">
        <!-- tab ! -->
        <div
          :class="[
            activeTab === '黑客組'
              ? 'bg-[#db8396] left-[7vw] text-[2vw]'
              : 'bg-[#F4DAE1] left-[7vw] text-[1.6vw]',
            'pt-[1vh] w-[12vw] h-[9vh] absolute rounded-tl-[30px] rounded-tr-[30px] cursor-pointer flex items-center justify-center text-white font-black font-[\'Chiron_Hei_HK\']',
          ]"
          @click="activeTab = '黑客組'"
        >
          黑客組
        </div>

        <!-- tab 創客 -->
        <div
          :class="[
            activeTab === '創客' ? 'bg-[#db8396] text-[2vw]' : 'bg-[#F4DAE1] text-[1.6vw]',
            'pt-[1vh] left-[19vw] w-[16vw] h-[9vh] absolute rounded-tl-[30px] rounded-tr-[30px] cursor-pointer flex items-center justify-center text-white font-black font-[\'Chiron_Hei_HK\']',
          ]"
          @click="activeTab = '創客'"
        >
          創客交流組
        </div>

        <!-- 卡片背景 -->
        <!-- left-[7vw] 差不多在中間左右 !-->
        <!-- 要使用 mt 才可以撐開距離 !! 如果只使用 top 的話只是離父容器 top 多少，但超過的部分部會有撐開的功能 ! -->
        <!-- 為了讓切換 tag 的時候大小不變 => 設 vh -->
        <div
          class="w-[66vw] mt-[9vh] ml-[7vw] relative bg-neutral-100 rounded-tr-2xl rounded-bl-2xl rounded-br-2xl"
        >
          <!-- content -->
          <div class="pl-[5vw] pr-[5vw] pt-[8vh] pb-[8vh] flex justify-center">
            <!-- 內容區 -->
            <template v-if="activeTab === '黑客組'">
              <!-- twinkle deco -->
              <img
                src="../../assets/Home/twinkle-1.svg"
                alt="twinkle"
                class="twinkle absolute w-[23vw] left-[-14%] bottom-[-15%]"
              />
              <div
                class="justify-start text-justify text-left content w-[55vw] text-[#656565] text-[1.6vw] flex items-center justify-center font-bold font-[Chiron_Hei_HK]"
              >
                <ul class="list-disc space-y-[1.2vh] leading-[5.5vh]">
                  <!-- 第一項 -->
                  <li>
                    分為初賽與決賽（梅竹大獎），且黑客組不允許採用影片Demo，需以實際操作展現作品功能，否則不予計分。
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
                        初賽Demo時，黑客組 Demo 時間為 13 分鐘，包含 7 分鐘發表及 6 分鐘評審
                        QA。工作人員將於發表 7 時響短鈴一次， 表示發表結束進入 QA 環節。QA 環節 12.5
                        分鐘響短鈴兩次，13 分鐘響長鈴， 參賽者需要馬上停止回答，否則將斟酌扣分。
                      </li>
                    </ul>
                  </li>

                  <!-- 第三項 -->
                  <li>初賽獲得第一名的六支隊伍將進入最終梅竹大獎的評選</li>
                  <ul class="list-disc pl-[3vw]">
                    <li>梅竹大獎評選前，隊伍需於指定時間至主舞台旁進行設備測試。</li>

                    <li>
                      決賽Demo時，每組 15
                      分鐘，包括八分鐘的發表與七分鐘的評審QA時間，Demo若未出席則順延一組，
                      順延後仍未出席則取消資格；6.5 min時短鈴兩次，8 min時長鈴一次，進入ＱＡ時間，15
                      min 時長鈴一次，
                      也會有大字海報提醒，此時麻煩評審停止提問，參賽者也不能夠繼續回答，Demo結束。
                    </li>

                    <li>梅竹大獎前三名由評審決定；最佳人氣獎則由現場觀眾投票產生。</li>
                  </ul>
                </ul>
              </div>
            </template>

            <template v-else>
              <img
                src="../../assets/Home/people1.svg"
                alt="people1"
                class="people1 absolute w-[38vw] left-[50%] top-[74%]"
              />
              <img
                src="../../assets/Home/people2.svg"
                alt="people2"
                class="people2 absolute w-[38vw] left-[50%] top-[74%]"
              />
              <div
                class="text-justify text-left content w-[55vw] text-[#656565] text-[1.6vw] flex items-center justify-center font-bold font-[Chiron_Hei_HK]"
              >
                <ul class="list-disc space-y-[1.2vh] leading-[5.5vh]">
                  <!-- 第一項 -->
                  <li>
                    創客組僅有一次Demo，創客組接受多元形式的Demo與作品，唯需於比賽 Demo
                    時讓評審實際操作作品。 <br />
                    （參考工具：figma、Miro、Webflow、Sketch）
                    <ul class="list-disc pl-[3vw]">
                      <li>
                        創客組Demo前，參賽者需以組別為單位上傳簡報終稿、程式碼或其他作品連結；並且於指定時間至主舞台旁進行設備測試。
                      </li>

                      <li>
                        創客組Demo時，每組13分鐘，包括 8 分鐘發表與 5 分鐘評審QA，工作人員將於發表 7
                        分鐘時響短鈴兩次， 8 分鐘時響長鈴一次，
                        表示發表結束進入評審提問環節，提問採統問統答形式，評審全部提問結束後，參賽者統一回答。
                        QA 環節 5 分鐘響長鈴，響鈴後請即刻終止發言，如繼續發言將斟酌扣分。
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
</template>

<script setup>
import { ref } from 'vue'

defineOptions({
  name: 'RuleSection',
})
const activeTab = ref('黑客組')
</script>

<style scoped>
.title {
  width: 90vw;
  font-size: 2.3vw;
}

.container {
  border: red solid 3px;
}

.content {
  margin-left: 1vw;
  margin-right: 1vw;
  margin-top: 1vh;
  margin-bottom: 1vh;
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
</style>
