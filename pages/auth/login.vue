<script setup lang="ts">
import { loginValidator } from '@/utils/validation'
import { toTypedSchema } from '@vee-validate/zod'

import { useForm } from 'vee-validate'
import z from 'zod'

definePageMeta({
  layout: 'auth',
})

const authStore = useAuthStore()
const route = useRoute()
const router = useRouter()
const isLoading= ref(false)
// const {} = useLazyFetch()
if (route.query?.errorMessage) {
  notifyError({
    content: route.query?.errorMessage as string,
  })
  router.replace({
    query: {},
  })
}
const form = useForm({
  validationSchema: toTypedSchema(loginValidator),
})

const onSubmit = form.handleSubmit(async (values) => {
  await authStore.loginWithCredentials(values)
  navigateTo('/')
})

function loginWithGitHub() {
  window.location.href = '/api/auth/github'
}
function loginWithGoogle() {
  window.location.href = '/api/auth/google'
}
</script>

<template>
  <form class="sm:min-w-[25rem]" @submit.prevent="onSubmit">
    <Card class="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle class="text-2xl text-center">
          Login
        </CardTitle>
        <CardDescription class="text-center">
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="grid gap-4">
          <div class="grid">
            <InputValidator id="email" type="email" label="Email" placeholder="youremail@gmai.com" name="email" />
            <div class="grid gap-2">
              <InputValidator id="password" type="password" placeholder="Password" label="Password" name="password" />
              <RouterLink to="/auth/forgot-password" class="ml-auto text-sm underline">
                Forgot your password?
              </RouterLink>
            </div>
          </div>
          <Button :is-loading="isLoading" type="submit">
            Login
          </Button>
        </div>
        <div class="mt-4 text-center text-sm">
          Don't have an account?
          <RouterLink to="/auth/signup" class="underline">
            Sign up
          </RouterLink>
        </div>
        <Separator label="Or" style-label="bg-transparent" class="my-4" />
        <div class="grid gap-4">
          <Button type="button" class="w-full" @click="loginWithGoogle">
            <Icon name="IconGoogle" class="w-8 h-8" />
            Login with Google
          </Button>
          <Button type="button" class="w-full" @click="loginWithGitHub">
            <Icon name="IconGithub" class="w-8 h-8" />
            Login with Github
          </Button>
        </div>
      </cardcontent>
    </Card>
  </form>
</template>
