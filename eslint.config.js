import { defineConfig } from 'eslint';

export default defineConfig({
  files: ['*.js'], // Specify the files to apply the rules to
  env: {
    node: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 12, // Support for ES2021 features
  },
  rules: {
    'no-console': 'off',  // Allow console logs
    'no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
  },
});
