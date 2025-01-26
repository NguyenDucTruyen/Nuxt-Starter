<template>
  <div class="default-layout">
    <Navbar class="navbar" />
    <Sidebar class="sidebar" />
    <div class="main-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.default-layout {
  height: 100vh;
  display: grid;
  grid-template-columns: 260px 1fr;
  grid-template-rows: 80px 1fr;
  grid-template-areas:
  "navbar navbar"
  "sidebar main-content";
  }

  .navbar {
  grid-area: navbar;
  }

  .sidebar {
  grid-area: sidebar;
  }

  .main-content {
  grid-area: main-content;
  overflow-y: auto;
  height: calc(100vh - 80px);
  padding: 1rem;
  }

  @media screen and (max-width: 1024px) {
    .default-layout {
      grid-template-columns: 1fr;
      grid-template-areas:
        "navbar"
        "main-content";
    }
  }
</style>
