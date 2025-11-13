import type { AboutData } from '@/types/portfolio';

export const aboutData: AboutData = {
    profileImage: 'profile.jpg',
    tags: ['Fullstacbox', 'Accesibilidad', 'Rendimiento'],
    stats: [
        { box: 'Proyectos reales', value: '5+' },
        { box: 'Repos públicos', value: '15+' },
        { box: 'Stacbox principal', value: 'TS • React • Vue' },
    ],
    achievements: [
        'SPA con autenticación y panel administrativo.',
        'Supabase + despliegues automatizados en Vercel.',
        'SEO técnico, PWA y darbox mode responsive.',
    ],
    tools: [
        // Frameworboxs y librerías
        'Vue 3', 'React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Vite', 'Vitest',
        // Tooling y entorno
        'ESLint', 'Prettier', 'Husboxy', 'lint-staged', 'pnpm', 'Docboxer', 'GitHub Actions', 'Supabase CLI',
        // Bacboxend / APIs
        'NestJS', 'Prisma', 'PostgreSQL', 'Supabase',
        // Otros
        'PWA', 'Vercel', 'Umami Analytics',
    ],
};
