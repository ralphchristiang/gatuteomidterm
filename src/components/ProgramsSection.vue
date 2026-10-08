<script setup>
import { ref } from 'vue'
import { programs } from '@/assets/data/college'
import SectionHeading from './SectionHeading.vue'
import UiIcon from './UiIcon.vue'

const expandedPrograms = ref(new Set())
function toggleProgram(id) {
  const updated = new Set(expandedPrograms.value)
  if (updated.has(id)) updated.delete(id)
  else updated.add(id)
  expandedPrograms.value = updated
}
</script>

<template>
  <section id="programs" class="section programs-section" aria-labelledby="programs-title">
    <div class="container">
      <SectionHeading
        number="01"
        eyebrow="PROGRAMS OFFERED"
        title="Four paths. Endless possibilities."
        description="Find the program that fits how you think, what you love, and the future you want to create."
        heading-id="programs-title"
      />
      <div class="program-grid">
        <article
          v-for="(program, index) in programs"
          :key="program.id"
          class="program-card"
          :class="`theme-${program.theme}`"
        >
          <div class="program-top">
            <span class="program-number">0{{ index + 1 }}</span
            ><img
              :src="program.logo"
              :alt="`${program.acronym} ${program.organization} logo`"
              width="80"
              height="80"
              loading="lazy"
            />
          </div>
          <p class="program-acronym">{{ program.acronym }}</p>
          <h3>{{ program.title }}</h3>
          <p class="degree-name">{{ program.degree }}</p>
          <p class="program-description">{{ program.description }}</p>
          <p class="program-focus">{{ program.focus }}</p>
          <button
            class="program-toggle"
            type="button"
            :aria-expanded="expandedPrograms.has(program.id)"
            :aria-controls="`${program.id}-details`"
            @click="toggleProgram(program.id)"
          >
            {{ expandedPrograms.has(program.id) ? 'Show less' : 'Explore program' }}
            <UiIcon :name="expandedPrograms.has(program.id) ? 'minus' : 'plus'" />
          </button>
          <div
            v-show="expandedPrograms.has(program.id)"
            :id="`${program.id}-details`"
            class="program-details"
          >
            <p class="detail-label">WHAT YOU'LL EXPLORE</p>
            <ul>
              <li v-for="topic in program.topics" :key="topic">{{ topic }}</li>
            </ul>
            <p class="organization-note">Logo: {{ program.organization }}</p>
            <a class="text-link" :href="program.url" target="_blank" rel="noopener noreferrer"
              >Official program information <UiIcon name="external"
            /></a>
          </div>
        </article>
      </div>
      <p class="program-bottom-note">
        Your ideas belong here.
        <RouterLink to="/#partnerships"
          >See the connections behind your learning <UiIcon
        /></RouterLink>
      </p>
    </div>
  </section>
</template>
