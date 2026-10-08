<script setup>
defineProps({
  number: String,
  eyebrow: String,
  title: String,
  description: String,
  headingId: String,
})
</script>

<template>
  <div class="section-heading">
    <div>
      <p class="eyebrow">
        <span class="section-number">{{ number }}</span> {{ eyebrow }}
      </p>
      <h2 :id="headingId">{{ title }}</h2>
    </div>
    <p class="section-description">{{ description }}</p>
  </div>
</template>
