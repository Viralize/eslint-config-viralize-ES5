module.exports = {
    extends: [
        'eslint:recommended',
        'airbnb-base',
        'viralize-common'
    ].map(require.resolve),
    rules: {
        'func-names': 'off',
        strict: ['error', 'function'],
        'wrap-iife': ['error', 'inside']
    }
};
