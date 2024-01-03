export default async (endpoint) => {
  const requestUrl = import.meta.env.VITE_SERVER_URL + endpoint
  const response = await fetch(requestUrl)

  return await response.json()
}
