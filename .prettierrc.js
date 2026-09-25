// consumers re-export this config from their own .prettierrc.js, and prettier resolves plugin names
// relative to that file, where these plugins are not installed; resolving them here makes it work anywhere
import { fileURLToPath } from 'node:url'

const plugin = (name) => fileURLToPath(import.meta.resolve(name))

export default {
  printWidth: 100,
  tabWidth: 2,
  singleQuote: true,
  semi: false,
  bracketSpacing: true,
  quoteProps: 'consistent',
  plugins: [
    plugin('prettier-plugin-organize-imports'),
    plugin('prettier-plugin-jsdoc'), // this needs to be last to work correctly
  ],
}
