import { useGlobalStore } from '@/stores/global'

export default async (endpoint) => {
  const globalStore = useGlobalStore()

  const requestUrl = import.meta.env.VITE_SERVER_URL + endpoint

  globalStore.toggleLoading()
  const response = await fetch(requestUrl)
  globalStore.toggleLoading()

  return await response.json()
}
