<template>
  <nav
    class="w-full h-14 flex items-center justify-between px-6 fixed top-0 left-0 z-[1000] overflow-hidden"
  >
    <div
      class="absolute top-0 left-0 w-full h-full z-[-1] pointer-events-none bg-[linear-gradient(90deg,_#F4F5F5_0%,_#F4DAE1_33%,_#D3E4FC_61%,_#F4F5F5_100%)]"
    ></div>
    <div class="navbar-left h-full flex items-center">
      <img
        src="../assets/Navbar/logo.svg"
        alt="梅竹賽客松"
        class="h-10 w-auto"
      />
    </div>
    <div class="navbar-right h-full flex items-center gap-4">
      <router-link to="/signup">
        <button
          class="bg-[rgba(244,245,245,0.60)] rounded-[15px] border border-[rgba(255,255,255,0.20)] shadow-[2px_2px_4px_-1px_rgba(0,0,0,0.25)] text-[#656565] font-bold text-base h-9 px-5 flex items-center justify-center transition-colors duration-200 hover:bg-[#F4F5F5] hover:border-white"
        >
          點我報名
        </button>
      </router-link>
      <button
        class="menu-btn bg-none border-none h-14 w-14 flex items-center justify-center p-0 cursor-pointer"
        @click="drawerOpen = !drawerOpen"
      >
        <svg
          class="menu-icon block cursor-pointer"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
        >
          <rect y="5" width="28" height="3" rx="1.5" fill="#656565" />
          <rect y="12.5" width="28" height="3" rx="1.5" fill="#656565" />
          <rect y="20" width="28" height="3" rx="1.5" fill="#656565" />
        </svg>
      </button>
    </div>
    <transition name="drawer-slide">
      <div
        v-if="drawerOpen"
        class="fixed top-0 left-0 w-screen h-screen bg-transparent z-[2000] flex justify-end items-start"
        @click.self="drawerOpen = false"
      >
        <div
          class="fixed top-14 right-0 w-[400px] max-w-full h-[calc(100vh-56px)] shadow-[-2px_0_16px_rgba(0,0,0,0.1)] flex flex-col pt-3 px-9"
          style="
            background: linear-gradient(
              12deg,
              rgba(244, 245, 245, 0.2) 12.49%,
              #f4f5f5 92.18%
            );
            backdrop-filter: blur(25px);
          "
        >
          <div class="w-full">
            <div v-for="(item, idx) in menu" :key="item.title">
              <div
                class="flex justify-between items-center text-[1.15rem] font-bold text-[#656565] py-4 pb-2 border-b border-[#bbb] transition-colors duration-200"
              >
                <template v-if="item.path">
                  <router-link
                    :to="item.path"
                    class="w-full h-full block cursor-pointer"
                    @click="drawerOpen = false"
                  >
                    {{ item.title }}
                  </router-link>
                </template>
                <template v-else>
                  <span :class="{ 'font-bold': item.children }">{{
                    item.title
                  }}</span>
                </template>
                <span
                  v-if="item.children"
                  class="text-[1.3rem] ml-2 cursor-pointer"
                  @click="toggle(idx)"
                  >{{ open[idx] ? "−" : "+" }}</span
                >
              </div>
              <div v-if="item.children && open[idx]" class="pl-3">
                <div
                  v-for="sub in item.children"
                  :key="sub.title"
                  class="text-base font-normal text-[#656565] p-2 cursor-pointer transition-colors duration-200 hover:bg-[#f5f5f5]"
                >
                  <router-link
                    :to="{ path: item.path || '/', hash: sub.hash }"
                    class="block w-full h-full"
                    @click="drawerOpen = false"
                  >
                    {{ sub.title }}
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from "vue";

defineOptions({
  name: "NavbarComponent",
});

const drawerOpen = ref(false);
const menu = [
  {
    title: "首頁",
    path: "/",
    children: [
      { title: "活動簡介", hash: "#intro" },
      { title: "比賽組別、工作坊", hash: "#groups" },
      { title: "比賽規則", hash: "#rules" },
      { title: "獎項資訊", hash: "#awards" },
      { title: "合作、贊助企業與單位", hash: "#sponsors" },
      { title: "工作人員名單", hash: "#staff" },
    ],
  },
  {
    title: "報名方式",
    path: "/registration",
    children: [
      { title: "報名時程", hash: "#schedule" },
      { title: "報名資訊", hash: "#info" },
    ],
  },
  { title: "比賽時程", path: "/schedule" },
  { title: "題目說明", path: "/problems" },
  { title: "參賽數據", path: "/data" },
];
const open = ref({});
function toggle(idx) {
  open.value[idx] = !open.value[idx];
}
</script>

<style>
.drawer-slide-enter-active,
.drawer-slide-leave-active {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.drawer-slide-enter-from,
.drawer-slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
.drawer-slide-enter-to,
.drawer-slide-leave-from {
  transform: translateX(0);
  opacity: 1;
}
</style>
