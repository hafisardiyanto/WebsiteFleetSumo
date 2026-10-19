// Flat ESLint config compatible with ESLint v9, TypeScript, and Vue
module.exports = [
  // Ignore generated and dependency directories
  { ignores: ['**/.nuxt/**', '**/.output/**', '**/.cache/**', '**/node_modules/**', '**/dist/**', '**/*.d.ts'] },
  // JavaScript and TypeScript files
  {
    files: ['**/*.js', '**/*.ts'],
    languageOptions: {
      parser: require('@babel/eslint-parser'),
      ecmaVersion: 2022,
      sourceType: 'module',
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: [require('@babel/preset-typescript')],
        },
      },
    },
    plugins: {},
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
  },
  // Vue single‑file components (including <script lang="ts">)
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: require('vue-eslint-parser'),
      parserOptions: {
        parser: require('@babel/eslint-parser'),
        ecmaVersion: 2022,
        sourceType: 'module',
        requireConfigFile: false,
        babelOptions: {
          presets: [require('@babel/preset-typescript')],
        },
      },
    },
    plugins: {
      vue: require('eslint-plugin-vue'),
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
  },
];
