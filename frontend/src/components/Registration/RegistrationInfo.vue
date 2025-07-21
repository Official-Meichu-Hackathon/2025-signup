<template>
  <!-- Info-->
  <div
    class="w-full min-h-[1400px] bg-cover bg-center bg-no-repeat flex items-start justify-center pt-32"
    style="background-color: white; position: relative; overflow: hidden; height: 800px"
  >
    <!-- Meteor and Clouds-->
    <img
      src="/src/assets/Registration/meteor.svg"
      class="absolute pointer-events-none z-20 h-auto scale-70 top-[12%] left-[4.5%] w-[20vw]"
    />

    <img
      src="/src/assets/Registration/pink-blueCloud.svg"
      class="cloud-fade scale-300 right-[4.5%] top-[10%]"
      :class="{ show: showPinkCloud }"
    />

    <img
      src="/src/assets/Registration/blue-pinkCloud.svg"
      class="cloud-fade scale-300 right-[10%] top-[5%]"
      :class="{ show: showBlueCloud }"
    />

    <img
      src="/src/assets/Registration/blue-pinkCloud.svg"
      class="cloud-fade scale-300 left-[10%] top-[70%]"
      :class="{ show: showPinkCloud }"
    />

    <img
      src="/src/assets/Registration/pink-blueCloud.svg"
      class="cloud-fade scale-300 left-[10%] top-[70%]"
      :class="{ show: showBlueCloud }"
    />

    <!-- Notice Container -->
    <div
      class="w-[80vw] h-[1400px] bg-zinc-300/25 rounded-[40px] shadow-[0px_4px_20px_-1px_rgba(0,0,0,0.25)] pt-32 p-16 relative z-40"
    >
      <!-- Notice Items -->
      <div class="space-y-8">
        <!-- 報名費用 -->
        <ExpandableItem title="報名費用" :expanded="expandedItems.fee" @toggle="handleItemToggle">
          ＄900／人（含保證金 ＄200 ）<br />
          <ul class="list-disc pl-12 mt-2">
            <li>
              跨域組隊：隊伍成員每人減免＄100
              <ul class="list-circle pl-12 mt-1 hollow-circle-list">
                <li>報名隊伍內有三個（含）以上不同科系</li>
                <li>
                  限創客交流組：該組內含高中職、大專院校生或碩博生、社會人士兩種（含）以上身份別之參賽者
                </li>
              </ul>
            </li>
            <li>收費含餐食與娛樂活動、場地清潔、保險、文宣品、紀念 T 恤等</li>
          </ul>
        </ExpandableItem>

        <!-- 保證金制度 -->
        <ExpandableItem
          title="保證金制度"
          :expanded="expandedItems.guarantee"
          @toggle="handleItemToggle"
        >
          若有以下情事，主辦單位將酌情不予退還個人之保證金：
          <br />
          <ul class="list-disc pl-12 mt-2">
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
        </ExpandableItem>

        <!-- 報名資格 -->
        <ExpandableItem
          title="報名資格"
          :expanded="expandedItems.qualification"
          @toggle="handleItemToggle"
        >
          黑客組：全台大專院校生以及碩博士生，每隊至少需有一人員具備使用企業提供之資源的能力，黑客組全面不允許影片Demo。
          <br />創客交流組：高中職、大專院校及碩博士、社會人士皆可報名，參賽者需於比賽 Demo
          時讓評審實際操作作品。（參考工具：figma、Miro、Webflow、Sketch）
        </ExpandableItem>

        <!-- 報名方式 -->
        <ExpandableItem
          title="報名方式"
          :expanded="expandedItems.method"
          @toggle="handleItemToggle"
        >
          採自行報名組隊，梅竹黑客松提供
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
          <ul class="list-disc pl-12 mt-2">
            <li>分為兩種報名渠道：黑客創客混合報名、創客交流組獨立報名</li>
            <ul class="list-circle pl-12 mt-1 hollow-circle-list">
              <li>黑客組報名採志願排序制，須將創客交流組加入排序中</li>
            </ul>
            <li>若黑客組之單一企業超額，將採亂數分發</li>
            <li>創客交流組另需提交一頁式企劃方案，方完成報名手續</li>
            <ul class="list-circle pl-12 mt-1 hollow-circle-list">
              <li>
                黑客創客混合報名之志願序排列，若將創客交流組志願序排至前三（含），亦需繳交一頁式企劃方案
              </li>
              <li>一頁式企劃方案僅供新竹市政府了解貴隊伍之初步構思，無篩選之用意</li>
            </ul>
          </ul>
        </ExpandableItem>

        <!-- 其他注意事項 -->
        <ExpandableItem
          title="其他注意事項"
          :expanded="expandedItems.others"
          @toggle="handleItemToggle"
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
            <li>得獎同學需將作品上傳至 梅竹黑客松成果存放平台。</li>
          </ul>
        </ExpandableItem>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Cloud alternate animation */
.cloud-fade {
  position: absolute;
  pointer-events: none;
  height: auto;
  width: 20vw;
  z-index: 0;
  opacity: 0;
  transition: opacity 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.cloud-fade.show {
  opacity: 1;
}

.hollow-circle-list {
  list-style-type: circle;
}
</style>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import ExpandableItem from './ExpandableItem.vue'

export default {
  name: 'RegistrationNotice',
  components: {
    ExpandableItem,
  },
  setup() {
    // Notice section expandable items
    const expandedItems = ref({
      fee: false,
      guarantee: false,
      qualification: false,
      method: false,
      others: false,
    })

    const handleItemToggle = (title, isExpanded) => {
      const keyMap = {
        報名費用: 'fee',
        保證金制度: 'guarantee',
        報名資格: 'qualification',
        報名方式: 'method',
        其他注意事項: 'others',
      }
      const itemKey = keyMap[title]
      if (itemKey) {
        // Collapse all items first
        Object.keys(expandedItems.value).forEach((key) => {
          expandedItems.value[key] = false
        })
        // Then expand the selected item
        expandedItems.value[itemKey] = isExpanded
      }
    }

    const showPinkCloud = ref(true)
    const showBlueCloud = ref(false)
    const cloudInterval = ref(null)
    const cloudTimeouts = ref([])

    onMounted(() => {
      // Cloud alternate logic
      let show = true
      showPinkCloud.value = true
      showBlueCloud.value = false

      function cloudLoop() {
        if (show) {
          showBlueCloud.value = true
          const fadeOutTimeout = setTimeout(() => {
            showPinkCloud.value = false
          }, 250) // 調整到 250ms 重疊時間（保持25%比例）
          cloudTimeouts.value.push(fadeOutTimeout)

          const nextLoopTimeout = setTimeout(() => {
            show = false
            cloudLoop()
          }, 1000) // 總時長調整到 1000ms
          cloudTimeouts.value.push(nextLoopTimeout)
          cloudInterval.value = nextLoopTimeout
        } else {
          showPinkCloud.value = true
          const fadeOutTimeout = setTimeout(() => {
            showBlueCloud.value = false
          }, 250) // 調整到 250ms 重疊時間（保持25%比例）
          cloudTimeouts.value.push(fadeOutTimeout)

          const nextLoopTimeout = setTimeout(() => {
            show = true
            cloudLoop()
          }, 1000) // 總時長調整到 1000ms
          cloudTimeouts.value.push(nextLoopTimeout)
          cloudInterval.value = nextLoopTimeout
        }
      }
      cloudLoop()
    })

    onUnmounted(() => {
      cloudTimeouts.value.forEach((timeoutId) => clearTimeout(timeoutId))
      cloudTimeouts.value = []
      if (cloudInterval.value) {
        clearTimeout(cloudInterval.value)
        cloudInterval.value = null
      }
    })

    return {
      expandedItems,
      handleItemToggle,
      showPinkCloud,
      showBlueCloud,
      cloudTimeouts,
    }
  },
}
</script>
