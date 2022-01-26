module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        camelcase: 0,
        quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
        indent: ['error', 4],
        'jsx-quotes': ['error', 'prefer-single'],
        'import/no-extraneous-dependencies': 'off',
        'react/function-component-definition': [
            2,
            {
                namedComponents: 'arrow-function',
                unnamedComponents: 'arrow-function',
            },
        ],
    },
};
