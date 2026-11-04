/**
 * Ruta pública de un fichero de `public/`, con el prefijo BASE_URL para que
 * siga funcionando si el sitio se sirviera desde un subdirectorio.
 *
 * Se lee `import.meta.env` de forma opcional porque este módulo también lo
 * importa el plugin de SEO durante el build (Node), donde no existe.
 */
const BASE: string =
  (import.meta as ImportMeta & { env?: { BASE_URL?: string } }).env?.BASE_URL ?? '/'

export const asset = (path: string): string => `${BASE}${path.replace(/^\/+/, '')}`
