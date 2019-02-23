module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb'],
  rules: {
    'react/prop-types': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-wrap-multilines': 0,
    'import/extensions': 0,
    'import/no-unresolved': [2, {
      ignore: ['^[@]', '^[~]', '^[$]', '^[#]'],
    }],
    'jsx-a11y/no-static-element-interactions': 0,
    'class-methods-use-this': 0,
    'no-confusing-arrow': 0,
    'no-underscore-dangle': 0,
    'implicit-arrow-linebreak': 0,
    'operator-linebreak': 0,
    'padded-blocks': 0,
    'lines-between-class-members': 0,
    'quote-props': ['error', 'consistent-as-needed'],
  },
};
