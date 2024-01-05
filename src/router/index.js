import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ChangeLogView from '../views/ChangeLogView.vue'
import RoadmapView from '../views/RoadmapView.vue'

import toolsRouters from './tools'
import howSeriesRouters from './howSeries'

const router = createRouter({
  scrollBehavior(to, _from, _savedPosition) {
    // always scroll to top
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }

    return { top: 0, behavior: 'smooth' }
  },
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
    },
    ...toolsRouters,
    ...howSeriesRouters
  ]
})

export default router
