import type { AboutData } from '@/types/portfolio'

// Prefijo BASE_URL para que la ruta siga siendo válida si el sitio
// se sirviera desde un subdirectorio en vez de la raíz del dominio.
const BASE = import.meta.env.BASE_URL

export const aboutData: AboutData = {
  profileImage: `${BASE}profile.jpg`,
  tags: ['Fullstack', 'Accesibilidad', 'Rendimiento'],
  stats: [
    { label: 'Proyectos reales', value: '9' },
    { label: 'Repos públicos', value: '12' },
    { label: 'Stack principal', value: 'TypeScript' },
  ],
  achievements: [
    'E-commerce en producción con cobros y reembolsos vía Stripe.',
    'APIs REST en NestJS + Prisma con JWT, multi-tenant y Docker.',
    'Tests con Vitest/Jest y despliegue continuo en Vercel.',
    'SEO técnico, PWA y dark mode responsive.',
  ],
  tools: [
    // Frameworks y librerías
    'Vue 3',
    'React',
    'Next.js',
    'Tailwind CSS',
    'TypeScript',
    'Vite',
    // Tooling y entorno
    'ESLint',
    'Prettier',
    'Husky',
    'lint-staged',
    'pnpm',
    'Docker',
    'GitHub Actions',
    'Supabase CLI',
    // Backend / APIs
    'NestJS',
    'Prisma',
    'PostgreSQL',
    'Supabase',
    // Otros
    'PWA',
    'Vercel',
    'Umami Analytics',
  ],
}
