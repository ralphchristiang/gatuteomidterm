<script setup>
import SiteNavbar from '@/components/SiteNavbar.vue'
import SiteFooter from '@/components/SiteFooter.vue'
</script>

<template>
  <a class="skip-link" href="#main-content">Skip to main content</a>
  <SiteNavbar />
  <main id="main-content" tabindex="-1">
    <RouterView />
  </main>
  <SiteFooter />
</template>
