<script setup lang="ts">
const sidebarStore = useSidebarStore()
function toggleSidebar() {
  sidebarStore.toggle()
}
</script>

<template>
  <div class="sticky top-0 z-40">
    <div class="w-full h-20 px-6  border-b flex items-center justify-between">
      <div class="flex">
        <!-- mobile hamburger -->
        <div class="lg:hidden flex items-center mr-4">
          <button 
            class="hover:text-blue-500 hover:border-white focus:outline-none navbar-burger"
            @click="toggleSidebar()">
            <Icon name="IconMenu" class="w-5 h-5" >
              <title>Menu</title>
            </Icon>
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
