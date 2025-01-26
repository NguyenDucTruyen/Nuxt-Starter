<template>
  <NuxtLoadingIndicator />
  <DialogConfirm />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: hsl(var(--primary) / 0.2);
  border-radius: 6px;
  cursor: pointer;
}
</style>
