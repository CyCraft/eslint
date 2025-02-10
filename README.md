# eslint

> Shared [TypeScript Eslint config](https://typescript-eslint.io) for my projects

## Install

```sh
npm i -D @cycraft/eslint
```

It will install these packages for you, so you don't have to include them in your package dependencies:

- `@eslint/js`
- `@types/node`
- `eslint`
- `eslint-config-prettier`
- `prettier`
- `prettier-plugin-jsdoc`
- `prettier-plugin-organize-imports`
- `typescript`
- `typescript-eslint`

## Usage

`eslint.config.js`

```js
import config from '@cycraft/eslint/config'

export default config
```

`.prettierrc.js`

```js
import prettier from '@cycraft/eslint/prettier'

export default prettier
```

### Update Eslint Config

```js
import config from '@cycraft/eslint/config'

export default [
  {
    ignores: ['**/dist/*'],
  },
  ...config,
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
]
```
