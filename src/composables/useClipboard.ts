import { ref } from 'vue'

/**
 * Copia al portapapeles con estado por clave, para poder tener varios
 * botones "Copiar" en la misma vista sin que se pisen entre ellos.
 */
export function useClipboard(durationMs = 2000) {
  const copied = ref<Record<string, boolean>>({})
  const failed = ref<Record<string, boolean>>({})
  const timers = new Map<string, number>()

  async function copy(text: string, key = 'default') {
    window.clearTimeout(timers.get(key))
    try {
      await navigator.clipboard.writeText(text)
      copied.value[key] = true
      failed.value[key] = false
    } catch {
      // Permiso denegado, contexto no seguro o API ausente
      failed.value[key] = true
      copied.value[key] = false
    }
    timers.set(
      key,
      window.setTimeout(() => {
        copied.value[key] = false
        failed.value[key] = false
      }, durationMs)
    )
  }

  return { copied, failed, copy }
}
