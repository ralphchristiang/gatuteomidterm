import { ref } from 'vue'

const STORAGE_KEY = 'ccs-theme'
const isDark = ref(false)

function applyTheme(theme, persist = true) {
  isDark.value = theme === 'dark'

  if (typeof document !== 'undefined') {
    document.documentElement.dataset.theme = isDark.value ? 'dark' : 'light'
  }

  if (persist) {
    try {
      localStorage.setItem(STORAGE_KEY, isDark.value ? 'dark' : 'light')
    } catch {
      // The switch still works when browser storage is unavailable.
    }
  }
}

export function initializeTheme() {
  let theme = 'light'
  try {
    if (localStorage.getItem(STORAGE_KEY) === 'dark') theme = 'dark'
  } catch {
    // Keep the default light appearance if the saved preference cannot be read.
  }
  applyTheme(theme, false)
}

export function useTheme() {
  function toggleTheme() {
    applyTheme(isDark.value ? 'light' : 'dark')
  }

  return { isDark, toggleTheme }
}
