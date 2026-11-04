import { createApp } from 'vue'
import { createHead } from '@unhead/vue'
import App from './App.vue'
import router from './router'
import { initTheme } from './plugins/theme'
import './assets/main.css'

// El tema ya se aplicó en el script en línea de index.html; esto sincroniza
// el estado reactivo con él y empieza a escuchar los cambios del sistema.
initTheme()

const app = createApp(App).use(router).use(createHead())

// Se monta cuando la vista inicial (cargada bajo demanda) ya está lista. Si
// no, el pie se pinta arriba un instante y luego salta hacia abajo: eso era
// un CLS de 0,9 en Lighthouse.
// Si falla (sin red al pedir la vista), se monta igual: mejor el navbar y el
// pie que una página en blanco.
router
  .isReady()
  .catch(() => {})
  .finally(() => app.mount('#app'))
