<script setup lang="ts">
type Theme = 'light' | 'dark'

function setColorTheme(newTheme: Theme) {
  useColorMode().preference = newTheme
}
</script>

<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="dark:accent-slate-900">
    <button class="ml-5" @click="setColorTheme($colorMode.preference === 'dark' ? 'light' : 'dark')">
      {{ $colorMode.preference === 'dark' ? 'Light' : 'Dark' }} Mode
    </button>
  </div>
  <button @click="() => notifySuccess({ content: 'Hello, world!' })">
    Toast
  </button>
</template>
