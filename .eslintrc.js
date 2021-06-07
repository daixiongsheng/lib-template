module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true
  },
  'extends': [
    'plugin:@typescript-eslint/recommended'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 2020,
    'sourceType': 'module'
  },
  'plugins': [
    '@typescript-eslint'
  ],
  'rules': {
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'babel/object-curly-spacing': 'off',
    'linebreak-style': 'off',
    'no-whitespace-before-property': 'error',
    '@typescript-eslint/type-annotation-spacing': 'error',
    'import/newline-after-import': 'off',
    'no-console': 'off',
    'import/no-commonjs': 'off',
    'import/extensions': 'off',
    '@typescript-eslint/no-this-alias': [
      'error',
      {
        allowDestructuring: true,
        allowedNames: ['self']
      }
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    'import/prefer-default-export': 'off',
    'explicit-module-boundary-types': 'off',
    'prefer-promise-reject-errors': 'off'
  }
}