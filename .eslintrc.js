module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb-base',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'plugin:import/warnings',
        'plugin:import/errors',
        'plugin:import/typescript',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    rules: {
        'eslint-disabled-indent': true,
        'prettier/prettier': 'error',
        'no-console': 'off',
    },
};