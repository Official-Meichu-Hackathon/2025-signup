<template>
  <ProblemCard
    v-for="(card, index) in cards"
    :key="index"
    :logo="card.logo"
    :companyName="card.companyName"
    :problemTitle="card.problemTitle"
    :problemContent="card.problemContent"
    :problemLink="card.problemLink"
  />
</template>

<script setup>
import ProblemCard from './ProblemCard.vue'
import AMDLogo from '../../assets/Problems/Card/AMDlogo.svg'
import TSMCLogo from '../../assets/Problems/Card/TSMClogo.svg'
import CloudMosaLogo from '../../assets/Problems/Card/CloudMosalogo.svg'
import GoogleLogo from '../../assets/Problems/Card/Googlelogo.svg'
import LogitechLogo from '../../assets/Problems/Card/Logitechlogo.svg'
import NXPLogo from '../../assets/Problems/Card/NXPlogo.svg'

const cards = [
  {
    logo: AMDLogo,
    companyName: 'AMD',
    problemTitle: '題目',
    problemContent:
      '題目題目題目題目題目題目題目題目題目題目題目題目題目題目題目題目題目題目題目題目題目題目題目題目題目題目題目題目題目題目題目題目',
    problemLink: '',
  },
  {
    logo: TSMCLogo,
    companyName: 'TSMC',
    problemTitle: '題目',
    problemContent: '請描述問題內容',
    problemLink: '',
  },
  {
    logo: CloudMosaLogo,
    companyName: 'CloudMosa',
    problemTitle: '題目',
    problemContent: '請描述問題內容',
    problemLink: '',
  },
  {
    logo: GoogleLogo,
    companyName: 'Google',
    problemTitle: '題目',
    problemContent: '請描述問題內容',
    problemLink: '',
  },
  {
    logo: LogitechLogo,
    companyName: 'Logitech',
    problemTitle: '題目',
    problemContent: '請描述問題內容',
    problemLink: '',
  },
  {
    logo: NXPLogo,
    companyName: 'NXP',
    problemTitle: '題目',
    problemContent: '請描述問題內容',
    problemLink: '',
  },
]

defineOptions({
  name: 'ProblemCardGroup',
})
</script>
