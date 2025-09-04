// src/main.ts
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

import { createHead } from '@unhead/vue'
import { MotionPlugin } from '@vueuse/motion'
import { applyInitialTheme } from './plugins/theme'

const app = createApp(App)
const head = createHead()

app.use(router)
app.use(head)
app.use(MotionPlugin)

applyInitialTheme()
app.mount('#app')
