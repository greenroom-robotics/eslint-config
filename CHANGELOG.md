# Changelog

**Note:** Version numbers below are out of order due to historical changelog entries that were never synced with package.json. As of 1.0.0, package.json version, changelog versions and registry are now synchronized.

## 1.0.0

**BREAKING CHANGES:**
- Migrated to ESLint 9 flat config (`eslint.config.js`) — consumers must update their ESLint configuration
- Changed `main` entry point from `./.eslintrc.js` to `./eslint.config.js`
- Removed dependencies: `@greenroom-robotics/eslint-config-standard-typescript-prettier`, `@rushstack/eslint-patch`, `eslint-plugin-n`, `eslint-plugin-node`, `eslint-plugin-only-warn`

**Features:**
- Update `@typescript-eslint/parser` and `@typescript-eslint/eslint-plugin` to v8
- Restore `project: 'tsconfig.json'` for type-aware linting
- Enforce `@typescript-eslint/no-unnecessary-type-assertion`
- Change `react-hooks/exhaustive-deps` from `off` to `warn`

## 2.1.0
- Loosen up `export` spacing rules
  - They cannot be correctly defined without a custom plugin in eslint.

## 2.0.0

- Fix blank line spacing autofix issues (especially with return statements)
- Update deps
- Tidy up existing rules

## 1.2.0

- Initial release.