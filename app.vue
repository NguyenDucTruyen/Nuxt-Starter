<script setup lang="ts">
import { useCounter } from '@/store/counter'
import { isDark, toggleDark } from '@/composables/dark'

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
                  <carbon:moon class="h-5 w-5" v-if="isDark" />
                  <carbon:sun class="h-5 w-5" v-else />
                </button>
              </ClientOnly>
            </div>
</template>
