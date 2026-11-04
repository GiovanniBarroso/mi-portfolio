import type { Project } from '../types/portfolio'

/**
 * Proyectos, en el orden en que se muestran. Para añadir uno:
 * 1. Captura 3:2 en `public/resources/` (`pnpm images:optimize` la convierte).
 * 2. Entrada aquí. El slug forma la URL `/projects/<slug>`.
 * 3. `pnpm test` comprueba que la imagen existe y que no faltan campos.
 * La página de detalle, la tarjeta de Open Graph y el sitemap salen solos.
 */
export const projects: Project[] = [
  {
    slug: 'mybalance',
    title: 'MyBalance',
    type: 'Producto multiplataforma',
    summary:
      'App de entreno con un objetivo y una fecha: web instalable, Android y Wear OS en pruebas en Play, e iOS en camino.',
    description:
      'App de entreno con un objetivo y una fecha. Montas tus rutinas o eliges un plan hecho para tus días, entrenas con la sesión en vivo —también sin cobertura— y la app te dice qué peso poner la próxima vez, qué se ha estancado y cómo vas hacia tu meta. Incluye seguimiento físico, deportes con GPS, análisis de técnica por vídeo y un modo amigos con ranking y feed. La web, en Next.js y Supabase e instalable como PWA, es la fuente de verdad: las apps nativas de Android (Kotlin y Jetpack Compose, con app para Wear OS, en pruebas internas en Google Play) e iOS (SwiftUI, pendiente de publicar) hacen lo mismo hablando con una API versionada a partir de un contrato compartido.',
    highlights: [
      'Sesión en vivo con descansos, superseries y dropsets, y modo sin conexión completo: se empieza, se sigue y se termina sin red.',
      'Consejo de carga por ejercicio, detección de estancamientos, récords y mapa muscular semanal.',
      'Chascas, un asistente determinista (sin IA) que prepara la sesión del día con el peso de cada ejercicio y responde «Pregunta a tus datos».',
      'FormCoach: análisis de técnica por vídeo con MediaPipe, 100 % en el dispositivo; el vídeo nunca se sube.',
      'Modo amigos con ranking semanal, feed con fotos y comentarios, y rutinas compartidas.',
      'Apps nativas que consumen la misma API /api/v1 con contrato OpenAPI: Android con widgets, Health Connect y Wear OS; iOS con widgets, Live Activity y HealthKit.',
      'Supabase con RLS, notificaciones push, Sentry y tests con Vitest, más pruebas automáticas de responsive, contraste y accesibilidad.',
    ],
    techs: [
      'Next.js 16',
      'Kotlin',
      'SwiftUI',
      'Supabase',
      'TypeScript',
      'React 19',
      'Jetpack Compose',
      'Wear OS',
      'PostgreSQL',
      'Tailwind CSS v4',
      'shadcn/ui',
      'MediaPipe',
      'PWA',
      'Sentry',
      'Vitest',
    ],
    platforms: ['Web (PWA)', 'Android', 'Wear OS', 'iOS'],
    image: 'mybalance.webp',
    demoUrl: 'https://my-balance.co',
    repoUrl: null,
  },
  {
    slug: 'cosas-d-casa',
    title: 'Cosas D Casa',
    type: 'E-commerce',
    summary:
      'Tienda online en producción con cobros reales: Stripe, reembolsos, facturación y panel de gestión.',
    description:
      'E-commerce en producción con cobros reales. Checkout con Stripe y webhooks idempotentes que controlan el stock, reembolsos totales y parciales desde el panel, facturación en PDF y emails transaccionales con Resend. Panel de administración con Magic Link, métricas de ventas, avisos de stock, tareas cron y suite de tests con Vitest sobre las rutas críticas de pago.',
    highlights: [
      'Checkout con Stripe y webhooks idempotentes que controlan el stock.',
      'Reembolsos totales y parciales lanzados desde el propio panel.',
      'Facturas en PDF y emails transaccionales con Resend.',
      'Panel de administración con Magic Link, métricas de ventas, avisos de stock y tareas cron.',
      'Tests con Vitest sobre las rutas críticas de pago.',
    ],
    techs: [
      'Next.js 15',
      'React 19',
      'TypeScript',
      'Stripe',
      'Supabase',
      'Resend',
      'Tailwind CSS v4',
      'Vitest',
      'PWA',
    ],
    image: 'cosas-d-casa.webp',
    demoUrl: 'https://cosas-d-casa.com',
    repoUrl: null,
  },
  {
    slug: 'fastfix',
    title: 'FastFix',
    type: 'Proyecto de Fin de Grado',
    summary:
      'Plataforma de reparaciones y venta de tecnología: API en Laravel y SPA en Vue 3, con pagos y citas.',
    description:
      'Proyecto de Fin de Grado desarrollado en un equipo de tres: plataforma integral de reparaciones y venta tecnológica. SPA desacoplada con API en Laravel 10 y frontend en Vue 3 + Pinia. Autenticación JWT con verificación de email y 2FA vía Fortify, carrito y pago con PayPal, facturas en PDF con dompdf, calendario de citas y panel de administración con stock, pedidos y métricas.',
    highlights: [
      'Arquitectura desacoplada: API REST en Laravel 10 y SPA en Vue 3 con Pinia.',
      'Autenticación JWT con verificación de email y 2FA mediante Fortify.',
      'Carrito con pago por PayPal y facturas en PDF generadas con dompdf.',
      'Calendario de citas y panel de administración con stock, pedidos y métricas.',
    ],
    techs: ['Laravel 10', 'Vue 3', 'PHP', 'MySQL', 'JWT', 'PayPal API', 'Pinia'],
    image: 'fastfix.webp',
    demoUrl: null,
    repoUrl: 'https://github.com/GiovanniBarroso/FastFix',
    team: 'Equipo de 3',
    status: 'not-deployed',
  },
  {
    slug: 'nanobank',
    title: 'NanoBank',
    type: 'Aplicación de escritorio',
    summary:
      'Banca simulada en Java: transferencias, Bizum e inversiones, con justificantes en PDF.',
    description:
      'Aplicación de banca simulada en Java con interfaz Swing y persistencia en MySQL. Registro y login de usuarios, transferencias, Bizum y gestión de carteras de inversión con distintos perfiles de riesgo. Genera justificantes en PDF con iText para cada operación.',
    highlights: [
      'Registro y login de usuarios con persistencia en MySQL mediante JDBC.',
      'Transferencias, Bizum y carteras de inversión con distintos perfiles de riesgo.',
      'Justificante en PDF generado con iText para cada operación.',
    ],
    techs: ['Java', 'Swing', 'MySQL', 'JDBC', 'iText'],
    image: 'nanobank.webp',
    demoUrl: null,
    repoUrl: 'https://github.com/GiovanniBarroso/NanoBank',
  },
  {
    slug: 'date-un-respiro',
    title: 'Date un Respiro',
    type: 'Plataforma web',
    summary: 'Plataforma de lectura y bienestar con visor de PDF propio y seguimiento de lectura.',
    description:
      'Plataforma de lectura y bienestar construida con Next.js 15 y Supabase. Sirve libros en PDF desde Supabase Storage mediante URLs firmadas y un visor propio con react-pdf, con seguimiento de lectura, animaciones con Framer Motion y modo oscuro.',
    highlights: [
      'Libros en PDF servidos desde Supabase Storage mediante URLs firmadas.',
      'Visor propio construido con react-pdf y seguimiento del progreso de lectura.',
      'Animaciones con Framer Motion y modo oscuro.',
    ],
    techs: [
      'Next.js 15',
      'React 19',
      'TypeScript',
      'Supabase',
      'Tailwind CSS v4',
      'react-pdf',
      'Framer Motion',
    ],
    image: 'date-un-respiro.webp',
    demoUrl: 'https://date-un-respiro.vercel.app',
    repoUrl: null,
  },
  {
    slug: 'mi-portfolio',
    title: 'Mi Portfolio',
    type: 'Sitio personal',
    summary:
      'Este mismo sitio: Vue 3, TypeScript y Tailwind CSS 4, con SEO por página, PWA y CI/CD.',
    description:
      'Portfolio personal desarrollado con Vue 3, TypeScript y Tailwind CSS 4. Cada ruta se publica con su propio HTML, metadatos Open Graph y datos estructurados, así que los buscadores y las redes sociales ven el contenido correcto sin ejecutar JavaScript. Incluye modo oscuro sin parpadeo, PWA instalable, animaciones que respetan la preferencia de movimiento reducido y un pipeline de CI/CD en GitHub Actions con lint, tests y despliegue en GitHub Pages.',
    highlights: [
      'HTML, Open Graph y datos estructurados generados por ruta durante el build.',
      'Modo oscuro sin parpadeo y animaciones que respetan prefers-reduced-motion.',
      'PWA instalable con caché offline de la interfaz.',
      'CI/CD en GitHub Actions: lint, formato, tests, typecheck y despliegue en GitHub Pages.',
    ],
    techs: ['Vue 3', 'TypeScript', 'Tailwind CSS v4', 'Vite 7', 'Vitest', 'PWA', 'Unhead'],
    image: 'mi-portfolio.webp',
    demoUrl: 'https://giovannibarroso.com',
    repoUrl: 'https://github.com/GiovanniBarroso/mi-portfolio',
  },
  {
    slug: 'analytics-umami',
    title: 'Analytics Umami',
    type: 'Self-hosting',
    summary: 'Analítica web autoalojada y sin cookies para mis proyectos, desplegada en Vercel.',
    description:
      'Instancia autoalojada de Umami Analytics desplegada en Vercel para medir el tráfico de proyectos propios como Cosas D Casa y Date un Respiro. Analítica sin cookies y respetuosa con el RGPD, con eventos personalizados y consulta de métricas vía API.',
    highlights: [
      'Instancia propia de Umami desplegada en Vercel sobre PostgreSQL.',
      'Mide el tráfico de proyectos propios como Cosas D Casa y Date un Respiro.',
      'Analítica sin cookies y respetuosa con el RGPD, con eventos personalizados y consulta por API.',
    ],
    techs: ['Umami', 'Next.js', 'PostgreSQL', 'Vercel', 'Self-hosting', 'RGPD'],
    image: 'umami.webp',
    demoUrl: null,
    repoUrl: 'https://github.com/GiovanniBarroso/analytics-umami',
  },
  {
    slug: 'pi-hole',
    title: 'Pi-hole en Raspberry Pi',
    type: 'Infraestructura',
    summary:
      'Bloqueador de publicidad para toda la red con Pi-hole y DNS local en una Raspberry Pi.',
    description:
      'Implementación de Pi-hole en una Raspberry Pi 3B v2.0 como bloqueador de publicidad a nivel de red. Configuración de DNS local, ajuste de rendimiento y mantenimiento del sistema.',
    highlights: [
      'Pi-hole sobre una Raspberry Pi 3B v2.0 como bloqueador de publicidad para toda la red.',
      'Configuración de DNS local.',
      'Ajuste de rendimiento y mantenimiento del sistema.',
    ],
    techs: ['Raspberry Pi', 'Pi-hole', 'Linux', 'Redes LAN', 'DNS'],
    image: 'pi-hole.webp',
    demoUrl: null,
    repoUrl: null,
  },
]

/** Proyectos que abren Home y la vista de Proyectos, en este orden. */
export const FEATURED_SLUGS = ['mybalance', 'cosas-d-casa', 'fastfix'] as const
