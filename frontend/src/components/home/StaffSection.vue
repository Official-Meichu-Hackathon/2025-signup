<!-- Staff Section : Apple -->

<template>
  <div id="staff"></div>

  <!-- layout for computer -->
  <div class="hidden md:block flex justify-center relative w-full min-h-screen overflow-hidden">
    <div class="justify-center min-h-[calc(100vh-56px)] flex flex-col w-full">
      <div
        class="mx-auto title mb-[7vh] text-center text-[#2D3E63] font-black font-['Chiron_Hei_HK']"
      >
        工作人員名單
      </div>

      <!-- card -->
      <!-- 這裡設 80 是為了底下的卡片背景部會超過，也才能讓整個漂亮的對其中間 (justify-center) -->
      <!-- 但是因為有陰影的量所以這裡下面也有故意推一點 -->
      <div class="w-[80vw] relative mx-auto select-none">
        <!-- tab ! -->
        <!-- tab 行政 -->
        <div
          :class="[
            activeTab === '行政部'
              ? 'bg-[#db8396] left-[0.7vw] active font-semibold'
              : 'bg-[#F4DAE1] left-[0.7vw] inactive font-bold',
            'w-[10vw] h-[9vh] pt-[1vh] border-[#F4F5F5] border-[1.5px] absolute rounded-tl-[28px] rounded-tr-[28px] cursor-pointer flex items-center justify-center text-[#F4F5F5] font-[\'Chiron_Hei_HK\']',
          ]"
          @click="activeTab = '行政部'"
        >
          行政部
        </div>

        <!-- tab 行銷 -->
        <div
          :class="[
            activeTab === '行銷部'
              ? 'bg-[#db8396] left-[10.7vw] active font-semibold'
              : 'bg-[#F4DAE1] left-[10.7vw] inactive font-bold',
            'w-[10vw] h-[9vh] pt-[1vh] border-[#F4F5F5] border-[1.5px] absolute rounded-tl-[28px] rounded-tr-[28px] cursor-pointer flex items-center justify-center text-[#F4F5F5] font-[\'Chiron_Hei_HK\']',
          ]"
          @click="activeTab = '行銷部'"
        >
          行銷部
        </div>

        <!-- tab 公關 -->
        <div
          :class="[
            activeTab === '公關部'
              ? 'bg-[#db8396] left-[20.7vw] active font-semibold'
              : 'bg-[#F4DAE1] left-[20.7vw] inactive font-bold',
            'w-[10vw] h-[9vh] pt-[1vh] border-[#F4F5F5] border-[1.5px] absolute rounded-tl-[28px] rounded-tr-[28px] cursor-pointer flex items-center justify-center text-[#F4F5F5] font-[\'Chiron_Hei_HK\']',
          ]"
          @click="activeTab = '公關部'"
        >
          公關部
        </div>

        <!-- tab 活動 -->
        <div
          :class="[
            activeTab === '活動部'
              ? 'bg-[#db8396] left-[30.7vw] active font-semibold'
              : 'bg-[#F4DAE1] left-[30.7vw] inactive font-bold',
            'w-[10vw] h-[9vh] pt-[1vh] border-[#F4F5F5] border-[1.5px] absolute rounded-tl-[28px] rounded-tr-[28px] cursor-pointer flex items-center justify-center text-[#F4F5F5] font-[\'Chiron_Hei_HK\']',
          ]"
          @click="activeTab = '活動部'"
        >
          活動部
        </div>

        <!-- tab 財務 -->
        <div
          :class="[
            activeTab === '財務部'
              ? 'bg-[#db8396] left-[40.7vw] active font-semibold'
              : 'bg-[#F4DAE1] left-[40.7vw] inactive font-bold',
            'w-[10vw] h-[9vh] pt-[1vh] border-[#F4F5F5] border-[1.5px] absolute rounded-tl-[28px] rounded-tr-[28px] cursor-pointer flex items-center justify-center text-[#F4F5F5] font-[\'Chiron_Hei_HK\']',
          ]"
          @click="activeTab = '財務部'"
        >
          財務部
        </div>

        <!-- tab 設計 -->
        <div
          :class="[
            activeTab === '設計部'
              ? 'bg-[#db8396] left-[50.7vw] active font-semibold'
              : 'bg-[#F4DAE1] left-[50.7vw] inactive font-bold',
            'w-[10vw] h-[9vh] pt-[1vh] border-[#F4F5F5] border-[1.5px] absolute rounded-tl-[28px] rounded-tr-[28px] cursor-pointer flex items-center justify-center text-[#F4F5F5] font-[\'Chiron_Hei_HK\']',
          ]"
          @click="activeTab = '設計部'"
        >
          設計部
        </div>

        <!-- tab 開發 -->
        <div
          :class="[
            activeTab === '開發部'
              ? 'bg-[#db8396] left-[60.7vw] active font-semibold'
              : 'bg-[#F4DAE1] left-[60.7vw] inactive font-bold',
            'w-[10vw] h-[9vh] pt-[1vh] border-[#F4F5F5] border-[1.5px] absolute shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] border border-neutral-100 rounded-tl-[28px] rounded-tr-[28px] cursor-pointer flex items-center justify-center text-[#F4F5F5] font-[\'Chiron_Hei_HK\']',
          ]"
          @click="activeTab = '開發部'"
        >
          開發部
        </div>
        <!-- 卡片背景 -->
        <!-- left-[7vw] 差不多在中間左右 !-->
        <!-- 要使用 mt 才可以撐開距離 !! 如果只使用 top 的話只是離父容器 top 多少，但超過的部分部會有撐開的功能 ! -->
        <!-- 為了讓切換 tag 的時候大小不變 => 設 vh -->
        <div
          class="w-[78.7vw] h-[47vh] mt-[9vh] ml-[0.7vw] relative bg-[#F4F5F5] shadow-[4px_4px_5px_-1px_rgba(0,0,0,0.25)]"
        >
          <!-- content -->
          <div class="pl-[3vw] pr-[3vw] pt-[5vh] pb-[5vh] flex flex-row">
            <!-- 內容區 -->
            <div v-show="activeTab === '行政部'" class="flex flex-row">
              <div class="content w-[29vw] h-[35vh] bg-zinc-300 rounded-[30px] overflow-hidden">
                <img
                  src="../../assets/Home/staff/webp/admin.webp"
                  alt="admin_photo"
                  class="w-full h-full object-cover rounded-[30px] scale-[1.2] object-center object-[38%_center]"
                />
              </div>

              <div
                class="pt-[10vh] content w-[30vw] space-y-[2vh] flex-col justify-start text-[#656565] text-[20px] flex font-bold font-[Chiron_Hei_HK]"
              >
                <!-- 字置中 ! -->
                <div>施閔智</div>
                <div>溫沛晨</div>
              </div>
            </div>

            <div v-show="activeTab === '行銷部'" class="flex flex-row">
              <div class="content w-[29vw] h-[35vh] bg-zinc-300 rounded-[30px] overflow-hidden">
                <img
                  src="../../assets/Home/staff/webp/market.webp"
                  alt="market_photo"
                  class="w-full h-full object-cover object-[75%_center] rounded-[30px]"
                />
              </div>

              <div
                class="pt-[10vh] content w-[30vw] space-y-[2vh] flex-col justify-start text-[#656565] text-[20px] flex font-bold font-[Chiron_Hei_HK]"
              >
                <!-- 字置中 ! -->
                <div>陳宣蓉 / 林昀澍</div>
                <div class="space-y-[1vh]">
                  <div>張佳妮 / 張庭綸 / 張庭軒 / 簡瑀岑</div>
                  <div>樓映辰 / 林怡勳</div>
                </div>
              </div>
            </div>

            <div v-show="activeTab === '公關部'" class="flex flex-row">
              <div class="content w-[29vw] h-[35vh] bg-zinc-300 rounded-[30px] overflow-hidden">
                <img
                  src="../../assets/Home/staff/webp/PR.webp"
                  alt="PR_photo"
                  class="w-full h-full object-cover object-[35%_center] rounded-[30px]"
                />
              </div>

              <!-- object-[75%_center] -->

              <div
                class="pt-[10vh] content w-[30vw] space-y-[2vh] flex-col justify-start text-[#656565] text-[20px] flex font-bold font-[Chiron_Hei_HK]"
              >
                <!-- 字置中 ! -->
                <div>侯佑勳 / 蔡婕安 / 莊皓雯</div>
                <div class="space-y-[1vh]">
                  <div>吳季瑾 / 陳緯均 / 陳凱薇 / 張恩睿</div>
                  <div>羅翊嘉 / 林子羽</div>
                </div>
              </div>
            </div>

            <div v-show="activeTab === '活動部'" class="flex flex-row">
              <div class="content w-[29vw] h-[35vh] bg-zinc-300 rounded-[30px] overflow-hidden">
                <img
                  src="../../assets/Home/staff/webp/activities.webp"
                  alt="act_photo"
                  class="w-full h-full object-cover object-[35%_45%] rounded-[30px]"
                />
              </div>

              <div
                class="pt-[10vh] content w-[30vw] space-y-[2vh] flex-col justify-start text-[#656565] text-[20px] flex font-bold font-[Chiron_Hei_HK]"
              >
                <!-- 字置中 ! -->
                <div>范嘉尹 / 陳芃嬡 / 莊亦安</div>
                <div class="space-y-[1vh]">
                  <div>黃紹捷 / 吳欣諭 / 吳品臻 / 鐘郁涵</div>
                  <div>羅可芸 / 劉子筠</div>
                </div>
              </div>
            </div>

            <div v-show="activeTab === '財務部'" class="flex flex-row">
              <div class="content w-[29vw] h-[35vh] bg-zinc-300 rounded-[30px] overflow-hidden">
                <img
                  src="../../assets/Home/staff/webp/finance.webp"
                  alt="finance_photo"
                  class="w-full h-full object-cover object-[35%_0%] rounded-[30px]"
                />
              </div>

              <div
                class="pt-[10vh] content w-[30vw] space-y-[2vh] flex-col justify-start text-[#656565] text-[20px] flex font-bold font-[Chiron_Hei_HK]"
              >
                <!-- 字置中 ! -->
                <div>李采穗 / 陳翊嘉</div>
                <div>王思問 / 黃嬿方 / 呂崧立 / 余定綸 / 黃荺捷</div>
              </div>
            </div>

            <div v-show="activeTab === '設計部'" class="flex flex-row">
              <div class="content w-[29vw] h-[35vh] bg-zinc-300 rounded-[30px] overflow-hidden">
                <img
                  src="../../assets/Home/staff/webp/design.webp"
                  alt="design_photo"
                  class="w-full h-full object-cover object-[45%_0%] rounded-[30px]"
                />
              </div>

              <div
                class="pt-[10vh] content w-[30vw] space-y-[2vh] flex-col justify-start text-[#656565] text-[20px] flex font-bold font-[Chiron_Hei_HK]"
              >
                <!-- 字置中 ! -->
                <div>陳婷祺 / 吳奕涔</div>
                <div class="space-y-[1vh]">
                  <div>黃鈺淇 / 黃子瑄 / 陳雅妮 / 葉彤妤</div>
                  <div>范嘉恩 / 何昀臻</div>
                </div>
              </div>
            </div>

            <div v-show="activeTab === '開發部'" class="flex flex-row">
              <div class="content w-[29vw] h-[35vh] bg-zinc-300 rounded-[30px] overflow-hidden">
                <img
                  src="../../assets/Home/staff/webp/dev.webp"
                  alt="dev_photo"
                  class="w-full h-full object-cover rounded-[30px] scale-[1.2] origin-bottom-left object-[38%_center]"
                />
              </div>

              <!-- <div class="content w-[29vw] h-[35vh] bg-zinc-300 rounded-[30px] 
                    dev 
                    bg-cover bg-[60%_center] bg-no-repeat">
              </div> -->

              <div
                class="pt-[10vh] content w-[30vw] space-y-[2vh] flex-col justify-start text-[#656565] text-[20px] flex font-bold font-[Chiron_Hei_HK]"
              >
                <!-- 字置中 ! -->
                <div>陳芝瑄 / 周廷威</div>
                <div class="space-y-[1vh]">
                  <div>施又歆 / 徐匯傑 / 陳品卉 / 陳彥廷</div>
                  <div>李聿宸 / 邱元廣</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-[16vh]"></div>
    </div>
  </div>

  <!-- layout for phone -->
  <div
    class="block md:hidden mb-[3vh] flex flex-col justify-center items-center relative w-full overflow-hidden h-[80vh]"
  >
    <div class="mb-[15px] title text-center font-['Chiron_Hei_HK'] font-bold">工作人員名單</div>
    <div class="w-[80vw]">
      <ToggleBox
        title="行政部"
        :index="0"
        :is-active="activeBox === 0"
        @toggle="toggleBox"
        margin-class="-mt-0"
      >
        <div class="space-y-[0.8vh] text-neutral-100 text-[12px] font-bold font-['Chiron_Hei_HK']">
          <div>施閔智</div>
          <div>溫沛晨</div>
        </div>
      </ToggleBox>
      <ToggleBox title="行銷部" :index="1" :is-active="activeBox === 1" @toggle="toggleBox">
        <div class="space-y-[0.8vh] text-neutral-100 text-[12px] font-bold font-['Chiron_Hei_HK']">
          <div>陳宣蓉 / 林昀澍</div>
          <div>張佳妮 / 張庭綸 / 張庭軒 / 簡瑀岑 / 樓映辰 / 林怡勳</div>
        </div>
      </ToggleBox>

      <ToggleBox title="公關部" :index="2" :is-active="activeBox === 2" @toggle="toggleBox">
        <div class="space-y-[0.8vh] text-neutral-100 text-[12px] font-bold font-['Chiron_Hei_HK']">
          <div>侯佑勳 / 蔡婕安 / 莊皓雯</div>
          <div>吳季瑾 / 陳緯均 / 陳凱薇 / 張恩睿 / 羅翊嘉 /林子羽</div>
        </div>
      </ToggleBox>

      <ToggleBox title="活動部" :index="3" :is-active="activeBox === 3" @toggle="toggleBox">
        <div class="space-y-[0.8vh] text-neutral-100 text-[12px] font-bold font-['Chiron_Hei_HK']">
          <div>范嘉尹 / 陳芃嬡 / 莊亦安</div>
          <div>黃紹捷 / 吳欣諭 / 吳品臻 / 鐘郁涵 / 羅可芸 / 劉子筠</div>
        </div>
      </ToggleBox>

      <ToggleBox title="財務部" :index="4" :is-active="activeBox === 4" @toggle="toggleBox">
        <div class="space-y-[0.8vh] text-neutral-100 text-[12px] font-bold font-['Chiron_Hei_HK']">
          <div>李采穗 / 陳翊嘉</div>
          <div>王思問 / 黃嬿方 / 呂崧立 / 余定綸 / 黃荺捷</div>
        </div>
      </ToggleBox>

      <ToggleBox title="設計部" :index="5" :is-active="activeBox === 5" @toggle="toggleBox">
        <div class="space-y-[0.8vh] text-neutral-100 text-[12px] font-bold font-['Chiron_Hei_HK']">
          <div>陳婷祺 / 吳奕涔</div>
          <div>黃鈺淇 / 黃子瑄 / 何昀蓁 / 陳雅妮 / 范嘉恩 / 葉彤妤</div>
        </div>
      </ToggleBox>
      <ToggleBox
        title="開發部"
        :index="6"
        :is-active="activeBox === 6"
        @toggle="toggleBox"
        :style="
          activeBox === null
            ? {
                background: 'linear-gradient(to bottom, #F4DAE1 60%, white 100%)',
              }
            : {}
        "
      >
        <!-- transition: 'background 0.2s ease-in-out' 原本是為了背景轉換但好像有點怪 ... ? -->
        <div class="space-y-[0.8vh] text-neutral-100 text-[10px] font-bold font-['Chiron_Hei_HK']">
          <div>陳芝瑄 / 周廷威</div>
          <div>施又歆 / 徐匯傑 / 陳品卉 / 陳彥廷 / 李聿宸 / 邱元廣</div>
        </div>
      </ToggleBox>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ToggleBox from './ToggleBox.vue'

const activeTab = ref('行政部')
const activeBox = ref(null)

defineOptions({
  name: 'StaffSection',
})

function toggleBox(index) {
  if (activeBox.value === index) {
    activeBox.value = null
  } else {
    activeBox.value = index
  }
}
</script>

<style scoped>
.title {
  width: 90vw;
  font-size: 32px;
}

.active {
  /* font-size: 22px; */
  font-size: clamp(20px, 1.6vw, 26px);
}

.inactive {
  /* font-size: 18px; */
  font-size: clamp(16px, 1.4vw, 22px);
}

.container {
  border: red solid 3px;
}

.content {
  margin-left: 2vw;
  margin-right: 2vw;
  margin-top: 1vh;
  margin-bottom: 1vh;
  font-size: clamp(16px, 1.8vw, 24px);
}

@media (max-width: 768px) {
  .title {
    width: 90vw;
    font-size: 20px;
    /* font-size: clamp(20px, 2.3vw, 20px); */
  }
}
</style>
