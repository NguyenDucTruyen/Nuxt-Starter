<script setup lang="ts">
import { isDark, toggleDark } from '@/composables/dark'
import { useCounter } from '@/store/counter'

const counterStore = useCounter()
</script>

<template>
  <div>
    Hello world
  </div>
  <span>{{ counterStore.myRef }}</span>
  <div class="">
    <ClientOnly>
      <button
        class="bg-transparent px-2 py-1 focus:outline-transparent rounded-sm bg-white dark:bg-black text-black dark:text-white rounded-md hover:text-primary"
        @click="(e) => toggleDark()"
      >
        <carbon:moon v-if="isDark" class="h-5 w-5" />
        <carbon:sun v-else class="h-5 w-5" />
      </button>
    </ClientOnly>
  </div>
</template>
