import globals from 'globals';
import js from '@eslint/js';
import tsPlugin from 'typescript-eslint';

export default [
  {
    ignores: ['dist', 'node_modules', '.angular']
  },
  js.configs.recommended,
  ...tsPlugin.configs.recommended,
  {
    files: ['**/*.ts'],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      'prefer-const': 'error',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_'
        }
      ],
      'no-console': [
        'warn',
        {
          allow: ['warn', 'error']
        }
      ],
      'prefer-arrow-callback': 'error',
      'object-shorthand': 'error',
      'no-var': 'error',
      'eqeqeq': ['error', 'always']
    }
  },
  {
    files: ['**/*.spec.ts'],
    rules: {
      'no-console': 'off'
    }
  }
];
