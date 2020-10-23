module.exports = {
  env: {
    es6: true,
    node: true,
  },
  plugins: ['jsdoc'],
  extends: [
    'eslint:recommended',
    'plugin:jsdoc/recommended',
  ],

  parserOptions: {
    sourceType: 'module',
  },

  rules: {
    indent: ['error', 2],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 1,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 1,
    'no-var': 'error',
    'prefer-const': ['error', { destructuring: 'all' }],
    curly: 'error',
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'space-before-function-paren': ['error', 'always'],
  }
}
