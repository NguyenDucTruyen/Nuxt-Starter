export const useStripeStore = defineStore('stripe', () => {
  async function createCheckoutSession(type: string) {
    return await $api('/api/stripe/create-session', { method: 'POST', body: {type} })
  }
  async function getCheckoutSession(id: string) {
    return await $api(`/api/stripe/${id}`, { method: 'GET' })
  }
  async function getAllPrices() {
    return await $api('/api/stripe/get-all', { method: 'GET' })
  }
  async function getMyStripe() {
    return await $api('/api/stripe/me', { method: 'GET' })
  }
  return {
    createCheckoutSession,
    getCheckoutSession,
    getAllPrices,
    getMyStripe
  }
})
