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
              params: { pathMatch: to.path.slice(1).split('/') },
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
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, top: NAV_OFFSET }
    return { top: 0 }
  },
})

export default router
