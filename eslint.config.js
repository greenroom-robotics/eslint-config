import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import unusedImports from 'eslint-plugin-unused-imports';
import promise from 'eslint-plugin-promise';
import importPlugin from 'eslint-plugin-import';

const baseConfig = [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,
  {
    plugins: {
      'unused-imports': unusedImports,
      promise,
      import: importPlugin,
    },
    rules: {
      'camelcase': 'off',
      'no-unused-expressions': 'off',
      'newline-before-return': 'off',
      'no-use-before-define': 'off',
      'no-var': 'error',
      'unused-imports/no-unused-imports': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/camelcase': 'off',
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'padding-line-between-statements': [
        'error',
        { prev: '*', next: 'import', blankLine: 'always' },
        { prev: 'import', next: '*', blankLine: 'always' },
        { prev: 'import', next: 'import', blankLine: 'never' },
        { prev: '*', next: 'block-like', blankLine: 'always' },
        { prev: '*', next: 'return', blankLine: 'always' },
        { prev: 'block-like', next: '*', blankLine: 'always' },
        { prev: '*', next: 'multiline-expression', blankLine: 'always' },
        { prev: 'if', next: '*', blankLine: 'always' },
        { prev: '*', next: 'if', blankLine: 'always' },
        { prev: 'if', next: 'if', blankLine: 'any' },
        {
          prev: ['singleline-const', 'singleline-let', 'singleline-var'],
          next: ['*'],
          blankLine: 'always',
        },
        {
          prev: [
            'singleline-const',
            'singleline-let',
            'singleline-var',
            'multiline-const',
            'multiline-let',
            'multiline-var',
          ],
          next: [
            'singleline-const',
            'singleline-let',
            'singleline-var',
            'multiline-const',
            'multiline-let',
            'multiline-var',
          ],
          blankLine: 'never',
        },
        { prev: '*', next: 'multiline-block-like', blankLine: 'always' },
        {
          prev: [
            'multiline-expression',
            'multiline-const',
            'multiline-block-like',
          ],
          next: '*',
          blankLine: 'always',
        },
      ],
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        project: 'tsconfig.json',
      },
    },
  },
];

const reactConfig = [
  ...baseConfig,
  {
    files: ['**/*.{jsx,tsx}'],
    plugins: {
      react,
      'react-hooks': reactHooks,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react-hooks/exhaustive-deps': 'warn',
      'react/prop-types': 'off',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];

export { baseConfig as base, reactConfig as react };
export default reactConfig;
