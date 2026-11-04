/**
 * Datos de la persona y del sitio. Fuente única para cabecera, pie,
 * contacto, SEO y datos estructurados: cambiar algo aquí lo cambia en
 * todas partes.
 */
export const site = {
  name: 'Giovanni Barroso',
  firstName: 'Giovanni',
  role: 'Desarrollador Full-Stack',
  city: 'Sevilla',
  country: 'España',
  url: 'https://giovannibarroso.com',
  email: 'giovanni.baralv@gmail.com',
  repoUrl: 'https://github.com/GiovanniBarroso/mi-portfolio',
  /** Modalidad de trabajo que se acepta */
  workMode: 'Remoto o híbrido',
  /** Plazo de respuesta que se promete en Contacto */
  responseTime: '24–48 h',
  /**
   * Disponibilidad. Con `open: false` desaparecen todas las insignias
   * "Disponible para trabajar" del sitio de una vez.
   */
  availability: {
    open: true,
    label: 'Disponible para trabajar',
    detail: 'Abierto a empleo y a proyectos freelance',
  },
} as const

export const EMAIL = site.email
