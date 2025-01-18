import type { $Fetch } from 'nitropack'

export const $api = $fetch.create({
  retry: 1,
  retryDelay: 3000,
  retryStatusCodes: [503, 504],
  async onRequest() {

  },
  async onResponseError({response}) {
    // if (response.status === 401) {
    //   await nuxtApp.runWithContext(() => navigateTo('/login'))
    // }
    console.error('onResponseError', response)
    const content = response?._data.message || 'An error occurred'
    notifyError({ content })
  },
}) as $Fetch
