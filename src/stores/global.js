import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', () => {
  const loading = ref(false)

  function toggleLoading() {
    loading.value = !loading.value
  }

  return { loading, toggleLoading }
})
