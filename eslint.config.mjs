// @ts-check
import { createConfigForNuxt } from '@nuxt/eslint-config/flat';

export default createConfigForNuxt().append({
  ignores: ['**/coverage', '.vscode/**'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'error',
  },
});
