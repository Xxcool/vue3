module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  // .vue文件的ESLint自定义解析器。
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended', // vue3默认的推荐规范
    'plugin:prettier/recommended' // 插件约束规范 解决eslint和prettier的冲突问题
  ],
  plugins: ['vue'],
  rules: {
    // Vue
    'vue/no-v-html': 'off',
    'vue/require-default-prop': 'off',
    'vue/require-explicit-emits': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    // Prettier
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ]
  },
  // 添加eslint对defineOptions、defineProps、defineEmits、defineExpose、withDefaults特性的支持，否则报错
  globals: {
    // script setup
    defineOptions: 'readonly',
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly'
  }
};
