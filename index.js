module.exports = {
    extends: [
        'eslint:recommended',
        'airbnb-base',
        'viralize-common'
    ],
    rules: {
        'func-names': 'off',
        'no-var': 'off',
        'object-shorthand': 'off',
        'prefer-arrow-callback': 'off',
        'prefer-destructuring': 'off',
        'prefer-template': 'off',
        strict: ['error', 'function'],
        'wrap-iife': ['error', 'inside']
    }
};
