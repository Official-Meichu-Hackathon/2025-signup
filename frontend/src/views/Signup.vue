<script setup>
import { ref, computed } from 'vue'
import '../assets/css/signup.css'
import TitleHeader from '../components/signup/TitleHeader.vue'
import StepCardsHeader from '../components/signup/StepCardsHeader.vue'
import FormItem from '../components/signup/form/FormItem.vue'
import TextQuestion from '../components/signup/form/TextQuestion.vue'
import ChoiceQuestion from '../components/signup/form/ChoiceQuestion.vue'
import SortableQuestion from '../components/signup/form/SortableQuestion.vue'

defineOptions({
  name: 'SignupPage',
})

const playerCount = ref(null)
const currentStepOrder = ref(1)
const totalStepOrder = computed(() => (playerCount.value || 5) + 3)

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
})

// from 同意

const assentFirst = ref(null)
const assentSecond = ref(null)

// from last: 其他
const fullParticipationInWorkshop = ref(null)
const fullParticipationInCeremony = ref(null)

const playerData = ref(Array.from({ length: 5 }, () => createPlayerData()))

const submit = async () => {
  const playersSlice = playerData.value.slice(0, playerCount.value)

  const firstRow = [
    null,
    groupName.value,
    playerCountChoice.value,
    isCrossDomain.value,
    priorityOrder.value.join(','),
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
        ]
      : []),
    assentFirst.value,
    assentSecond.value,
    fullParticipationInWorkshop.value,
    fullParticipationInCeremony.value,
  ]

  const otherRows = playersSlice
    .slice(1)
    .map((player) => [
      null,
      null,
      null,
      null,
      null,
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
    ])

  const formData = [firstRow, ...otherRows]

  try {
    const req = await fetch(import.meta.env.VITE_APP_SCRIPT_URL, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'text/plain',
      },
      redirect: 'follow',
    })

    console.log(await req.json())
  } catch (err) {
    console.log(err)
    alert('報名失敗，請直接用email聯絡我們: \n2025mchackathon@gmail.com\n造成您的不便，深感抱歉')
  }
}
</script>

<template>
  <div>
    <TitleHeader />
    <StepCardsHeader :playerCount="playerCount || 5" :currentStep="currentStepOrder" />
    <FormItem
      :formStepOrder="1"
      :totalStepOrder
      stepName="報名選項"
      :requiredValues="[groupName.length > 20 ? '' : groupName, playerCountChoice, isCrossDomain]"
      v-model:currentStepOrder="currentStepOrder"
      @submit="submit"
    >
      <TextQuestion title="*隊伍名稱（上限20字）" :maxLength="20" v-model="groupName" />

      <ChoiceQuestion
        title="*隊伍人數"
        :options="['3人', '4人', '5人']"
        v-model="playerCountChoice"
      />

      <ChoiceQuestion
        title="*跨域組隊"
        description="備註：符合以下任一條件，全隊報名費可減免 100 元
(1) 報名隊伍內有三個（含）以上不同科系
(2) 組內含高中職、大專院校生或碩博生、社會人士兩種（含）以上身份別之參賽者（限創客交流組）"
        :options="['是', '否']"
        v-model="isCrossDomain"
      />

      <SortableQuestion
        title="*組別或企業志願序"
        description="備註：
(1) 企業題目或組別將依據隊伍的志願序分發。若單一企業或組別超額，將亂數抽籤決定。
(2) 未報名創客交流組則將創客交流組的志願序填為 7。"
        :options="['CloudMosa', 'NXP', 'TSMC', 'Logitech', 'Google', 'AMD', '創客交流組']"
        v-model="priorityOrder"
      />
    </FormItem>

    <FormItem
      v-for="(step, index) in playerSteps"
      :key="step.stepOrder"
      :formStepOrder="step.stepOrder"
      :total-step-order
      :stepName="step.stepName"
      :required-values="[
        playerData[index].name,
        playerData[index].gender,
        playerData[index].birthday,
        playerData[index].idNumber,
        playerData[index].identity,
        playerData[index].school,
        playerData[index].department,
        playerData[index].grade,
        playerData[index].email,
        playerData[index].phone,
        playerData[index].shirtSize,
      ]"
      v-model:currentStepOrder="currentStepOrder"
      @sumbit="submit"
    >
      <TextQuestion title="*姓名" v-model="playerData[index].name" />

      <ChoiceQuestion
        title="*生理性別"
        :options="['男', '女']"
        v-model="playerData[index].gender"
      />

      <TextQuestion
        title="*生日（西元年月日）（格式：20040101））"
        v-model="playerData[index].birthday"
      />

      <TextQuestion title="*身分證字號" v-model="playerData[index].idNumber" />

      <ChoiceQuestion
        title="*身份"
        :options="['學生', '社會人士']"
        v-model="playerData[index].identity"
      />

      <TextQuestion
        title="*就讀學校（填寫全名 eg.國立陽明交通大學）"
        v-model="playerData[index].school"
      />

      <TextQuestion
        title="*科系（填寫全名 eg.資訊工程學系）"
        v-model="playerData[index].department"
      />

      <TextQuestion title="*年級" v-model="playerData[index].grade" />

      <TextQuestion title="職業（社會人士填寫）" v-model="playerData[index].occupation" />

      <TextQuestion title="*電子郵件信箱" v-model="playerData[index].email" />

      <TextQuestion title="*手機號碼" v-model="playerData[index].phone" />

      <TextQuestion title="特殊飲食習慣" v-model="playerData[index].dietaryRestrictions" />

      <ChoiceQuestion
        title="*衣服尺寸"
        :options="['S', 'M', 'L', 'XL']"
        v-model="playerData[index].shirtSize"
      />
    </FormItem>

    <FormItem
      :formStepOrder="totalStepOrder - 1"
      :total-step-order
      stepName="填寫同意書"
      :required-values="[]"
      v-model:currentStepOrder="currentStepOrder"
      @submit="submit"
    >
      <ChoiceQuestion
        title="個人資料搜集、處理及利用之告知暨同意書"
        description="*我已詳細閱讀，並同意以上內容"
        pdf="https://drive.google.com/file/d/1Fue0DaQIIW4R8TNXH4o9nLdgXUMy9rXH/view?usp=sharing"
        :options="['是', '否']"
        v-model="assentFirst"
      ></ChoiceQuestion>
      <ChoiceQuestion
        title="智慧財產權聲明暨授權同意書"
        description="*我已詳細閱讀，並同意以上內容"
        :options="['是', '否']"
        v-model="assentSecond"
      ></ChoiceQuestion>
    </FormItem>

    <FormItem
      :formStepOrder="totalStepOrder"
      :total-step-order
      stepName="其他"
      :required-values="[fullParticipationInWorkshop, fullParticipationInCeremony]"
      v-model:currentStepOrder="currentStepOrder"
      @submit="submit"
    >
      <ChoiceQuestion
        title="*是否全程參與工作坊"
        :options="['是', '否']"
        v-model="fullParticipationInWorkshop"
      />
      <ChoiceQuestion
        title="*是否全程參與開幕、閉幕"
        :options="['是', '否']"
        v-model="fullParticipationInCeremony"
      />
    </FormItem>
    <div class="h-10"></div>
  </div>
</template>
