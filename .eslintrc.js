// eslint-disable-next-line no-undef
module.exports = {
   "env": {
      "browser": true,
      "es2021": true
   },
   "extends": [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended"
   ],
   "parser": "@typescript-eslint/parser",
   "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module"
   },
   "plugins": [
      "@typescript-eslint"
   ],
   "rules": {
      "@typescript-eslint/triple-slash-reference": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "no-undef": "off"
   }
}
