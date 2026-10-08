import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeTheme } from './composables/useTheme'
import './assets/main.css'

initializeTheme()

const app = createApp(App)

app.use(router)

app.mount('#app')
