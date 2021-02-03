module.exports = {
  extends: [
    'plugin:node/recommended',
    'eslint:recommended',
    './main.js',
  ],
  env: {
    'commonjs': true,
    'es6': true,
    'node': true
  },
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  'rules': {
    'no-console': 0,
    'no-debugger': 0,
    'array-element-newline': [
      'error',
      {
        'minItems': 2
      }
    ],
    'array-bracket-newline': [
      'error',
      {
        'minItems': 2
      }
    ],
    'comma-dangle': [
      'error',
      {
        'arrays': 'always-multiline',
        'exports': 'never',
        'functions': 'never',
        'imports': 'never',
        'objects': 'always-multiline'
      }
    ],
    'indent': [
      'error',
      2
    ],
    'object-curly-newline': [
      'error',
      {
        'ObjectExpression': {
          'multiline': true,
          'minProperties': 2
        },
        'ObjectPattern': {
          'multiline': true
        },
        'ImportDeclaration': {
          'multiline': true,
          'minProperties': 2
        },
        'ExportDeclaration': {
          'multiline': true,
          'minProperties': 2
        }
      }
    ],
    'object-curly-spacing': [
      'error',
      'always'
    ],
    'object-property-newline': [
      'error',
      {
        'allowAllPropertiesOnSameLine': false
      }
    ]
  }
}
