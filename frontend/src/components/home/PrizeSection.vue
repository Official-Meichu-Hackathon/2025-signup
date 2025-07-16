<template>
  <div class="min-h-[calc(100vh-56px)] bg-[#2D3E63] flex flex-col">
    <div
      class="mx-auto title mb-[10px] mt-[5px] text-center justify-start text-white text-3xl font-black font-['Chiron_Hei_HK_Text']"
    >
      獎項資訊
    </div>

    <!-- hacker -->
    <div
      class="hacker bg-gradient-to-br from-blue-100/50 to-blue-100/10 rounded-[30px] shadow-[0px_4px_25px_-5px_rgba(28,27,31,1.00)] border border-blue-100/40"
    >
      <div class="ml-[5vh] mt-[3vh] mr-[2vh]">
        <!-- subtitle -->
        <div class="text-white text-[2.5vw] font-black font-['Chiron_Hei_HK_Text'] leading-10">
          黑客組
        </div>
        <div class="info text-slate-700 text-sm font-bold font-['Chiron_Hei_HK_Text'] leading-10">
          每間企業獨立評選
        </div>

        <!-- content -->
        <div class="flex text-[1.5vw] text-white font-bold font-['Chiron_Hei_HK_Text'] leading-10">
          第一名：新台幣 25,000 元整、企業實體獎品、實習或實習面試機會
        </div>
        <div class="flex text-[1.5vw] text-white font-bold font-['Chiron_Hei_HK_Text'] leading-10">
          第二名：新台幣 20,000 元整、企業實體獎品
        </div>
        <div class="flex text-[1.5vw] text-white font-bold font-['Chiron_Hei_HK_Text'] leading-10">
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
      class="maker bg-gradient-to-br from-blue-100/50 to-blue-100/10 rounded-[30px] shadow-[0px_4px_25px_-5px_rgba(28,27,31,1.00)] border border-blue-100/40"
    >
      <div class="ml-[5vh] mt-[3vh] mr-[2vh] mb-[2vh]">
        <!-- subtitle -->
        <div
          class="mb-[2vh] text-white text-[2.5vw] font-black font-['Chiron_Hei_HK_Text'] leading-10"
        >
          創客交流組
        </div>

        <!-- content -->
        <div class="text-white font-bold font-['Chiron_Hei_HK_Text'] leading-10 text-[1.2vw]">
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
          </div>
        </div>
      </div>
    </div>

    <!-- Meichu big prize -->

    <div
      class="MH bg-gradient-to-b from-blue-100/50 to-blue-100/10 rounded-[30px] shadow-[0px_4px_25px_-5px_rgba(28,27,31,1.00)] border border-blue-100/40"
    >
      <div class="ml-[5vh] mt-[3vh] mr-[2vh]">
        <!-- subtitle -->
        <div class="text-white text-[2.5vw] font-black font-['Chiron_Hei_HK_Text'] leading-10">
          梅竹大獎
        </div>
        <div class="info text-slate-700 text-sm font-bold font-['Chiron_Hei_HK_Text'] leading-10">
          為黑客組複賽，由各間企業之第一名獲獎組別共同角逐
        </div>

        <!-- content -->
        <div class="flex text-[1.5vw] text-white font-bold font-['Chiron_Hei_HK_Text'] leading-10">
          第一名：新台幣 30,000 元整
        </div>
        <div class="flex text-[1.5vw] text-white font-bold font-['Chiron_Hei_HK_Text'] leading-10">
          第二名：新台幣 16,000 元整
        </div>
        <div class="flex text-[1.5vw] text-white font-bold font-['Chiron_Hei_HK_Text'] leading-10">
          第三名：新台幣 8,000 元整
        </div>
        <div class="flex text-[1.5vw] text-white font-bold font-['Chiron_Hei_HK_Text'] leading-10">
          最佳人氣獎：新台幣 3,000 元整
        </div>
      </div>
    </div>

    <!-- signup button -->
    <button class="mx-auto" @click="handleClick"></button>
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
  margin-top: 5vh;
  width: 55vw;
  margin-left: 15vw;
  padding: 3vh 2vh;
}

.maker {
  margin-top: 5vh;
  width: 50vw;
  margin-left: 30vw;
  padding: 3vh 2vh;
  padding-right: 5vh;
}

.MH {
  width: 39vw;
  margin-top: 5vh;
  margin-left: 10vw;
  padding: 3vh 2vh;
}

button {
  padding-top: 15vh;
  width: 20vw;
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
