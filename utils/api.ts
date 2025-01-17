import type { $Fetch } from 'nitropack'

export const $api = $fetch.create({
  retry: 1,
  retryDelay: 3000,
  retryStatusCodes: [503, 504],
  baseURL: 'https://api.nuxt.com',
  async onRequest({ options }) {

  },
  async onResponseError({ response }) {
    if (response.status === 401) {
      await nuxtApp.runWithContext(() => navigateTo('/login'))
    }
  },
}) as $Fetch
