module.exports = {
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true,
      jsx: true
    }
  },
  env: {
    es2020: true,
    node: true,
    browser: true,
    jest: true
  },
  globals: {
    history: 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  plugins: ['react', 'react-native', 'react-hooks'],
  rules: {
    'no-empty': ['error', {allowEmptyCatch: true}],
    'react/prop-types': [1, {skipUndeclared: true}],
    'no-unused-vars': [1, {vars: 'all', args: 'none', ignoreRestSiblings: true}]
  }
}
