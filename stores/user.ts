export const useUserStore = defineStore('user', () => {
  async function updateUserById(id: string, data: any) {
    return await $api(`/api/user/${id}`, { method: 'PUT', body: data })
  }
  return {
    updateUserById,
  }
})
