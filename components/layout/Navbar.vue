<template>
  <div class="sticky top-0 z-40">
    <div class="w-full h-20 px-6  border-b flex items-center justify-between">
      <div class="flex">
        <!-- mobile hamburger -->
        <div class="lg:hidden flex items-center mr-4">
          <button class="hover:text-blue-500 hover:border-white focus:outline-none navbar-burger">
            <svg class="h-5 w-5" :style="{ fill: 'black' }" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>
      </div>

      <!-- right navbar -->
      <div class="flex items-center relative">
        <ThemePicker />
        <UserDropdown />
      </div>
    </div>
  </div>
</template>
