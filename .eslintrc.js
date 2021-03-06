module.exports = {
    rules: {
        'no-console': 'off',
        "indent": 0
    },
    "parserOptions": {
        "parser": "babel-eslint",
        "ecmaVersion": 6,
        // "esversion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "experimentalObjectRestSpread": true
        }
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/recommended"
    ],
    "plugins": ["vue"],
    "settings": {
        "html/html-extensions": [".html"]
    },
    "env": {
        "browser": true,
        "node": true,
        "commonjs": true,
        "es6": true
    }
};