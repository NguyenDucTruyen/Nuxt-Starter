export const useAuthStore = defineStore('auth', () => {
  async function loginWithGoogle() {
    return await $api('/api/auth/google/', { method: 'GET' })
  }

  async function loginWithGithub() {
    return await $api('/api/auth/github', { method: 'GET' })
  }

  async function loginWithCredentials(data: { email: string, password: string }) {
    return await $api('/api/auth/login', { method: 'POST', body: data })
  }

  async function signupWithCredentials(data: { email: string, password: string, confirmPassword: string }) {
    return await $api('/api/auth/signup', { method: 'POST', body: data })
  }

  async function sendEmailResetPassword(data: { email: string }) {
    return await $api('/api/auth/forgot-password', { method: 'POST', body: data })
  }

  async function resetPassword(data: { token: string, password: string, confirmPassword: string }) {
    return await $api('/api/auth/reset-password', { method: 'POST', body: data })
  }
  return {
    loginWithGoogle,
    loginWithGithub,
    loginWithCredentials,
    signupWithCredentials,
    sendEmailResetPassword,
    resetPassword,
  }
})
