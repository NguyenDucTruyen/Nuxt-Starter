export default defineNuxtRouteMiddleware((to) => {
  const { loggedIn } = useUserSession()
  console.log('Global middleware', to.path, loggedIn.value)
  if (to.meta.layout !== 'auth' && !loggedIn.value) {
    return navigateTo('/auth/login')
  }

  if (to.meta.layout === 'auth' && loggedIn.value) {
    return navigateTo('/')
  }
})
