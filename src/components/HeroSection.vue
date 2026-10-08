<script setup>
import { college } from '@/assets/data/college'
import UiIcon from './UiIcon.vue'
</script>

<template>
  <section id="hero" class="hero" aria-labelledby="hero-title">
    <div class="container hero-grid">
      <div class="hero-copy">
        <p class="eyebrow"><span class="eyebrow-line"></span> YOUR FUTURE STARTS AT CENTRAL</p>
        <h1 id="hero-title">
          Build what<br />comes
          <span class="gold-word">next<span class="hero-period">.</span></span>
        </h1>
        <p class="hero-description">
          A place for curious minds and bold ideas. Discover your path in technology, creativity,
          and information at the College of Computer Studies.
        </p>
        <div class="hero-actions">
          <RouterLink class="button button-gold" to="/#programs"
            >Explore our programs <UiIcon
          /></RouterLink>
          <RouterLink class="text-link" to="/#faculty"
            >Meet your mentors <UiIcon name="external"
          /></RouterLink>
        </div>
        <div class="hero-footnote">
          <span class="small-star" aria-hidden="true">✦</span
          ><span>Different people. One goal.<br /><strong>The CCS Warriors.</strong></span>
        </div>
      </div>
      <div class="hero-art" aria-label="College of Computer Studies identity">
        <div class="art-topline">
          <span>CREATE / CONNECT / BUILD</span><span class="art-plus" aria-hidden="true">+</span>
        </div>
        <div class="orbit orbit-one" aria-hidden="true"></div>
        <div class="orbit orbit-two" aria-hidden="true"></div>
        <div class="art-coordinate coordinate-top" aria-hidden="true">01 / THE NEXT GENERATION</div>
        <img
          class="hero-logo"
          :src="college.heroLogo"
          alt="College of Computer Studies CCS logo"
          width="1600"
          height="1600"
          fetchpriority="high"
        />
        <div class="art-label">
          <span class="label-dot" aria-hidden="true"></span> COLLEGE OF COMPUTER STUDIES
        </div>
        <div class="art-bottomline">
          <span>ROOTED IN EXCELLENCE.</span><span>READY FOR TOMORROW.</span>
        </div>
      </div>
    </div>
    <div class="hero-strip container">
      <span class="strip-label">FIND YOUR PATH</span>
      <span>Technology</span><span class="strip-star" aria-hidden="true">✦</span
      ><span>Computing</span><span class="strip-star" aria-hidden="true">✦</span
      ><span>Creativity</span><span class="strip-star" aria-hidden="true">✦</span
      ><span>Knowledge</span>
      <RouterLink to="/#programs" aria-label="Scroll down to programs"
        ><span class="down-arrow" aria-hidden="true">↓</span></RouterLink
      >
    </div>
  </section>
</template>
