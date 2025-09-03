// main.ts o main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

// AOS (animaciones on scroll)
import AOS from 'aos'
import 'aos/dist/aos.css'

// Theme
import { applyInitialTheme } from './plugins/theme'

const app = createApp(App)
app.use(router)

applyInitialTheme() // aplica dark/light según localStorage o media query

app.mount('#app')

// Inicializar AOS después del mount
AOS.init({
    duration: 700,
    once: true,
    easing: 'ease-out-cubic',
    offset: 80
})

// Refrescar AOS tras cada cambio de ruta
router.afterEach(() => {
    // Usamos setTimeout para esperar a que el DOM se renderice
    setTimeout(() => AOS.refreshHard(), 0)
})
