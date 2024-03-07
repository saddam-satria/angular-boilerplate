module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb',
        'eslint:recommended',
        'prettier',
        'plugin:testing-library/dom',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', 'react-hooks', 'testing-library', "@typescript-eslint"],
    rules: {
        'arrow-body-style': 'off',
        'testing-library/no-debugging-utils': 'warn',
        'testing-library/no-dom-import': 'off',
        'comma-dangle': ['off', 'never'],
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-noninteractive-element-interactions': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/label-has-associated-control': 'off',
        'no-console': 'off',
        'no-duplicate-imports': 'warn',
        'no-unused-vars': 'warn',
        'import/order': [
            'warn',
            {
                alphabetize: {
                    caseInsensitive: true,
                    order: 'asc',
                },
                groups: [
                    'builtin',
                    'external',
                    'index',
                    'sibling',
                    'parent',
                    'internal',
                ],
            },
        ],
        'jsx-quotes': ['warn', 'prefer-double'],
        'object-curly-spacing': ['warn', 'always'],
        'import/prefer-default-export': 'off',
        'no-underscore-dangle': 'off',
        'default-param-last': 'off',
        radix: 'off',
        "import/extensions": "off",
        "import/no-unresolved": "off",
        "no-param-reassign": "off",
    },
};