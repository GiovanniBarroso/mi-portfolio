// src/main.ts
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

// AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

// Theme
import { applyInitialTheme } from './plugins/theme'

// SEO Head
import { createHead } from 'unhead'

const app = createApp(App)
const head = createHead()

app.use(router)
app.use(head)

applyInitialTheme()
app.mount('#app')

AOS.init({
  duration: 700,
  once: true,
  easing: 'ease-out-cubic',
  offset: 80,
})

router.afterEach(() => {
  setTimeout(() => AOS.refreshHard(), 0)
})
