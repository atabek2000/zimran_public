import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Result from '@/pages/Result.vue'
import Confirm from '@/pages/Confirm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/result',
      name: 'result',
      component: Result,
    },
    {
      path: '/confirm',
      name: 'confirm',
      component: Confirm,
    },
  ],
})

export default router
