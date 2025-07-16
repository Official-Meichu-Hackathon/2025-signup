<template>
  <div class="relative w-full min-h-screen overflow-hidden">
    <div class="min-h-[calc(100vh-56px)] bg-[#2D3E63] flex flex-col w-full overflow-hidden">
      <!-- wscreen 會撐太多導致有 scroll bar ，所以使用 w-full !!! -->
      <div
        class="mx-auto title mb-[10px] mt-[5px] text-center justify-start text-white text-3xl font-black font-['Chiron_Hei_HK_Text']"
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
          <div class="text-white text-[2.2vw] font-black font-['Chiron_Hei_HK_Text'] leading-10">
            黑客組
          </div>
          <div class="info text-slate-700 text-sm font-bold font-['Chiron_Hei_HK_Text'] leading-10">
            每間企業獨立評選
          </div>

          <!-- content -->
          <div
            class="flex text-[1.5vw] text-white font-bold font-['Chiron_Hei_HK_Text'] leading-10"
          >
            第一名：新台幣 25,000 元整、企業實體獎品、實習或實習面試機會
          </div>
          <div
            class="flex text-[1.5vw] text-white font-bold font-['Chiron_Hei_HK_Text'] leading-10"
          >
            第二名：新台幣 20,000 元整、企業實體獎品
          </div>
          <div
            class="flex text-[1.5vw] text-white font-bold font-['Chiron_Hei_HK_Text'] leading-10"
          >
            第三名：新台幣 15,000 元整、企業實體獎品
          </div>

          <!-- additional info-->
          <div class="text-slate-700 text-sm font-bold font-['Chiron_Hei_HK_Text'] leading-10">
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
            class="absolute star1-anim right-[80%]"
          />
        </div>
        <div class="ml-[5vh] mt-[3vh] mr-[2vh] mb-[2vh]">
          <!-- subtitle -->
          <div
            class="mb-[2vh] text-white text-[2.2vw] font-black font-['Chiron_Hei_HK_Text'] leading-10"
          >
            創客交流組
          </div>

          <!-- content -->
          <div
            class="flex text-white font-bold font-['Chiron_Hei_HK_Text'] leading-10 text-[1.2vw]"
          >
            <!-- justify between 各自對齊左右側的排版
                    <div class="flex justify-between">
                        <div class="text-[1.5vw]">第一名：新台幣 50,000 元整</div>
                        <div class="text-[1.5vw]">創意獎一：新台幣 12,000 元整</div>
                    </div>
                    <div class="flex justify-between">
                        <div class="text-[1.5vw]">第二名：新台幣 40,000 元整</div>
                        <div class="text-[1.5vw]">創意獎二：新台幣 10,000 元整</div>
                    </div>
                    <div class="flex justify-between">
                        <div class="text-[1.5vw]">第三名：新台幣 30,000 元整</div>
                        <div class="text-[1.5vw]">創意獎三：新台幣 8,000 元整</div>
                    </div> -->

            <!-- 左邊欄 -->
            <div class="flex flex-col w-1/2 text-[1.5vw]">
              <div>第一名：新台幣 50,000 元整</div>
              <div>第二名：新台幣 40,000 元整</div>
              <div>第三名：新台幣 30,000 元整</div>
            </div>

            <!-- 右邊欄 -->
            <div class="flex flex-col w-1/2 text-[1.5vw]">
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
            class="absolute left-[47%]"
          />
          <img
            src="../../assets/Home/Vector_blue.svg"
            alt="vector_blue"
            class="absolute left-[60%] bottom-[10%]"
          />
          <img
            src="../../assets/Home/curve.svg"
            alt="curve"
            class="absolute brightness-210 bottom-[2%] left-[38%] scale-90"
          />
        </div>

        <div class="ml-[5vh] mt-[3vh] mr-[2vh]">
          <!-- subtitle -->
          <div class="text-white text-[2.2vw] font-black font-['Chiron_Hei_HK_Text'] leading-10">
            梅竹大獎
          </div>
          <div class="info text-slate-700 text-sm font-bold font-['Chiron_Hei_HK_Text'] leading-10">
            為黑客組複賽，由各間企業之第一名獲獎組別共同角逐
          </div>

          <!-- content -->
          <div
            class="flex text-[1.5vw] text-white font-bold font-['Chiron_Hei_HK_Text'] leading-10"
          >
            第一名：新台幣 30,000 元整
          </div>
          <div
            class="flex text-[1.5vw] text-white font-bold font-['Chiron_Hei_HK_Text'] leading-10"
          >
            第二名：新台幣 16,000 元整
          </div>
          <div
            class="flex text-[1.5vw] text-white font-bold font-['Chiron_Hei_HK_Text'] leading-10"
          >
            第三名：新台幣 8,000 元整
          </div>
          <div
            class="flex text-[1.5vw] text-white font-bold font-['Chiron_Hei_HK_Text'] leading-10"
          >
            最佳人氣獎：新台幣 3,000 元整
          </div>
        </div>
      </div>

      <!-- signup button -->
      <!-- 記得調 button 的 z-index 才可以不被 img 蓋住 ! -->
      <button class="mx-auto z-10 mb-[8vh] mt-[5vh] cursor-pointer" @click="handleClick"></button>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'PrizeSection',
})

function handleClick() {
  console.log('click button')
}
</script>

<style scoped>
.title {
  /* must stay in the middle as one whole line */
  width: 90vw;
  font-size: 3vw;
}
.hacker {
  /* border: 3px solid pink; */
  margin-top: 5vh;
  width: 55vw;
  margin-left: 15vw;
  padding: 3vh 2vh;
}

.maker {
  /* border: 3px solid pink; */
  margin-top: 5vh;
  width: 55vw;
  margin-left: 30vw;
  padding: 3vh 2vh;
  padding-right: 5vh;
}

.MH {
  /* border: 3px solid pink; */
  width: 39vw;
  margin-top: 5vh;
  margin-left: 10vw;
  padding: 3vh 2vh;
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

button {
  padding-top: 15vh;
  width: 25vw;
  /* transition: 0.2s; */

  background-image: url('../../assets/Home/signupButton.svg');
  background-size: contain; /* 保持圖片完整顯示 */
  background-repeat: no-repeat;
  background-position: center;
}

button:hover {
  background-image: url('../../assets/Home/signupButton-hover.svg');
}
</style>
