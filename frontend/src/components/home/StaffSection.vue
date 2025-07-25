<template>
  <div class="flex justify-center relative w-full min-h-screen overflow-hidden">
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
            <template v-if="activeTab === '行政部'">
              <div class="content w-[29vw] h-[35vh] bg-zinc-300 rounded-[30px]"></div>

              <div
                class="pt-[10vh] content w-[30vw] space-y-[2vh] flex-col justify-start text-[#656565] text-[18px] flex font-bold font-[Chiron_Hei_HK]"
              >
                <!-- 字置中 ! -->
                <div>施閔智</div>
                <div>溫沛晨</div>
              </div>
            </template>

            <template v-if="activeTab === '行銷部'">
              <div class="content w-[29vw] h-[35vh] bg-zinc-300 rounded-[30px]"></div>

              <div
                class="pt-[10vh] content w-[30vw] space-y-[2vh] flex-col justify-start text-[#656565] text-[18px] flex font-bold font-[Chiron_Hei_HK]"
              >
                <!-- 字置中 ! -->
                <div>陳宣蓉 / 林昀澍</div>
                <div class="space-y-[1vh]">
                  <div>張佳妮 / 張庭綸 / 張庭軒 / 簡瑀岑</div>
                  <div>樓映辰 / 林怡勳</div>
                </div>
              </div>
            </template>

            <template v-if="activeTab === '公關部'">
              <div class="content w-[29vw] h-[35vh] bg-zinc-300 rounded-[30px]"></div>

              <div
                class="pt-[10vh] content w-[30vw] space-y-[2vh] flex-col justify-start text-[#656565] text-[18px] flex font-bold font-[Chiron_Hei_HK]"
              >
                <!-- 字置中 ! -->
                <div>侯佑勳 / 蔡婕安 / 莊皓雯</div>
                <div class="space-y-[1vh]">
                  <div>吳季瑾 / 陳緯均 / 陳凱薇 / 張恩睿</div>
                  <div>羅翊嘉 / 林子羽</div>
                </div>
              </div>
            </template>

            <template v-if="activeTab === '活動部'">
              <div class="content w-[29vw] h-[35vh] bg-zinc-300 rounded-[30px]"></div>

              <div
                class="pt-[10vh] content w-[30vw] space-y-[2vh] flex-col justify-start text-[#656565] text-[18px] flex font-bold font-[Chiron_Hei_HK]"
              >
                <!-- 字置中 ! -->
                <div>范嘉尹 / 陳芃嬡 / 莊亦安</div>
                <div class="space-y-[1vh]">
                  <div>黃紹捷 / 吳欣諭 / 吳品臻 / 鐘郁涵</div>
                  <div>羅可芸 / 劉子筠</div>
                </div>
              </div>
            </template>

            <template v-if="activeTab === '財務部'">
              <div class="content w-[29vw] h-[35vh] bg-zinc-300 rounded-[30px]"></div>

              <div
                class="pt-[10vh] content w-[30vw] space-y-[2vh] flex-col justify-start text-[#656565] text-[18px] flex font-bold font-[Chiron_Hei_HK]"
              >
                <!-- 字置中 ! -->
                <div>李采穗 / 陳翊嘉</div>
                <div>王思問 / 黃嬿方 / 呂崧立 / 余定綸 / 黃荺捷</div>
              </div>
            </template>

            <template v-if="activeTab === '設計部'">
              <div class="content w-[29vw] h-[35vh] bg-zinc-300 rounded-[30px]"></div>

              <div
                class="pt-[10vh] content w-[30vw] space-y-[2vh] flex-col justify-start text-[#656565] text-[18px] flex font-bold font-[Chiron_Hei_HK]"
              >
                <!-- 字置中 ! -->
                <div>陳婷祺 / 吳奕涔</div>
                <div class="space-y-[1vh]">
                  <div>黃鈺淇 / 黃子瑄 / 陳雅妮 / 葉彤妤</div>
                  <div>范嘉恩 / 何昀臻</div>
                </div>
              </div>
            </template>

            <template v-if="activeTab === '開發部'">
              <div class="content w-[29vw] h-[35vh] bg-zinc-300 rounded-[30px]"></div>

              <div
                class="pt-[10vh] content w-[30vw] space-y-[2vh] flex-col justify-start text-[#656565] text-[18px] flex font-bold font-[Chiron_Hei_HK]"
              >
                <!-- 字置中 ! -->
                <div>陳芝瑄 / 周廷威</div>
                <div class="space-y-[1vh]">
                  <div>施又歆 / 徐匯傑 / 陳品卉 / 陳彥廷</div>
                  <div>李聿宸 / 邱元廣</div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>

      <div class="mt-[16vh]"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineOptions({
  name: 'StaffSection',
})
const activeTab = ref('行政部')
</script>

<style scoped>
.title {
  width: 90vw;
  font-size: 32px;
}

.active {
  font-size: 20px;
}

.inactive {
  font-size: 16px;
}

.container {
  border: red solid 3px;
}

.content {
  margin-left: 2vw;
  margin-right: 2vw;
  margin-top: 1vh;
  margin-bottom: 1vh;
}
</style>
