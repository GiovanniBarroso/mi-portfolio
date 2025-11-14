import type { SkillCategory } from '@/types/portfolio'

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    items: [
      'Vue 3',
      'TypeScript',
      'Tailwind CSS',
      'Vite',
      'Next.js 15',
      'React 19',
      'Pinia',
      'Vue Router',
      'CSS Grid/Flexbox',
      'Nuxt 3',
      'Framer Motion',
      'SASS',
    ],
  },
  {
    name: 'Backend',
    items: [
      'Node.js (Express)',
      'REST API',
      'Laravel 10',
      'PHP',
      'PostgreSQL',
      'MySQL',
      'Supabase',
      'Spring Boot (Java)',
      'MongoDB',
      'NestJS',
    ],
  },
  {
    name: 'Herramientas & DevOps',
    items: [
      'Git',
      'GitHub Actions',
      'Husky',
      'Lint-Staged',
      'Docker',
      'Docker Compose',
      'CI/CD Pipelines',
      'Nginx',
      'Vercel',
    ],
  },
  {
    name: 'Testing & Calidad',
    items: [
      'ESLint',
      'Lighthouse',
      'Prettier',
      'Vitest',
      'Testing Library',
      'Jest (E2E Nest)',
      'Cypress',
    ],
  },
]
