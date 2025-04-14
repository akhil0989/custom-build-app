module.exports = {
  extends: ['eslint:recommended'],
  env: {
    node: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'no-console': 'off',  // Optional: allows console logs in your code
    // Add other rules as needed
  },
};
