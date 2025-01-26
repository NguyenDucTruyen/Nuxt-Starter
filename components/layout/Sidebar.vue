<script setup lang="ts">
const sidebarStore = useSidebarStore()

</script>

<template>
  <div 
    id="main-nav" 
    class="w-full max-lg:fixed h-[calc(100vh-80px)] top-20 sm:w-64 lg:block bg-background z-10 transition-all duration-300 ease-in-out"
    :class="sidebarStore.isOpen ? 'translate-x-0' : 'max-lg:-translate-x-full'"
  >
    <div class="mb-4 px-4">
      <p class="pl-4 text-sm font-semibold mb-1">
        MAIN
      </p>
      <div class="w-full flex items-center  h-10 pl-4 bg-muted-foreground hover:bg-muted-foreground hover:text-background rounded-lg cursor-pointer">
        <span class="text-background">Dashboard</span>
      </div>
      <div class="w-full flex items-center  h-10 pl-4 hover:bg-muted-foreground hover:text-background rounded-lg cursor-pointer">
        <span class="">Analytics</span>
      </div>
      <div class="w-full flex items-center  h-10 pl-4 hover:bg-muted-foreground hover:text-background rounded-lg cursor-pointer">
        <span class="">Inventory</span>
      </div>
      <div class="w-full flex items-center  h-10 pl-4 hover:bg-muted-foreground hover:text-background rounded-lg cursor-pointer">
        <span class="">Enquiries</span>
      </div>
      <div class="w-full flex items-center  h-10 pl-4 hover:bg-muted-foreground hover:text-background rounded-lg cursor-pointer">
        <span class="">Calender</span>
      </div>
    </div>

    <div class="mb-4 px-4">
      <p class="pl-4 text-sm font-semibold mb-1">
        PRODUCTS
      </p>
      <div class="w-full flex items-center  h-10 pl-4 hover:bg-muted-foreground hover:text-background rounded-lg cursor-pointer">
        <span class="">Add Product</span>
      </div>
      <div class="w-full flex items-center  h-10 pl-4 hover:bg-muted-foreground hover:text-background rounded-lg cursor-pointer">
        <span class="">View Products</span>
      </div>
    </div>
  </div>
</template>
