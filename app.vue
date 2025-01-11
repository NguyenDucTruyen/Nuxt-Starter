<script setup lang="ts">
import { useCounter } from '@/store/counter'
const counterStore = useCounter()

</script>
<template>
  <div>
    Hello world
  </div>
  <span>{{ counterStore.myRef }}</span>
</template>
