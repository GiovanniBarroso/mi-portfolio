import js from '@eslint/js'
import vue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import tsParser from '@typescript-eslint/parser'
import ts from '@vue/eslint-config-typescript'
import prettier from 'eslint-config-prettier'

export default [
  // Ignorar lo que no queremos lint
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      'postcss.config.cjs',
      'tailwind.config.js',
      '*.vue.js',
      '*.vue.d.ts',
    ],
  },

  // Presets base
  js.configs.recommended,
  ...vue.configs['flat/recommended'],
  ...ts(),
  prettier,

  // Archivos .vue → parser de Vue + sub-parser TS para <script>
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 'latest',
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        localStorage: 'readonly',
        URL: 'readonly',
      },
    },
  },

  // Archivos TS/JS (no .vue) → parser TS directo
  {
    files: ['**/*.{ts,tsx,js,mjs,cjs}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        localStorage: 'readonly',
        URL: 'readonly',
      },
    },
  },

  // Overrides y reglas propias al final (toman prioridad)
  {
    files: ['**/*.{js,mjs,cjs,ts,vue}'],
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/require-default-prop': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },

  // Para .d.ts desactivamos reglas molestas
  {
    files: ['**/*.d.ts'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
]
