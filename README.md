# mi-portfolio

[![CI](https://github.com/giovannibarroso/mi-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/giovannibarroso/mi-portfolio/actions/workflows/ci.yml)
[![Deploy](https://github.com/giovannibarroso/mi-portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/giovannibarroso/mi-portfolio/actions/workflows/deploy.yml)

Portfolio personal desarrollado con **Vue 3 + TypeScript + Vite + TailwindCSS**.  
El proyecto incluye buenas prácticas modernas: ESLint + Prettier + Husky + lint-staged, CI/CD con GitHub Actions y despliegue automático en GitHub Pages.

---

## 🚀 Tecnologías principales

- [Vue 3](https://vuejs.org/) + [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)
- [Husky](https://typicode.github.io/husky) + [lint-staged](https://github.com/okonet/lint-staged)
- [pnpm](https://pnpm.io/) como gestor de paquetes

---

## ⚙️ Requisitos

- Node.js >= 18
- [pnpm](https://pnpm.io/) >= 9

> ❌ Este proyecto **no soporta npm ni yarn**.  
> Usa siempre `pnpm`.

---

## 📦 Instalación

```bash
# Instalar dependencias
pnpm install

# Scripts disponibles
pnpm dev       # Levanta el servidor de desarrollo
pnpm build     # Genera la build de producción en dist/
pnpm preview   # Previsualiza la build en local
pnpm lint      # Ejecuta ESLint sobre el código
pnpm format    # Formatea el código con Prettier
pnpm typecheck # Revisa los tipos con TypeScript
pnpm ci:check  # Usado en CI: lint + typecheck + build
```
