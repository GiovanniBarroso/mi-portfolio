// Genera las imágenes Open Graph (1200×630) de public/og/ a partir de los
// datos del portfolio: una general (default.jpg) y una por proyecto.
//
// Uso: pnpm og            (requiere Playwright: pnpm dlx playwright install chromium)
//
// Las imágenes se versionan en el repo, así que sólo hace falta ejecutarlo
// al añadir o cambiar un proyecto. Los tests avisan si falta alguna.
import { createServer } from 'vite'
import { readFileSync, mkdirSync } from 'node:fs'
import { createRequire } from 'node:module'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
// La fuente va incrustada: una página creada con setContent no puede leer file://
const fontUrl =
  'data:font/woff2;base64,' +
  readFileSync(join(root, 'public/fonts/inter/InterVariable.woff2')).toString('base64')
const esc = (s) =>
  String(s).replace(
    /[&<>"]/g,
    (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]
  )

const base = `
@font-face { font-family: Inter; src: url('${fontUrl}') format('woff2'); font-weight: 100 900; }
* { box-sizing: border-box; margin: 0; padding: 0; }
html, body { width: 1200px; height: 630px; }
body { font-family: Inter, sans-serif; background: #09090b; color: #fafafa; position: relative; overflow: hidden;
  font-feature-settings: 'cv02','cv03','cv04','cv11'; -webkit-font-smoothing: antialiased; }
.dots { position: absolute; inset: 0; background-image: radial-gradient(circle, rgba(56,189,248,.16) 1.2px, transparent 1.2px);
  background-size: 28px 28px; -webkit-mask-image: radial-gradient(ellipse 75% 70% at 30% 20%, #000 20%, transparent 75%); }
.glow { position: absolute; top: -220px; left: 50%; width: 900px; height: 420px; transform: translateX(-50%);
  background: radial-gradient(ellipse at center, rgba(14,165,233,.38), transparent 65%); filter: blur(10px); }
.beam { position: absolute; top: 0; left: 50%; width: 560px; height: 3px; transform: translateX(-50%);
  background: #38bdf8; box-shadow: 0 0 24px 6px rgba(56,189,248,.55); }
.brand { display: flex; align-items: center; gap: 14px; font-size: 24px; font-weight: 700; letter-spacing: -0.01em; }
.logo { width: 46px; height: 46px; border-radius: 12px; background: #38bdf8; color: #082f49; display: grid; place-items: center; font-weight: 900; font-size: 24px; }
.chips { display: flex; flex-wrap: wrap; gap: 10px; }
.chip { border: 1px solid #26262b; background: #111114; color: #a1a1aa; border-radius: 10px; padding: 8px 14px; font-size: 19px; font-weight: 500; }
.eyebrow { color: #38bdf8; font-size: 18px; font-weight: 700; letter-spacing: .16em; text-transform: uppercase; display: flex; align-items: center; gap: 12px; }
.eyebrow::before { content: ''; width: 32px; height: 2px; background: currentColor; opacity: .6; }
.domain { color: #8b8b94; font-size: 20px; font-weight: 500; }
`

function personHtml(j) {
  const photo =
    'data:image/jpeg;base64,' + readFileSync(join(root, 'public/profile.jpg')).toString('base64')
  return `<!doctype html><html><head><style>${base}
  .wrap { position: absolute; inset: 0; padding: 64px 72px; display: grid; grid-template-columns: 1fr 300px; gap: 56px; align-items: center; }
  h1 { font-size: 76px; line-height: 1.02; letter-spacing: -0.035em; font-weight: 800; margin-top: 22px; }
  h1 span { color: #38bdf8; }
  .role { margin-top: 18px; font-size: 30px; color: #d4d4d8; font-weight: 500; letter-spacing: -0.01em; }
  .tag { margin-top: 14px; font-size: 22px; color: #a1a1aa; line-height: 1.45; max-width: 640px; }
  .photo { width: 300px; height: 300px; border-radius: 36px; object-fit: cover; border: 6px solid #18181b; box-shadow: 0 30px 80px -20px rgba(56,189,248,.45), 0 0 0 1px #26262b; }
  .foot { position: absolute; left: 72px; right: 72px; bottom: 48px; display: flex; justify-content: space-between; align-items: center; }
  .ok { display: inline-flex; align-items: center; gap: 10px; color: #34d399; font-size: 20px; font-weight: 600; border: 1px solid rgba(52,211,153,.35); background: rgba(52,211,153,.1); border-radius: 999px; padding: 8px 16px; }
  .ok i { width: 10px; height: 10px; border-radius: 999px; background: #34d399; display: block; }
  </style></head><body><div class="dots"></div><div class="glow"></div><div class="beam"></div>
  <div class="wrap"><div>
    <p class="eyebrow">${esc(j.eyebrow)}</p>
    <h1>${esc(j.first)} <span>${esc(j.last)}</span></h1>
    <p class="role">${esc(j.role)}</p>
    <p class="tag">${esc(j.tagline)}</p>
    <div class="chips" style="margin-top:28px">${j.chips.map((c) => `<span class="chip">${esc(c)}</span>`).join('')}</div>
  </div><img class="photo" src="${photo}"></div>
  <div class="foot"><div class="brand"><span class="logo">G</span><span class="domain" style="color:#fafafa;font-size:22px">giovannibarroso.com</span></div>${j.available ? '<span class="ok"><i></i>Disponible para trabajar</span>' : ''}</div>
  </body></html>`
}

function projectHtml(j) {
  const img =
    'data:image/webp;base64,' +
    readFileSync(join(root, 'public/resources', j.image)).toString('base64')
  return `<!doctype html><html><head><style>${base}
  .text { position: absolute; left: 72px; top: 64px; width: 560px; bottom: 120px; display: flex; flex-direction: column; justify-content: center; }
  h1 { font-size: ${j.title.length > 22 ? 54 : 66}px; line-height: 1.04; letter-spacing: -0.03em; font-weight: 800; margin-top: 20px; }
  .sum { margin-top: 20px; font-size: 25px; line-height: 1.42; color: #a1a1aa; }
  .shot { position: absolute; right: -40px; top: 76px; width: 600px; border-radius: 18px; overflow: hidden; border: 1px solid #26262b;
    box-shadow: 0 40px 100px -30px rgba(56,189,248,.5), 0 0 0 6px #111114; background: #111114; }
  .bar { height: 34px; display: flex; align-items: center; gap: 8px; padding: 0 14px; background: #18181b; border-bottom: 1px solid #26262b; }
  .bar i { width: 11px; height: 11px; border-radius: 99px; background: #3f3f46; display: block; }
  .shot img { display: block; width: 100%; height: 400px; object-fit: cover; object-position: top; }
  .shot img { height: 384px; }
  .foot { position: absolute; left: 72px; right: 72px; bottom: 48px; display: flex; justify-content: space-between; align-items: center; }
  .status { display: inline-flex; align-items: center; gap: 10px; font-size: 19px; font-weight: 600; border-radius: 999px; padding: 7px 15px; border: 1px solid #26262b; color: #d4d4d8; background: #111114; }
  .status i { width: 10px; height: 10px; border-radius: 999px; background: ${j.statusColor || '#a1a1aa'}; display: block; }
  </style></head><body><div class="dots"></div><div class="glow" style="left:30%"></div>
  <div class="text">
    <p class="eyebrow">${esc(j.eyebrow)}</p>
    <h1>${esc(j.title)}</h1>
    <p class="sum">${esc(j.summary)}</p>
    <div class="chips" style="margin-top:26px">${j.chips.map((c) => `<span class="chip">${esc(c)}</span>`).join('')}</div>
  </div>
  <div class="shot"><div class="bar"><i></i><i></i><i></i></div><img src="${img}"></div>
  <div class="foot"><div class="brand"><span class="logo">G</span><span>Giovanni Barroso</span></div><span class="status"><i></i>${esc(j.status)}</span></div>
  </body></html>`
}

const STATUS_COLOR = {
  production: '#34d399',
  'open-source': '#a78bfa',
  private: '#8b8b94',
  'not-deployed': '#fbbf24',
}

// Los datos son TypeScript: se cargan con el propio Vite
const vite = await createServer({
  root,
  server: { middlewareMode: true },
  appType: 'custom',
  optimizeDeps: { noDiscovery: true, include: [] },
  logLevel: 'error',
})
const { projects } = await vite.ssrLoadModule('/src/data/projects.ts')
const { site } = await vite.ssrLoadModule('/src/data/site.ts')
const { projectStatus, STATUS_META } = await vite.ssrLoadModule('/src/utils/project.ts')
await vite.close()

const jobs = [
  {
    kind: 'person',
    out: 'public/og/default.jpg',
    eyebrow: 'Portfolio',
    first: site.firstName,
    last: site.name.split(' ').slice(1).join(' '),
    role: `${site.role} · ${site.city}`,
    tagline: 'Productos web completos: de la base de datos a una interfaz rápida y accesible.',
    chips: ['TypeScript', 'Vue', 'React', 'Next.js', 'Supabase', 'NestJS'],
    available: site.availability.open,
  },
  ...projects.map((p) => ({
    kind: 'project',
    out: `public/og/${p.slug}.jpg`,
    image: p.image,
    eyebrow: p.type,
    title: p.title,
    summary: p.summary,
    chips: p.techs.slice(0, 4),
    status: STATUS_META[projectStatus(p)].label,
    statusColor: STATUS_COLOR[projectStatus(p)],
  })),
]

let chromium
try {
  ;({ chromium } = await import('playwright'))
} catch {
  try {
    // Instalación global (NODE_PATH): import() no la ve, require sí
    ;({ chromium } = createRequire(import.meta.url)('playwright'))
  } catch {
    console.error('Falta Playwright. Instálalo con: pnpm dlx playwright install chromium')
    process.exit(1)
  }
}

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 })
for (const job of jobs) {
  await page.setContent(job.kind === 'person' ? personHtml(job) : projectHtml(job), {
    waitUntil: 'load',
  })
  await page.evaluate(() => document.fonts.ready)
  const out = join(root, job.out)
  mkdirSync(dirname(out), { recursive: true })
  await page.screenshot({ path: out, type: 'jpeg', quality: 86 })
  console.log(`✓ ${job.out}`)
}
await browser.close()
