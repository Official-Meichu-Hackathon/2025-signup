import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  // {
  //   path: '/signup',
  //   name: 'Signup',
  //   component: () => import('../views/Signup.vue'),
  // },
  {
    path: '/registration',
    name: 'Registration',
    component: () => import('../views/Registration.vue'),
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: () => import('../views/Schedule.vue'),
  },
  {
    path: '/problems',
    name: 'Problems',
    component: () => import('../views/Problems.vue'),
  },
  {
    path: '/data',
    name: 'Data',
    component: () => import('../views/Data.vue'),
  },
  // {
  //   path: '/success-signup',
  //   name: 'SuccessSignup',
  //   component: () => import('../views/SuccessSignup.vue'),
  // },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  },
})

export default router
