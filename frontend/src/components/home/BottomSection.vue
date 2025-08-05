<template>
  <div id="sponsors"></div>

  <div class="flex justify-center relative w-full min-h-screen overflow-hidden">
    <div class="min-h-[calc(100vh-56px)] flex flex-col w-full">
      <div
        class="relative mx-auto title md:mt-[8vh] text-center text-[#2D3E63] font-black font-['Chiron_Hei_HK']"
      >
        <div class="relative">
          合作企業
          <!-- <img
            src="../../assets/Home/Ellipse-49.svg"
            alt="Ellipse-49"
            class="absolute blur-[40px] left-[90%] top-[-30%]"
          /> -->

          <div v-if="!isMobile">
            <!-- pink to blue ( 漸變 1 ) -->
            <div v-if="!isMobile" class="absolute blur-[40px] left-[90%] top-[-30%]">
              <svg
                width="330"
                height="510"
                viewBox="0 0 330 510"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_f_700_1208)">
                  <circle cx="165" cy="165" r="145" fill="#E1ACB7">
                    <animate
                      attributeName="fill"
                      values="#E1ACB7;#D3E4FC;#E1ACB7"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
                <defs>
                  <filter
                    id="filter0_f_700_1208"
                    x="-180"
                    y="-180"
                    width="690"
                    height="690"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_700_1208" />
                  </filter>
                </defs>
              </svg>
            </div>
            <img
              v-if="!isMobile"
              src="../../assets/Home/sparkle-10-1.svg"
              alt="sparkle-10-1"
              class="absolute top-[-50%] left-[80%]"
            />
          </div>
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
                  src="../../assets/Home/company/00_新竹市政府-01 1.webp"
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
                  src="../../assets/Home/company/00_新竹市政府-01 2.webp"
                  alt="新竹市政府"
                />
              </a>
            </div>
          </div>
          <div class="collaborators">
            <div class="collaborator-item">
              <a href="https://www.cloudmosa.com/jobs" target="_blank" rel="noopener noreferrer">
                <img
                  class="!w-[22vw]"
                  src="../../assets/Home/company/CloudMosa logo digital_Primary logo 2.webp"
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
                  src="../../assets/Home/company/2_NXP_Colour-CMYK 1.webp"
                  alt="NXP"
                />
              </a>
            </div>
          </div>
          <div class="collaborators">
            <div class="collaborator-item">
              <a href="https://www.tsmc.com/chinese" target="_blank" rel="noopener noreferrer">
                <img
                  class="!w-[15vw]"
                  src="../../assets/Home/company/3_TSMC-01 1.webp"
                  alt="TSMC"
                />
              </a>
            </div>
            <div class="collaborator-item">
              <a href="https://www.logitech.com/zh-tw" target="_blank" rel="noopener noreferrer">
                <img
                  class="!w-[25vw]"
                  src="../../assets/Home/company/4_Logitech 1.webp"
                  alt="Logitech"
                />
              </a>
            </div>
          </div>
          <div class="collaborators">
            <div class="collaborator-item">
              <a
                href="https://www.google.com/about/careers/applications/jobs/results/?location=Taiwan&utm_source=partnership&utm_medium=website&utm_campaign=tw_campus_outreach&src=Online/TOPs/campus-partnership"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  class="!w-[24vw]"
                  src="../../assets/Home/company/5_Google 1.webp"
                  alt="Google"
                />
              </a>
            </div>
            <div class="collaborator-item">
              <a
                href="https://www.amd.com/zh-tw/products/processors/laptop/ryzen.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img class="!w-[20vw]" src="../../assets/Home/company/6_AMD 1.webp" alt="AMD" />
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
              <!-- color change ( 漸變 2 ) -->
              <div
                v-if="!isMobile"
                class="z-0 blur-[20px] pointer-events-none absolute left-[-240%] bottom-[100%] w-[50vw] h-[80vh]"
              >
                <!-- frame1 -->
                <div
                  class="absolute inset-0 transition-opacity duration-[1500ms]"
                  :class="{ 'opacity-100': current === 0, 'opacity-0': current !== 0 }"
                >
                  <svg viewBox="0 0 470 635" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_674_598)">
                      <path
                        d="M268.878 401.641C272.524 449.979 206.064 481.635 144.895 467.58C28.749 439.735 16.423 251.861 71.4731 232.255C113.546 217.271 143.789 297.548 172.347 321.893C201.23 346.517 264.461 343.062 268.878 401.641Z"
                        fill="#7B8EBF"
                      />
                    </g>
                    <g filter="url(#filter1_f_674_598)">
                      <path
                        d="M269.752 113.402C269.752 62.3403 214.252 -12.5984 119.252 35.4006C24.2518 83.3996 4.26725 310.015 63.2521 338.402C143.252 376.902 163.752 277.403 175.752 231.902C187.737 186.456 269.752 182.402 269.752 113.402Z"
                        fill="#EBD5D8"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_674_598"
                        x="-160.115"
                        y="30.4062"
                        width="629.137"
                        height="640.529"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="100"
                          result="effect1_foregroundBlur_674_598"
                        />
                      </filter>
                      <filter
                        id="filter1_f_674_598"
                        x="-170"
                        y="-180"
                        width="639.752"
                        height="727.074"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="100"
                          result="effect1_foregroundBlur_674_598"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>

                <!-- frame2 -->
                <div
                  class="absolute inset-0 transition-opacity duration-[1500ms]"
                  :class="{ 'opacity-100': current === 1, 'opacity-0': current !== 1 }"
                >
                  <svg viewBox="0 0 638 635" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_674_600)">
                      <path
                        d="M377.337 487.465C344.515 523.138 276.005 496.207 244.5 441.924C185.525 338.063 314.351 200.759 366.267 227.585C405.945 248.087 367.955 325.002 369.672 362.488C371.409 400.403 417.113 444.235 377.337 487.465Z"
                        fill="#7B8EBF"
                      />
                    </g>
                    <g filter="url(#filter1_f_674_600)">
                      <path
                        d="M360.348 46.8289C321.515 13.6739 228.485 7.22361 203.304 110.639C178.123 214.055 337.492 376.399 397.38 349.972C478.606 314.129 416.246 233.932 389.433 195.262C362.653 156.638 412.823 91.632 360.348 46.8289Z"
                        fill="#E1ACB7"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_674_600"
                        x="29.3636"
                        y="24.1802"
                        width="564.188"
                        height="679.463"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="100"
                          result="effect1_foregroundBlur_674_600"
                        />
                      </filter>
                      <filter
                        id="filter1_f_674_600"
                        x="0.62915"
                        y="-174.845"
                        width="637.017"
                        height="727.684"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="100"
                          result="effect1_foregroundBlur_674_600"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>

                <!-- frame3 -->
                <div
                  class="absolute inset-0 transition-opacity duration-[1500ms]"
                  :class="{ 'opacity-100': current === 2, 'opacity-0': current !== 2 }"
                >
                  <svg viewBox="0 0 639 635" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_674_603)">
                      <path
                        d="M368.334 683.895C327.161 741.723 248.173 706.047 214.721 625.017C152.258 469.868 313.674 247.073 373.09 284.008C418.5 312.236 368.402 434.117 367.858 491.789C367.308 550.119 418.229 613.814 368.334 683.895Z"
                        fill="#D3E4FC"
                      />
                    </g>
                    <g filter="url(#filter1_f_674_603)">
                      <path
                        d="M361.337 53.4786C322.5 12.1061 229.461 4.05714 204.277 133.104C179.093 262.152 338.479 464.733 398.373 431.756C479.607 387.029 417.241 286.956 390.425 238.7C363.642 190.503 413.818 109.386 361.337 53.4786Z"
                        fill="#E1ACB7"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_674_603"
                        x="0.595093"
                        y="79.9424"
                        width="591.513"
                        height="832.403"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="100"
                          result="effect1_foregroundBlur_674_603"
                        />
                      </filter>
                      <filter
                        id="filter1_f_674_603"
                        x="1.60168"
                        y="-173.568"
                        width="637.041"
                        height="808.9"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="100"
                          result="effect1_foregroundBlur_674_603"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>

                <!-- frame4 -->
                <div
                  class="absolute left-[-24%] brightness-[0.95] inset-0 transition-opacity duration-[1500ms]"
                  :class="{ 'opacity-100': current === 3, 'opacity-0': current !== 3 }"
                >
                  <svg
                    width="536"
                    height="635"
                    viewBox="0 0 536 635"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_f_674_606)">
                      <path
                        d="M453.03 527.421C442.05 576.066 352.366 571.097 283.534 524.799C153.205 435.771 198.085 247.686 270.273 258.194C325.443 266.224 336.194 359.952 362.683 398.746C389.474 437.983 466.336 468.469 453.03 527.421Z"
                        fill="#D3E4FC"
                      />
                    </g>
                    <g filter="url(#filter1_f_674_606)">
                      <path
                        d="M496.302 101.88C494.332 53.5323 430.623 -1.39871 328.374 71.479C226.125 144.357 212.97 364.698 278.701 374.545C367.851 387.9 386.476 287.77 397.869 241.223C409.249 194.732 498.965 167.213 496.302 101.88Z"
                        fill="#F4DAE1"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_674_606"
                        x="0.505066"
                        y="57.771"
                        width="654.06"
                        height="703.999"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="100"
                          result="effect1_foregroundBlur_674_606"
                        />
                      </filter>
                      <filter
                        id="filter1_f_674_606"
                        x="38.3335"
                        y="-163.835"
                        width="658.027"
                        height="739.595"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="100"
                          result="effect1_foregroundBlur_674_606"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            <div class="collaborator-item">
              <img class="!w-[18vw]" src="../../assets/Home/company/7_文曄-02 1.webp" alt="文曄" />
            </div>
          </div>
        </div>

        <!-- Mobile collaborators -->
        <div v-if="isMobile" class="mobile-collaborators">
          <div class="mobile-row">
            <a href="https://www.hccg.gov.tw/hccg/index" target="_blank" rel="noopener noreferrer">
              <img
                class="mobile-img"
                src="../../assets/Home/company/00_新竹市政府-01 1.webp"
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
                src="../../assets/Home/company/00_新竹市政府-01 2.webp"
                alt="新竹市政府"
              />
            </a>
          </div>
          <div class="mobile-row">
            <a href="https://www.cloudmosa.com/jobs" target="_blank" rel="noopener noreferrer">
              <img
                class="mobile-img"
                src="../../assets/Home/company/CloudMosa logo digital_Primary logo 2.webp"
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
                src="../../assets/Home/company/2_NXP_Colour-CMYK 1.webp"
                alt="NXP"
              />
            </a>
          </div>
          <div class="mobile-row">
            <a href="https://www.tsmc.com/chinese" target="_blank" rel="noopener noreferrer">
              <img
                class="mobile-img !w-[30vw]"
                src="../../assets/Home/company/3_TSMC-01 1.webp"
                alt="TSMC"
              />
            </a>
            <a href="https://www.logitech.com/zh-tw" target="_blank" rel="noopener noreferrer">
              <img
                class="mobile-img !w-[40vw]"
                src="../../assets/Home/company/4_Logitech 1.webp"
                alt="Logitech"
              />
            </a>
          </div>
          <div class="mobile-row">
            <a
              href="https://www.google.com/about/careers/applications/jobs/results/?location=Taiwan&utm_source=partnership&utm_medium=website&utm_campaign=tw_campus_outreach&src=Online/TOPs/campus-partnership"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                class="mobile-img !w-[30vw]"
                src="../../assets/Home/company/5_Google 1.webp"
                alt="Google"
              />
            </a>
            <a
              href="https://www.amd.com/zh-tw/products/processors/laptop/ryzen.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                class="mobile-img !w-[30vw]"
                src="../../assets/Home/company/6_AMD 1.webp"
                alt="AMD"
              />
            </a>
          </div>
          <div class="mobile-special-coop">
            <span class="special-text">特別合作企業</span>
            <img
              class="mobile-img-no-hover"
              src="../../assets/Home/company/7_文曄-02 1.webp"
              alt="文曄"
            />
          </div>
        </div>

        <div>網路贊助</div>
        <div v-if="isMobile" class="collaborators my-8">
          <div class="collaborator-item">
            <img
              src="../../assets/Home/chunghwa.webp"
              alt="中華電信"
              style="transform: scale(2.5)"
            />
          </div>
        </div>

        <div v-if="!isMobile" class="collaborators my-8">
          <div class="collaborator-item">
            <img
              src="../../assets/Home/chunghwa.webp"
              alt="中華電信"
              style="transform: scale(1.6)"
            />
          </div>
        </div>

        <div v-if="!isMobile" class="relative">
          贊助企業

          <img
            src="../../assets/Home/6star-14-1.svg"
            alt="6star-14-1"
            class="absolute left-[55%] bottom-[63%]"
          />

          <!-- light blue to dark blue ( 漸變 3 ) -->
          <div class="absolute blur-[40px] left-[75%] top-[-400%]">
            <svg
              width="391"
              height="473"
              viewBox="0 0 391 473"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_f_702_646)">
                <path
                  d="M181.14 111.611C123.205 130.448 38.1397 107.394 21.1396 187.612C4.13963 267.83 181.14 328.616 297.786 267.83C379.5 225.248 394.14 54.1115 334.14 25.6115C274.14 -2.8885 262.64 85.1113 181.14 111.611Z"
                  fill="#7EB9FF"
                >
                  <animate
                    attributeName="fill"
                    values="#B0CEF9;#5C76B596;#B0CEF9;#B0CEF9;#B0CEF9"
                    dur="6s"
                    repeatCount="indefinite"
                  />
                </path>
              </g>
              <defs>
                <filter
                  id="filter0_f_702_646"
                  x="-160"
                  y="-160"
                  width="710.821"
                  height="632.543"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur stdDeviation="90" result="effect1_foregroundBlur_702_646" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>

        <div v-if="isMobile" class="relative z-10">
          <span class="relative z-10">贊助企業</span>

          <img
            src="../../assets/Home/0707-16-1.svg"
            alt="0707-16-1"
            class="absolute -left-[5%] -bottom-[200%] z-10"
          />

          <!-- mobile blue blur-->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="119"
            height="93"
            viewBox="0 0 119 93"
            fill="none"
            class="absolute blur-[40%] left-[45%] -bottom-[90%] z-0"
          >
            <g filter="url(#filter0_f_2137_1790)">
              <ellipse cx="59.5" cy="46.5" rx="29.5" ry="16.5" fill="#BFCAE7" />
            </g>
            <defs>
              <filter
                id="filter0_f_2137_1790"
                x="0"
                y="0"
                width="119"
                height="93"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="15" result="effect1_foregroundBlur_2137_1790" />
              </filter>
            </defs>
          </svg>
        </div>

        <div class="marquee-sponsors mx-auto overflow-hidden whitespace-nowrap w-[60vw]">
          <div class="marquee-content flex-shrink-0">
            <!-- Diamond Sponsor -->
            <div class="sponsor-item">
              <span v-if="!isMobile" class="sponsor-level sponsor-diamond">Diamond</span>
              <span
                v-if="isMobile"
                class="sponsor-level sponsor-diamond"
                style="margin-left: 0.5rem"
                >Diamond</span
              >
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
              <span class="sponsor-level sponsor-platinum">Platinum</span>
              <img
                class="inline-block"
                src="../../assets/Home/sponsors/Cathay_platinum.webp"
                alt="Cathay"
              />
            </div>

            <!-- Gold Sponsor -->
            <div class="sponsor-item">
              <span v-if="!isMobile" class="sponsor-level sponsor-gold" style="margin-left: 2rem"
                >Gold</span
              >
              <span
                v-else
                class="sponsor-level sponsor-gold"
                style="margin-left: 1rem; margin-bottom: 0.4rem"
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
              <span class="sponsor-level sponsor-silver" style="margin-left: -1rem">Silver</span>
              <img
                class="inline-block"
                style="transform: scale(0.95)"
                src="../../assets/Home/sponsors/Phison_silver1.webp"
                alt="Phison"
              />
            </div>

            <!-- Silver Sponsor 2 -->
            <div class="sponsor-item">
              <span v-if="!isMobile" class="sponsor-level sponsor-silver">Silver</span>
              <span v-else class="sponsor-level sponsor-silver" style="margin-left: 1rem"
                >Silver</span
              >

              <img
                class="inline-block"
                style="transform: scale(1.5); margin: 0 2rem 0 2rem"
                src="../../assets/Home/sponsors/Pixart_silver2.webp"
                alt="Pixart"
              />
            </div>

            <!-- Bronze Sponsor -->
            <div class="sponsor-item">
              <span class="sponsor-level sponsor-bronze">Bronze</span>
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
              <span v-if="!isMobile" class="sponsor-level sponsor-diamond">Diamond</span>
              <span
                v-if="isMobile"
                class="sponsor-level sponsor-diamond"
                style="margin-left: 0.5rem"
                >Diamond</span
              >
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
              <span class="sponsor-level sponsor-platinum">Platinum</span>
              <img
                class="inline-block"
                src="../../assets/Home/sponsors/Cathay_platinum.webp"
                alt="Cathay"
              />
            </div>

            <!-- Gold Sponsor -->
            <div class="sponsor-item">
              <span v-if="!isMobile" class="sponsor-level sponsor-gold" style="margin-left: 2rem"
                >Gold</span
              >
              <span
                v-else
                class="sponsor-level sponsor-gold"
                style="margin-left: 1rem; margin-bottom: 0.4rem"
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
              <span class="sponsor-level sponsor-silver" style="margin-left: -1rem">Silver</span>
              <img
                class="inline-block"
                style="transform: scale(0.95)"
                src="../../assets/Home/sponsors/Phison_silver1.webp"
                alt="Phison"
              />
            </div>

            <!-- Silver Sponsor 2 -->
            <div class="sponsor-item">
              <span v-if="!isMobile" class="sponsor-level sponsor-silver">Silver</span>
              <span v-else class="sponsor-level sponsor-silver" style="margin-left: 1rem"
                >Silver</span
              >

              <img
                class="inline-block"
                style="transform: scale(1.5); margin: 0 2rem 0 2rem"
                src="../../assets/Home/sponsors/Pixart_silver2.webp"
                alt="Pixart"
              />
            </div>

            <!-- Bronze Sponsor -->
            <div class="sponsor-item">
              <span class="sponsor-level sponsor-bronze">Bronze</span>
              <img
                class="inline-block"
                src="../../assets/Home/sponsors/Ctbc_bronze.webp"
                alt="CTBC"
              />
            </div>
          </div>
        </div>

        <div class="relative">
          <span class="relative z-10">特殊贊助</span>
          <!-- red back to blue back ( 漸變 4 ) -->

          <div v-if="isMobile">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="119"
              height="93"
              viewBox="0 0 119 93"
              fill="none"
              class="absolute left-[20%] -bottom-[90%] z-0"
            >
              <g filter="url(#filter0_f_2137_1792)">
                <ellipse cx="59.5" cy="46.5" rx="29.5" ry="16.5" fill="#EBD5D8" />
              </g>
              <defs>
                <filter
                  id="filter0_f_2137_1792"
                  x="0"
                  y="0"
                  width="119"
                  height="93"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur stdDeviation="15" result="effect1_foregroundBlur_2137_1792" />
                </filter>
              </defs>
            </svg>
          </div>
          <div v-if="!isMobile" class="z-1 absolute top-[-200%] left-[44%] w-[13vw] blur-[20px]">
            <svg
              width="228"
              height="200"
              viewBox="0 0 228 218"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_f_712_696)">
                <rect x="20" y="100" width="188" height="98" fill="#E1ACB7A6">
                  <animate
                    attributeName="fill"
                    values="#E1ACB7A6;#7B8EBFB2;#7B8EBFB2;#E1ACB7A6"
                    dur="6s"
                    repeatCount="indefinite"
                  />
                </rect>
              </g>
              <defs>
                <filter
                  id="filter0_f_712_696"
                  x="-80"
                  y="0"
                  width="388"
                  height="298"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_712_696" />
                </filter>
              </defs>
            </svg>
          </div>
          <img
            v-if="!isMobile"
            src="../../assets/Home/6star-14-2.svg"
            alt="6star-14-2"
            class="absolute left-[38%] bottom-[50%]"
          />
        </div>

        <div class="marquee-sponsors mx-auto flex justify-center w-[60vw]">
          <div class="marquee-content-special-sponsor flex-shrink-0">
            <!-- First set of sponsors -->
            <div class="sponsor-item">
              <span class="sponsor-level sponsor-platinum" style="margin-left: -0.4rem"
                >Platinum</span
              >
              <img
                class="inline-block"
                src="../../assets/Home/special_sponsors/BABI_platinum.webp"
                alt="BABI"
              />
            </div>
            <div class="sponsor-item">
              <span
                v-if="!isMobile"
                class="sponsor-level sponsor-silver"
                style="margin-left: 1.4rem"
                >Silver</span
              >
              <span v-else class="sponsor-level sponsor-silver" style="margin-left: 0.4rem"
                >Silver</span
              >
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
          <div class="relative z-5">媒體合作</div>

          <!-- blue back to red back ( 漸變 5 ) -->
          <div v-if="!isMobile" class="z-1 absolute top-[-190%] left-[40%] w-[13vw] blur-[20px]">
            <svg
              width="228"
              height="200"
              viewBox="0 0 228 218"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_f_712_696)">
                <rect x="20" y="100" width="188" height="98" fill="#7B8EBFB2">
                  <animate
                    attributeName="fill"
                    values="#7B8EBFB2;#CD8B9999;#7B8EBFB2"
                    keyTimes="0;0.5;1"
                    dur="6s"
                    repeatCount="indefinite"
                  />
                </rect>
              </g>
              <defs>
                <filter
                  id="filter0_f_712_696"
                  x="-80"
                  y="0"
                  width="388"
                  height="298"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_712_696" />
                </filter>
              </defs>
            </svg>
          </div>
          <img
            v-if="!isMobile"
            src="../../assets/Home/sparkle-5-05-2.svg"
            alt="sparkle-5-05-2"
            class="absolute left-[58%] top-[-10%]"
          />
        </div>

        <div class="mx-auto overflow-hidden whitespace-nowrap md:w-[60vw] w-[80vw] flex">
          <div v-if="!isMobile" class="marquee-content-media flex-shrink-0">
            <div class="sponsor-item">
              <span class="sponsor-level sponsor-diamond">Diamond</span>
              <img
                class="inline-block"
                style="transform: scale(0.85)"
                src="../../assets/Home/media/newstaiwan_diamond.webp"
                alt="台灣好報"
              />
            </div>
            <div class="sponsor-item">
              <span class="sponsor-level sponsor-platinum">Platinum</span>
              <img
                class="inline-block"
                style="transform: scale(0.9)"
                src="../../assets/Home/media/ettoday_platinum.webp"
                alt="數位時代"
              />
            </div>
            <div class="sponsor-item">
              <span class="sponsor-level" style="margin-left: 1rem">共同發聲</span>
              <img
                class="inline-block"
                style="transform: scale(0.8)"
                src="../../assets/Home/media/tiea.webp"
                alt="數位人才聯盟"
              />
            </div>
            <div class="sponsor-item">
              <span class="sponsor-level" style="margin-left: 1rem">共同發聲</span>
              <img
                class="inline-block"
                style="transform: scale(1)"
                src="../../assets/Home/media/taipei_logo.webp"
                alt="台北市政府資訊局"
              />
            </div>
          </div>
          <div v-if="!isMobile" class="marquee-content-media flex-shrink-0">
            <div class="sponsor-item">
              <span class="sponsor-level sponsor-diamond">Diamond</span>
              <img
                class="inline-block"
                style="transform: scale(0.85)"
                src="../../assets/Home/media/newstaiwan_diamond.webp"
                alt="台灣好報"
              />
            </div>
            <div class="sponsor-item">
              <span class="sponsor-level sponsor-platinum">Platinum</span>
              <img
                class="inline-block"
                style="transform: scale(0.9)"
                src="../../assets/Home/media/ettoday_platinum.webp"
                alt="數位時代"
              />
            </div>
            <div class="sponsor-item">
              <span class="sponsor-level" style="margin-left: 1rem">共同發聲</span>
              <img
                class="inline-block"
                style="transform: scale(0.8)"
                src="../../assets/Home/media/tiea.webp"
                alt="數位人才聯盟"
              />
            </div>
            <div class="sponsor-item">
              <span class="sponsor-level" style="margin-left: 1rem">共同發聲</span>
              <img
                class="inline-block"
                style="transform: scale(1)"
                src="../../assets/Home/media/taipei_logo.webp"
                alt="台北市政府資訊局"
              />
            </div>
          </div>
          <div v-if="isMobile" class="marquee-content-media flex-shrink-0">
            <div class="sponsor-item">
              <span class="sponsor-level sponsor-diamond">Diamond</span>
              <img
                class="inline-block"
                style="transform: scale(0.8)"
                src="../../assets/Home/media/newstaiwan_diamond.webp"
                alt="台灣好報"
              />
            </div>
            <div class="sponsor-item">
              <span class="sponsor-level sponsor-platinum" style="margin-left: 0.5rem"
                >Platinum</span
              >
              <img
                class="inline-block"
                style="transform: scale(0.8)"
                src="../../assets/Home/media/ettoday_platinum.webp"
                alt="數位時代"
              />
            </div>
            <div class="sponsor-item">
              <span class="sponsor-level" style="margin-left: 0.3rem">共同發聲</span>
              <img
                class="inline-block"
                style="transform: scale(0.8)"
                src="../../assets/Home/media/tiea.webp"
                alt="數位人才聯盟"
              />
            </div>
            <div class="sponsor-item">
              <span class="sponsor-level">共同發聲</span>
              <img
                class="inline-block"
                style="transform: scale(1)"
                src="../../assets/Home/media/taipei_logo.webp"
                alt="台北市政府資訊局"
              />
            </div>
          </div>
          <div v-if="isMobile" class="marquee-content-media flex-shrink-0">
            <div class="sponsor-item">
              <span class="sponsor-level sponsor-diamond">Diamond</span>
              <img
                class="inline-block"
                style="transform: scale(0.8)"
                src="../../assets/Home/media/newstaiwan_diamond.webp"
                alt="台灣好報"
              />
            </div>
            <div class="sponsor-item">
              <span class="sponsor-level sponsor-platinum" style="margin-left: 0.5rem"
                >Platinum</span
              >
              <img
                class="inline-block"
                style="transform: scale(0.8)"
                src="../../assets/Home/media/ettoday_platinum.webp"
                alt="數位時代"
              />
            </div>
            <div class="sponsor-item">
              <span class="sponsor-level" style="margin-left: 0.3rem">共同發聲</span>
              <img
                class="inline-block"
                style="transform: scale(0.8)"
                src="../../assets/Home/media/tiea.webp"
                alt="數位人才聯盟"
              />
            </div>
            <div class="sponsor-item">
              <span class="sponsor-level">共同發聲</span>
              <img
                class="inline-block"
                style="transform: scale(1)"
                src="../../assets/Home/media/taipei_logo.webp"
                alt="台北市政府資訊局"
              />
            </div>
          </div>
        </div>
        <div class="relative">
          <div class="z-5 relative">協辦單位</div>

          <!-- red back to blue back ( 漸變 4 ) -->
          <div v-if="!isMobile" class="z-1 absolute top-[-200%] left-[44%] w-[13vw] blur-[20px]">
            <svg
              width="228"
              height="200"
              viewBox="0 0 228 218"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_f_712_696)">
                <rect x="20" y="100" width="188" height="98" fill="#E1ACB7A6">
                  <animate
                    attributeName="fill"
                    values="#E1ACB7A6;#7B8EBFB2;#7B8EBFB2;#E1ACB7A6"
                    dur="6s"
                    repeatCount="indefinite"
                  />
                </rect>
              </g>
              <defs>
                <filter
                  id="filter0_f_712_696"
                  x="-80"
                  y="0"
                  width="388"
                  height="298"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_712_696" />
                </filter>
              </defs>
            </svg>
          </div>

          <img
            v-if="!isMobile"
            class="absolute w-[8vw] bottom-[20%] left-[35%]"
            src="../../assets/Home/star-02-02-1.svg"
            alt="star-02-02-1"
          />
        </div>

        <div
          class="w-[80vw] mx-auto mt-[2vh] md:mb-[7vh] flex flex-row justify-around co-organizer-logos"
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
            src="../../assets/Home/company/NCTU-foundation.webp"
            alt="NCTU-foundation"
          />
          <img class="w-[23vw]" src="../../assets/Home/company/ita.webp" alt="ita" />
        </div>
      </div>

      <div
        class="relative mx-auto title md:mt-[2vh] mt-[2vh] text-center text-[#2D3E63] font-black font-['Chiron_Hei_HK']"
      >
        特別感謝

        <svg
          v-if="isMobile"
          xmlns="http://www.w3.org/2000/svg"
          width="120"
          height="217"
          viewBox="0 0 120 217"
          fill="none"
          class="absolute -right-[5%] top-35 z-0"
        >
          <g filter="url(#filter0_f_2011_1773)">
            <path
              d="M81.6809 117.35C97.2675 97.3785 120.072 94.842 128.143 112.407C136.214 129.971 125.466 152.154 104.138 161.955C82.8096 171.755 52.9522 167.117 50.9063 147.896C48.9664 129.67 67.2397 135.854 81.6809 117.35Z"
              fill="#43548D"
              fill-opacity="0.64"
            />
          </g>
          <g filter="url(#filter1_f_2011_1773)">
            <ellipse
              cx="121.557"
              cy="79.6361"
              rx="33"
              ry="25"
              transform="rotate(-133.195 121.557 79.6361)"
              fill="#D6A0B2"
              fill-opacity="0.8"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_2011_1773"
              x="0.763672"
              y="50.6626"
              width="180.062"
              height="166.275"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_2011_1773" />
            </filter>
            <filter
              id="filter1_f_2011_1773"
              x="42.5322"
              y="0.11084"
              width="158.05"
              height="159.051"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_2011_1773" />
            </filter>
          </defs>
        </svg>
        <img
          v-if="!isMobile"
          class="absolute w-[13vw] left-[53%] top-[-180%]"
          src="../../assets/Home/star-06-2.svg"
          alt="star-06-2"
        />
      </div>

      <div
        class="relative text-[1.8vw] mx-auto flex flex-col text-[black] font-bold font-['Chiron_Hei_HK'] text-list"
      >
        <div
          v-if="!isMobile"
          class="z-2 mt-[5vh] w-[80vw] flex flex-row justify-around co-organizers"
        >
          <div>國立陽明交通大學產學運籌中心</div>
          <div>國立陽明交通大學電機工程學系</div>
          <div>國立清華大學資訊工程學系</div>
        </div>

        <div
          v-if="!isMobile"
          class="z-2 pl-[3vw] mx-auto mt-[4vh] w-[63vw] flex flex-row justify-between special-thanks-list"
        >
          <div>國立清華大學電機資訊學院學士班</div>
          <div>國立清華大學清華學院學士班系學會</div>
        </div>

        <div
          v-if="!isMobile"
          class="z-2 mx-auto mt-[4vh] w-[45vw] pr-[5vw] flex flex-row justify-between"
        >
          <div>國立清華大學資訊科學研究社</div>
          <div>Colde Garage</div>
        </div>

        <div
          v-if="isMobile"
          class="z-2 mt-[3vh] w-[80vw] flex flex-col justify-center co-organizers"
        >
          <div class="text-center">國立陽明交通大學產學運籌中心</div>
          <div class="text-center">國立陽明交通大學電機工程學系</div>
          <div class="text-center">國立清華大學資訊工程學系</div>
          <div class="text-center">國立清華大學電機資訊學院學士班</div>
          <div class="text-center">國立清華大學清華學院學士班系學會</div>
          <div class="text-center">國立清華大學資訊科學研究社</div>
          <div class="text-center">Colde Garage</div>
        </div>
        <div class="md:mb-[20vh] mb-[3vh]"></div>

        <!-- flowers anim -->
        <div v-if="!isMobile" class="z-1">
          <img
            src="../../assets/Home/flower-1.svg"
            alt="flower-1"
            class="flower-1-1 absolute bottom-[-10%] left-[2%] scale-[0.6]"
          />
          <img
            src="../../assets/Home/flower-1.svg"
            alt="flower-1"
            class="flower-1-2 absolute bottom-[-10%] left-[2%] scale-[1] rotate-[-20deg]"
          />
        </div>

        <!-- color change ( 漸變 2 ) -->
        <div
          v-if="!isMobile"
          class="z-0 blur-[20px] absolute left-[-30%] top-[-25%] w-[50vw] h-[80vh]"
        >
          <!-- frame1 -->
          <div
            class="absolute inset-0 transition-opacity duration-[1500ms]"
            :class="{ 'opacity-100': current === 0, 'opacity-0': current !== 0 }"
          >
            <svg viewBox="0 0 470 635" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_f_674_598)">
                <path
                  d="M268.878 401.641C272.524 449.979 206.064 481.635 144.895 467.58C28.749 439.735 16.423 251.861 71.4731 232.255C113.546 217.271 143.789 297.548 172.347 321.893C201.23 346.517 264.461 343.062 268.878 401.641Z"
                  fill="#7B8EBF"
                />
              </g>
              <g filter="url(#filter1_f_674_598)">
                <path
                  d="M269.752 113.402C269.752 62.3403 214.252 -12.5984 119.252 35.4006C24.2518 83.3996 4.26725 310.015 63.2521 338.402C143.252 376.902 163.752 277.403 175.752 231.902C187.737 186.456 269.752 182.402 269.752 113.402Z"
                  fill="#EBD5D8"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_674_598"
                  x="-160.115"
                  y="30.4062"
                  width="629.137"
                  height="640.529"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_674_598" />
                </filter>
                <filter
                  id="filter1_f_674_598"
                  x="-170"
                  y="-180"
                  width="639.752"
                  height="727.074"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_674_598" />
                </filter>
              </defs>
            </svg>
          </div>

          <!-- frame2 -->
          <div
            class="absolute inset-0 transition-opacity duration-[1500ms]"
            :class="{ 'opacity-100': current === 1, 'opacity-0': current !== 1 }"
          >
            <svg viewBox="0 0 638 635" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_f_674_600)">
                <path
                  d="M377.337 487.465C344.515 523.138 276.005 496.207 244.5 441.924C185.525 338.063 314.351 200.759 366.267 227.585C405.945 248.087 367.955 325.002 369.672 362.488C371.409 400.403 417.113 444.235 377.337 487.465Z"
                  fill="#7B8EBF"
                />
              </g>
              <g filter="url(#filter1_f_674_600)">
                <path
                  d="M360.348 46.8289C321.515 13.6739 228.485 7.22361 203.304 110.639C178.123 214.055 337.492 376.399 397.38 349.972C478.606 314.129 416.246 233.932 389.433 195.262C362.653 156.638 412.823 91.632 360.348 46.8289Z"
                  fill="#E1ACB7"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_674_600"
                  x="29.3636"
                  y="24.1802"
                  width="564.188"
                  height="679.463"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_674_600" />
                </filter>
                <filter
                  id="filter1_f_674_600"
                  x="0.62915"
                  y="-174.845"
                  width="637.017"
                  height="727.684"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_674_600" />
                </filter>
              </defs>
            </svg>
          </div>

          <!-- frame3 -->
          <div
            class="absolute inset-0 transition-opacity duration-[1500ms]"
            :class="{ 'opacity-100': current === 2, 'opacity-0': current !== 2 }"
          >
            <svg viewBox="0 0 639 635" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_f_674_603)">
                <path
                  d="M368.334 683.895C327.161 741.723 248.173 706.047 214.721 625.017C152.258 469.868 313.674 247.073 373.09 284.008C418.5 312.236 368.402 434.117 367.858 491.789C367.308 550.119 418.229 613.814 368.334 683.895Z"
                  fill="#D3E4FC"
                />
              </g>
              <g filter="url(#filter1_f_674_603)">
                <path
                  d="M361.337 53.4786C322.5 12.1061 229.461 4.05714 204.277 133.104C179.093 262.152 338.479 464.733 398.373 431.756C479.607 387.029 417.241 286.956 390.425 238.7C363.642 190.503 413.818 109.386 361.337 53.4786Z"
                  fill="#E1ACB7"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_674_603"
                  x="0.595093"
                  y="79.9424"
                  width="591.513"
                  height="832.403"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_674_603" />
                </filter>
                <filter
                  id="filter1_f_674_603"
                  x="1.60168"
                  y="-173.568"
                  width="637.041"
                  height="808.9"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_674_603" />
                </filter>
              </defs>
            </svg>
          </div>

          <!-- frame4 -->
          <div
            class="absolute left-[-24%] brightness-[0.95] inset-0 transition-opacity duration-[1500ms]"
            :class="{ 'opacity-100': current === 3, 'opacity-0': current !== 3 }"
          >
            <svg
              width="536"
              height="635"
              viewBox="0 0 536 635"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_f_674_606)">
                <path
                  d="M453.03 527.421C442.05 576.066 352.366 571.097 283.534 524.799C153.205 435.771 198.085 247.686 270.273 258.194C325.443 266.224 336.194 359.952 362.683 398.746C389.474 437.983 466.336 468.469 453.03 527.421Z"
                  fill="#D3E4FC"
                />
              </g>
              <g filter="url(#filter1_f_674_606)">
                <path
                  d="M496.302 101.88C494.332 53.5323 430.623 -1.39871 328.374 71.479C226.125 144.357 212.97 364.698 278.701 374.545C367.851 387.9 386.476 287.77 397.869 241.223C409.249 194.732 498.965 167.213 496.302 101.88Z"
                  fill="#F4DAE1"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_674_606"
                  x="0.505066"
                  y="57.771"
                  width="654.06"
                  height="703.999"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_674_606" />
                </filter>
                <filter
                  id="filter1_f_674_606"
                  x="38.3335"
                  y="-163.835"
                  width="658.027"
                  height="739.595"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_674_606" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      <div
        class="mx-auto title relative mt-[2vh] text-center text-[#2D3E63] font-black font-['Chiron_Hei_HK']"
      >
        Youtube 影片

        <!-- static deco -->
        <div v-if="!isMobile">
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

      <div class="relative">
        <img
          v-if="isMobile"
          class="absolute right-0 bottom-0"
          src="../../assets/Home/sparkle-13-4.svg"
          alt="star-06-2"
        />
        <div
          class="z-2 relative flex justify-center md:mt-[8vh] mt-[4vh] md:mb-[20vh] mx-auto w-[65vw] bg-neutral-100 video-placeholder"
          @click="Play = !Play"
        >
          <!-- <img
            v-show="!Play"
            src="../../assets/Home/play_circle.svg"
            alt="play_circle"
            class="w-[10vw]"
          /> -->

          <!-- youtube video -->
          <iframe
            class="w-full border-none aspect-16/9 z-50"
            :src="`https://www.youtube.com/embed/jGHvV1Y9B-E`"
            title="YouTube video player"
            allow="picture-in-picture"
            allowfullscreen
            referrerpolicy="strict-origin-when-cross-origin"
          ></iframe>
          <div v-if="!isMobile">
            <img
              class="z-2 w-[15vw] absolute bottom-[-5%] left-[-20%]"
              src="../../assets/Home/6star-14-3.svg"
              alt="6star-14-3"
            />
            <img
              class="z-2 w-[10vw] absolute bottom-[-15%] left-[-10%]"
              src="../../assets/Home/6star-14-4.svg"
              alt="6star-14-4"
            />
          </div>
        </div>

        <!-- pink to blue ( 漸變 1 ) -->
        <div v-if="!isMobile" class="z-0 blur-[40px] absolute bottom-[0.1%]">
          <svg
            width="400"
            height="410"
            viewBox="0 0 330 510"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_700_1208)">
              <circle cx="165" cy="165" r="145" fill="#E1ACB7">
                <animate
                  attributeName="fill"
                  values="#E1ACB7;#D3E4FC;#E1ACB7"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
            <defs>
              <filter
                id="filter0_f_700_1208"
                x="-180"
                y="-180"
                width="690"
                height="690"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_700_1208" />
              </filter>
            </defs>
          </svg>
        </div>
        <div class="md:mb-[8vh] mb-[7vh]"></div>
      </div>
    </div>

    <div class="md:mb-[5vh] mb-[2vh]"></div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'

defineOptions({
  name: 'BottomSection',
})

const Play = ref(false)
const isMobile = ref(false)
const current = ref(0)

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

onMounted(() => {
  setInterval(() => {
    current.value = (current.value + 1) % 4
    // console.log(current.value)
  }, 1500) // 每 1.5 秒換一次
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
  display: block;
}

.collaborator-item > a {
  display: block; /* Treat the link itself as a block */
  text-decoration: none; /* Ensure no underline */
  border: none; /* Ensure no border */
  box-shadow: none; /* Ensure no shadow */
  transition:
    transform 0.2s ease-in-out,
    opacity 0.2s ease-in-out;
}

.collaborator-item > a:hover {
  transform: scale(1.03);
  opacity: 0.9;
}

.collaborator-item > a:active {
  transform: scale(0.98);
  opacity: 0.75;
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
  margin-bottom: 3rem;
  margin-top: 3rem;
}

.marquee-content {
  animation-duration: 24s;
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
  animation-duration: 12s;
  animation-iteration-count: infinite;
  animation-name: marquee;
  animation-timing-function: linear;
  padding: 3rem 0px 3rem 0px;
}

.marquee-content-others {
  animation-iteration-count: infinite;
  animation-name: marquee;
  animation-timing-function: linear;
  padding: 2.5rem 0px 2.5rem 0px;
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

/* .sponsor-level {
  font-weight: extrabold;
  text-transform: uppercase;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-size: 30px !important;
}

.sponsor-diamond {
  color: #B9F2FF;
  background-color: #B9F2FF;
}

.sponsor-platinum {
  color: #B9F2FF;
}

.sponsor-gold {
color: #FFD700;
}

.sponsor-silver {
color: #C0C0C0;
}

.sponsor-bronze {
color: #CE8946;
} */
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
  transition: opacity 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  /* transition: ease-in-out; */
}
.blue-back {
  animation: blink2 4s infinite;
  transition: opacity 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
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

/* Mobile collaborators styles */
.mobile-collaborators {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0rem;
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
  transform: translateZ(0);
}

.mobile-img:hover {
  transform: scale(1.02);
  opacity: 0.8;
}

.mobile-img-no-hover {
  width: 35vw; /* Keep this for responsive scaling */
  max-width: 150px; /* Add a max-width in pixels */
  margin-bottom: 3vw;
  height: auto;
  transform: translateZ(0);
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
  font-size: 20px;
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

.flower-1-1 {
  animation: blink1 3s infinite;
}
.flower-1-2 {
  animation: blink2 3s infinite;
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
    font-size: 20px;
    font-weight: 800;
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
    gap: 0rem;
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
    display: flex;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
  }

  .co-organizers,
  .special-thanks-list {
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    width: 100%;
    text-align: center;
  }

  .ad-placeholder,
  .video-placeholder {
    width: 75vw;
    height: 25vh;
  }
}
</style>
