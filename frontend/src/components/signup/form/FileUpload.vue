<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  accept: {
    type: Array,
    default: () => ['pdf', 'png', 'jpg', 'jpeg', 'webp', 'gif'],
  },
  maxSize: {
    type: Number,
    default: 10 * 1024 * 1024,
  },
})

const file = defineModel()

const isDragOver = ref(false)
const fileInput = ref(null)
const isUploading = ref(false)
const uploadError = ref(null)
const uploadSuccess = ref(false)

const handleDragOver = (e) => {
  e.preventDefault()
  isDragOver.value = true
}

const handleDragLeave = (e) => {
  e.preventDefault()
  isDragOver.value = false
}

const handleFileDrop = async (e) => {
  e.preventDefault()
  isDragOver.value = false

  await handleFile(e.dataTransfer.files[0])
}

const handleFileSelect = async (e) => {
  await handleFile(e.target.files[0])
}

const validateFile = (newFile) => {
  if (!newFile) {
    uploadError.value = '請選擇檔案'
    return false
  }

  if (newFile.size > props.maxSize) {
    uploadError.value = `檔案 ${newFile.name} 大小超過限制 (${formatFileSize(props.maxSize)})`
    return false
  }

  const fileExtension = newFile.name.split('.').pop()?.toLowerCase()
  if (!props.accept.includes(fileExtension)) {
    uploadError.value = `不支援的檔案格式。支援格式：${props.accept.join(', ')}`
    return false
  }

  return true
}

const handleFile = async (newFile) => {
  uploadError.value = null
  uploadSuccess.value = false

  if (!validateFile(newFile)) {
    return
  }

  file.value = newFile

  await uploadFile(newFile)
}

const uploadFile = async (fileToUpload) => {
  if (!import.meta.env.VITE_FILE_UPLOAD_URL) {
    uploadError.value = '檔案上傳連結未設置'
    return
  }

  isUploading.value = true
  uploadError.value = null

  try {
    let realFile
    const fileReader = new FileReader()
    fileReader.onload = async (e) => {
      realFile = e.target.result.replace(/^.*,/, '')
      const formData = new FormData()
      formData.append('file', realFile)
      formData.append('filename', fileToUpload.name)

      const response = await fetch(import.meta.env.VITE_FILE_UPLOAD_URL, {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        console.error(`上傳失敗: ${response.status} ${response.statusText}`)
        uploadError.value = '檔案上傳失敗，請重試'
      }

      const result = await response.json()
      uploadSuccess.value = true

      console.log('檔案上傳成功:', result)
    }
    fileReader.readAsDataURL(fileToUpload)
  } catch (error) {
    console.error('檔案上傳錯誤:', error)
    uploadError.value = error.message || '檔案上傳失敗，請重試'
  } finally {
    isUploading.value = false
  }
}

const removeFile = () => {
  file.value = null
  uploadError.value = null
  uploadSuccess.value = false
}

const triggerFileInput = () => {
  if (!isUploading.value) {
    fileInput.value?.click()
  }
}

const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`
}

const hasFile = computed(() => {
  return file.value !== null && file.value !== undefined
})
</script>

<template>
  <div class="py-4">
    <h3>{{ title }}</h3>
    <p v-if="description" class="mx-4 mt-2 whitespace-pre-line">{{ description }}</p>

    <div v-if="uploadError" class="mx-4 mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
      <p class="text-red-600 text-sm">{{ uploadError }}</p>
    </div>

    <div v-if="uploadSuccess" class="mx-4 mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
      <p class="text-green-600 text-sm">檔案上傳成功！</p>
    </div>

    <div
      class="mx-4 mt-3 border rounded-3xl p-6 text-center transition-all duration-300 cursor-pointer group"
      :class="{
        'border-white bg-darkblue': isDragOver,
        'border-darkblue bg-white hover:border-white hover:bg-darkblue':
          !hasFile && !isDragOver && !isUploading,
        'border-[#EBD5D880] bg-[#F4DAE1CC]': hasFile && !isDragOver,
        'border-gray-300 bg-gray-100 cursor-not-allowed': isUploading,
      }"
      @dragover="handleDragOver"
      @dragleave="handleDragLeave"
      @drop="handleFileDrop"
      @click="triggerFileInput"
    >
      <input
        ref="fileInput"
        type="file"
        :accept="accept.map((ext) => `.${ext}`).join(', ')"
        @change="handleFileSelect"
        :disabled="isUploading"
        class="hidden"
      />

      <div v-if="isUploading">
        <div class="mx-auto h-12 w-12 mb-4">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-darkblue"></div>
        </div>
        <p class="text-lg text-darkblue mb-2">上傳中...</p>
        <p class="text-sm text-gray-500">請稍候，檔案正在上傳</p>
      </div>

      <div v-else-if="!hasFile">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          class="mx-auto h-12 w-12 mb-4 fill-darkblue group-hover:fill-white"
          :class="{ 'fill-white': isDragOver }"
        >
          <path
            d="M342.6 73.4C330.1 60.9 309.8 60.9 297.3 73.4L169.3 201.4C156.8 213.9 156.8 234.2 169.3 246.7C181.8 259.2 202.1 259.2 214.6 246.7L288 173.3L288 384C288 401.7 302.3 416 320 416C337.7 416 352 401.7 352 384L352 173.3L425.4 246.7C437.9 259.2 458.2 259.2 470.7 246.7C483.2 234.2 483.2 213.9 470.7 201.4L342.7 73.4zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 480C96 533 139 576 192 576L448 576C501 576 544 533 544 480L544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480C480 497.7 465.7 512 448 512L192 512C174.3 512 160 497.7 160 480L160 416z"
          />
        </svg>
        <p
          class="text-lg not-hover:text-darkblue mb-2 group-hover:text-white"
          :class="{ 'text-white': isDragOver }"
        >
          拖移檔案到這裡 或 點擊選擇檔案
        </p>
        <p class="text-sm text-[#909090]">
          支援格式：{{ accept.join(', ') }} <br />
          檔案大小限制：{{ formatFileSize(maxSize) }}
        </p>
      </div>

      <div v-else>
        <svg
          class="mx-auto h-12 w-12 text-[#DB8396] mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p class="text-lg text-[#DB8396] font-medium">檔案已選擇</p>
        <p class="text-sm text-gray-500 mt-2">點擊此區域可以重新選擇檔案</p>
      </div>
    </div>

    <div v-if="hasFile" class="mx-4 mt-4">
      <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg border">
        <div class="flex items-center space-x-3">
          <svg class="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <div>
            <p class="font-medium text-gray-900">{{ file.name }}</p>
            <p class="text-sm text-gray-500">{{ formatFileSize(file.size) }}</p>
            <p v-if="uploadSuccess" class="text-sm text-green-600">✓ 上傳完成</p>
          </div>
        </div>
        <button
          @click.stop="removeFile"
          :disabled="isUploading"
          class="text-red-500 hover:text-red-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
