<template>
  <div class="flex justify-center relative w-full min-h-screen overflow-hidden">
    <div class="min-h-[calc(100vh-56px)] flex flex-col w-full">
      <div
        class="relative mx-auto title md:mt-[8vh] text-center text-[#2D3E63] font-black font-['Chiron_Hei_HK']"
      >
        <div class="relative">
          合作企業
          <img
            src="../../assets/Home/Ellipse-49.svg"
            alt="Ellipse-49"
            class="absolute blur-[40px] left-[90%] top-[-30%]"
          />
          <img
            src="../../assets/Home/sparkle-10-1.svg"
            alt="sparkle-10-1"
            class="absolute top-[-50%] left-[80%]"
          />
        </div>

        <!-- Desktop collaborators -->
        <div v-if="!isMobile">
          <div class="collaborators">
            <div class="collaborator-item">
              <a
                href="https://www.hccg.gov.tw/hccg/index"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  class="!w-[22vw]"
                  src="../../assets/Home/company/00_新竹市政府-01 1.svg"
                  alt="新竹市政府"
                />
              </a>
            </div>
            <div class="collaborator-item">
              <a
                href="https://www.facebook.com/share/1D5ppcCNFf/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  class="!w-[24vw]"
                  src="../../assets/Home/company/00_新竹市政府-01 2.svg"
                  alt="新竹市政府"
                />
              </a>
            </div>
          </div>
          <div class="collaborators">
            <div class="collaborator-item">
              <a href="https://www.cloudmosa.com/about" target="_blank" rel="noopener noreferrer">
                <img
                  class="!w-[22vw]"
                  src="../../assets/Home/company/CloudMosa logo digital_Primary logo 2.svg"
                  alt="CloudMosa"
                />
              </a>
            </div>
            <div class="collaborator-item">
              <a
                href="https://www.facebook.com/nxpsemitaiwan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  class="!w-[15vw]"
                  src="../../assets/Home/company/2_NXP_Colour-CMYK 1.svg"
                  alt="NXP"
                />
              </a>
            </div>
          </div>
          <div class="collaborators">
            <div class="collaborator-item">
              <a href="https://www.tsmc.com/chinese" target="_blank" rel="noopener noreferrer">
                <img class="!w-[15vw]" src="../../assets/Home/company/3_TSMC-01 1.svg" alt="TSMC" />
              </a>
            </div>
            <div class="collaborator-item">
              <a href="https://www.logitech.com/zh-tw" target="_blank" rel="noopener noreferrer">
                <img
                  class="!w-[25vw]"
                  src="../../assets/Home/company/4_Logitech 1.svg"
                  alt="Logitech"
                />
              </a>
            </div>
          </div>
          <div class="collaborators">
            <div class="collaborator-item">
              <a href="https://about.google/" target="_blank" rel="noopener noreferrer">
                <img
                  class="!w-[20vw]"
                  src="../../assets/Home/company/5_Google 1.svg"
                  alt="Google"
                />
              </a>
            </div>
            <div class="collaborator-item">
              <a href="https://www.amd.com/zh-tw.html" target="_blank" rel="noopener noreferrer">
                <img class="!w-[20vw]" src="../../assets/Home/company/6_AMD 1.svg" alt="AMD" />
              </a>
            </div>
          </div>
          <div class="collaborators !gap-0 special-coop">
            <div class="collaborator-item !w-[18vw] pl-[3vw] relative">
              特別合作企業
              <img
                src="../../assets/Home/sparkle-12-3.svg"
                alt=""
                class="sparkle-12-3 absolute top-[10%] left-[-50%] scale-[0.5] rotate-70"
              />
              <img
                src="../../assets/Home/sparkle-13-3.svg"
                alt=""
                class="sparkle-13-3 absolute left-[-130%] top-[-500%] scale-[0.4] rotate-70"
              />
            </div>
            <div class="collaborator-item">
              <a href="https://www.wtmec.com/" target="_blank" rel="noopener noreferrer">
                <img class="!w-[18vw]" src="../../assets/Home/company/7_文曄-02 1.svg" alt="文曄" />
              </a>
            </div>
          </div>
        </div>

        <!-- Mobile collaborators -->
        <div v-if="isMobile" class="mobile-collaborators">
          <div class="mobile-row">
            <a href="https://www.hccg.gov.tw/hccg/index" target="_blank" rel="noopener noreferrer">
              <img
                class="mobile-img"
                src="../../assets/Home/company/00_新竹市政府-01 1.svg"
                alt="新竹市政府"
              />
            </a>
            <a
              href="https://www.facebook.com/share/1D5ppcCNFf/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                class="mobile-img"
                src="../../assets/Home/company/00_新竹市政府-01 2.svg"
                alt="新竹市政府"
              />
            </a>
          </div>
          <div class="mobile-row">
            <a href="https://www.cloudmosa.com/about" target="_blank" rel="noopener noreferrer">
              <img
                class="mobile-img"
                src="../../assets/Home/company/CloudMosa logo digital_Primary logo 2.svg"
                alt="CloudMosa"
              />
            </a>
            <a
              href="https://www.facebook.com/nxpsemitaiwan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                class="mobile-img !w-[28vw]"
                src="../../assets/Home/company/2_NXP_Colour-CMYK 1.svg"
                alt="NXP"
              />
            </a>
          </div>
          <div class="mobile-row">
            <a href="https://www.tsmc.com/chinese" target="_blank" rel="noopener noreferrer">
              <img
                class="mobile-img !w-[30vw]"
                src="../../assets/Home/company/3_TSMC-01 1.svg"
                alt="TSMC"
              />
            </a>
            <a href="https://www.logitech.com/zh-tw" target="_blank" rel="noopener noreferrer">
              <img
                class="mobile-img !w-[40vw]"
                src="../../assets/Home/company/4_Logitech 1.svg"
                alt="Logitech"
              />
            </a>
          </div>
          <div class="mobile-row">
            <a href="https://about.google/" target="_blank" rel="noopener noreferrer">
              <img
                class="mobile-img !w-[30vw]"
                src="../../assets/Home/company/5_Google 1.svg"
                alt="Google"
              />
            </a>
            <a href="https://www.amd.com/zh-tw.html" target="_blank" rel="noopener noreferrer">
              <img
                class="mobile-img !w-[30vw]"
                src="../../assets/Home/company/6_AMD 1.svg"
                alt="AMD"
              />
            </a>
          </div>
          <div class="mobile-special-coop">
            <span class="special-text">特別合作企業</span>
            <a href="https://www.wtmec.com/" target="_blank" rel="noopener noreferrer">
              <img class="mobile-img" src="../../assets/Home/company/7_文曄-02 1.svg" alt="文曄" />
            </a>
          </div>
        </div>

        <div>網路贊助</div>
        <div v-if="isMobile" class="collaborators my-4">
          <div class="collaborator-item">
            <img class="!w-[20vw]" src="../../assets/Home/chunghwa.svg" alt="中華電信" />
          </div>
        </div>

        <div v-if="!isMobile" class="collaborators">
          <div class="collaborator-item">
            <a href="https://www.chunghwa.com.tw/" target="_blank" rel="noopener noreferrer">
              <img class="!w-[20vw]" src="../../assets/Home/chunghwa.svg" alt="中華電信" />
            </a>
          </div>
        </div>

        <div class="relative">
          贊助企業

          <img
            src="../../assets/Home/6star-14-1.svg"
            alt="6star-14-1"
            class="absolute left-[55%] bottom-[63%]"
          />
        </div>

        <div class="marquee-sponsors mx-auto overflow-hidden whitespace-nowrap w-[60vw]">
          <div class="marquee-content flex-shrink-0">
            <!-- Diamond Sponsor -->
            <div class="sponsor-item">
              <span v-if="!isMobile" class="sponsor-level">Diamond</span>
              <span v-if="isMobile" class="sponsor-level" style="margin-left: 0.5rem">Diamond</span>
              <img
                v-if="!isMobile"
                class="inline-block"
                style="transform: scale(2.8); padding-top: 0.8rem"
                src="../../assets/Home/sponsors/JUMBO_diamond.webp"
                alt="JUMBO"
              />
              <img
                v-else
                class="inline-block"
                style="transform: scale(2.5); padding-top: 0.1rem"
                src="../../assets/Home/sponsors/JUMBO_diamond.webp"
                alt="JUMBO"
              />
            </div>

            <!-- Platinum Sponsor -->
            <div class="sponsor-item">
              <span class="sponsor-level">Platinum</span>
              <img
                class="inline-block"
                src="../../assets/Home/sponsors/Cathay_platinum.webp"
                alt="Cathay"
              />
            </div>

            <!-- Gold Sponsor -->
            <div class="sponsor-item">
              <span v-if="!isMobile" class="sponsor-level" style="margin-left: 2rem">Gold</span>
              <span v-else class="sponsor-level" style="margin-left: 1rem; margin-bottom: 0.4rem"
                >Gold</span
              >

              <img
                v-if="!isMobile"
                class="inline-block"
                style="padding-top: 1rem"
                src="../../assets/Home/sponsors/91APP_gold.webp"
                alt="91APP"
              />
              <img
                v-else
                class="inline-block"
                style="padding-top: 0.5rem"
                src="../../assets/Home/sponsors/91APP_gold.webp"
                alt="91APP"
              />
            </div>

            <!-- Silver Sponsor 1 -->
            <div class="sponsor-item">
              <span class="sponsor-level" style="margin-left: -1rem">Silver</span>
              <img
                class="inline-block"
                style="transform: scale(0.95)"
                src="../../assets/Home/sponsors/Phison_silver1.webp"
                alt="Phison"
              />
            </div>

            <!-- Silver Sponsor 2 -->
            <div class="sponsor-item">
              <span v-if="!isMobile" class="sponsor-level">Silver</span>
              <span v-else class="sponsor-level" style="margin-left: 1rem">Silver</span>

              <img
                class="inline-block"
                style="transform: scale(1.5); margin: 0 2rem 0 2rem"
                src="../../assets/Home/sponsors/Pixart_silver2.webp"
                alt="Pixart"
              />
            </div>

            <!-- Bronze Sponsor -->
            <div class="sponsor-item">
              <span class="sponsor-level">Bronze</span>
              <img
                class="inline-block"
                src="../../assets/Home/sponsors/Ctbc_bronze.webp"
                alt="CTBC"
              />
            </div>
          </div>
          <div class="marquee-content flex-shrink-0">
            <!-- Diamond Sponsor -->
            <div class="sponsor-item">
              <span v-if="!isMobile" class="sponsor-level">Diamond</span>
              <span v-if="isMobile" class="sponsor-level" style="margin-left: 0.5rem">Diamond</span>
              <img
                v-if="!isMobile"
                class="inline-block"
                style="transform: scale(3); padding-top: 0.8rem"
                src="../../assets/Home/sponsors/JUMBO_diamond.webp"
                alt="JUMBO"
              />
              <img
                v-else
                class="inline-block"
                style="transform: scale(2.5); padding-top: 0.1rem"
                src="../../assets/Home/sponsors/JUMBO_diamond.webp"
                alt="JUMBO"
              />
            </div>

            <!-- Platinum Sponsor -->
            <div class="sponsor-item">
              <span class="sponsor-level">Platinum</span>
              <img
                class="inline-block"
                src="../../assets/Home/sponsors/Cathay_platinum.webp"
                alt="Cathay"
              />
            </div>

            <!-- Gold Sponsor -->
            <div class="sponsor-item">
              <span v-if="!isMobile" class="sponsor-level" style="margin-left: 2rem">Gold</span>
              <span v-else class="sponsor-level" style="margin-left: 1rem; margin-bottom: 0.4rem"
                >Gold</span
              >

              <img
                v-if="!isMobile"
                class="inline-block"
                style="padding-top: 1rem"
                src="../../assets/Home/sponsors/91APP_gold.webp"
                alt="91APP"
              />
              <img
                v-else
                class="inline-block"
                style="padding-top: 0.5rem"
                src="../../assets/Home/sponsors/91APP_gold.webp"
                alt="91APP"
              />
            </div>

            <!-- Silver Sponsor 1 -->
            <div class="sponsor-item">
              <span class="sponsor-level" style="margin-left: -1rem">Silver</span>
              <img
                class="inline-block"
                style="transform: scale(0.95)"
                src="../../assets/Home/sponsors/Phison_silver1.webp"
                alt="Phison"
              />
            </div>

            <!-- Silver Sponsor 2 -->
            <div class="sponsor-item">
              <span v-if="!isMobile" class="sponsor-level">Silver</span>
              <span v-else class="sponsor-level" style="margin-left: 1rem">Silver</span>

              <img
                class="inline-block"
                style="transform: scale(1.5); margin: 0 2rem 0 2rem"
                src="../../assets/Home/sponsors/Pixart_silver2.webp"
                alt="Pixart"
              />
            </div>

            <!-- Bronze Sponsor -->
            <div class="sponsor-item">
              <span class="sponsor-level">Bronze</span>
              <img
                class="inline-block"
                src="../../assets/Home/sponsors/Ctbc_bronze.webp"
                alt="CTBC"
              />
            </div>
          </div>
        </div>

        <div class="relative">
          特殊贊助

          <img
            src="../../assets/Home/6star-14-2.svg"
            alt="6star-14-2"
            class="absolute left-[38%] bottom-[50%]"
          />
        </div>

        <div class="marquee-sponsors mx-auto flex justify-center w-[60vw]">
          <div class="marquee-content-special-sponsor flex-shrink-0">
            <!-- First set of sponsors -->
            <div class="sponsor-item">
              <span class="sponsor-level" style="margin-left: -0.4rem">Platinum</span>
              <img
                class="inline-block"
                src="../../assets/Home/special_sponsors/BABI_platinum.webp"
                alt="BABI"
              />
            </div>
            <div class="sponsor-item">
              <span class="sponsor-level" style="margin-left: 1.4rem">Silver</span>
              <img
                class="inline-block"
                src="../../assets/Home/special_sponsors/GCOMM_silver.webp"
                alt="GCOMM"
              />
            </div>
          </div>

          <!-- Duplicate set for seamless loop -->
          <!-- <div class="marquee-content-special-sponsor flex-shrink-0">
            <div class="sponsor-item">
              <span class="sponsor-level" style="margin-left: -0.2rem;">Platinum</span>

              <img
                class="inline-block"
                src="../../assets/Home/special_sponsors/BABI_platinum.webp"
                alt="BABI"
              />
            </div>
            <div class="sponsor-item">
              <span class="sponsor-level" style="margin-left: 0.4rem;">Silver</span>
              <img
                class="inline-block"
                src="../../assets/Home/special_sponsors/GCOMM_silver.webp"
                alt="GCOMM"
              />
            </div>
          </div> -->
        </div>

        <div class="relative">
          媒體合作
          <img
            src="../../assets/Home/sparkle-5-05-2.svg"
            alt="sparkle-5-05-2"
            class="absolute left-[58%] top-[-10%]"
          />
        </div>

        <div class="marquee-sponsors mx-auto overflow-hidden whitespace-nowrap w-[60vw]">
          <div class="marquee-content-media flex-shrink-0">
            <div class="sponsor-item">
              <span class="sponsor-level">Diamond</span>
              <img
                class="inline-block"
                src="../../assets/Home/media/newstaiwan_diamond.svg"
                alt="科技新報"
              />
            </div>
            <div class="sponsor-item">
              <span class="sponsor-level">Platinum</span>
              <img
                class="inline-block"
                src="../../assets/Home/media/ettoday_platinum.svg"
                alt="數位時代"
              />
            </div>
          </div>

          <!-- Second part of marquee-->
          <div class="marquee-content-media flex-shrink-0">
            <div class="sponsor-item">
              <span class="sponsor-level">Diamond</span>
              <img
                class="inline-block"
                src="../../assets/Home/media/newstaiwan_diamond.svg"
                alt="科技新報"
              />
            </div>
            <div class="sponsor-item">
              <span class="sponsor-level">Platinum</span>
              <img
                class="inline-block"
                src="../../assets/Home/media/ettoday_platinum.svg"
                alt="數位時代"
              />
            </div>
          </div>

          <div class="marquee-content-media flex-shrink-0">
            <div class="sponsor-item">
              <span class="sponsor-level">Diamond</span>
              <img
                class="inline-block"
                src="../../assets/Home/media/newstaiwan_diamond.svg"
                alt="科技新報"
              />
            </div>
            <div class="sponsor-item">
              <span class="sponsor-level">Platinum</span>
              <img
                class="inline-block"
                src="../../assets/Home/media/ettoday_platinum.svg"
                alt="數位時代"
              />
            </div>
          </div>
        </div>
        <div class="relative">
          協辦單位
          <img
            class="red-back absolute top-[-150%] left-[42%] w-[15vw] blur-[20px]"
            src="../../assets/Home/red-back.svg"
            alt="red-back"
          />
          <img
            class="blue-back absolute top-[-100%] left-[43%] w-[15vw] blur-[20px]"
            src="../../assets/Home/blue-back.svg"
            alt="blue-back"
          />
          <img
            class="absolute w-[8vw] bottom-[20%] left-[35%]"
            src="../../assets/Home/star-02-02-1.svg"
            alt="star-02-02-1"
          />
        </div>

        <div
          class="w-[80vw] mx-auto mt-[2vh] mb-[7vh] flex flex-row justify-around co-organizer-logos"
        >
          <div
            class="mt-[2vh] w-[28vw] flex flex-col justify-center text-[black] co-organizer-text"
          >
            <div class="font-bold text-[1.8vw]">國立陽明交通大學資訊工程學系</div>
            <div class="font-bold text-[0.7vw]">
              Department of Computer Science, National Yang Ming Chiao Tung University
            </div>
          </div>
          <img
            class="w-[23vw]"
            src="../../assets/Home/company/NCTU-foundation.svg"
            alt="NCTU-foundation"
          />
          <img class="w-[23vw]" src="../../assets/Home/company/ita.svg" alt="ita" />
        </div>
      </div>

      <div
        class="relative mx-auto title mt-[2vh] text-center text-[#2D3E63] font-black font-['Chiron_Hei_HK']"
      >
        特別感謝
        <img
          class="absolute w-[13vw] left-[53%] top-[-180%]"
          src="../../assets/Home/star-06-2.svg"
          alt="star-06-2"
        />
      </div>

      <div
        class="text-[1.8vw] mx-auto flex flex-col text-[black] font-bold font-['Chiron_Hei_HK'] text-list"
      >
        <div class="mt-[5vh] w-[80vw] flex flex-row justify-around co-organizers">
          <div>國立陽明交通大學產學運籌中心</div>
          <div>國立陽明交通大學電機工程學系</div>
          <div>國立清華大學資訊工程學系</div>
        </div>

        <div
          class="pl-[3vw] mx-auto mt-[4vh] w-[63vw] flex flex-row justify-between special-thanks-list"
        >
          <div>國立清華大學電機資訊學院學士班</div>
          <div>國立清華大學清華學院學士班系學會</div>
        </div>

        <div class="mx-auto mt-[4vh] w-[45vw] pr-[5vw] flex flex-row justify-between">
          <div>國立清華大學資訊科學研究社</div>
          <div>Colde Garage</div>
        </div>

        <div class="mb-[5vh]"></div>
      </div>

      <div
        class="mx-auto title mt-[2vh] text-center text-[#2D3E63] font-black font-['Chiron_Hei_HK']"
      >
        企業廣告
      </div>
      <div class="mt-[8vh] mb-[10vh] mx-auto w-[65vw] h-[70vh] bg-neutral-100 ad-placeholder"></div>

      <div
        class="mx-auto title relative mt-[2vh] text-center text-[#2D3E63] font-black font-['Chiron_Hei_HK']"
      >
        Youtube 影片

        <div>
          <img
            src="../../assets/Home/sparkle-12-3.svg"
            alt="sparkle-12-3"
            class="z-2 sparkle-12-3 absolute left-[92%] bottom-[100%]"
          />
          <img
            src="../../assets/Home/sparkle-13-3.svg"
            alt="sparkle-13-3"
            class="z-2 sparkle-13-3 absolute left-[88%] top-[-10%]"
          />
        </div>
      </div>

      <div
        class="relative flex justify-center mt-[8vh] mb-[20vh] mx-auto w-[65vw] h-[70vh] bg-neutral-100 video-placeholder"
        @click="Play = !Play"
      >
        <img v-show="!Play" src="../../assets/Home/play_circle.svg" alt="play_circle" />

        <img
          class="absolute top-[95%] right-[95%]"
          src="../../assets/Home/6star-14-3.svg"
          alt="6star-14-3"
        />
        <img
          class="absolute top-[105%] right-[90%]"
          src="../../assets/Home/6star-14-4.svg"
          alt="6star-14-4"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'

defineOptions({
  name: 'BottomSection',
})

const Play = ref(false)
const isMobile = ref(false)

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkMobile)
})

watch(Play, (newVal) => {
  newVal
})
</script>

<style scoped>
.title {
  width: 90vw;
  font-size: 2.5vw;
}

.container {
  border: red solid 3px;
}

.collaborators {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5rem;
}

.collaborator-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25vw;
  height: auto;
}

.collaborators img {
  max-width: 100%;
  width: 25vw;
  margin-bottom: 3vw;
  height: auto;
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
/* working on flickering marquee */
.marquee-sponsors {
  display: flex;
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: 4rem;
  margin-top: 4rem;
}

.marquee-content {
  animation-duration: 18s;
  animation-iteration-count: infinite;
  animation-name: marquee;
  animation-timing-function: linear;
  padding: 5px 0px 5px 0px;
}

/* Add this to your existing CSS */
.marquee-content-special-sponsor {
  animation-iteration-count: infinite;
  animation-name: marquee;
  animation-timing-function: linear;
  padding: 5px 0px 5px 0px;
}

.marquee-content-media {
  animation-duration: 6s; /* Half the speed of the normal 12s */
  animation-iteration-count: infinite;
  animation-name: marquee;
  animation-timing-function: linear;
  padding: 5px 0px 5px 0px;
}
.sponsor-item {
  position: relative;
  display: inline-block;
  margin: 0 0.5rem; /* Adjust spacing between logos */
}

.sponsor-item img {
  width: 20vw; /* Set consistent width */
  height: 12vw; /* Set consistent height */
  object-fit: contain; /* Scale to fit while maintaining aspect ratio */
  object-position: center; /* Center the image */
}

.sponsor-level {
  position: absolute;
  top: -1px; /* Position at the very top */
  left: 8%;
  color: black;

  font-size: 1.1vw;
  font-weight: 600;
  z-index: 1;
  white-space: nowrap; /* Prevent text from wrapping */
}

@keyframes color-shift {
  0%,
  100% {
    filter: hue-rotate(0deg); /* red */
    opacity: 1;
  }
  25% {
    filter: hue-rotate(180deg); /* blue */
    opacity: 1;
  }
  50% {
    filter: hue-rotate(180deg);
    opacity: 0;
  }
  75% {
    filter: hue-rotate(0deg);
    opacity: 0;
  }
}

.animate-color-shift {
  animation: color-shift 4s infinite;
}

.red-back {
  animation: blink1 4s infinite;
  /* transition: ease-in-out; */
}
.blue-back {
  animation: blink2 4s infinite;
  /* transition: ease-in-out; */
}

@keyframes blink1 {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

@keyframes blink2 {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

.collaborators a img,
.collaborators img.cursor-pointer {
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}

.collaborators a:hover img,
.collaborators img.cursor-pointer:hover {
  transform: scale(1.02);
  opacity: 0.8;
}

/* Mobile collaborators styles */
.mobile-collaborators {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
}

.mobile-row {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.mobile-img {
  width: 35vw; /* Keep this for responsive scaling */
  max-width: 150px; /* Add a max-width in pixels */
  margin-bottom: 3vw;
  height: auto;
}

.mobile-img:hover {
  transform: scale(1.02);
  opacity: 0.8;
}

.mobile-special-coop {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.special-text {
  font-size: 4vw;
  font-weight: bold;
  text-align: center;
}

.sparkle-12-3 {
  transform-origin: top center;
  animation: animSparkle-12-3 6s infinite;
}

.sparkle-13-3 {
  transform-origin: bottom center;
  animation: animSparkle-13-3 6s infinite;
}

@keyframes animSparkle-12-3 {
  0% {
    transform: translateX(-50%) scale(1);
  }
  25% {
    transform: translateX(-50%) scale(1.3);
  }
  40% {
    transform: translateX(-50%) scale(1);
  }
  50% {
    transform: translateX(-50%) scale(1);
  }
  70% {
    transform: translateX(-50%) scale(0.7);
  }
  80% {
    transform: translateX(-50%) scale(0.7);
  }
  100% {
    transform: translateX(-50%) scale(1);
  }
}

@keyframes animSparkle-13-3 {
  0% {
    transform: translateX(-50%) scale(1);
  }
  25% {
    transform: translateX(-50%) scale(0.8);
  }
  40% {
    transform: translateX(-50%) scale(1);
  }
  50% {
    transform: translateX(-50%) scale(1);
  }
  70% {
    transform: translateX(-50%) scale(1.3);
  }
  80% {
    transform: translateX(-50%) scale(1.3);
  }
  100% {
    transform: translateX(-50%) scale(1);
  }
}

/* Hide desktop collaborators on mobile */
@media (max-width: 768px) {
  .title {
    font-size: 6vw;
    font-weight: 600;
  }

  .marquee-sponsors {
    width: 80vw;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .sponsor-item {
    margin: 0 0rem;
    display: inline-block;
  }

  .sponsor-item img {
    width: 35vw;
    height: 22vw;
  }

  .sponsor-level {
    font-size: 2.5vw;
  }

  .co-organizer-logos {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .co-organizer-text {
    width: 80vw;
    text-align: center;
  }

  .co-organizer-text .font-bold.text-\[1\.8vw\] {
    font-size: 4vw;
  }

  .co-organizer-text .font-bold.text-\[0\.7vw\] {
    font-size: 2.5vw;
  }

  .co-organizer-logos img {
    width: 50vw;
  }

  .text-list {
    font-size: 3.5vw;
  }

  .co-organizers,
  .special-thanks-list {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    width: 100%;
    text-align: center;
  }

  .ad-placeholder,
  .video-placeholder {
    width: 75vw;
    height: 30vh;
  }
}
</style>
