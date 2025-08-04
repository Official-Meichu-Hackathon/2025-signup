const countyCode = {
  A: '10', // 台北市
  B: '11', // 台中市
  C: '12', // 基隆市
  D: '13', // 台南市
  E: '14', // 高雄市
  F: '15', // 新北市
  G: '16', // 宜蘭縣
  H: '17', // 桃園市
  I: '34', // 嘉義市 (省轄)
  J: '18', // 新竹縣
  K: '19', // 苗栗縣
  L: '20', // 台中縣 (停發)
  M: '21', // 南投縣
  N: '22', // 彰化縣
  O: '35', // 新竹市 (省轄)
  P: '23', // 雲林縣
  Q: '24', // 嘉義縣
  R: '25', // 台南縣 (停發)
  S: '26', // 高雄縣 (停發)
  T: '27', // 屏東縣
  U: '28', // 花蓮縣
  V: '29', // 台東縣
  W: '32', // 金門縣
  X: '30', // 澎湖縣
  Y: '31', // 陽明山 (停發)
  Z: '33', // 連江縣
}

// 身分證字號
// e.g. 'A123456789'
// 第一碼換成區域代碼
// 共 11 碼用權重相加，應為 10 的倍數
function isNationalIdNumberValid(id) {
  const regex = /^([A-Z])[1,2]\d{8}$/
  if (typeof id !== 'string') return false
  if (!regex.test(id)) return false

  const county = id.match(regex)[1]
  const code = id.replace(county, countyCode[county])

  const multiplier = [1, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1]
  const evaluateValue = code.split('').reduce((prev, curr, idx) => prev + curr * multiplier[idx], 0)

  const isValid = evaluateValue % 10 === 0
  return isValid
}

// 新制居留證，民國 110/01/02 啟用
// e.g. 'A800000014'
// 第一碼 區域碼; 第二碼 性別碼 8,9; 第三至九碼 流水號; 第十碼 檢查碼
// 第一碼換成區域代碼
// 共 11 碼，前十碼 乘以權重後取個位數 再相加 得到基數
// 10 - 基數的個位數 = 最後一碼檢查碼 (如果基數的個位數是 0，則檢查碼為 0)
function isNewResidenceCertificateNumberValid(id) {
  const regex = /^([A-Z])[8,9]\d{8}$/
  if (typeof id !== 'string') return false
  if (!regex.test(id)) return false

  const county = id.match(regex)[1]
  const code = id.replace(county, countyCode[county])

  const codeArr = code.split('').map((c) => parseInt(c, 10))
  const evaluationValue = codeArr.splice(-1, 1)[0]
  const multiplier = [1, 9, 8, 7, 6, 5, 4, 3, 2, 1]
  const base = codeArr.reduce((prev, curr, idx) => prev + ((curr * multiplier[idx]) % 10), 0)
  const evaluationCode = base % 10 === 0 ? 0 : 10 - (base % 10)

  const isValid = evaluationCode === evaluationValue
  return isValid
}

// 舊制居留證，民國 120/01/01 起停用
// e.g. 'AD1994479'
// 第一碼 區域碼; 第二碼 性別碼 ABCD; 第三至九碼 流水號; 第十碼 檢查碼
// 第一碼換成區域代碼
// 第二碼換成區域代碼取個位數
// 共 11 碼用權重相加，應為 10 的倍數
function isOldResidenceCertificateNumberValid(id) {
  const regex = /^([A-Z])([A,B,C,D])\d{8}$/
  if (typeof id !== 'string') return false
  if (!regex.test(id)) return false

  const county = id.match(regex)[1]
  const sex = id.match(regex)[2]
  const code = id.replace(
    `${county}${sex}`,
    `${countyCode[county]}${parseInt(countyCode[sex], 10) % 10}`
  )

  const multiplier = [1, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1]
  const evaluateValue = code.split('').reduce((prev, curr, idx) => prev + curr * multiplier[idx], 0)

  const isValid = evaluateValue % 10 === 0
  return isValid
}

function isResidenceCertificateNumberValid(id) {
  return isNewResidenceCertificateNumberValid(id) || isOldResidenceCertificateNumberValid(id)
}

const isValidId = (id) => isResidenceCertificateNumberValid(id) || isNationalIdNumberValid(id)

export { isValidId, isNationalIdNumberValid, isResidenceCertificateNumberValid }
