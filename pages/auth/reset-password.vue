<script setup lang="ts">
import { resetPasswordValidator } from '@/utils/validation'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()

definePageMeta({
  layout: 'auth',
})

const form = useForm({
  validationSchema: toTypedSchema(resetPasswordValidator),
})
const query = route.query
if (!query.email) {
  router.push('/auth/login')
}
const body = ref({
  email: query.email as string,
  token: query.token as string,
  password: '',
  confirmPassword: '',
})
const { status, execute } = useAsyncData(async () => {
  await authStore.resetPassword(body.value)
  notifySuccess({
    content: 'Password reset successfully',
  })
  router.push('/auth/login')
}, { immediate: false })
const onSubmit = form.handleSubmit(async (values) => {
  body.value = values
  await execute()
})
</script>

<template>
  <form class="rounded-lg border bg-card text-card-foreground shadow-sm mx-auto max-w-sm h-max w-[20rem] sm:min-w-[25rem]" @submit.prevent="onSubmit">
    <CardHeader>
      <CardTitle class="text-2xl text-center">
        Reset Password
      </CardTitle>
      <CardDescription class="text-center">
        Enter your token and new password
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div class="">
        <InputValidator id="email" type="email" label="Email" placeholder="youremail@gmai.com" :model-value="query.email as string" name="email" disabled />
        <InputValidator
          id="token"
          :model-value="query.token as string"
          type="text"
          label="Token reset password"
          placeholder="Token"
          name="token"
          autocomplete="off"
        />
        <InputValidator id="password" label="Password" placeholder="Password" type="password" name="password" />
        <InputValidator id="confirmPassword" label="Confirm password" placeholder="Confirm Password" type="password" name="confirmPassword" />
        <div class="flex justify-center my-4">
          <Button type="submit" :disabled="status === 'pending'">
            Reset Password
          </Button>
        </div>
      </div>
      <div class="mt-4 text-center text-sm">
        <RouterLink to="/auth/login" class="underline">
          Back to login
        </RouterLink>
      </div>
    </CardContent>
  </form>
</template>
