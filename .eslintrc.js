module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@next/next/recommended',
    'plugin:prettier/recommended', // Optional: Use Prettier with ESLint
  ],
  plugins: ['react', '@next/next', 'prettier'],
  rules: {
    // Customize ESLint rules here
    'react/react-in-jsx-scope': 'off', // Next.js doesn't require importing React
    'react/prop-types': 'off', // Disable prop-types validation
    '@next/next/no-img-element': 'off', // Allow <img> elements without alt attributes
    'prettier/prettier': 'error',
  },
};
