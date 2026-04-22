import type { AboutData } from '@/types/portfolio'

export const aboutData: AboutData = {
  profileImage: 'profile.jpg',
  tags: ['Fullstack', 'Accesibilidad', 'Rendimiento'],
  stats: [
    { label: 'Proyectos reales', value: '5+' },
    { label: 'Repos públicos', value: '15+' },
    { label: 'Stack principal', value: 'TS • React • Vue' },
  ],
  achievements: [
    'SPA con autenticación y panel administrativo.',
    'Supabase + despliegues automatizados en Vercel.',
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
    'Vitest',
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
