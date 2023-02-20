module.exports = {
  '**/*.{ts,tsx}': ['eslint --cache --fix'],
  '**/*.{js,jsx}': ['eslint --cache --fix'],
  '**/*.{css,less,scss}': ['stylelint --cache --fix'],
  '**/*.vue': ['eslint --cache --fix'],
}
