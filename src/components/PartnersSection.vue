<script setup>
import { college, partners, sources } from '@/assets/data/college'
import SectionHeading from './SectionHeading.vue'
import UiIcon from './UiIcon.vue'
</script>

<template>
  <section id="partnerships" class="section partners-section" aria-labelledby="partnerships-title">
    <div class="container">
      <SectionHeading
        number="03"
        eyebrow="PARTNERSHIPS & MEMBERSHIPS"
        title="Connected to a bigger world."
        description="Discover the academic, professional, and industry connections featured by the College of Computer Studies."
        heading-id="partnerships-title"
      />
      <div class="partner-grid">
        <article v-for="partner in partners" :key="partner.name" class="partner-card">
          <div class="partner-logo">
            <img
              :src="partner.logo"
              :alt="`${partner.name} logo`"
              width="200"
              height="100"
              loading="lazy"
            />
          </div>
          <h3>{{ partner.shortName || partner.name }}</h3>
          <p>{{ partner.category }}</p>
        </article>
      </div>
      <p class="partners-source">
        Organizations featured in the
        <a :href="sources.linkages" target="_blank" rel="noopener noreferrer"
          >official CCS linkages directory <UiIcon name="external" /></a
        >. Current agreements are subject to college confirmation.
      </p>
      <div class="contact-banner">
        <div>
          <p class="eyebrow">LET'S BUILD CONNECTIONS</p>
          <h3>Great things begin with a conversation.</h3>
          <p>Have a question about our college or a collaboration in mind?</p>
        </div>
        <a class="button button-gold" :href="`mailto:${college.email}`"
          >Get in touch <UiIcon name="mail"
        /></a>
      </div>
    </div>
  </section>
</template>
