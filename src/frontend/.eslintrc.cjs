module.exports = {
  root: true,
  env: {browser: true, es2020: true},
  plugins: ['unused-imports', 'prettier'],
  extends: ['airbnb', 'airbnb/hooks', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      alias: {
        map: [['src', './src']],
        extensions: ['.js', '.jsx', '.json'],
      },
    },
  },
  /**
   * 0 ~ 'off'
   * 1 ~ 'warn'
   * 2 ~ 'error'
   */
  rules: {
    'no-use-before-define': 0,
    'no-alert': 0,
    camelcase: 0,
    'no-console': 0,
    'no-unused-vars': 0,
    'spaced-comment': 0,
    'no-nested-ternary': 0,
    'arrow-body-style': 0,
    'no-restricted-globals': 0,
    'no-param-reassign': 0,
    'no-underscore-dangle': 0,
    'no-restricted-exports': 0,
    'no-promise-executor-return': 0,
    'import/prefer-default-export': 0,
    'prefer-destructuring': [1, {object: true, array: false}],
    // react
    'react/prop-types': 0,
    'react/no-children-prop': 0,
    'react/react-in-jsx-scope': 0,
    'react/no-array-index-key': 0,
    'react/require-default-props': 0,
    'react/jsx-props-no-spreading': 0,
    'react/function-component-definition': 0,
    'react/jsx-no-duplicate-props': [1, {ignoreCase: false}],
    'react/jsx-no-useless-fragment': 0, // Disabled
    'react/no-unstable-nested-components': [1, {allowAsProps: true}],
    // jsx-a11y
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/control-has-associated-label': 0,
    // unused imports
    'unused-imports/no-unused-imports': 0, // Disabled
    'unused-imports/no-unused-vars': [
      0,
      {vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_'},
    ],
    // perfectionist
    'perfectionist/sort-exports': 0, // Disabled
    'perfectionist/sort-named-imports': 0, // Disabled
    'perfectionist/sort-named-exports': 0, // Disabled
    'perfectionist/sort-imports': 0, // Disabled
    'import/order': 0, // Disabled
  },
};
