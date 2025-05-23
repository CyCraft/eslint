import eslint from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  {
    ignores: ['dist'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  eslintConfigPrettier,
  {
    rules: {
      'no-restricted-syntax': [
        'error',
        {
          selector: 'Program > VariableDeclaration > VariableDeclarator > FunctionExpression',
          message:
            'Use a function declaration at the top-level instead of arrow functions or function expressions.',
        },
      ],
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/consistent-indexed-object-style': ['error', 'index-signature'],
    },
  },
)
