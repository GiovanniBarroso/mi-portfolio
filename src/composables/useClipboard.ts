// Función para copiar en el portapapeles pulsando el botón
import { ref } from 'vue'

export function useClipboard(durationMs = 1600) {
  const copied = ref<Record<string, boolean>>({})

  async function copy(text: string, key = 'default') {
    try {
      await navigator.clipboard.writeText(text)
      copied.value[key] = true
      setTimeout(() => {
        copied.value[key] = false
      }, durationMs)
    } catch {
      // Ignoramos errores del portapapeles (permiso denegado, no soportado, etc.)
    }
  }

  return { copied, copy }
}
