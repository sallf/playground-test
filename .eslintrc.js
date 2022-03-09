module.exports = {
  extends: [
    'airbnb',
  ],
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    mocha: true,
    node: true,
    atomtest: true
  },
  plugins: [
    'react',
    'jsx-a11y',
    'react-hooks',
    'import'
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    'import/resolver': {
      node: {}, // https://github.com/benmosher/eslint-plugin-import/issues/1396#issuecomment-509384041
      webpack: {
        config: './webpack.config.resolve.js'
      },
    }
  }
}
