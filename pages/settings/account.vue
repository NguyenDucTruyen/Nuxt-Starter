<script setup lang="ts">
import { useConfirmStore } from '@/stores/confirm'
import { updateProfileValidator } from '@/utils/validation'
import { toTypedSchema } from '@vee-validate/zod'

import { BookText, CloudUpload, Trash2 } from 'lucide-vue-next'
import { ErrorMessage, Field, useForm } from 'vee-validate'

const confirmStore = useConfirmStore()
const { user } = useUserSession()

const isLoading = ref(false)
const fileInput = useTemplateRef('refInput')
const file = ref<File | null>(null)
const previewImage = ref<string | null>('')

const { handleSubmit, setFieldValue, resetForm } = useForm({
  validationSchema: toTypedSchema(updateProfileValidator),
})

const onSubmit = handleSubmit(async (values) => {
  try {
    isLoading.value = true
    // let url = user.value?.profileImage || ''
    // if (file.value) {
    //   const res = await uploadImage(file.value as File)
    //   url = res.url
    // }
    // const body = {
    //   ...values,
    //   phone: 0,
    //   profileImage: url,
    // }
    resetData()
  }
  finally {
    isLoading.value = false
  }
})

function resetData() {
  resetForm()
//   date.value = user.value?.dayOfBirth ? new Date(user.value.dayOfBirth) : null
}
function handleUploadImage(e: Event, field: any) {
  const target = e.target as HTMLInputElement
  const files = target.files
  if (!files?.length) {
    return
  }
  file.value = files[0]
  setFieldValue(field.name, file.value)
  const blob = URL.createObjectURL(file.value)
  previewImage.value = blob
}

function clearImage() {
  if (user.value) {
    user.value.avatar_url = ''
  }
  if (fileInput.value)
    fileInput.value.value = ''
  file.value = null
  previewImage.value = user.value?.avatar_url || null
}

async function confirmDeletePhoto() {
  const result = await confirmStore.showConfirmDialog({
    title: 'Confirm delete',
    message: 'Are you sure you want to delete this photo?',
  })
  if (result) {
    clearImage()
  }
}
</script>

<template>
  <form v-if="user" class="p-8 max-w-4xl flex-1 rounded-md" @submit.prevent="onSubmit">
    <div class="flex flex-col items-center mb-8">
      <h1 class="text-2xl font-semibold mb-2 flex items-center gap-2">
        Profile
      </h1>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
      <div class="col-span-1 flex flex-col relative items-center">
        <div class="h-28 w-28 sm:h-40 sm:w-40 rounded-lg cursor-pointer relative mt-8" @click="() => fileInput?.click()">
          <template v-if="previewImage">
            <div class="flex justify-center items-center rounded-sm absolute right-1 top-1 hover:bg-muted-foreground bg-secondary p-1 cursor-pointer" @click.stop="confirmDeletePhoto">
              <Trash2 />
            </div>
            <img v-lazy="previewImage" class="h-full w-full object-cover rounded-lg">
          </template>
          <div v-if="!previewImage" class="rounded-lg p-1 flex flex-col items-center gap-2 absolute">
            <CloudUpload :size="32" />
            <span class="font-semibold">Upload avatar</span>
          </div>
        </div>
        <Field v-slot="{ field }" name="file">
          <input
            id="file"
            ref="refInput"
            type="file"
            accept="image/*"
            class="hidden"
            @change="handleUploadImage($event, field)"
          >
        </Field>
        <ErrorMessage name="file" class="absolute w-full text-center left-1/2 translate-x-[-50%] bottom-0 text-sm font-normal text-destructive" />
      </div>
      <div class="col-span-2 grid gap-2 py-4">
        <Label>Email</Label>
        <Input :model-value="user?.email ?? ''" label="Email" disabled />
        <InputValidator
          id="firstName"
          :model-value="user?.full_name ?? ''"
          type="text"
          label="Full Name"
          placeholder="Enter your full name"
          name="firstName"
        />
      </div>
    </div>

    <Button variant="secondary" type="button" @click="resetData">
      Reset
    </Button>
    <Button type="submit" :disabled="isLoading">
      <template v-if="isLoading">
        <Icon name="IconLoading" />
        Please wait
      </template>
      <template v-else>
        Update Profile
      </template>
    </Button>
  </form>
</template>
