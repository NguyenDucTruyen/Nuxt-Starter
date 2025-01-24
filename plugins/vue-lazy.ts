import LoadingSvg from '@/assets/icons/Ellipsis.svg'
import ErrorSvg from '@/assets/icons/Error.svg'
import VueLazyload from 'vue-lazyload'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueLazyload, {
    preLoad: 1.3,
    error: ErrorSvg,
    loading: LoadingSvg,
    attempt: 1,
  })
})
