import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'

import supportedLanguages from '../constants/supportedLanguages'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    ...supportedLanguages
  ]
})

export default router
