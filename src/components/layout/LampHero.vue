<template>
  <section class="lamp-root" aria-label="Hero">
    <!-- ── Single stage — same structure for both modes ── -->
    <div class="lamp-stage" aria-hidden="true">
      <div class="lamp-cone lamp-cone-l">
        <div class="lamp-cut lamp-cut-bottom" />
        <div class="lamp-cut lamp-cut-left" />
      </div>
      <div class="lamp-cone lamp-cone-r">
        <div class="lamp-cut lamp-cut-right" />
        <div class="lamp-cut lamp-cut-bottom" />
      </div>
      <div class="lamp-spread" />
      <div class="lamp-frost" />
      <div class="lamp-glow-lg" />
      <div class="lamp-glow-sm" />
      <div class="lamp-beam" />
      <div class="lamp-cover" />
      <!-- Light-mode ambient blobs (decorative, sit above the cone) -->
      <template v-if="!isDark">
        <div class="aurora-c" />
        <div class="aurora-l" />
        <div class="aurora-r" />
        <div class="aurora-grid" />
      </template>
    </div>

    <!-- ── Slot ── -->
    <div class="lamp-body">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const isDark = ref(false)
let observer: MutationObserver | null = null

const syncTheme = () => {
  isDark.value = document.documentElement.classList.contains('dark')
}

onMounted(() => {
  syncTheme()
  observer = new MutationObserver(syncTheme)
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class'],
  })
})

onUnmounted(() => observer?.disconnect())

/* ── Color tokens — dark uses vivid blue, light uses subtle rgba ── */
const coneLBg = computed(() =>
  isDark.value
    ? 'conic-gradient(from 70deg at center top, #0ea5e9 0%, transparent 10%, transparent 100%)'
    : 'conic-gradient(from 70deg at center top, rgba(14,165,233,0.22) 0%, transparent 10%, transparent 100%)'
)
const coneRBg = computed(() =>
  isDark.value
    ? 'conic-gradient(from 290deg at center top, transparent 0%, transparent 90%, #0ea5e9 100%)'
    : 'conic-gradient(from 290deg at center top, transparent 0%, transparent 90%, rgba(14,165,233,0.22) 100%)'
)
const glowLgBg = computed(() => (isDark.value ? '#0ea5e9' : 'rgba(14,165,233,0.38)'))
const glowLgOp = computed(() => (isDark.value ? '0.5' : '0.65'))
const glowSmBg = computed(() => (isDark.value ? '#38bdf8' : 'rgba(56,189,248,0.24)'))
const beamBg = computed(() => (isDark.value ? '#38bdf8' : '#0ea5e9'))
const beamShadow = computed(() =>
  isDark.value ? '0 0 12px 2px rgba(56,189,248,0.6)' : '0 0 12px 2px rgba(14,165,233,0.38)'
)
</script>

<style scoped>
/* ─────────────────────────────────────────────────────────
   ROOT
───────────────────────────────────────────────────────── */
.lamp-root {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100dvh;
  width: 100%;
  overflow: hidden;
  background: var(--page-bg, #ffffff);
}

/* ─────────────────────────────────────────────────────────
   STAGE — single element, same scaleY in BOTH modes
   → beam and cone always at the same visual height
───────────────────────────────────────────────────────── */
.lamp-stage {
  position: relative;
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  isolation: isolate;
  z-index: 0;
  transform: scaleY(1.25);
}

/* ─────────────────────────────────────────────────────────
   CONE — colors bound per-mode via v-bind()
───────────────────────────────────────────────────────── */
.lamp-cone {
  position: absolute;
  inset: auto;
  height: 14rem;
  overflow: visible;
  animation: lamp-expand 0.9s 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.lamp-cone-l {
  right: 50%;
  width: clamp(5rem, 52vw, 30rem);
  background-image: v-bind(coneLBg);
}
.lamp-cone-r {
  left: 50%;
  width: clamp(5rem, 52vw, 30rem);
  background-image: v-bind(coneRBg);
}

/* ─────────────────────────────────────────────────────────
   CUTS — use page-bg so they're invisible in both modes
───────────────────────────────────────────────────────── */
.lamp-cut {
  position: absolute;
  z-index: 20;
  background: var(--page-bg, #09090b);
}
.lamp-cut-bottom {
  width: 100%;
  left: 0;
  height: 10rem;
  bottom: 0;
  -webkit-mask-image: linear-gradient(to top, white, transparent);
  mask-image: linear-gradient(to top, white, transparent);
}
.lamp-cut-left {
  width: 10rem;
  height: 100%;
  left: 0;
  bottom: 0;
  -webkit-mask-image: linear-gradient(to right, white, transparent);
  mask-image: linear-gradient(to right, white, transparent);
}
.lamp-cut-right {
  width: 10rem;
  height: 100%;
  right: 0;
  bottom: 0;
  -webkit-mask-image: linear-gradient(to left, white, transparent);
  mask-image: linear-gradient(to left, white, transparent);
}

/* ─────────────────────────────────────────────────────────
   SPREAD / FROST / COVER — use page-bg
───────────────────────────────────────────────────────── */
.lamp-spread {
  position: absolute;
  top: 50%;
  height: 12rem;
  width: 100%;
  transform: translateY(3rem) scaleX(1.5);
  background: var(--page-bg, #09090b);
  filter: blur(2rem);
}
.lamp-frost {
  position: absolute;
  top: 50%;
  z-index: 50;
  height: 12rem;
  width: 100%;
  background: transparent;
  opacity: 0.1;
  backdrop-filter: blur(12px);
}
.lamp-cover {
  position: absolute;
  inset: auto;
  z-index: 40;
  height: 11rem;
  width: 100%;
  transform: translateY(-12.5rem);
  background: var(--page-bg, #09090b);
}

/* ─────────────────────────────────────────────────────────
   GLOW + BEAM — colors bound per-mode
───────────────────────────────────────────────────────── */
.lamp-glow-lg {
  position: absolute;
  inset: auto;
  z-index: 50;
  height: 9rem;
  border-radius: 9999px;
  background: v-bind(glowLgBg);
  opacity: v-bind(glowLgOp);
  filter: blur(3rem);
  transform: translateY(-50%);
  animation: lamp-glow-lg 0.9s 0.25s ease both;
}
.lamp-glow-sm {
  position: absolute;
  inset: auto;
  z-index: 30;
  height: 9rem;
  border-radius: 9999px;
  background: v-bind(glowSmBg);
  filter: blur(2rem);
  transform: translateY(-6rem);
  animation: lamp-glow-sm 0.9s 0.25s ease both;
}
.lamp-beam {
  position: absolute;
  inset: auto;
  z-index: 50;
  height: 2px;
  background: v-bind(beamBg);
  transform: translateY(-7rem);
  box-shadow: v-bind(beamShadow);
  animation: lamp-beam 0.9s 0.25s ease both;
}

/* ─────────────────────────────────────────────────────────
   LIGHT — ambient aurora blobs (decorative overlay)
───────────────────────────────────────────────────────── */
.aurora-c {
  position: absolute;
  top: -20%;
  left: 50%;
  transform: translateX(-50%);
  width: clamp(24rem, 72vw, 64rem);
  height: clamp(24rem, 72vw, 64rem);
  background: radial-gradient(
    circle,
    rgba(14, 165, 233, 0.1) 0%,
    rgba(14, 165, 233, 0.04) 40%,
    transparent 70%
  );
  filter: blur(50px);
  animation: aurora-float 9s ease-in-out infinite;
}
.aurora-l {
  position: absolute;
  top: -8%;
  left: -8%;
  width: clamp(14rem, 32vw, 26rem);
  height: clamp(14rem, 32vw, 26rem);
  background: radial-gradient(circle, rgba(56, 189, 248, 0.09) 0%, transparent 70%);
  filter: blur(60px);
  animation: aurora-float 12s ease-in-out infinite reverse;
}
.aurora-r {
  position: absolute;
  top: -8%;
  right: -8%;
  width: clamp(14rem, 32vw, 26rem);
  height: clamp(14rem, 32vw, 26rem);
  background: radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%);
  filter: blur(60px);
  animation: aurora-float 10s ease-in-out infinite;
}
.aurora-grid {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(14, 165, 233, 0.05) 1px, transparent 1px);
  background-size: 28px 28px;
  -webkit-mask-image: radial-gradient(ellipse 80% 55% at 50% 18%, black 25%, transparent 75%);
  mask-image: radial-gradient(ellipse 80% 55% at 50% 18%, black 25%, transparent 75%);
}

/* ─────────────────────────────────────────────────────────
   BODY
───────────────────────────────────────────────────────── */
.lamp-body {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: clamp(-10rem, -18vw, -22rem);
  padding: 0 1.25rem clamp(2.5rem, 5vw, 4.5rem);
}

/* ─────────────────────────────────────────────────────────
   MOBILE — limit stage height so content starts sooner
───────────────────────────────────────────────────────── */
@media (max-width: 639px) {
  .lamp-stage {
    flex: 0 0 28vh;
    max-height: 28vh;
  }
  .lamp-body {
    margin-top: clamp(-5rem, -8vw, -6rem);
  }
}

/* ─────────────────────────────────────────────────────────
   KEYFRAMES
───────────────────────────────────────────────────────── */
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
@keyframes aurora-float {
  0%,
  100% {
    opacity: 1;
    transform: translateX(-50%) scale(1);
  }
  50% {
    opacity: 0.7;
    transform: translateX(-50%) scale(1.06);
  }
}

/* ─────────────────────────────────────────────────────────
   REDUCE MOTION
───────────────────────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .lamp-cone,
  .lamp-glow-lg,
  .lamp-glow-sm,
  .lamp-beam,
  .aurora-c,
  .aurora-l,
  .aurora-r {
    animation: none !important;
  }
  .lamp-cone {
    width: clamp(5rem, 52vw, 30rem) !important;
    opacity: 1 !important;
  }
  .lamp-beam {
    width: clamp(5rem, 52vw, 30rem) !important;
    opacity: 1 !important;
  }
}
</style>
