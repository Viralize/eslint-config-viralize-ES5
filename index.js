module.exports = {
  extends: [
    'eslint:recommended'
    'airbnb/legacy',
    'viralize-base'
  ].map(require.resolve),
  rules: {
    "func-names": "off",
    "strict": ["error", "function"],
    "wrap-iife": ["error", "inside"]
  }
};
