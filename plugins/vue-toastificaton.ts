import type { PluginOptions } from 'vue-toastification'
import Toast, { POSITION, useToast } from 'vue-toastification'
import 'vue-toastification/dist/index.css'

export default defineNuxtPlugin((nuxtApp) => {
  const pluginOptions: PluginOptions = {
    maxToasts: 1,
    position: POSITION.TOP_CENTER,
    timeout: 3000,
    closeOnClick: true,
    pauseOnFocusLoss: false,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: false,
    closeButton: 'button',
    icon: true,
    rtl: false,
  }

  nuxtApp.vueApp.use(Toast, pluginOptions)

  const toast = useToast()

  return {
    provide: {
      toast,
    },
  }
})
