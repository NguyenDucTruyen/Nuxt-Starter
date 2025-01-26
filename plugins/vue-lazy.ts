import LoadingSvg from '@/assets/images/ellipsis.png'
import ErrorSvg from '@/assets/images/error.png'
import VueLazyload from 'vue-lazyload'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueLazyload, {
    preLoad: 1.3,
    error: ErrorSvg,
    loading: LoadingSvg,
    attempt: 1,
  })
})
