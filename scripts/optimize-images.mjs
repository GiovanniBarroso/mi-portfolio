// Convierte las capturas de public/resources a WebP optimizado (máx. 1280px de ancho).
// Uso: node scripts/optimize-images.mjs
import sharp from 'sharp'
import { readdir, stat } from 'node:fs/promises'
import { join, parse } from 'node:path'

const DIR = new URL('../public/resources', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')
const MAX_WIDTH = 1280
const QUALITY = 80

const files = (await readdir(DIR)).filter((f) => /\.(png|jpe?g)$/i.test(f))

for (const file of files) {
  const input = join(DIR, file)
  const output = join(DIR, `${parse(file).name}.webp`)
  await sharp(input)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(output)
  const before = (await stat(input)).size
  const after = (await stat(output)).size
  console.log(`${file}: ${(before / 1024).toFixed(0)} KB -> ${(after / 1024).toFixed(0)} KB`)
}
