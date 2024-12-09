module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "standard-with-typescript",
    "plugin:react/recommended"
    // "google"
  ],
  "overrides": [
    {
      "env": {
        "node": true
      },
      "files": [
        ".eslintrc.{js,cjs}"
      ],
      "parserOptions": {
        // "sourceType": "script",
        "project": ["./tsconfig.json"]
      }
    }
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "unused-imports",
  ],
  "rules": {
    'no-unused-vars': "warn",
    "unused-imports/no-unused-imports": "error",
    "space-before-function-paren": "off",
    "@typescript-eslint/space-before-function-paren": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/explicit-function-return-type": "warn",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/no-confusing-void-expression": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/strict-boolean-expressions": "off"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
