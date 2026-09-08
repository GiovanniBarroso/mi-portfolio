export type ProjectItem = {
  slug: string
  title: string
  description: string
  techs: string[]
  image: string
  demoUrl?: string | null
  repoUrl?: string | null
}

const BASE = import.meta.env.BASE_URL
const pub = (file: string) => `${BASE}resources/${file}`

export const projects: ProjectItem[] = [
  {
    slug: 'mybalance',
    title: 'MyBalance',
    description:
      'Dashboard de progresión de entreno hacia un objetivo con fecha. Sincroniza los entrenos desde la API de Hevy con un cron diario, detecta ejercicios estancados y calcula la siguiente progresión (doble progresión y 1RM Epley) cruzando volumen con medidas corporales. Multiusuario con Magic Link PKCE + OTP, PWA instalable con notificaciones push y monitorización con Sentry.',
    techs: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Supabase',
      'TanStack Query',
      'Tailwind v4',
      'shadcn/ui',
      'Recharts',
      'PWA',
      'Sentry',
    ],
    image: pub('mybalance.webp'),
    demoUrl: 'https://my-balance.co',
    repoUrl: null,
  },
  {
    slug: 'cosas-d-casa',
    title: 'Cosas D Casa',
    description:
      'E-commerce en producción con cobros reales. Checkout con Stripe y webhooks idempotentes que controlan stock, reembolsos totales y parciales desde el panel, facturación PDF y emails transaccionales con Resend. Panel de administración con Magic Link, métricas de ventas, avisos de stock, tareas cron y suite de tests con Vitest sobre las rutas críticas de pago.',
    techs: [
      'Next.js 15',
      'React 19',
      'TypeScript',
      'Stripe',
      'Supabase',
      'Resend',
      'Tailwind v4',
      'Vitest',
      'PWA',
    ],
    image: pub('cosas-d-casa.webp'),
    demoUrl: 'https://cosas-d-casa.com',
    repoUrl: null,
  },
  {
    slug: 'fastfix',
    title: 'FastFix',
    description:
      'Proyecto de Fin de Grado desarrollado en equipo de tres: plataforma integral de reparaciones y venta tecnológica. SPA desacoplada con API en Laravel 10 y frontend en Vue 3 + Pinia. Autenticación JWT con verificación de email y 2FA vía Fortify, carrito y pago con PayPal, facturas en PDF con dompdf, calendario de citas y panel de administración con stock, pedidos y métricas.',
    techs: ['Laravel 10', 'Vue 3', 'PHP', 'MySQL', 'JWT', 'PayPal API', 'Pinia'],
    image: pub('fastfix.webp'),
    demoUrl: null,
    repoUrl: 'https://github.com/GiovanniBarroso/FastFix',
  },
  {
    slug: 'nanobank',
    title: 'NanoBank',
    description:
      'Aplicación de banca simulada en Java con interfaz Swing y persistencia en MySQL. Registro y login de usuarios, transferencias, Bizum, y gestión de carteras de inversión con distintos perfiles de riesgo. Genera justificantes en PDF con iText para cada operación.',
    techs: ['Java', 'Swing', 'MySQL', 'JDBC', 'iText'],
    image: pub('nanobank.webp'),
    demoUrl: null,
    repoUrl: 'https://github.com/GiovanniBarroso/NanoBank',
  },
  {
    slug: 'date-un-respiro',
    title: 'Date un Respiro',
    description:
      'Plataforma de lectura y bienestar construida con Next.js 15 y Supabase. Sirve libros en PDF desde Supabase Storage mediante URLs firmadas y un visor propio con react-pdf, con seguimiento de lectura, animaciones con Framer Motion y modo oscuro.',
    techs: ['Next.js 15', 'React 19', 'Supabase', 'Tailwind v4', 'TypeScript', 'react-pdf'],
    image: pub('date-un-respiro.webp'),
    demoUrl: 'https://date-un-respiro.vercel.app',
    repoUrl: null,
  },
  {
    slug: 'mi-portfolio',
    title: 'Mi Portfolio',
    description:
      'Portfolio personal desarrollado con Vue 3, TypeScript y Tailwind CSS. Incluye animaciones con Motion, SEO dinámico con Unhead, PWA, modo oscuro y pipeline CI/CD en GitHub Actions.',
    techs: ['Vue 3', 'TypeScript', 'Tailwind', 'Vite', 'PWA', 'Unhead'],
    image: pub('mi-portfolio.webp'),
    demoUrl: 'https://giovannibarroso.com',
    repoUrl: 'https://github.com/GiovanniBarroso/mi-portfolio',
  },
  {
    slug: 'manuela-rios',
    title: 'Manuela Ríos Micropigmentación',
    description:
      'Landing page estática para un negocio real, optimizada para SEO y rendimiento. HTML + CSS + JS sin framework, diseño responsive con parallax y llamadas a acción a WhatsApp y Google Maps. Calidad asegurada con Stylelint, HTMLHint, Prettier y hooks de pre-commit con Husky.',
    techs: ['HTML5', 'CSS3', 'JavaScript', 'SEO', 'Stylelint', 'Husky'],
    image: pub('manuela-rios.webp'),
    demoUrl: 'https://manuelariosmakeup.com',
    repoUrl: 'https://github.com/GiovanniBarroso/manuelarios',
  },
  {
    slug: 'analytics-umami',
    title: 'Analytics Umami',
    description:
      'Instancia auto-hospedada de Umami Analytics desplegada en Vercel para medir el tráfico de proyectos propios como Cosas D Casa y Date un Respiro. Analítica sin cookies y respetuosa con el RGPD, con eventos personalizados y consulta de métricas vía API.',
    techs: ['Umami', 'Next.js', 'PostgreSQL', 'Vercel', 'Self-hosting', 'RGPD'],
    image: pub('umami.webp'),
    demoUrl: null,
    repoUrl: 'https://github.com/GiovanniBarroso/analytics-umami',
  },
  {
    slug: 'pi-hole',
    title: 'Pi-hole en Raspberry Pi',
    description:
      'Implementación de Pi-hole en una Raspberry Pi 3B v2.0 como bloqueador de publicidad a nivel de red. Configuración de DNS local, rendimiento y mantenimiento del sistema.',
    techs: ['Raspberry Pi', 'Pi-hole', 'Linux', 'Redes LAN', 'Ad-blocking'],
    image: pub('pi-hole.webp'),
    demoUrl: null,
    repoUrl: null,
  },
]

/**
 * Proyectos que abren Home y la vista de Proyectos, en este orden.
 * Antes esta lista estaba duplicada en las dos vistas y se podían
 * desincronizar sin que nada avisara.
 */
export const FEATURED_SLUGS: { slug: string; badge?: string }[] = [
  { slug: 'mybalance' },
  { slug: 'cosas-d-casa' },
  { slug: 'fastfix', badge: 'No desplegado' },
]
