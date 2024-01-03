import { ref } from 'vue'
import { defineStore } from 'pinia'

const defaultSidebarMenus = [
  {
    title: 'Tools & Libraries',
    path: '/tools_and_libraries'
  }
]
// TODO: move to model

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
