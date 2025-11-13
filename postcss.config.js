import tailwind from '@tailwindcss/postcss'
import autoprefixer from 'autoprefixer'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default {
  plugins: [tailwind({ config: path.join(__dirname, 'tailwind.config.js') }), autoprefixer()],
}
