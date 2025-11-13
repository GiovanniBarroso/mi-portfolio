//Función para copiar en el portapapeles pulsando el boton 
import { ref } from 'vue';

export function useClipboard(durationMs = 1600) {
    const copied = ref<Record<string, boolean>>({});

    async function copy(text: string, key = 'default') {
        try {
            await navigator.clipboard.writeText(text);
            copied.value[key] = true;
            setTimeout(() => (copied.value[key] = false), durationMs);
        } catch {
        }
    }

    return { copied, copy };
}
