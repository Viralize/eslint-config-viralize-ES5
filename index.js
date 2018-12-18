module.exports = {
    extends: [
        'eslint:recommended',
        'airbnb-base',
        'viralize-common'
    ],
    rules: {
        'func-names': 'off',
        'no-var': 'off',
        strict: ['error', 'function'],
        'wrap-iife': ['error', 'inside']
    }
};
