module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      legacyDecorators: true,
      jsx: true
    },
    sourceType: 'module'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true
  },

  plugins: ['import', 'node', 'promise', 'react'],

  extends: ['plugin:react/recommended'],

  globals: {
    document: false,
    navigator: false,
    window: false
  },

  rules: {
    'accessor-pairs': 1,
    'arrow-spacing': [1, {before: true, after: true}],
    'block-spacing': [1, 'always'],
    'brace-style': [1, '1tbs', {allowSingleLine: true}],
    camelcase: [1, {properties: 'never'}],
    'comma-dangle': [
      1,
      {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'never'
      }
    ],
    'comma-spacing': [1, {before: false, after: true}],
    'comma-style': [1, 'last'],
    'constructor-super': 1,
    curly: [1, 'multi-line'],
    'dot-location': [1, 'property'],
    'eol-last': 1,
    eqeqeq: [1, 'always', {null: 'ignore'}],
    'func-call-spacing': [1, 'never'],
    'generator-star-spacing': [1, {before: true, after: true}],
    'handle-callback-err': [1, '^(err|error)$'],
    indent: [1, 2, {SwitchCase: 1}],
    'key-spacing': [1, {beforeColon: false, afterColon: true}],
    'keyword-spacing': [1, {before: true, after: true}],
    'new-cap': [1, {newIsCap: true, capIsNew: false}],
    'new-parens': 1,
    'no-array-constructor': 1,
    'no-caller': 1,
    'no-class-assign': 1,
    'no-compare-neg-zero': 1,
    'no-cond-assign': 1,
    'no-const-assign': 1,
    'no-constant-condition': [1, {checkLoops: false}],
    'no-control-regex': 1,
    'no-debugger': 1,
    'no-delete-var': 1,
    'no-dupe-args': 1,
    'no-dupe-class-members': 1,
    'no-dupe-keys': 1,
    'no-duplicate-case': 1,
    'no-empty-character-class': 1,
    'no-empty-pattern': 1,
    'no-eval': 1,
    'no-ex-assign': 1,
    'no-extend-native': 1,
    'no-extra-bind': 1,
    'no-extra-boolean-cast': 1,
    'no-extra-parens': [1, 'functions'],
    'no-fallthrough': 1,
    'no-floating-decimal': 1,
    'no-func-assign': 1,
    'no-global-assign': 1,
    'no-implied-eval': 1,
    'no-inner-declarations': [1, 'functions'],
    'no-invalid-regexp': 1,
    'no-irregular-whitespace': 1,
    'no-iterator': 1,
    'no-label-var': 1,
    'no-labels': [1, {allowLoop: false, allowSwitch: false}],
    'no-lone-blocks': 1,
    'no-mixed-operators': [
      1,
      {
        groups: [
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof']
        ],
        allowSamePrecedence: true
      }
    ],
    'no-mixed-spaces-and-tabs': 1,
    'no-multi-spaces': 1,
    'no-multi-str': 1,
    'no-multiple-empty-lines': [1, {max: 1, maxEOF: 0}],
    'no-negated-in-lhs': 1,
    'no-new': 1,
    'no-new-func': 1,
    'no-new-object': 1,
    'no-new-require': 1,
    'no-new-symbol': 1,
    'no-new-wrappers': 1,
    'no-obj-calls': 1,
    'no-octal': 1,
    'no-octal-escape': 1,
    'no-path-concat': 1,
    'no-proto': 1,
    'no-redeclare': 1,
    'no-regex-spaces': 1,
    'no-return-assign': [1, 'except-parens'],
    'no-self-assign': 1,
    'no-self-compare': 1,
    'no-sequences': 1,
    'no-shadow-restricted-names': 1,
    'no-sparse-arrays': 1,
    'no-tabs': 1,
    'no-template-curly-in-string': 1,
    'no-this-before-super': 1,
    'no-throw-literal': 1,
    'no-trailing-spaces': 1,
    'no-undef': 1,
    'no-undef-init': 1,
    'no-unexpected-multiline': 1,
    'no-unmodified-loop-condition': 1,
    'no-unneeded-ternary': [1, {defaultAssignment: false}],
    'no-unreachable': 1,
    'no-unsafe-finally': 1,
    'no-unsafe-negation': 1,
    'no-unused-expressions': [1, {allowShortCircuit: true, allowTernary: true}],
    'no-unused-vars': [1, {vars: 'all', args: 'none', ignoreRestSiblings: true}],
    'no-use-before-define': [1, {functions: false, classes: false, variables: false}],
    'no-useless-call': 1,
    'no-useless-computed-key': 1,
    'no-useless-constructor': 1,
    'no-useless-escape': 1,
    'no-useless-rename': 1,
    'no-useless-return': 1,
    'no-whitespace-before-property': 1,
    'no-with': 1,
    'object-property-newline': [1, {allowMultiplePropertiesPerLine: true}],
    'one-var': [1, {initialized: 'never'}],
    'operator-linebreak': [1, 'after', {overrides: {'?': 'before', ':': 'before'}}],
    'prefer-promise-reject-errors': 1,
    quotes: [1, 'single', {avoidEscape: true, allowTemplateLiterals: true}],
    'rest-spread-spacing': [1, 'never'],
    semi: [1, 'never'],
    'semi-spacing': [1, {before: false, after: true}],
    'space-before-blocks': [1, 'always'],
    'space-in-parens': [1, 'never'],
    'space-infix-ops': 1,
    'space-unary-ops': [1, {words: true, nonwords: false}],
    'spaced-comment': [
      1,
      'always',
      {
        line: {markers: ['*package', '!', '/', ',']},
        block: {
          balanced: true,
          markers: ['*package', '!', ',', ':', '::', 'flow-include'],
          exceptions: ['*']
        }
      }
    ],
    'symbol-description': 1,
    'template-curly-spacing': [1, 'never'],
    'template-tag-spacing': [1, 'never'],
    'unicode-bom': [1, 'never'],
    'use-isnan': 1,
    'valid-typeof': [1, {requireStringLiterals: true}],
    'wrap-iife': [1, 'any', {functionPrototypeMethods: true}],
    'yield-star-spacing': [1, 'both'],
    yoda: [1, 'never'],

    'import/export': 1,
    'import/first': 1,
    'import/no-duplicates': 1,
    'import/no-webpack-loader-syntax': 1,

    'node/no-deprecated-api': 1,
    'node/process-exit-as-throw': 1,

    'promise/param-names': 1,

    'react/no-did-update-set-state': 1,
    'react/no-unknown-property': 1,
    'react/prop-types': [1, {skipUndeclared: true}],

    'react/react-in-jsx-scope': 1,

    'react/jsx-no-bind': 0,
    'react/no-string-refs': 0,
    'react/display-name': 0,
    'react/no-unused-prop-types': 0,
    'padded-blocks': 0,
    'jsx-quotes': 0,
    'space-before-function-paren': 0,
    'no-return-await': 0,
    indent: 'off'
  }
}
