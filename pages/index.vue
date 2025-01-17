<script setup lang="ts">
type Theme = 'light' | 'dark'

function setColorTheme(newTheme: Theme) {
  useColorMode().preference = newTheme
}
</script>

<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="h-screen dark:accent-slate-900">
    <div>
      <div class="navbar relative dark:bg-slate-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
          <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <button class="ml-5" @click="setColorTheme($colorMode.preference === 'dark' ? 'light' : 'dark')">
              {{ $colorMode.preference === 'dark' ? 'Light' : 'Dark' }} Mode
            </button>
          </div>
        </div>
      </div>
    </div>
    <button @click="() => notifySuccess({ content: 'Hello, world!' })">
      Toast
    </button>
    <div class="justify-items-center flex h-full items-top">
      <div class="text-9xl mt-16">
        <h1>Nuxt Dark Mode is Easy</h1>
      </div>
    </div>
  </div>
</template>
