module.exports = {
  extends: [
    './node_modules/ts-standard/eslintrc.json',
    './node_modules/standard/eslintrc.json',
    'next/core-web-vitals'
  ],
  parserOptions: {
    project: './tsconfig.json'
  }
}
