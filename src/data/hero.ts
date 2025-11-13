export const heroWords = [
    'Next.js + React 19',
    'Vue 3.5 + Vite 7',
    'Tailwind v4',
    'Supabase',
    'NestJS + Prisma',
    'Docker Compose',
] as const;

export type HeroWord = typeof heroWords[number];
export const HERO_CAROUSEL_MS = 2200; //Cooldown entre palabras