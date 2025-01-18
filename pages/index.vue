<script setup>
const { loggedIn, user, session, clear } = useUserSession()
async function getHello() {
  const data = await $api('api/hello')
  console.log(data)
}
const authStore = useAuthStore()
</script>

<template>
  <ThemeToggle />

  <div v-if="loggedIn">
    <h1>Welcome {{ user }}!</h1>
    <p>Logged in since {{ session.loggedInAt }}</p>
    <button @click="clear">
      Logout
    </button>
  </div>
  <div v-else>
    <h1>Not logged in</h1>
    <a href="/api/auth/github">Login with GitHub</a>
    <br>
    <a href="/api/auth/google">Login with Google</a>
  </div>
  <div class="grid gap-4">
    <Button type="button" class="w-full">
      <Icon name="IconGoogle" class="w-8 h-8" />
      Login with Google
    </Button>
    <Button type="button" class="w-full" @click="authStore.loginWithGitHub()">
      <Icon name="IconGoogle" class="w-8 h-8" />
      Login with GitHub
    </Button>
  </div>
  <button @click="getHello">
    Get Hello
  </button>
</template>
