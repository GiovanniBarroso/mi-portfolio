import { existsSync, readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'
import { describe, expect, it } from 'vitest'
import { FEATURED_SLUGS, projects } from '@/data/projects'
import { skillCategories } from '@/data/skills'
import { stats, counts } from '@/data/stats'
import { featuredProjects, projectNeighbors, projectStatus, techUsage } from '@/utils/project'
import { techFamily } from '@/utils/tech'

const publicDir = fileURLToPath(new URL('../../../public/', import.meta.url))

describe('proyectos', () => {
  it('tienen slugs únicos y aptos para URL', () => {
    const slugs = projects.map((p) => p.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
    for (const slug of slugs) expect(slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/)
  })

  it.each(projects.map((p) => [p.slug, p] as const))('%s: campos completos', (_slug, p) => {
    expect(p.title.trim()).not.toBe('')
    expect(p.type.trim()).not.toBe('')
    expect(p.summary.length).toBeGreaterThan(30)
    expect(p.summary.length).toBeLessThanOrEqual(120)
    expect(p.description.length).toBeGreaterThan(p.summary.length)
    expect(p.highlights.length).toBeGreaterThanOrEqual(2)
    expect(p.techs.length).toBeGreaterThanOrEqual(3)
    expect(new Set(p.techs).size).toBe(p.techs.length)
    for (const url of [p.demoUrl, p.repoUrl]) if (url) expect(url).toMatch(/^https:\/\//)
  })

  it.each(projects.map((p) => [p.slug, p] as const))(
    '%s: la captura existe y es un WebP de verdad',
    (_slug, p) => {
      const file = `${publicDir}resources/${p.image}`
      expect(existsSync(file), file).toBe(true)
      const header = readFileSync(file).subarray(0, 12).toString('latin1')
      expect(header.startsWith('RIFF') && header.endsWith('WEBP'), `${p.image} no es WebP`).toBe(
        true
      )
    }
  )

  it.each(projects.map((p) => [p.slug, p] as const))(
    '%s: la captura mide 1280×853 (3:2), como esperan tarjetas y detalle',
    async (_slug, p) => {
      // Si falla: `pnpm images:optimize` la recorta y redimensiona
      const { width, height } = await sharp(`${publicDir}resources/${p.image}`).metadata()
      expect([width, height]).toEqual([1280, 853])
    }
  )

  it.each(projects.map((p) => [p.slug] as const))('%s: tiene imagen Open Graph', (slug) => {
    // Si falla: `pnpm og` regenera las imágenes de public/og/
    expect(existsSync(`${publicDir}og/${slug}.jpg`)).toBe(true)
  })

  it('los destacados existen y no se repiten', () => {
    expect(new Set(FEATURED_SLUGS).size).toBe(FEATURED_SLUGS.length)
    expect(featuredProjects.map((p) => p.slug)).toEqual([...FEATURED_SLUGS])
  })

  it('el estado se deduce de los enlaces salvo excepción explícita', () => {
    const fastfix = projects.find((p) => p.slug === 'fastfix')!
    expect(projectStatus(fastfix)).toBe('not-deployed')
    expect(projectStatus({ ...fastfix, status: undefined })).toBe('open-source')
    expect(projectStatus({ ...fastfix, status: undefined, repoUrl: null })).toBe('private')
    expect(projectStatus({ ...fastfix, status: undefined, demoUrl: 'https://x.dev' })).toBe(
      'production'
    )
  })

  it('anterior/siguiente da la vuelta a la lista', () => {
    const first = projects[0].slug
    const last = projects[projects.length - 1]
    expect(projectNeighbors(first)?.prev.slug).toBe(last.slug)
    expect(projectNeighbors(last.slug)?.next.slug).toBe(first)
    expect(projectNeighbors('no-existe')).toBeNull()
  })
})

describe('tecnologías', () => {
  it.each([
    ['Next.js 16', 'Next.js'],
    ['Next.js 15', 'Next.js'],
    ['Tailwind CSS v4', 'Tailwind CSS'],
    ['Tailwind', 'Tailwind CSS'],
    ['Vue 3', 'Vue'],
    ['Node.js (Express)', 'Node.js'],
    ['Laravel 10', 'Laravel'],
    ['HTML5', 'HTML5'],
    ['Raspberry Pi', 'Raspberry Pi'],
  ])('%s → %s', (input, family) => {
    expect(techFamily(input)).toBe(family)
  })

  it('agrupa versiones distintas en una misma familia', () => {
    const usage = techUsage()
    expect(usage.get('Next.js')).toBeGreaterThanOrEqual(3)
    expect(usage.has('Next.js 15')).toBe(false)
  })
})

describe('skills', () => {
  it('no repiten tecnologías entre áreas ni dentro de un área', () => {
    const all = skillCategories.flatMap((c) => c.items.map(techFamily))
    expect(new Set(all).size).toBe(all.length)
  })

  it('las que aparecen en proyectos se escriben igual que en ellos', () => {
    // Al menos las principales deben cruzarse; si no, el enlace a proyectos desaparece
    const usage = techUsage()
    for (const s of ['TypeScript', 'Next.js', 'Supabase', 'Vue 3', 'Tailwind CSS', 'PWA']) {
      expect(usage.get(techFamily(s)), s).toBeGreaterThan(0)
    }
  })
})

describe('cifras', () => {
  it('salen de los datos', () => {
    expect(counts.projects).toBe(projects.length)
    expect(stats.find((s) => s.label === 'Proyectos')?.value).toBe(String(projects.length))
    expect(counts.inProduction).toBe(projects.filter((p) => p.demoUrl && !p.status).length)
  })
})
