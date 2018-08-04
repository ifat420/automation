module.exports = {
    rules: {
        'no-console': 'off',
        "parser": "babel-eslint"
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "experimentalObjectRestSpread": true
        }
    } 
};