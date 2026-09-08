import type { IconName } from '@/components/common/icons'

export type SocialItem = {
  label: string
  href: string
  icon: IconName
  /** Texto secundario mostrado en la vista de contacto */
  handle: string
  external: boolean
}

/**
 * Fuente única de los enlaces personales. Antes el mismo SVG de GitHub
 * estaba pegado en Home, Proyectos, Contacto y Footer con clases distintas.
 */
export const EMAIL = 'giovanni.baralv@gmail.com'

export const socialLinks: SocialItem[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/GiovanniBarroso',
    icon: 'github',
    handle: '@GiovanniBarroso',
    external: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/giovanni-barroso',
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
