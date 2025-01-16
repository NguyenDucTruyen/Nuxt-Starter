import antfu from '@antfu/eslint-config'

export default antfu({
  // stylistic: true, // enable stylistic formatting rules
  typescript: true,
  vue: true,
  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn',

    'node/prefer-global/process': 'off',

    'regexp/no-unused-capturing-group': 'off',

    'ts/ban-ts-comment': 'off',
    'ts/no-empty-object-type': 'off',
    'ts/no-unused-expressions': ['error', { allowTaggedTemplates: true }],

    'vue/valid-v-slot': 'off',
    'vue/custom-event-name-casing': 'off',
    'vue/no-multiple-template-root': 'off',
  },
})
