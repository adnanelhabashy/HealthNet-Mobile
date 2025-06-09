module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      configFile: './.babelrc',
    },
  },
  rules: {
    semi: ['error', 'never'], // if you prefer no semicolons
    // or, to allow semicolons:
    // 'semi': ['error', 'always'],
  },
};
