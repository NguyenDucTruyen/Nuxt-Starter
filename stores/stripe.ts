export const useStripeStore = defineStore('stripe', () => {
  async function createCheckoutSession() {
    return await $api('/api/stripe/create-session', { method: 'POST' })
  }
  async function getCheckoutSession(id: string) {
    return await $api(`/api/stripe/${id}`, { method: 'GET' })
  }
  return {
    createCheckoutSession,
    getCheckoutSession,
  }
})
