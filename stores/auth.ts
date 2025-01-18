export const useAuthStore = defineStore('auth', () => {
  async function loginWithGoogle() {
    return await $api('/api/auth/google/', { method: 'GET' })
  }

  async function loginWithGithub() {
    return await $api('/api/auth/github', { method: 'GET' })
  }

  return {
    loginWithGoogle,
    loginWithGithub
  }
})
