import type { AboutData } from '../types/portfolio'

export const aboutData: AboutData = {
  tags: ['Full-stack', 'Accesibilidad', 'Rendimiento'],
  achievements: [
    'E-commerce en producción con cobros y reembolsos vía Stripe.',
    'App de entreno multiplataforma sobre una misma API: web instalable, Android y Wear OS en pruebas en Google Play, e iOS en camino.',
    'APIs REST en NestJS + Prisma con JWT, multi-tenant y Docker.',
    'Tests con Vitest/Jest y despliegue continuo en Vercel y GitHub Pages.',
    'SEO técnico, PWA y modo oscuro accesible.',
  ],
  tools: [
    // Frameworks y librerías
    'Vue 3',
    'React',
    'Next.js',
    'Tailwind CSS',
    'TypeScript',
    'Vite',
    // Backend / APIs
    'NestJS',
    'Prisma',
    'PostgreSQL',
    'Supabase',
    // Tooling y entorno
    'pnpm',
    'Docker',
    'GitHub Actions',
    'ESLint',
    'Prettier',
    'Husky',
    'Supabase CLI',
    // Producto
    'PWA',
    'Vercel',
    'Sentry',
    'Umami Analytics',
    'Kotlin',
    'SwiftUI',
  ],
}
