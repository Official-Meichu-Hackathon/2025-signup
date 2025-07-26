import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue'),
  },
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
  //   path: '/signup-group',
  //   name: 'SignUpGroup',
  //   component: () => import('../components/home/SignUpGroup.vue'),
  // },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
