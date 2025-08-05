<template>
  <img
    src="/src/assets/Registration/MobileCloud.svg"
    class="absolute scale-120 left-[0%] top-[10%] z-1 pointer-events-none"
  />

  <img
    src="/src/assets/Registration/BlueFlowerBig.svg"
    class="absolute left-[50%] top-[25%] z-1 pointer-events-none blue-flower-animate"
    alt="C0Ks551tvKjEUh1THTrgxsA0xIALZLctfHCHuz9t6Yk="
    style="transform: scaleX(-1) scale(0.5)"
  />

  <!-- Big Word-->
  <div
    class="w-full min-h-[80px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
    style="background-color: white; position: relative"
  >
    <!-- Wings -->
    <img
      src="/src/assets/Registration/wingleft.svg"
      class="absolute pointer-events-none z-20 h-auto scale-120 top-[42%] right-[50%] w-[20vw] wing-animate-left"
    />
    <img
      src="/src/assets/Registration/wingright.svg"
      class="absolute pointer-events-none z-20 h-auto scale-120 top-[42%] left-[50%] w-[20vw] wing-animate-right"
    />

    <div class="relative z-10 flex items-center justify-center w-full">
      <img
        src="/src/assets/Registration/Title.svg"
        alt="報名方式"
        class="w-[40vw] h-auto scale-60"
      />
    </div>
  </div>

  <!-- Schedule -->
  <div
    class="w-full min-h-[380px] flex items-center"
    style="background-color: white; position: relative"
  >
    <div class="flex items-center ml-8 sm:ml-12 md:ml-24 h-80 pt-2">
      <div class="w-0.5 h-full bg-[#2D3E63] translate-y-1 relative z-10"></div>
      <div
        class="flex flex-col ml-8 sm:ml-12 md:ml-24 text-[#2D3E63] h-full justify-between relative z-10"
      >
        <div
          v-for="(item, idx) in scheduleItems"
          :key="idx"
          class="justify-start text-slate-700 text-lg sm:text-2xl md:text-5xl font-bold font-['Chiron_Hei_HK'] animate-fade-in-left"
          :style="{ animationDelay: `${idx * 0.2}s` }"
        >
          <div>{{ item.date }}</div>
          <div>{{ item.text }}</div>
          <div><br /></div>
        </div>
      </div>
    </div>

    <img
      src="/src/assets/Registration/PinkFlowerBig.svg"
      class="absolute right-[55%] top-[70%] z-1 pointer-events-none pink-flower-animate"
      alt="MIQZJJ+COfOoDIuhHDIUN6OjflXyZlLl3onoLLfXvL4="
      style="transform: scale(0.55)"
    />
  </div>
  <!-- Registration Info -->
  <div
    class="w-full h-auto bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center pt-24 pb-2 relative z-0"
    style="background-color: white; position: relative"
  >
    <!-- Toggle Boxes -->
    <div class="w-[80vw] space-y-4 relative z-100">
      <!-- 報名費用 -->
      <MobileToggleBox title="報名費用" :index="0" :is-active="activeBox === 0" @toggle="toggleBox">
        ＄900／人（另收取保證金 ＄200 ）<br />
        <ul class="list-disc pl-6 mt-2">
          <li>
            跨域組隊：隊伍成員每人減免＄100
            <ul class="list-circle pl-6 mt-1 hollow-circle-list">
              <li>報名隊伍內有三個（含）以上不同科系</li>
              <li>
                限創客交流組：該組內含高中職、大專院校生或碩博生、社會人士兩種（含）以上身份別之參賽者
              </li>
            </ul>
          </li>
          <li>收費含餐食與娛樂活動、場地清潔、保險、文宣品、紀念 T 恤等</li>
        </ul>
      </MobileToggleBox>

      <!-- 保證金制度 -->
      <MobileToggleBox
        title="保證金制度"
        :index="1"
        :is-active="activeBox === 1"
        @toggle="toggleBox"
      >
        若有以下情事，主辦單位將酌情不予退還個人之保證金：
        <br />
        <ul class="list-disc pl-6 mt-2">
          <li>
            未有特殊理由之隊伍，隊內無人參加錄取企業或新竹市府所辦理之賽前工作坊（若企業有開放線上參與，則隊內須至少一人參與線上或實體之賽前工作坊）
          </li>
          <li>未確實完成本活動之開、閉幕式或無故遲到超過 20 分鐘者（以簽到、簽退手續為準）</li>
          <li>在活動場地違規飲食者，經工作人員勸導超過 3 次</li>
          <li>於活動期間，破壞任何活動場地內的設備，且必要時需負理賠責任</li>
          <li>未於組別 Demo 規定時間報到、登記、上傳簡報檔者</li>
          <li>未遵守現場工作人員指示使用娛樂交流區相關設施者，且必要時需自負賠償責任</li>
          <li>擅自進入本活動場域內非開放之管制空間者</li>
        </ul>
      </MobileToggleBox>

      <!-- 報名資格 -->
      <MobileToggleBox title="報名資格" :index="2" :is-active="activeBox === 2" @toggle="toggleBox">
        黑客組：全台大專院校生以及碩博士生，每隊至少需有一人員具備使用企業提供之資源的能力，黑客組全面不允許影片
        Demo。
        <br />創客交流組：高中職、大專院校及碩博士、社會人士皆可報名，參賽者需於比賽 Demo
        時讓評審實際操作作品。（參考工具：figma、Miro、Webflow、Sketch）
      </MobileToggleBox>

      <!-- 報名方式 -->
      <MobileToggleBox title="報名方式" :index="3" :is-active="activeBox === 3" @toggle="toggleBox">
        採自行報名組隊，梅竹黑客松提供 採自行報名組隊，梅竹黑客松提供
        <a
          href="https://www.facebook.com/groups/mchackathon.club.2.0/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-[#2D3E63] hover:text-gray-800 underline"
          >臉書媒合社群</a
        >
        供大家找隊友 <br />
        黑客組：每隊 3~5 人 <br />
        創客交流組：每隊 3~5 人 <br />
        <ul class="list-disc pl-6 mt-2">
          <li>分為兩種報名渠道：黑客創客混合報名、創客交流組獨立報名</li>
          <ul class="list-circle pl-6 mt-1 hollow-circle-list">
            <li>黑客組報名採志願排序制，須將創客交流組加入排序中</li>
          </ul>
          <li>若黑客組之單一企業超額，將採亂數分發</li>
          <li>創客交流組需於工作坊後提交一頁式企劃方案，參賽者務必參加工作坊以完成選題程序。</li>
          <ul class="list-circle pl-6 mt-1 hollow-circle-list">
            <li>一頁式企劃方案僅供新竹市政府了解貴隊伍之初步構思，無篩選之用意</li>
          </ul>
        </ul>
      </MobileToggleBox>

      <!-- 其他注意事項 -->
      <MobileToggleBox
        title="其他注意事項"
        :index="4"
        :is-active="activeBox === 4"
        @toggle="toggleBox"
        background-class="bg-gradient-to-b from-blue-100 to-white"
        expanded-background-class="expanded-bg-gradient"
        min-height="min-h-[80px]"
        content-padding="pb-16"
      >
        <ul class="list-disc mt-2">
          <li>
            報名之隊伍需在報名手續最末同意「<strong>智慧財產權聲明暨肖像授權</strong>」相關條款。
          </li>
          <li>
            報名錄取的隊伍在繳費成功後請務必仔細閱讀正取信內容，依照信件內容完成所有報名流程；同時，一併於信件提供之表單內回傳隊伍中「每一位」參賽者簽署之「<strong>個人資料蒐集聲明同意書</strong>」。
          </li>
          <li>2025 梅竹黑客松並不包含過夜的活動，請參賽者在離開會場後自行處理住宿問題。</li>
          <li>
            <strong>若報名人數超過活動最大人數上限，將依照報名先後順序錄取。</strong>
          </li>
          <li>
            為保護梅竹黑客松協辦企業之權益，參賽者必須配合參賽之企業組別所提出比賽過程之保密協定簽署，若無法配合企業之保密協定，將取消參賽資格。
          </li>
          <li>
            得獎同學需將作品上傳至
            <a
              href="https://tenyear.meichuhackathon.org/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-[#2D3E63] hover:text-gray-800 underline"
            >
              梅竹黑客松成果存放平台 </a
            >。
          </li>
        </ul>
      </MobileToggleBox>
    </div>
    <img
      src="/src/assets/Registration/MobileCloud.svg"
      class="absolute scale-120 right-[0%] top-[10%] z-10 pointer-events-none scale-x-[-1]"
    />
  </div>
</template>

<script>
import MobileToggleBox from './MobileToggleBox.vue'

export default {
  name: 'RegistrationMobile',
  components: {
    MobileToggleBox,
  },
  data() {
    return {
      scheduleItems: [
        { date: '8 / 11 (一) - 8 / 24 (日) 20:00 前', text: '開始報名' },
        { date: '8 / 25 (一) 08:00 前', text: '正取隊伍與所屬企業公布' },
        { date: '8 / 25 (一) -  8 / 28 (四)', text: '繳費期間' },
        { date: '8 / 29 (五) -  8 / 30 (六)', text: '備取遞補期間' },
      ],
      activeBox: null,
    }
  },
  methods: {
    toggleBox(index) {
      if (this.activeBox === index) {
        this.activeBox = null
      } else {
        this.activeBox = index
      }
    },
  },
}
</script>

<style scoped>
@keyframes fade-in-left {
  0% {
    opacity: 0;
    transform: translateX(-40px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in-left {
  animation: fade-in-left 1.2s cubic-bezier(0.4, 0.2, 0.2, 1) both;
}

.hollow-circle-list {
  list-style-type: circle;
}

@keyframes pink-flower-rotate-scale {
  0% {
    transform: scale(0.55) rotate(0deg);
  }
  100% {
    transform: scale(0.2) rotate(-20deg);
  }
}

.pink-flower-animate {
  animation: pink-flower-rotate-scale 2s ease-in-out infinite alternate;
}

@keyframes blue-flower-rotate-scale {
  0% {
    transform: scaleX(-1) scale(0.5) rotate(0deg);
  }
  100% {
    transform: scaleX(-1) scale(0.2) rotate(-20deg);
  }
}

.blue-flower-animate {
  animation: blue-flower-rotate-scale 2s ease-in-out infinite alternate;
}
</style>
