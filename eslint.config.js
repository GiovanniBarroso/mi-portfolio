import js from '@eslint/js'
import vue from 'eslint-plugin-vue'
import ts from '@vue/eslint-config-typescript'
import prettier from 'eslint-config-prettier'
import globals from 'globals'

export default [
  {
    ignores: ['dist/**', 'node_modules/**', 'coverage/**', 'public/**', 'docs/**'],
  },

  js.configs.recommended,
  ...vue.configs['flat/recommended'],
  ...ts(),
  // Prettier se encarga del formato: fuera las reglas de estilo que chocan
  prettier,

  // Código de la app: navegador
  {
    files: ['src/**/*.{ts,vue}'],
    languageOptions: { globals: globals.browser },
  },

  // Tooling, build y tests: Node
  {
    files: ['*.{js,mjs,ts}', 'scripts/**/*.{js,mjs}', 'build/**/*.ts', 'src/**/__tests__/**/*.ts'],
    languageOptions: { globals: globals.node },
  },

  // Reglas propias (al final, toman prioridad)
  {
    files: ['**/*.{js,mjs,ts,vue}'],
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/require-default-prop': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-non-null-assertion': 'off',
    },
  },

  // En la plantilla del script de OG se construye HTML como texto
  {
    files: ['scripts/generate-og.mjs'],
    languageOptions: { globals: { ...globals.node, ...globals.browser } },
  },
]
