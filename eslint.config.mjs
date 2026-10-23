import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  // eslint-config-next already registers the jsx-a11y plugin; here we enable its full recommended rule set.
  {
    rules: {
      ...jsxA11y.flatConfigs.recommended.rules,
      // Scrollable regions (the comparison table) must be keyboard focusable.
      'jsx-a11y/no-noninteractive-tabindex': ['error', { roles: ['tabpanel', 'region'] }],
    },
  },
  globalIgnores([
    '.next/**',
    'out/**',
    'coverage/**',
    'playwright-report/**',
    'test-results/**',
    'next-env.d.ts',
    'scripts/**',
    'gen-image.ts',
    'referencia/**',
    'marca/**',
    'assets/**',
  ]),
]);
