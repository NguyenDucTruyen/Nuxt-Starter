<template>
  <div class="leading-normal tracking-normal" id="main-body">
    <div class="flex flex-wrap">
      <Sidebar />
      <div class="w-full pl-0 lg:pl-64 min-h-screen" id="main-content">
        <Navbar />
        <div class="p-6 mb-20">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
