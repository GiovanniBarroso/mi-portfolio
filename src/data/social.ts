import type { IconName } from '../components/common/icons'
import { EMAIL } from './site'

export type SocialItem = {
  label: string
  href: string
  icon: IconName
  /** Texto secundario mostrado en la vista de contacto */
  handle: string
  external: boolean
}

/** Fuente única de los perfiles públicos: Home, Contacto, pie y JSON-LD. */
export const GITHUB_URL = 'https://github.com/GiovanniBarroso'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/giovanni-barroso'

export const socialLinks: SocialItem[] = [
  {
    label: 'GitHub',
    href: GITHUB_URL,
    icon: 'github',
    handle: '@GiovanniBarroso',
    external: true,
  },
  {
    label: 'LinkedIn',
    href: LINKEDIN_URL,
    icon: 'linkedin',
    handle: 'in/giovanni-barroso',
    external: true,
  },
  {
    label: 'Email',
    href: `mailto:${EMAIL}`,
    icon: 'mail',
    handle: EMAIL,
    external: false,
  },
]
