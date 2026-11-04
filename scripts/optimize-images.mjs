// Convierte capturas a WebP listas para el portfolio.
//
// Uso:
//   pnpm images:optimize                 → procesa los .png/.jpg de public/resources
//   pnpm images:optimize ruta/captura.png → procesa ficheros concretos
//
// Cada captura se recorta a 3:2 (el formato de tarjetas y detalle), se
// redimensiona a 1280×853 y se guarda como WebP en public/resources con el
// mismo nombre. Los metadatos (EXIF, GPS, perfil de cámara) se eliminan
// siempre: una foto de móvil puede llevar la ubicación exacta donde se hizo.
// El original no se borra; si estaba en public/resources, bórralo a mano
// para no publicarlo.
import sharp from 'sharp'
import { readdir, stat } from 'node:fs/promises'
import { basename, extname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const OUT_DIR = fileURLToPath(new URL('../public/resources/', import.meta.url))
const WIDTH = 1280
const HEIGHT = 853
const QUALITY = 80

const args = process.argv.slice(2)
const inputs = args.length
  ? args
  : (await readdir(OUT_DIR)).filter((f) => /\.(png|jpe?g)$/i.test(f)).map((f) => join(OUT_DIR, f))

if (!inputs.length) {
  console.log('No hay imágenes .png/.jpg que convertir en public/resources.')
  process.exit(0)
}

for (const input of inputs) {
  const output = join(OUT_DIR, `${basename(input, extname(input))}.webp`)
  await sharp(input)
    .rotate() // respeta la orientación EXIF antes de descartarla
    .resize(WIDTH, HEIGHT, { fit: 'cover', position: 'top' })
    .webp({ quality: QUALITY })
    .toFile(output)
  const before = (await stat(input)).size
  const after = (await stat(output)).size
  console.log(
    `${basename(input)} → ${basename(output)}: ${(before / 1024).toFixed(0)} KB → ${(after / 1024).toFixed(0)} KB`
  )
}
