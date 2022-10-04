module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint/eslint-plugin', 'import', 'prettier'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
  ignorePatterns: ['.eslintrc.cjs'],
  rules: {
    'space-before-function-paren': 'off',
    'arrow-parens': 'off',
    'no-console': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    // 'import/extensions': [
    //   'error',
    //   'ignorePackages',
    //   {
    //     ts: 'never',
    //     tsx: 'never',
    //     js: 'never',
    //     jsx: 'never',
    //   },
    // ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      },
      // 'warn',
      // {
      //   devDependencies: [
      //     '**/*.test.tsx',
      //     '**/*.test.ts',
      //     '**/*.test.jsx',
      //     '**/*.test.js',
      //     '**/*.stories.*',
      //     '**/.storybook/**/*.*',
      //   ],
      // },
    ],
    'jsx-a11y/href-no-hash': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.jsx', '.tsx', '.js', '.ts'] },
    ],
    'react/function-component-definition': 'off',
    'react/prefer-stateless-function': 'off',
    '@typescript-eslint/indent': [2, 2],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
      },
    ],
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          '{}': false,
        },
      },
    ],
  },
};
