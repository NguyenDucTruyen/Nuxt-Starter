<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { emailValidator } from '@/utils/validation'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'

const router = useRouter()
const authStore = useAuthStore()

definePageMeta({
  layout: 'auth',
})

const form = useForm({
  validationSchema: toTypedSchema(emailValidator),
})
const body = ref({
  email: '',
})
const { status, execute } = useAsyncData(async () => {
  const res = await authStore.sendEmailResetPassword(body.value)
  notifySuccess({
    content: res.message,
  })
  router.push(`/auth/reset-password?email=${body.value.email}`)
}, { immediate: false })

const onSubmit = form.handleSubmit(async (values) => {
  body.value = values
  await execute()
})
</script>

<template>
  <form class="sm:min-w-[25rem]" @submit.prevent="onSubmit">
    <Card class="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle class="text-2xl text-center">
          Forgot Password
        </CardTitle>
        <CardDescription class="text-center">
          Enter your email below to reset your password
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="grid gap-4">
          <div class="grid gap-2">
            <InputValidator id="email" type="email" label="Email" placeholder="youremail@gmai.com" name="email" />
          </div>
          <Button :is-loading="status === 'pending'" type="submit">
            Send Email
          </Button>
        </div>
        <div class="mt-4 text-center text-sm">
          <RouterLink to="/auth/login" class="underline">
            Back to login
          </RouterLink>
        </div>
      </CardContent>
    </Card>
  </form>
</template>
