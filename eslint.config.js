// eslint.config.js (flat config style)
module.exports = [
  {
    files: ['*.js'],
    rules: {
      'no-console': 'off',  // Allow console logs (remove this if not needed)
      'no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
      // Add any other ESLint rules you prefer
    },
  },
];
