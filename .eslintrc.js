const path = require('path');

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'linebreak-style': [0, 'error', 'windows'],
    'import/prefer-default-export': [0, 'error'],
    'jsx-a11y/anchor-is-valid': [0, 'error'],
    'react/jsx-props-no-spreading': [0, 'error'],
    'jsx-a11y/no-static-element-interactions': [0, 'error'],
    'jsx-a11y/click-events-have-key-events': [0, 'error'],
    'react/no-array-index-key': [0, 'error'],
    'max-len': [0, 'error'],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['Components', path.resolve(__dirname, 'components/')],
          ['Containers', path.resolve(__dirname, 'components/containers')],
          ['Elements', path.resolve(__dirname, 'components/elements/')],
          ['Utils', path.resolve(__dirname, 'components/utilities/')],
          ['Layout', path.resolve(__dirname, 'components/pageLayouts/')],
          ['Hocs', path.resolve(__dirname, 'hocs/')],
          ['Actions', path.resolve(__dirname, 'redux/actions')],
          ['Reducers', path.resolve(__dirname, 'redux/reducers')],
          ['Types', path.resolve(__dirname, 'redux/types')],
          ['Config', path.resolve(__dirname, 'config/')],
          ['Routes', path.resolve(__dirname, 'config/routes')],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json'],
      },
    },
  },
};
