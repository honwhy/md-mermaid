import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  typescript: true,
  formatters: true,
  ignores: [`.github`, `scripts`, `src/assets`],
}, {
  rules: {
    'semi': [`error`, `never`],
    'quotes': [`error`, `backtick`],
    'no-unused-vars': `off`,
    'no-console': `off`,
    'no-debugger': `off`,
  },
})
