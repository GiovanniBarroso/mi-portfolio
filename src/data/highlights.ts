import type { HighlightItem } from '@/types/portfolio'

export const highlights: readonly HighlightItem[] = [
  {
    slug: 'fastfix',
    title: '⚙️ FastFix (TFG)',
    description:
      'Plataforma de reparaciones: Laravel 10 + Vue 3, JWT, PayPal, facturación PDF y panel admin.',
    tags: ['fullstack', 'tfg'],
    href: '/projects',
    featured: true,
  },
  {
    slug: 'cosas-d-casa',
    title: '🛒 Cosas D Casa',
    description:
      'Next.js 15 + Supabase + Tailwind v4. ISR, admin con Magiclink y subida directa desde móvil.',
    tags: ['fullstack'],
    href: '/projects',
    featured: true,
  },
  {
    slug: 'nanobank',
    title: '💰 NanoBank',
    description:
      'Aplicación de banca simulada con JUnit en el frontend y JAVA en el backend. Permite gestionar usuarios y múltiples perfiles de inversión con distintos niveles de riesgo.',
    tags: ['backend', 'infra'],
    href: '/projects',
  },
  {
    slug: 'date-un-respiro',
    title: '📖 Date un Respiro',
    description:
      'SPA Negocio Mindfulness, visor de PDFs (react-pdf) con URLs firmadas de Supabase.',
    tags: ['frontend', 'fullstack'],
    href: '/projects',
  },
] as const
