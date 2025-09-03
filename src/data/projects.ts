import type { Project } from '@/types'


export const projects: Project[] = [
    {
        title: 'FastFix',
        description: 'Plataforma integral de reparaciones y venta tecnológica (SPA + API REST).',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
        tags: ['Laravel', 'Vue', 'JWT', 'PayPal'],
        demo: '#',
        repo: '#'
    },
    {
        title: 'NanoBank',
        description: 'MVP bancario con perfiles de idoneidad, carteras y base de datos sólida.',
        image: 'https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=1200&auto=format&fit=crop',
        tags: ['Vue', 'Spring Boot', 'PostgreSQL'],
        demo: '#',
        repo: '#'
    },
    {
        title: 'Pi-hole Setup',
        description: 'Bloqueador de publicidad a nivel de red sobre Raspberry Pi 3B.',
        image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
        tags: ['Linux', 'Raspberry Pi', 'Networking'],
        demo: '#',
        repo: '#'
    },
]