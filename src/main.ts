import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import { createHead } from '@unhead/vue'
import { MotionPlugin } from '@vueuse/motion'
import { applyInitialTheme, setupSystemThemeListener } from './plugins/theme'
import './assets/main.css'

// El tema ya se aplicó en el script en línea de index.html; esto sólo
// vuelve a sincronizarlo por si el HTML se sirviera cacheado sin él.
applyInitialTheme()
setupSystemThemeListener()

createApp(App).use(router).use(createHead()).use(MotionPlugin).mount('#app')
