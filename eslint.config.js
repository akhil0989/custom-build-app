// eslint.config.js (flat config style)
module.exports = [
  {
    files: ['*.js'],
    rules: {
      'no-console': 'off',  // Allow console logs
      'no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
      // Add any other rules you prefer
    },
  },
];
