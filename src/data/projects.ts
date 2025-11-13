export type ProjectItem = {
  slug: string;
  title: string;
  description: string;
  techs: string[];
  image: string;
  demoUrl?: string | null;
  repoUrl?: string | null;
};

const BASE = import.meta.env.BASE_URL;
const pub = (file: string) => `${BASE}resources/${file}`;

export const projects: ProjectItem[] = [
  {
    slug: 'fastfix',
    title: 'FastFix',
    description:
      'Plataforma integral de reparaciones y venta tecnológica. SPA desacoplada con Laravel 10 (API) y Vue 3 (frontend). Incluye autenticación JWT, pagos con PayPal, facturación PDF y panel administrativo completo.',
    techs: ['Laravel 10', 'Vue 3', 'Tailwind', 'JWT', 'PayPal API', 'MySQL'],
    image: pub('fastfix.webp'),
    demoUrl: null,
    repoUrl: 'https://github.com/GiovanniBarroso/FastFix',
  },
  {
    slug: 'mi-portfolio',
    title: 'Mi Portfolio',
    description:
      'Portfolio personal desarrollado con Vue 3, TypeScript y Tailwind CSS. Incluye animaciones con Motion, SEO dinámico con Unhead, PWA, modo oscuro y pipeline CI/CD en GitHub Actions.',
    techs: ['Vue 3', 'TypeScript', 'Tailwind', 'Vite', 'PWA', 'Unhead'],
    image: pub('mi-portfolio.png'),
    demoUrl: 'https://giovannibarroso.github.io/mi-portfolio/',
    repoUrl: 'https://github.com/GiovanniBarroso/mi-portfolio',
  },
  {
    slug: 'nanobank',
    title: 'NanoBank',
    description:
      'Aplicación de banca simulada con Vue 3 en el frontend y Spring Boot en el backend. Permite gestionar usuarios y múltiples perfiles de inversión con distintos niveles de riesgo.',
    techs: ['Vue 3', 'Spring Boot', 'PostgreSQL', 'REST API'],
    image: pub('nanobank.png'),
    demoUrl: null,
    repoUrl: 'https://github.com/GiovanniBarroso/NanoBank',
  },
  {
    slug: 'cosas-d-casa',
    title: 'Cosas D Casa',
    description:
      'E-commerce local desarrollado con Next.js 15 (App Router) + Supabase. Catálogo público con filtros, vista de detalle, y panel de administración protegido con Magic Link. Integración PWA, ISR y analítica Umami.',
    techs: ['Next.js 15', 'React 19', 'Supabase', 'Tailwind v4', 'TypeScript', 'PWA'],
    image: pub('cosas-d-casa.png'),
    demoUrl: 'https://cosas-d-casa.com',
    repoUrl: null,
  },
  {
    slug: 'manuela-rios',
    title: 'Manuela Ríos Micropigmentación',
    description:
      'Landing page estática optimizada para SEO y rendimiento. Estructura sencilla con HTML + CSS + JS, diseño responsive, parallax y llamadas a acción a WhatsApp y Google Maps.',
    techs: ['HTML5', 'CSS3', 'JavaScript', 'SEO', 'Responsive'],
    image: pub('manuela-rios.png'),
    demoUrl: 'https://manuelariosmakeup.com',
    repoUrl: 'https://github.com/GiovanniBarroso/manuelarios',
  },
  {
    slug: 'date-un-respiro',
    title: 'Date un Respiro',
    description:
      'Plataforma de lectura digital construida con Next.js 15 y Supabase. Permite visualizar libros PDF almacenados en Supabase Storage mediante URLs firmadas y react-pdf. Diseño minimalista y modo oscuro.',
    techs: ['Next.js 15', 'React 19', 'Supabase', 'Tailwind v4', 'TypeScript', 'react-pdf'],
    image: pub('date-un-respiro.png'),
    demoUrl: 'https://date-un-respiro.vercel.app',
    repoUrl: null,
  },
  {
    slug: 'analytics-umami',
    title: 'Analytics Umami',
    description:
      'Implementación auto-hosteada de Umami Analytics en Vercel para medir tráfico en proyectos personales como Cosas D Casa y Date un Respiro. Configuración con API, eventos personalizados y gráficos en tiempo real.',
    techs: ['Next.js', 'Umami', 'Vercel', 'Analytics', 'TypeScript'],
    image: pub('umami.png'),
    demoUrl: null,
    repoUrl: 'https://github.com/GiovanniBarroso/analytics-umami',
  },
  {
    slug: 'api-rest-best-practices',
    title: 'API REST Best Practices',
    description:
      'Proyecto educativo centrado en buenas prácticas REST. Stack NestJS + Prisma + PostgreSQL en contenedores Docker Compose, con tests E2E y configuración CI. Frontend en React + Tailwind.',
    techs: ['NestJS', 'Prisma', 'PostgreSQL', 'Docker', 'React', 'Tailwind'],
    image: pub('api-rest.png'),
    demoUrl: null,
    repoUrl: 'https://github.com/GiovanniBarroso/api-rest-practices',
  },
  {
    slug: 'pi-hole',
    title: 'Pi-hole en Raspberry Pi',
    description:
      'Implementación de Pi-hole en una Raspberry Pi 3B v2.0 como bloqueador de publicidad a nivel de red. Configuración de DNS local, rendimiento y mantenimiento del sistema.',
    techs: ['Raspberry Pi', 'Pi-hole', 'Linux', 'Redes LAN', 'Ad-blocking'],
    image: pub('pi-hole.png'),
    demoUrl: null,
    repoUrl: null,
  },
];
