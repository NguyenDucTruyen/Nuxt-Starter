<script setup lang="ts">
import { signupValidator } from '@/utils/validation'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'

definePageMeta({
  layout: 'auth',
})
const router = useRouter()
const authStore = useAuthStore()
const body = ref({
  email: '',
  password: '',
  confirmPassword: '',
})
const { status, execute } = useAsyncData(async () => {
  await authStore.signupWithCredentials(body.value)
  router.push('/auth/login')
  notifySuccess({
    content: 'Account created successfully',
  })
}, { immediate: false })
const form = useForm({
  validationSchema: toTypedSchema(signupValidator),
})

const onSubmit = form.handleSubmit(async (values) => {
  body.value = values
  await execute()
})
</script>

<template>
  <form class="rounded-lg border bg-card text-card-foreground shadow-sm mx-auto max-w-sm sm:min-w-[25rem] h-max" @submit.prevent="onSubmit">
    <CardHeader>
      <CardTitle class="text-2xl text-center">
        Sign Up
      </CardTitle>
      <CardDescription class="text-center">
        Enter your information to create an account
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div class="grid">
        <InputValidator id="email" type="email" label="Email" placeholder="youremail@gmai.com" name="email" />
        <InputValidator id="password" label="Password" placeholder="Password" type="password" name="password" />
        <InputValidator id="confirmPassword" label="Confirm password" placeholder="Confirm Password" type="password" name="confirmPassword" />

        <Button :is-loading="status === 'pending'" type="submit" class="w-full mt-4">
          Create an account
        </Button>
      </div>
      <div class="mt-4 text-center text-sm">
        Already have an account?
        <RouterLink to="/auth/login" class="ml-1 text-balance underline">
          Login
        </RouterLink>
      </div>
    </CardContent>
  </form>
</template>
