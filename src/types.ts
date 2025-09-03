// types.ts

// Declaraciones globales
interface ImportMeta {
  readonly url: string
}

// Tipos de tu proyecto
export interface Project {
    title: string
    description: string
    image?: string
    tags: string[]
    demo?: string
    repo?: string
}
