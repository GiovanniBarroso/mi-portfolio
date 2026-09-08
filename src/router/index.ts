import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: () => import('@/views/HomeView.vue') },
    { path: '/about', name: 'about', component: () => import('@/views/AboutView.vue') },
    { path: '/projects', name: 'projects', component: () => import('@/views/ProjectsView.vue') },
    { path: '/skills', name: 'skills', component: () => import('@/views/SkillsView.vue') },
    { path: '/contact', name: 'contact', component: () => import('@/views/ContactView.vue') },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFoundView.vue'),
    },
  ],
  scrollBehavior(to, _from, savedPosition) {
    const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const behavior = smooth ? ('smooth' as const) : ('auto' as const)

    // Volver atrás debe devolverte donde estabas, no al principio
    if (savedPosition) return savedPosition
    // Los anclajes se compensan con el navbar fijo
    if (to.hash) return { el: to.hash, top: 80, behavior }
    return { top: 0, behavior }
  },
})

export default router
