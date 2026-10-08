import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

// The offset leaves section headings visible below the fixed navigation bar.
export const NAVBAR_OFFSET = 104

export function getScrollPosition(to, savedPosition, reducedMotion = false) {
  if (savedPosition) return savedPosition
  if (to.hash) {
    return {
      el: to.hash,
      top: NAVBAR_OFFSET,
      behavior: reducedMotion ? 'auto' : 'smooth',
    }
  }
  return { top: 0 }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{ path: '/', name: 'home', component: HomeView }],
  scrollBehavior(to, from, savedPosition) {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    return getScrollPosition(to, savedPosition, reducedMotion)
  },
})

export default router
