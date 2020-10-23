/**
 *  Allows linting and fixing Jest test scripts
 */
module.exports = {
  extends: ['./main.js', 'plugin:jest/recommended', 'plugin:jest/style'],
  rules: {
    // A few of these rules are auto-fixable. Additionally those that aren't are
    // generally there to promote good maintainable code, and can be disabled
    // individually or for an entire file, and this disabling _should_ be seen
    // as an explicit exception.
    // That said, we use the "error" level where a specific practice should
    // be heavily discouraged, and "warn" where it should be generally
    // discouraged but there may be situations where it is desired to use jest
    // in this way.

    'jest/consistent-test-it': 'error', // Fixable
    // See https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/lowercase-name.md
    // for details on how to provide more exceptions.
    'jest/lowercase-name': [
      // Fixable
      'warn',
      {
        ignoreTopLevelDescribe: true,
      },
    ],
    'jest/no-duplicate-hooks': 'error',
    'jest/no-if': 'error',
    'jest/no-large-snapshots': 'warn', // Default is 50 lines which is sensible.
    'jest/no-test-return-statement': 'error',
    'jest/prefer-called-with': 'warn',
    'jest/prefer-hooks-on-top': 'error',
    'jest/prefer-todo': 'error', // Fixable
    'jest/require-to-throw-message': 'warn', // Fixable
  },
}
