<script setup>
import { ref, computed, watch, onUnmounted, onDeactivated } from 'vue'
import '../assets/css/signup.css'
import TitleHeader from '../components/signup/TitleHeader.vue'
import StepCardsHeader from '../components/signup/StepCardsHeader.vue'
import FormItem from '../components/signup/form/FormItem.vue'
import TextQuestion from '../components/signup/form/TextQuestion.vue'
import ChoiceQuestion from '../components/signup/form/ChoiceQuestion.vue'
import SortableQuestion from '../components/signup/form/SortableQuestion.vue'
import FileUpload from '../components/signup/form/FileUpload.vue'
import { useRoute } from 'vue-router'
import { isValidId } from '../assets/signup/taiwan-id-validator'

defineOptions({
  name: 'SignupPage',
})

const route = useRoute()
const isMaker = ref(route.query.ref === 'maker')

watch(
  () => route.query,
  (newQuery) => {
    isMaker.value = newQuery.ref === 'maker'
    priorityOrder.value = isMaker.value
      ? ['創客交流組']
      : ['AMD', 'CloudMosa', 'Google', '恩智浦半導體', '台積電', '羅技', '創客交流組']
  },
  { deep: true }
)

onDeactivated(() => {
  window.onbeforeunload = null
})

onUnmounted(() => {
  window.onbeforeunload = null
})

const playerCount = ref(null)
const currentStepOrder = ref(1)
const totalStepOrder = computed(() => (playerCount.value || 5) + 3)
const isSubmitting = ref(false)

const playerSteps = computed(() => {
  const steps = []
  const playerOrders = ['一', '二', '三', '四', '五']
  const count = playerCount.value || 5

  for (let i = 1; i <= count; i++) {
    steps.push({
      stepOrder: i + 1,
      stepName: `參賽者${playerOrders[i - 1]}基本資料`,
    })
  }

  return steps
})

// form p1: 報名選項
const groupName = ref('')
const playerCountChoice = computed({
  get() {
    return playerCount.value ? `${playerCount.value}人` : ''
  },
  set(value) {
    if (value) {
      const count = parseInt(value.replace('人', ''))
      playerCount.value = count
    }
  },
})
const isCrossDomain = ref('')
const priorityOrder = ref(null)

// form p2: 參賽者基本資料
const createPlayerData = () => ({
  name: '',
  gender: '',
  birthday: '',
  idNumber: '',
  identity: '',
  school: '',
  department: '',
  grade: '',
  occupation: '',
  email: '',
  phone: '',
  dietaryRestrictions: '',
  shirtSize: '',
  lowIncomeProof: null,
})

// from 同意

const assentFirst = ref(null)
const assentSecond = ref(null)

// from last: 其他
const otherAssent = ref(null)

const playerData = ref(Array.from({ length: 5 }, () => createPlayerData()))

const handleStepClick = (stepOrder) => {
  if (currentStepOrder.value > stepOrder) {
    currentStepOrder.value = stepOrder
  }
}

const validateGroupName = (name) => {
  return !name || name.length <= 20
}

const validateEmail = (email) => {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return emailPattern.test(email)
}

const validatePhoneNumber = (phone) => {
  const phonePattern = /^09\d{8}$/
  return phonePattern.test(phone)
}

const validateBirthday = (birthday) => {
  if (!birthday) return false

  const birthdayPattern = /^\d{8}$/
  if (!birthdayPattern.test(birthday)) return false

  const year = parseInt(birthday.substring(0, 4))
  const month = parseInt(birthday.substring(4, 6))
  const day = parseInt(birthday.substring(6, 8))

  const currentYear = new Date().getFullYear()
  if (year < 1900 || year > currentYear) return false
  if (month < 1 || month > 12) return false
  if (day < 1 || day > 31) return false

  const date = new Date(year, month - 1, day)
  return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day
}

const submit = async () => {
  if (isSubmitting.value) return

  isSubmitting.value = true

  try {
    const playersSlice = playerData.value.slice(0, playerCount.value)

    const priorityArray = (priorityOrder.value || []).slice()
    while (priorityArray.length < 7) {
      priorityArray.push(null)
    }

    const firstRow = [
      null,
      groupName.value,
      playerCountChoice.value,
      isCrossDomain.value,
      ...priorityArray,
      ...(playersSlice.length > 0
        ? [
            playersSlice[0].name,
            playersSlice[0].gender,
            playersSlice[0].birthday,
            playersSlice[0].idNumber,
            playersSlice[0].identity,
            playersSlice[0].school,
            playersSlice[0].department,
            playersSlice[0].grade,
            playersSlice[0].occupation,
            playersSlice[0].email,
            playersSlice[0].phone,
            playersSlice[0].dietaryRestrictions,
            playersSlice[0].shirtSize,
            playersSlice[0].lowIncomeProof ? playersSlice[0].lowIncomeProof.name : '',
          ]
        : []),
      assentFirst.value,
      assentSecond.value,
      otherAssent.value,
    ]

    const otherRows = playersSlice
      .slice(1)
      .map((player) => [
        null,
        null,
        null,
        null,
        ...Array(7).fill(null),
        player.name,
        player.gender,
        player.birthday,
        player.idNumber,
        player.identity,
        player.school,
        player.department,
        player.grade,
        player.occupation,
        player.email,
        player.phone,
        player.dietaryRestrictions,
        player.shirtSize,
        player.lowIncomeProof ? player.lowIncomeProof.name : '',
      ])

    const formData = [firstRow, ...otherRows]

    await fetch(import.meta.env.VITE_APP_SCRIPT_URL, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'text/plain',
      },
      redirect: 'follow',
    })
    window.onbeforeunload = null
    location.href = '/success-signup'
  } catch (err) {
    console.log(err)
    alert('報名失敗，請直接用email聯絡我們: \n2025mchackathon@gmail.com\n造成您的不便，深感抱歉')
  } finally {
    isSubmitting.value = false
  }
}

window.onbeforeunload = () => ''
</script>

<template>
  <div>
    <TitleHeader />
    <StepCardsHeader
      :playerCount="playerCount || 5"
      :currentStep="currentStepOrder"
      @step-click="handleStepClick"
    />
    <FormItem
      :formStepOrder="1"
      :total-step-order="totalStepOrder"
      stepName="報名選項"
      :requiredValues="[
        validateGroupName(groupName) ? groupName : '',
        playerCountChoice,
        isCrossDomain,
      ]"
      :isSubmitting="isSubmitting"
      v-model:currentStepOrder="currentStepOrder"
      @submit="submit"
    >
      <TextQuestion
        title="*隊伍名稱（上限20字）"
        v-model="groupName"
        :verify-function="validateGroupName"
        verify-message="字數超過限制！請保持在 20 字以內"
      />

      <ChoiceQuestion
        title="*隊伍人數"
        :options="['3人', '4人', '5人']"
        v-model="playerCountChoice"
      />

      <ChoiceQuestion
        title="*跨域組隊"
        description="備註：隊伍成員每人減免 $100
(1) 報名隊伍內有三個（含）以上不同科系
(2) 組內含高中職、大專院校生或碩博生、社會人士兩種（含）以上身份別之參賽者（限創客交流組）"
        :options="['是', '否']"
        v-model="isCrossDomain"
      />

      <SortableQuestion
        title="*組別或企業志願序"
        :description="
          isMaker
            ? ''
            : '備註：\n(1) 企業題目或組別將依據隊伍的志願序分發。若單一企業或組別超額，將亂數抽籤決定。\n(2) 未報名創客交流組則將創客交流組的志願序填為 7。'
        "
        :options="
          isMaker
            ? ['創客交流組']
            : ['AMD', 'CloudMosa', 'Google', '恩智浦半導體', '台積電', '羅技', '創客交流組']
        "
        v-model="priorityOrder"
      />
    </FormItem>

    <FormItem
      v-for="(step, index) in playerSteps"
      :key="step.stepOrder"
      :formStepOrder="step.stepOrder"
      :total-step-order="totalStepOrder"
      :stepName="step.stepName"
      :required-values="[
        playerData[index].name,
        playerData[index].gender,
        validateBirthday(playerData[index].birthday) ? playerData[index].birthday : '',
        isValidId(playerData[index].idNumber) ? playerData[index].idNumber : '',
        playerData[index].identity,
        playerData[index].school,
        playerData[index].department,
        playerData[index].grade,
        validateEmail(playerData[index].email) ? playerData[index].email : '',
        validatePhoneNumber(playerData[index].phone) ? playerData[index].phone : '',
        playerData[index].shirtSize,
      ]"
      :isSubmitting="isSubmitting"
      v-model:currentStepOrder="currentStepOrder"
      @submit="submit"
    >
      <TextQuestion title="*姓名" v-model="playerData[index].name" />

      <ChoiceQuestion
        title="*生理性別"
        :options="['男', '女']"
        v-model="playerData[index].gender"
      />

      <TextQuestion
        title="*生日（西元年月日 格式：20040101）"
        v-model="playerData[index].birthday"
        :verify-function="validateBirthday"
        verify-message="請輸入有效的生日格式（8位數字，例如：20040101）"
      />

      <TextQuestion
        title="*身分證字號"
        v-model="playerData[index].idNumber"
        :verify-function="isValidId"
        verify-message="請輸入有效的身分證或居留證"
      />

      <ChoiceQuestion
        title="*身份"
        :options="['學生', '社會人士']"
        v-model="playerData[index].identity"
      />

      <TextQuestion
        title="*就讀學校（填寫全名 e.g. 國立陽明交通大學）"
        v-model="playerData[index].school"
      />

      <TextQuestion
        title="*科系（填寫全名 e.g. 資訊工程學系）"
        v-model="playerData[index].department"
      />

      <TextQuestion
        title="*年級（格式：XXX年級 e.g. 大學三年級、碩士二年級、已畢業）"
        v-model="playerData[index].grade"
      />

      <TextQuestion title="職業（社會人士填寫）" v-model="playerData[index].occupation" />

      <TextQuestion
        title="*電子郵件信箱（格式：test@mail.com）"
        v-model="playerData[index].email"
        :verify-function="validateEmail"
        verify-message="請輸入有效的電子郵件格式（例如：test@mail.com）"
      />

      <TextQuestion
        title="*手機號碼（十碼數字 格式：0921234567）"
        v-model="playerData[index].phone"
        :verify-function="validatePhoneNumber"
        verify-message="請輸入有效的台灣手機號碼格式（09開頭，總共10碼數字）"
      />

      <TextQuestion title="特殊飲食習慣" v-model="playerData[index].dietaryRestrictions" />

      <ChoiceQuestion
        title="*衣服尺寸"
        :options="['XS', 'S', 'M', 'L', 'XL', '2XL']"
        referenceLink="https://drive.google.com/file/d/1Ys_c5HXW83OYPsSQK-GT3Wzm2ysvnOne/view"
        referenceLinkText="尺寸對照表"
        v-model="playerData[index].shirtSize"
      />

      <FileUpload title="清寒證明" v-model="playerData[index].lowIncomeProof"> </FileUpload>
    </FormItem>

    <FormItem
      :formStepOrder="totalStepOrder - 1"
      :total-step-order="totalStepOrder"
      stepName="填寫同意書"
      :required-values="[
        assentFirst === '是' ? assentFirst : '',
        assentSecond === '是' ? assentSecond : '',
      ]"
      :isSubmitting="isSubmitting"
      v-model:currentStepOrder="currentStepOrder"
      @submit="submit"
    >
      <ChoiceQuestion
        title="個人資料搜集、處理及利用之告知暨同意書"
        description="*我已詳細閱讀，並同意以上內容"
        pdf="1EJVi43Y9UDYwsnNVUaS4hCmnMa0KLQS5"
        :options="['是', '否']"
        v-model="assentFirst"
      ></ChoiceQuestion>
      <ChoiceQuestion
        title="智慧財產權聲明暨授權同意書"
        description="*我已詳細閱讀，並同意以上內容"
        pdf="1LWmoPGt23UOTZg1rVwLIbJplPw65UBMP"
        :options="['是', '否']"
        v-model="assentSecond"
      ></ChoiceQuestion>
    </FormItem>

    <FormItem
      :formStepOrder="totalStepOrder"
      :total-step-order="totalStepOrder"
      stepName="其他"
      :required-values="[otherAssent]"
      :isSubmitting="isSubmitting"
      v-model:currentStepOrder="currentStepOrder"
      @submit="submit"
    >
      <ChoiceQuestion
        title="為維護場地秩序與所有參賽者的權益，若發生以下情事，主辦單位將酌情不予退還個人保證金 200 元:"
        description="1. 隊內無人參加錄取企業或新竹市政府所辦理之賽前工作坊（若企業有開放線上參與，則隊內須至少一人參與線上或實體之賽前工作坊），且未有特殊理由，將扣除全隊每人之保證金。
        2. 未確實完成本活動之開、閉幕式或無故遲到超過 20 分鐘者（以簽到、簽退手續為準）。在活動場地違規飲食者，經工作人員勸導超過 3 次。
        3. 於活動期間，破壞任何活動場地內的設備，且必要時需負理賠責任。未於組別 Demo 規定時間報到、登記、上傳簡報檔者。
        4. 未遵守現場工作人員指示使用娛樂交流區相關設施者，且必要時需自負賠償責任。
        5. 擅自進入本活動場域內非開放之管制空間者。"
        :options="['已詳閱上述報名須知']"
        v-model="otherAssent"
      />
    </FormItem>
    <div class="h-10"></div>
  </div>
</template>
