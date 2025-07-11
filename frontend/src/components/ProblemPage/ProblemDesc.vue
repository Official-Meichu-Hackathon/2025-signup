<template>
  <Background>
    <!-- <div class="problem-container">
      <div class="problem-content">
        <h1 class="problem-title">題目說明</h1>
        <div class="problem-section">
          <h2>背景</h2>
          <p>
            梅竹黑客松是一個結合清華大學與交通大學的創新競賽活動，旨在促進學生創意發想與實踐能力...
          </p>
        </div>
        <div class="problem-section">
          <h2>挑戰</h2>
          <p>本次競賽要求參賽者開發一個創新的解決方案，針對以下問題...</p>
        </div>
        <div class="problem-section">
          <h2>要求</h2>
          <ul>
            <li>開發一個完整的前後端系統</li>
            <li>使用現代化框架與技術</li>
            <li>確保系統的安全性與可擴展性</li>
            <li>提供清晰的文檔與使用說明</li>
          </ul>
        </div>
      </div>
    </div> -->
  </Background>
</template>

<script setup>
import Background from '../ProblemPage/Background.vue'

defineOptions({
  name: 'ProblemDesc',
  components: {
    Background,
  },
})
</script>

<style scoped>
.problem-container {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
}

.problem-content {
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
  border-radius: 12px;
  padding: 2rem;
  width: 100%;
  color: #f4f5f5;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.problem-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #ffd700;
}

.problem-section {
  margin-bottom: 2rem;
}

.problem-section h2 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #7dd3fc;
}

.problem-section p {
  line-height: 1.6;
  margin-bottom: 1rem;
}

.problem-section ul {
  padding-left: 1.5rem;
  list-style-type: disc;
}

.problem-section li {
  margin-bottom: 0.5rem;
}
</style>
