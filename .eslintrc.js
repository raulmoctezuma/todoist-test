module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "rules": {
        "no-trailing-spaces": ["warn", { "skipBlankLines": true }],
        "no-undef": "warn",
        "no-unused-vars": "warn"
    }
};
