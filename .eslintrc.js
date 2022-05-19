module.exports = {
    env: {
        es6: true,
        node: true,
        jest: true,
        browser: true,
        jasmine: true
    },
    parserOptions: {
        sourceType: 'module'
    },
    extends: ['plugin:prettier/recommended', 'plugin:cypress/recommended'],
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': 'error'
    }
};
