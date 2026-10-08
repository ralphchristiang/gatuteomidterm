<script setup>
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { college, sections } from '@/assets/data/college'
import UiIcon from './UiIcon.vue'

const route = useRoute()
const menuOpen = ref(false)
const activeSection = ref('hero')
const menuButton = ref(null)
let observer

watch(
  () => route.hash,
  (hash) => {
    activeSection.value = hash.slice(1) || 'hero'
    menuOpen.value = false
  },
)

function navigateToSection(event, navigate) {
  menuOpen.value = false
  navigate(event)
}

function closeMenu() {
  menuOpen.value = false
  menuButton.value?.focus()
}

onMounted(async () => {
  await nextTick()
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) activeSection.value = entry.target.id
      }
    },
    { rootMargin: '-15% 0px -65% 0px', threshold: 0 },
  )
  sections.forEach(({ id }) => {
    const section = document.getElementById(id)
    if (section) observer.observe(section)
  })
})

onUnmounted(() => observer?.disconnect())
</script>

<template>
  <header class="site-header">
    <div class="university-bar">
      <div class="container">
        CENTRAL PHILIPPINE UNIVERSITY <span>JARO, ILOILO CITY · PHILIPPINES</span>
      </div>
    </div>
    <nav class="navbar container" aria-label="Main navigation" @keydown.esc="closeMenu">
      <RouterLink class="brand" to="/#hero" aria-label="College of Computer Studies home">
        <img :src="college.logo" alt="CCS logo" width="44" height="44" />
        <span
          >College of<br /><strong>Computer Studies<span class="brand-dot">.</span></strong></span
        >
      </RouterLink>
      <button
        ref="menuButton"
        class="menu-toggle"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="section-navigation"
        :aria-label="menuOpen ? 'Close navigation menu' : 'Open navigation menu'"
        @click="menuOpen = !menuOpen"
      >
        <UiIcon :name="menuOpen ? 'close' : 'menu'" />
      </button>
      <ul id="section-navigation" class="nav-links" :class="{ 'is-open': menuOpen }">
        <li v-for="section in sections" :key="section.id">
          <RouterLink :to="`/#${section.id}`" custom v-slot="{ href, navigate }">
            <a
              :href="href"
              :class="{ active: activeSection === section.id }"
              :aria-current="activeSection === section.id ? 'location' : undefined"
              @click="navigateToSection($event, navigate)"
              >{{ section.label }}</a
            >
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
