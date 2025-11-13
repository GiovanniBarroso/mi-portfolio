//Comportamiento del carousel
import { ref, onMounted, onBeforeUnmount } from 'vue';

type UseIndexCarouselOptions = {
    length: number;
    intervalMs?: number;
    respectReducedMotion?: boolean;
    force?: boolean;
};

export function useIndexCarousel({
    length,
    intervalMs = 2200,
    respectReducedMotion = true,
    force = false,
}: UseIndexCarouselOptions) {
    const current = ref(0);
    let timer: number | undefined;
    let mql: MediaQueryList | null = null;

    const next = () => {
        current.value = length === 0 ? 0 : (current.value + 1) % length;
    };

    const start = () => {
        stop();
        if (length <= 1) return;
        if (respectReducedMotion && !force && mql?.matches) return;
        timer = window.setInterval(next, intervalMs);
    };

    const stop = () => {
        if (timer) {
            window.clearInterval(timer);
            timer = undefined;
        }
    };

    onMounted(() => {
        if (typeof window === 'undefined') return;

        if (respectReducedMotion) {
            mql = window.matchMedia?.('(prefers-reduced-motion: reduce)') ?? null;
            const handle = (e: MediaQueryListEvent) => (e.matches && !force ? stop() : start());
            mql?.addEventListener?.('change', handle);
            if (!mql?.matches || force) start();
            onBeforeUnmount(() => mql?.removeEventListener?.('change', handle));
        } else {
            start();
        }
    });

    onBeforeUnmount(() => stop());

    return { current, start, stop, next };
}
