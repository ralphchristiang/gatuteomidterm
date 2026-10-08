<script setup>
import { college, sections } from '@/assets/data/college'
import UiIcon from './UiIcon.vue'
</script>

<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-top">
        <RouterLink class="brand footer-brand" to="/#hero"
          ><img :src="college.logo" alt="CCS logo" width="44" height="44" /><span
            >College of<br /><strong>Computer Studies.</strong></span
          ></RouterLink
        >
        <p>Different people.<br /><strong>One goal. Infinite possibilities.</strong></p>
      </div>
      <div class="footer-middle">
        <div class="footer-contact">
          <p>
            <UiIcon name="location" /><span>{{ college.address }}</span>
          </p>
          <a :href="`mailto:${college.email}`"><UiIcon name="mail" />{{ college.email }}</a>
        </div>
        <nav aria-label="Footer navigation">
          <RouterLink v-for="section in sections" :key="section.id" :to="`/#${section.id}`">{{
            section.label
          }}</RouterLink>
        </nav>
      </div>
      <div class="footer-bottom">
        <p>
          © {{ new Date().getFullYear() }} · CCS student website mockup by Ralph Christian C.
          Gatuteo
        </p>
        <a href="https://ccs.cpu.edu.ph/" target="_blank" rel="noopener noreferrer"
          >Official CCS website <UiIcon name="external" /></a
        ><RouterLink class="back-top" to="/#hero" aria-label="Back to top"
          ><UiIcon name="up"
        /></RouterLink>
      </div>
    </div>
  </footer>
</template>
