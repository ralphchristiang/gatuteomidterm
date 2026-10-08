<script setup>
defineProps({ name: { type: String, default: 'arrow' } })
const paths = {
  arrow: 'M5 12h14m-6-6 6 6-6 6',
  external: 'M14 4h6v6m0-6L10 14M10 4H4v16h16v-6',
  plus: 'M12 5v14M5 12h14',
  minus: 'M5 12h14',
  mail: 'M3 5h18v14H3zM3 5l9 7 9-7',
  location: 'M12 21s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12zm0-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6',
  menu: 'M4 6h16M4 12h16M4 18h16',
  close: 'M6 6l12 12M18 6 6 18',
  up: 'M12 19V5m-6 6 6-6 6 6',
}
</script>

<template>
  <svg
    class="icon"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.7"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path :d="paths[name] || paths.arrow" />
  </svg>
</template>
