import type { SkillCategory } from '../types/portfolio'

/**
 * Skills por área. Los nombres se cruzan con las tecnologías de los
 * proyectos (ver utils/tech.ts) para mostrar dónde se ha usado cada una,
 * así que conviene escribirlas igual: "Next.js", "Tailwind CSS"…
 */
export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend',
    icon: 'sparkles',
    items: [
      'TypeScript',
      'Vue 3',
      'React 19',
      'Next.js',
      'Tailwind CSS',
      'Vite',
      'Pinia',
      'Vue Router',
      'Nuxt 3',
      'Framer Motion',
      'CSS Grid/Flexbox',
      'SASS',
    ],
  },
  {
    id: 'backend',
    name: 'Backend y datos',
    icon: 'server',
    items: [
      'Node.js (Express)',
      'NestJS',
      'REST API',
      'Supabase',
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Laravel 10',
      'PHP',
      'Java',
      'Spring Boot (Java)',
      'Stripe',
    ],
  },
  {
    id: 'mobile',
    name: 'Móvil nativo',
    icon: 'phone',
    items: ['Kotlin', 'Jetpack Compose', 'Wear OS', 'SwiftUI', 'MediaPipe'],
  },
  {
    id: 'devops',
    name: 'Herramientas y DevOps',
    icon: 'sliders',
    items: [
      'Git',
      'GitHub Actions',
      'CI/CD Pipelines',
      'Docker',
      'Docker Compose',
      'Vercel',
      'Nginx',
      'Linux',
      'Husky',
      'lint-staged',
      'PWA',
    ],
  },
  {
    id: 'testing',
    name: 'Testing y calidad',
    icon: 'beaker',
    items: [
      'Vitest',
      'Jest (E2E Nest)',
      'Testing Library',
      'Cypress',
      'ESLint',
      'Prettier',
      'Lighthouse',
    ],
  },
]
