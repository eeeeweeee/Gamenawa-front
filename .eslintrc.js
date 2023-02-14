module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['airbnb', 'airbnb-typescript', 'plugin:vue/vue3-essential', 'eslint:recommended', '@vue/typescript'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'linebreak-style': 0,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: ['tsconfig.json'],
  },
};
