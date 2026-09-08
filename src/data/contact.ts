import type { ContactData } from '@/types/portfolio'
import { EMAIL } from './social'

/**
 * Los perfiles públicos viven en `social.ts`, que es la fuente única
 * compartida por Home, Contacto y el pie de página.
 */
export const contactData: ContactData = {
  email: EMAIL,
  subject: 'Contacto desde el portfolio',
  responseTime: '24–48 h',
}
