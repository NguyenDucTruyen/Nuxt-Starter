export default defineNuxtRouteMiddleware((to) => {
  const { loggedIn } = useUserSession()
  if (to.meta.layout !== 'auth' && !loggedIn.value) {
    return navigateTo('/auth/login')
  }

  if (to.meta.layout === 'auth' && loggedIn.value) {
    return navigateTo('/')
  }
})
