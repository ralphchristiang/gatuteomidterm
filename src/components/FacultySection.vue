<script setup>
import { computed, ref } from 'vue'
import { departments, personnel, sources } from '@/assets/data/college'
import SectionHeading from './SectionHeading.vue'

const selectedDepartment = ref('all')
const filters = [{ id: 'all', shortLabel: 'All departments' }, ...departments]
const visibleDepartments = computed(() =>
  departments
    .filter(({ id }) => selectedDepartment.value === 'all' || id === selectedDepartment.value)
    .map((department) => ({
      ...department,
      people: personnel.filter((person) => person.department === department.id),
    })),
)
const visibleCount = computed(() =>
  visibleDepartments.value.reduce((count, department) => count + department.people.length, 0),
)
</script>

<template>
  <section id="faculty" class="section faculty-section" aria-labelledby="faculty-title">
    <div class="container">
      <SectionHeading
        number="02"
        eyebrow="FACULTY & STAFF"
        title="The people behind your possibilities."
        description="Get to know the educators, mentors, and support team featured in the official CCS directory."
        heading-id="faculty-title"
      />
      <div class="faculty-controls">
        <div class="department-filters" role="group" aria-label="Filter personnel by department">
          <button
            v-for="filter in filters"
            :key="filter.id"
            type="button"
            :aria-pressed="selectedDepartment === filter.id"
            :class="{ selected: selectedDepartment === filter.id }"
            @click="selectedDepartment = filter.id"
          >
            {{ filter.shortLabel }}
          </button>
        </div>
        <p class="result-count" role="status" aria-live="polite">{{ visibleCount }} people</p>
      </div>
      <div class="department-groups">
        <div v-for="department in visibleDepartments" :key="department.id" class="department-group">
          <div class="department-heading">
            <h3>{{ department.label }}</h3>
            <span>{{ String(department.people.length).padStart(2, '0') }} / PEOPLE</span>
          </div>
          <div class="faculty-grid" :class="{ 'leadership-grid': department.id === 'leadership' }">
            <article
              v-for="person in department.people"
              :key="person.id"
              class="person-card"
              :class="{ 'dean-card': department.id === 'leadership' }"
            >
              <div class="portrait-wrap">
                <img
                  :src="person.photo"
                  :alt="`Portrait of ${person.name}`"
                  width="754"
                  height="1024"
                  loading="lazy"
                /><span class="portrait-marker" aria-hidden="true">CCS / CPU</span>
              </div>
              <div class="person-copy">
                <p class="person-role">{{ person.role }}</p>
                <h4>{{ person.name }}</h4>
                <div class="person-qualification">
                  <span class="detail-label">PUBLISHED QUALIFICATION</span>
                  <p :class="{ 'qualification-pending': !person.qualification }">
                    {{ person.qualification || 'Awaiting confirmation from CCS' }}
                  </p>
                  <p v-if="person.qualificationNote" class="qualification-note">
                    {{ person.qualificationNote }}
                  </p>
                </div>
                <p v-if="department.id === 'leadership'" class="dean-note">
                  Guiding a community of learners in computing, creativity, and information science.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
      <details class="directory-notes">
        <summary>About this directory & its sources <span aria-hidden="true">+</span></summary>
        <div>
          <p>
            This student mockup uses names, portraits, and program assignments published in the
            <a :href="sources.faculty" target="_blank" rel="noopener noreferrer"
              >CCS faculty directory</a
            >. Leadership roles and selected qualifications were cross-checked against CPU's
            <a :href="sources.universityDirectory" target="_blank" rel="noopener noreferrer"
              >SY 2024–2025 administration directory</a
            >.
          </p>
          <p>
            The current organizational chart outside the CCS Office is still needed to confirm the
            full roster, department assignments, expanded names, and highest educational attainment.
            Published credentials are shown as supplied; missing qualifications are marked for
            confirmation. Selected undergraduate credentials come from CPU's
            <a :href="sources.historicalDirectory" target="_blank" rel="noopener noreferrer"
              >2018–2019 directory</a
            >
            and are dated accordingly. Department groupings follow published program assignments and
            are provisional. Chrislyn Calsado Castaño's expanded middle name appears in CPU's
            <a :href="sources.serviceAwards" target="_blank" rel="noopener noreferrer"
              >service award announcement</a
            >.
          </p>
          <p>
            CPU lists Lennon D. Pajar as OIC Director of UCSC and Lesley Joy L. Dignadice as Acting
            Director of the Local and International Linkages and Affiliation Center. Their CCS
            assignments shown here come from the college directory. Rea P. Balontong was previously
            listed as IT/IS head; the newer university directory lists Rose Leah Joy A. Ojacastro as
            acting chairperson.
          </p>
        </div>
      </details>
    </div>
  </section>
</template>
