<template>
  <!-- give the sidebar z-50 class so its higher than the navbar if you want to see the logo -->
  <!-- you will need to add a little "X" button next to the logo in order to close it though -->
  <div id="main-nav" class="w-1/2 md:w-1/3 lg:w-64 fixed md:top-0 md:left-0 h-screen lg:block border-r z-30">
    <div class="w-full h-20 border-b flex px-4 items-center mb-8">
      <p class="font-semibold text-3xl  pl-4">
        ADMIN
      </p>
    </div>

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
