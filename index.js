module.exports = {
    extends: [
        'eslint:recommended',
        'prettier',
        'plugin:import/recommended'
    ],
    plugins: ['prettier'],
    rules: {
        camelcase: 'error',
        'comma-spacing': 'error',
        eqeqeq: 'error',
        'func-call-spacing': 'error',
        'new-parens': 'error',
        'no-array-constructor': 'error',
        'no-fallthrough': 'error',
        'no-mixed-spaces-and-tabs': 'error',
        'no-multi-assign': 'error',
        'no-nested-ternary': 'error',
        'no-trailing-spaces': 'error',
        'no-whitespace-before-property': 'error',
        'quote-props': ['error', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],
        'prefer-const': 'error',
        'require-await': 'error',
        semi: 'error',
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always',
            },
        ],
        'space-before-blocks': 'error',
        'spaced-comment': ['error', 'always'],
    },
};
