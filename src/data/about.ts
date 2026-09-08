import type { AboutData } from '@/types/portfolio'

export const aboutData: AboutData = {
  profileImage: 'profile.jpg',
  tags: ['Fullstack', 'Accesibilidad', 'Rendimiento'],
  stats: [
    { label: 'Proyectos reales', value: '9' },
    { label: 'Repos públicos', value: '12' },
    { label: 'Stack principal', value: 'TS • React • Vue' },
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
