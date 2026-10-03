<template>
  <div class="layout-wrapper">
    <header class="global-header">
      <div class="container">
        <div class="logo">FleetSumo</div>
        <nav>
          <a href="#">Product</a>
          <a href="#">Features</a>
          <a href="#">Industries</a>
          <a href="#">Request Demo</a>
        </nav>
      </div>
    </header>

    <main>
      <slot />
    </main>

    <footer class="global-footer">
      <div class="container">
        <p>&copy; 2026 FleetSumo. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<style src="~/assets/css/layout.css" scoped></style>
