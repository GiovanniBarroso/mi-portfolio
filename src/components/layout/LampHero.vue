<template>
  <section ref="rootRef" class="lamp" @pointermove="onPointerMove">
    <!-- Escenario de luz. Decorativo al 100%: ningún texto vive aquí. -->
    <div class="lamp__stage" aria-hidden="true">
      <div class="lamp__cone lamp__cone--l">
        <div class="lamp__cut lamp__cut--bottom" />
        <div class="lamp__cut lamp__cut--left" />
      </div>
      <div class="lamp__cone lamp__cone--r">
        <div class="lamp__cut lamp__cut--right" />
        <div class="lamp__cut lamp__cut--bottom" />
      </div>
      <div class="lamp__spread" />
      <div class="lamp__glow lamp__glow--lg" />
      <div class="lamp__glow lamp__glow--sm" />
      <div class="lamp__beam" />
      <div class="lamp__cover" />
      <div class="lamp__aurora lamp__aurora--l" />
      <div class="lamp__aurora lamp__aurora--r" />
      <div class="lamp__grid" />
    </div>

    <!-- Foco que sigue al cursor. Sólo con ratón y sin movimiento reducido. -->
    <div ref="spotRef" class="lamp__spot" aria-hidden="true" />

    <div class="lamp__body">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

/**
 * El color de cada capa se resuelve en CSS con `:global(.dark)`, no en JS.
 * Antes un MutationObserver observaba la clase del <html> para recalcular
 * seis `computed` de color; con variables CSS el tema cambia solo.
 */
const rootRef = ref<HTMLElement | null>(null)
const spotRef = ref<HTMLElement | null>(null)
let rafId = 0
let enabled = false

const onPointerMove = (e: PointerEvent) => {
  if (!enabled || !spotRef.value || !rootRef.value) return
  const rect = rootRef.value.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  cancelAnimationFrame(rafId)
  rafId = requestAnimationFrame(() => {
    if (!spotRef.value) return
    spotRef.value.style.opacity = '1'
    spotRef.value.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
  })
}

onMounted(() => {
  enabled =
    window.matchMedia('(pointer: fine)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches
})

onUnmounted(() => cancelAnimationFrame(rafId))
</script>

<style scoped>
/* ── Tokens locales de la lámpara ────────────────────────────── */
.lamp {
  --cone: rgb(14 165 233 / 0.22);
  --glow-lg: rgb(14 165 233 / 0.38);
  --glow-lg-op: 0.65;
  --glow-sm: rgb(56 189 248 / 0.24);
  --beam: #0ea5e9;
  --beam-shadow: 0 0 12px 2px rgb(14 165 233 / 0.38);
  --aurora-op: 1;

  /* Alto del escenario de luz. Se mide en dvh, no en vw: en apaisado el
     ancho es enorme y el alto minúsculo, y cualquier medida en vw se
     desmadra justo cuando menos sitio hay. */
  --stage-h: clamp(7rem, 34dvh, 20rem);

  position: relative;
  display: flex;
  width: 100%;
  min-height: min(100dvh - var(--nav-h), 52rem);
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  background: var(--page-bg);
}

:global(.dark) .lamp {
  --cone: #0ea5e9;
  --glow-lg: #0ea5e9;
  --glow-lg-op: 0.5;
  --glow-sm: #38bdf8;
  --beam: #38bdf8;
  --beam-shadow: 0 0 12px 2px rgb(56 189 248 / 0.6);
  /* En oscuro manda el haz de luz; las auroras sólo ensuciarían el negro */
  --aurora-op: 0;
}

/* ── Escenario ───────────────────────────────────────────────── */
.lamp__stage {
  position: relative;
  z-index: 0;
  display: flex;
  /* `flex: 1 0 auto` + min-height: todos los hijos son absolutos, así que
     sin un alto propio el escenario valía 0 en cuanto el contenido llenaba
     el hero, y la lámpara desaparecía. */
  flex: 1 0 auto;
  min-height: var(--stage-h);
  width: 100%;
  align-items: center;
  justify-content: center;
  isolation: isolate;
  transform: scaleY(1.25);
}

/* ── Conos ───────────────────────────────────────────────────── */
.lamp__cone {
  position: absolute;
  height: 14rem;
  width: clamp(5rem, 52vw, 30rem);
  overflow: visible;
  animation: lamp-expand 0.9s 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.lamp__cone--l {
  right: 50%;
  background-image: conic-gradient(
    from 70deg at center top,
    var(--cone) 0%,
    transparent 10%,
    transparent 100%
  );
}
.lamp__cone--r {
  left: 50%;
  background-image: conic-gradient(
    from 290deg at center top,
    transparent 0%,
    transparent 90%,
    var(--cone) 100%
  );
}

/* ── Recortes: pintan con el fondo de página, así son invisibles ── */
.lamp__cut {
  position: absolute;
  z-index: 20;
  background: var(--page-bg);
}
.lamp__cut--bottom {
  bottom: 0;
  left: 0;
  height: 10rem;
  width: 100%;
  -webkit-mask-image: linear-gradient(to top, white, transparent);
  mask-image: linear-gradient(to top, white, transparent);
}
.lamp__cut--left {
  bottom: 0;
  left: 0;
  height: 100%;
  width: 10rem;
  -webkit-mask-image: linear-gradient(to right, white, transparent);
  mask-image: linear-gradient(to right, white, transparent);
}
.lamp__cut--right {
  bottom: 0;
  right: 0;
  height: 100%;
  width: 10rem;
  -webkit-mask-image: linear-gradient(to left, white, transparent);
  mask-image: linear-gradient(to left, white, transparent);
}

.lamp__spread {
  position: absolute;
  top: 50%;
  height: 12rem;
  width: 100%;
  transform: translateY(3rem) scaleX(1.5);
  background: var(--page-bg);
  filter: blur(2rem);
}
.lamp__cover {
  position: absolute;
  z-index: 40;
  height: 11rem;
  width: 100%;
  transform: translateY(-12.5rem);
  background: var(--page-bg);
}

/* ── Brillo y haz ────────────────────────────────────────────── */
.lamp__glow {
  position: absolute;
  border-radius: 9999px;
  height: 9rem;
}
.lamp__glow--lg {
  z-index: 50;
  background: var(--glow-lg);
  opacity: var(--glow-lg-op);
  filter: blur(3rem);
  transform: translateY(-50%);
  animation: lamp-glow-lg 0.9s 0.2s ease both;
}
.lamp__glow--sm {
  z-index: 30;
  background: var(--glow-sm);
  filter: blur(2rem);
  transform: translateY(-6rem);
  animation: lamp-glow-sm 0.9s 0.2s ease both;
}
.lamp__beam {
  position: absolute;
  z-index: 50;
  height: 2px;
  background: var(--beam);
  box-shadow: var(--beam-shadow);
  transform: translateY(-7rem);
  animation: lamp-beam 0.9s 0.2s ease both;
}

/* ── Ambiente de modo claro ──────────────────────────────────── */
.lamp__aurora {
  position: absolute;
  top: -8%;
  height: clamp(14rem, 32vw, 26rem);
  width: clamp(14rem, 32vw, 26rem);
  opacity: var(--aurora-op);
  filter: blur(60px);
  transition: opacity 0.3s ease;
}
.lamp__aurora--l {
  left: -8%;
  background: radial-gradient(circle, rgb(56 189 248 / 0.09), transparent 70%);
  animation: aurora 12s ease-in-out infinite reverse;
}
.lamp__aurora--r {
  right: -8%;
  background: radial-gradient(circle, rgb(139 92 246 / 0.08), transparent 70%);
  animation: aurora 10s ease-in-out infinite;
}
.lamp__grid {
  position: absolute;
  inset: 0;
  opacity: var(--aurora-op);
  background-image: radial-gradient(circle, rgb(14 165 233 / 0.06) 1px, transparent 1px);
  background-size: 28px 28px;
  -webkit-mask-image: radial-gradient(ellipse 80% 55% at 50% 18%, black 25%, transparent 75%);
  mask-image: radial-gradient(ellipse 80% 55% at 50% 18%, black 25%, transparent 75%);
}

/* ── Foco del cursor ─────────────────────────────────────────── */
.lamp__spot {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  height: 32rem;
  width: 32rem;
  border-radius: 9999px;
  background: radial-gradient(circle, rgb(56 189 248 / 0.09), transparent 65%);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.4s ease;
  will-change: transform;
}
@media (pointer: coarse), (prefers-reduced-motion: reduce) {
  .lamp__spot {
    display: none;
  }
}

/* ── Contenido ───────────────────────────────────────────────── */
.lamp__body {
  position: relative;
  z-index: 10;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  /* El contenido sube una fracción del escenario, nunca una medida fija:
     así el haz de luz siempre queda visible por encima del titular y el
     tirón no puede llevarse el h1 por detrás del navbar. */
  margin-top: calc(var(--stage-h) * -0.6);
  padding: 0 1.25rem clamp(3rem, 6vw, 5rem);
}

/* Ventanas bajas (móvil apaisado). El efecto lámpara necesita alto para
   leerse: con 375px el haz cae detrás del navbar y sólo deja hueco muerto
   antes del titular. Se cambia por un resplandor superior, que funciona a
   cualquier tamaño, y el contenido pasa al primer plano. */
@media (max-height: 32rem) {
  .lamp {
    /* El resplandor lo pinta el fondo del hero, no el escenario, así que
       aquí sólo hace falta un hilo de separación. */
    --stage-h: 0.5rem;
    min-height: auto;
    padding-top: 0.5rem;
    background:
      radial-gradient(ellipse 70% 70% at 50% 0%, var(--accent-soft), transparent 70%),
      var(--page-bg);
  }
  .lamp__stage {
    transform: none;
  }
  .lamp__cone,
  .lamp__beam,
  .lamp__glow,
  .lamp__cover,
  .lamp__spread {
    display: none;
  }
  .lamp__body {
    margin-top: 0;
    padding-bottom: 2.5rem;
  }
}

@media (max-width: 639px) {
  .lamp {
    min-height: auto;
    padding-top: 1.5rem;
  }
}

/* ── Animaciones ─────────────────────────────────────────────── */
@keyframes lamp-expand {
  from {
    width: clamp(3rem, 20vw, 15rem);
    opacity: 0.3;
  }
  to {
    width: clamp(5rem, 52vw, 30rem);
    opacity: 1;
  }
}
@keyframes lamp-glow-lg {
  from {
    width: clamp(3rem, 8vw, 8rem);
  }
  to {
    width: clamp(5rem, 38vw, 28rem);
  }
}
@keyframes lamp-glow-sm {
  from {
    width: clamp(2rem, 5vw, 6rem);
  }
  to {
    width: clamp(4rem, 20vw, 16rem);
  }
}
@keyframes lamp-beam {
  from {
    width: clamp(3rem, 20vw, 15rem);
    opacity: 0.5;
  }
  to {
    width: clamp(5rem, 52vw, 30rem);
    opacity: 1;
  }
}
@keyframes aurora {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.06);
  }
}

/* Sin movimiento: las capas se quedan en su tamaño final, no a medias */
@media (prefers-reduced-motion: reduce) {
  .lamp__cone,
  .lamp__beam {
    width: clamp(5rem, 52vw, 30rem) !important;
    opacity: 1 !important;
  }
  .lamp__glow--lg {
    width: clamp(5rem, 38vw, 28rem) !important;
  }
  .lamp__glow--sm {
    width: clamp(4rem, 20vw, 16rem) !important;
  }
}
</style>
