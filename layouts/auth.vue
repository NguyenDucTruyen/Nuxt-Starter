<template>
  <div class="grid lg:grid-cols-2 grid-cols-1 h-full">
    <div class="flex justify-center items-center">
      <slot />
    </div>
    <div class="hidden bg-muted lg:block">
      <img
        src="https://www.shadcn-vue.com/placeholder.svg"
        alt="Image"
        width="1920"
        height="1080"
        class="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
      >
    </div>
  </div>
</template>
