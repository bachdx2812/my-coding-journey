import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ChangeLogView from '../views/ChangeLogView.vue'
import RoadmapView from '../views/RoadmapView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/changelog',
      name: 'changelog',
      component: ChangeLogView
    },
    {
      path: '/roadmap',
      name: 'roadmap',
      component: RoadmapView
    }
  ]
})

export default router
