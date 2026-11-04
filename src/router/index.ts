import { createRouter, createWebHistory } from 'vue-router'
import { getProject } from '@/utils/project'
import { prefersReducedMotion } from '@/composables/motion'
import { waitForPageEnter } from './pageTransition'

const NAV_OFFSET = 80

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: () => import('@/views/HomeView.vue') },
    { path: '/about', name: 'about', component: () => import('@/views/AboutView.vue') },
    { path: '/projects', name: 'projects', component: () => import('@/views/ProjectsView.vue') },
    {
      path: '/projects/:slug',
      name: 'project',
      component: () => import('@/views/ProjectDetailView.vue'),
      props: true,
      // Un slug inexistente muestra la vista 404 sin cambiar la URL
      beforeEnter: (to) =>
        getProject(String(to.params.slug))
          ? true
          : {
              name: 'not-found',
              // Los params ya vienen decodificados: con to.path (codificado)
              // se volvían a codificar y la URL crecía en cada recarga
              params: { pathMatch: ['projects', String(to.params.slug)] },
              query: to.query,
              hash: to.hash,
              replace: true,
            },
    },
    { path: '/skills', name: 'skills', component: () => import('@/views/SkillsView.vue') },
    { path: '/contact', name: 'contact', component: () => import('@/views/ContactView.vue') },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFoundView.vue'),
    },
  ],
  async scrollBehavior(to, from, savedPosition) {
    // Misma página: anclas con scroll suave; cambios de query (filtros) no mueven nada
    if (to.path === from.path) {
      if (to.hash) {
        return { el: to.hash, top: NAV_OFFSET, behavior: prefersReducedMotion ? 'auto' : 'smooth' }
      }
      return false
    }

    // Página nueva: se espera a que entre y se coloca sin animación.
    // Un scroll suave desde el pie hasta arriba de otra página marea.
    if (from.matched.length) await waitForPageEnter()
    // Si mientras tanto hubo otra navegación (volver atrás enseguida), esta ya
    // no manda: su espera acabaría por tiempo y subiría la página al principio
    if (router.currentRoute.value.fullPath !== to.fullPath) return false
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, top: NAV_OFFSET }
    return { top: 0 }
  },
})

/**
 * GitHub Pages sirve también los ficheros reales (`/about.html`,
 * `/index.html`…). La SPA no tiene esas rutas: se llevan a la limpia.
 */
router.beforeEach((to) => {
  if (!to.path.endsWith('.html')) return true
  const clean = to.path.replace(/(\/index)?\.html$/, '') || '/'
  return { path: clean, query: to.query, hash: to.hash, replace: true }
})

/**
 * Tras un despliegue, una pestaña abierta antes puede pedir trozos de JS o
 * CSS que ya no existen. En vez de dejar enlaces muertos, se recarga una vez
 * la página de destino (con una marca para no entrar en bucle). Lo hace el
 * router y no `vite:preloadError`, porque el router sabe adónde se iba.
 */
const RELOAD_FLAG = 'chunk-reload'
const isChunkError = (err: unknown) =>
  /dynamically imported module|Importing a module script failed|error loading dynamically|Unable to preload CSS/i.test(
    String((err as Error)?.message ?? err)
  )

function reloadOnce(path: string) {
  try {
    if (sessionStorage.getItem(RELOAD_FLAG)) return
    sessionStorage.setItem(RELOAD_FLAG, '1')
  } catch {
    return
  }
  window.location.assign(path)
}

router.onError((err, to) => {
  if (isChunkError(err)) reloadOnce(to.fullPath)
})

router.afterEach(() => {
  try {
    sessionStorage.removeItem(RELOAD_FLAG)
  } catch {
    // Sin almacenamiento no hay marca que limpiar
  }
})

export default router
