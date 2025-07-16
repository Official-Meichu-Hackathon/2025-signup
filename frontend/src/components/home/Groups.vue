<template>
  <div class="min-h-[calc(100vh-56px)] bg-[#2D3E63] flex flex-col items-center justify-center">
    <!-- <div class="text-3xl font-bold text-center text-[#F4F5F5]">Workshop</div> -->
    <div
      class="w-96 text-center justify-start text-neutral-100 text-4xl font-black font-['Chiron_Hei_HK_Text']"
    >
      組別介紹、工作坊
    </div>

    <div class="w-[970px] h-96 relative mx-auto select-none">
      <!-- 黑客組 active 狀態底色與位置 -->
      <div
        :class="[
          activeTab === '黑客組' ? 'bg-red-100 left-[166px]' : 'bg-rose-400 left-0',
          'w-40 h-16 absolute rounded-tl-[30px] rounded-tr-[30px] cursor-pointer',
        ]"
        @click="activeTab = '黑客組'"
      ></div>

      <!-- 工作坊 active 狀態底色與位置 -->
      <div
        :class="[
          activeTab === '工作坊' ? 'bg-red-100 left-0' : 'bg-rose-400 left-[167px]',
          'w-40 h-16 absolute rounded-tl-[30px] rounded-tr-[30px] cursor-pointer',
        ]"
        @click="activeTab = '工作坊'"
      ></div>

      <!-- 卡片背景 -->
      <div
        class="w-[970px] h-80 left-0 top-[63px] absolute bg-neutral-100 rounded-tr-2xl rounded-bl-2xl rounded-br-2xl"
      ></div>

      <!-- 標籤文字 -->
      <!-- 工作坊標籤，字體大小和位置根據 activeTab 切換 -->
      <div
        :class="[
          'absolute text-center text-white font-black font-[Chiron_Hei_HK_Text] leading-10 cursor-pointer select-none',
          activeTab === '工作坊'
            ? 'text-3xl left-[191px] top-[13px]'
            : 'text-2xl left-[191px] top-[15px]',
        ]"
        @click="activeTab = '工作坊'"
      >
        工作坊
      </div>

      <!-- 黑客組標籤，字體大小和位置根據 activeTab 切換 -->
      <div
        :class="[
          'absolute text-center text-white font-black font-[Chiron_Hei_HK_Text] leading-10 cursor-pointer select-none',
          activeTab === '黑客組'
            ? 'text-3xl left-[25px] top-[12px]'
            : 'text-2xl left-[25px] top-[15px]',
        ]"
        @click="activeTab = '黑客組'"
      >
        黑客組
      </div>

      <!-- 內容區 -->
      <template v-if="activeTab === '黑客組'">
        <div class="w-96 h-64 left-[51px] top-[105px] absolute bg-zinc-300 rounded-[30px]"></div>
        <div
          class="w-96 left-[495px] top-[126px] absolute text-stone-500 text-2xl font-bold font-[Chiron_Hei_HK_Text]"
        >
          致力於搭起學界與業界之間的橋樑，參賽者將運用企業資源並發揮創意回應企業命題，讓想像力與實作並存！2025
          年梅竹黑客松將由以下六家企業作為引導單位：CloudMosa、恩智浦半導體、台積電、羅技、Google、AMD。
        </div>
      </template>

      <template v-else>
        <div class="w-96 h-64 left-[51px] top-[105px] absolute bg-yellow-300 rounded-[30px]"></div>
        <div
          class="w-96 left-[83px] top-[126px] absolute text-stone-500 text-2xl font-bold font-[Chiron_Hei_HK_Text]"
        >
          每間合作企業皆會舉辦工作坊，透過工作坊，參賽者將領取到企業所提供的硬體設備或軟體資源，並且由企業之技術人員親自教學，簡易的指導參賽者如何使用相關技術或資源。舉辦地點與時間將依不同企業而定，點擊右側箭頭查看詳細內容。
        </div>
        <div
          class="w-20 left-[717px] top-[265px] absolute text-center text-zinc-400 text-xs font-bold font-[Chiron_Hei_HK_Text]"
        >
          詳細文件參考
        </div>
        <div class="w-16 h-16 left-[722px] top-[199px] absolute bg-zinc-300 rounded-md"></div>
        <div class="w-9 h-9 left-[738px] top-[212px] absolute bg-rose-400 rounded"></div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineOptions({
  name: 'GroupSection',
})
const activeTab = ref('黑客組')

// const tabs = ref([
//   { label: '工作坊' },
//   { label: '黑客組' },
// ])

// const activeTab = ref('工作坊')

// function setActiveTab(label) {
//   activeTab.value = label
// }
</script>

<style scoped></style>
