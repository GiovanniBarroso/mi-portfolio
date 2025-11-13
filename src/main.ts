import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import { createHead } from '@unhead/vue'
import { MotionPlugin } from '@vueuse/motion'
import { applyInitialTheme, setupSystemThemeListener } from './plugins/theme'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { SiGithub, SiLinkedin, BiEnvelope } from 'oh-vue-icons/icons'
import './assets/main.css'

const app = createApp(App)
const head = createHead()
app.use(router)
app.use(head)
app.use(MotionPlugin)
app.component('VIcon', OhVueIcon)
applyInitialTheme()
setupSystemThemeListener()
addIcons(SiGithub, SiLinkedin, BiEnvelope)
app.mount('#app')
