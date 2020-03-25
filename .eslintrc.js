module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    'ecmaVersion': 6,
    'sourceType': 'module',
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'jsx': true
    }
  },
  parser: 'babel-eslint',
  env: {
    'browser': false,
    'es6': true,
    'jest': true
  },
  plugins: [
    'react',
    'import',
    'jsx-a11y'
  ],
  extends: 'airbnb',
  globals: {
    '__DEV__': true,
  },
  rules: {
    'max-len': 0,
    'no-param-reassign': 0,
    'no-underscore-dangle': 0,
    'consistent-return': 0,
    'no-use-before-define': 0,
    'global-require': 0,
    'class-methods-use-this': ["error", { "exceptMethods": ["shouldComponentUpdate", "componentWillMount", "componentDidMount", "render", "componentDidFocus", "componentDidBlur", "componentWillUnmount"] }],

    'indent': [2, 2, { SwitchCase: 1 }],
    'linebreak-style': [2, 'unix'],
    'no-trailing-spaces': 2,
    'eol-last': [2, 'always'],
    'no-multiple-empty-lines': [2, { max: 1 }],
    'no-unused-expressions': [2, { 'allowShortCircuit': true, 'allowTernary': true }],
    'no-plusplus': [2, { 'allowForLoopAfterthoughts': true }],
    'radix': [2, 'as-needed'],
    'quote-props': [2, 'as-needed', { 'numbers': true }],
    'semi': [2, 'never'],
    'camelcase': [2, { properties: 'never' }],
    'comma-dangle': [2, 'always-multiline'],
    'arrow-parens': [2, 'as-needed'],
    'space-before-function-paren': [
      2,
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'import/no-unresolved': [2, { ignore: ['\.img$', '\@*$'] }],
    'import/extensions': [2, 'never'],
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,

    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx', '.tsx'] }],
    'react/require-default-props': 0,
    'react/prop-types': [2, { ignore: ['navigator', 'children'] }],
    'react/sort-comp': [2, {
      order: [
        'static-methods',
        'lifecycle',
        'rendering',
        'everything-else',
      ]
    }],
    'react/forbid-prop-types': [1, { 'forbid': ['any', 'array',] }],
    'react/no-unused-prop-types': 2,
  }
}