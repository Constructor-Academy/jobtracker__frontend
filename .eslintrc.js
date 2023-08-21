module.exports = {
    root: true,
    settings: {
        react: {
            'version': 'detect'
        },
        linkComponents: ['PropulsionFooterLogoContainer']       // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
    },
    parserOptions: {
        'ecmaVersion': 2018,
        'sourceType': 'module',
        'ecmaFeatures': {
            'jsx': true
        }
    },
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/all'
    ],
    // required to lint *.jsx files
    plugins: [
        'react',
        'import'
    ],
    // add your custom rules here
    rules: {
        'no-var': 'error',
        'indent': 'error',
        'react/jsx-no-literals': 'off',
        'react/jsx-no-bind': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'react/function-component-definition': ['error', {
            'namedComponents': 'arrow-function',
            'unnamedComponents': 'arrow-function'
        }],
        'react/jsx-props-no-spreading': 'off',
        'react/prop-types': 'off',
        'react/jsx-max-depth': ['error', {'max': 5}],
        'react/button-has-type': 'off',
        'react/jsx-child-element-spacing': 'off',
        'react/jsx-max-props-per-line': 'off',
        'react/jsx-curly-newline': ['error', {'multiline': 'require'}],
        'semi': [2, 'never'],
        'quotes': ['error', 'single', {'allowTemplateLiterals': true}],
        'object-curly-spacing': ['error', 'never'],
        'react/jsx-pascal-case': 'off',
        'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
        "import/order": ["error",
            {
                'groups': [
                    ['builtin', 'external'],
                ],
                'alphabetize': {
                    order: 'asc',
                    caseInsensitive: true
                },
                'newlines-between': 'always'
            },
        ]
    }
}
