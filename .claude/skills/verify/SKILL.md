---
name: verify
description: Cómo verificar cambios de este portfolio (Vue 3 + Vite) en el navegador real.
---

# Verificar mi-portfolio

## Build y servidor

```bash
pnpm ci:check              # lint + typecheck + build (dist/ con PWA)
pnpm preview --port 4173   # sirve dist/ en background
```

## Capturas de pantalla

- **No usar** `msedge --headless --virtual-time-budget`: las animaciones de
  @vueuse/motion quedan congeladas a media opacidad (el tiempo virtual no avanza rAF).
- **Funciona**: `playwright-core` (npm install en scratchpad, sin descargar navegadores)
  con `channel: 'msedge'`, `waitUntil: 'networkidle'` + `waitForTimeout(2500)`.
- Para las secciones con `visibleOnce` (stats, proyectos destacados), hacer scroll
  programático por toda la página antes del screenshot fullPage.
- Modo claro: `colorScheme: 'light'` + `addInitScript(() => localStorage.setItem('theme', 'light'))`.

## Flujos que merece la pena revisar

- Home: lamp hero (animación entrada), contadores CountUp tras scroll, marquee de tecnologías.
- Contacto: iconos SVG de GitHub/LinkedIn, botón copiar email.
- Ambos temas (claro/oscuro) — históricamente fuente de bugs.
- Móvil: viewport 375px.
- PWA: `curl http://localhost:4173/sw.js` y `/manifest.webmanifest` deben dar 200.

## Gotchas

- Si aparecen `.js` compilados junto a los `.ts` en src/ (residuos de tsc sin --noEmit),
  bórralos: Vite puede resolverlos antes que los `.ts` y servir código viejo.
