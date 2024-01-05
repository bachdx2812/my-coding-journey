import { ref } from 'vue'
import { defineStore } from 'pinia'

import defaultSidebarMenus from '../constants/defaultSidebarMenus'

export const useGlobalStore = defineStore('global', () => {
  const loading = ref(false)

  function toggleLoading() {
    loading.value = !loading.value
  }

  const sidebarMenus = ref([])

  function resetSidebarMenus() {
    sidebarMenus.value = defaultSidebarMenus
  }

  function setSidebarMenus(menus) {
    sidebarMenus.value = menus
  }

  return {
    loading,
    toggleLoading,

    sidebarMenus,
    resetSidebarMenus,
    setSidebarMenus
  }
})
