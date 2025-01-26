<script setup lang="ts">
const route = useRoute()
if (!route.query.sessionId) {
  window.location.href = '/'
}
const sessionId = route.query.sessionId as string
const stripeStore = useStripeStore()
async function retriveStripe() {
  const data = await stripeStore.getCheckoutSession(sessionId)
  console.log(data)
}
retriveStripe()
</script>

<template>
  <h1>
    Success
  </h1>
</template>
