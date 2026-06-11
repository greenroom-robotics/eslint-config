# Changelog

## 0.0.6

- Migrate to ESLint 9 flat config (`eslint.config.js`)
- Update `@typescript-eslint/parser` and `@typescript-eslint/eslint-plugin` to v8
- Restore `project: 'tsconfig.json'` for type-aware linting
- Enforce `@typescript-eslint/no-unnecessary-type-assertion`
- Change `react-hooks/exhaustive-deps` from `off` to `warn`
- Simplify dependencies (remove `eslint-config-standard-typescript-prettier`, `@rushstack/eslint-patch`)

## 2.1.0
- Loosen up `export` spacing rules
  - They cannot be correctly defined without a custom plugin in eslint.

## 2.0.0

- Fix blank line spacing autofix issues (especially with return statements)
- Update deps
- Tidy up existing rules

## 1.2.0

- Initial release.