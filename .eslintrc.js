module.exports = {
  root: true,
  extends: 'eslint:recommended',
  env: {
    node: true,
    es6: true
  },
  parserOptions: {
    'sourceType': 'script',
    'ecmaVersion': 2019
  },
  'rules': {
    'semi': ['error', 'never'],
    'quotes': ['error', 'single'],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
