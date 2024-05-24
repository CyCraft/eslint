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
- `eslint-plugin-unicorn`
- `prettier`
- `prettier-plugin-jsdoc`
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
import prettier from "@cycraft/eslint/prettier"

export default prettier
```
