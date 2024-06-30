import jsdoc from 'eslint-plugin-jsdoc';

export default [
  {
    files: ["**/*.js"], // Adjust this pattern as needed
    languageOptions: {
      globals: {
        // Node.js globals
        __dirname: "readonly",
        Buffer: "readonly",
        clearImmediate: "readonly",
        clearInterval: "readonly",
        clearTimeout: "readonly",
        console: "readonly",
        exports: "readonly",
        global: "readonly",
        module: "readonly",
        process: "readonly",
        require: "readonly",
        setImmediate: "readonly",
        setInterval: "readonly",
        setTimeout: "readonly",
      },
      ecmaVersion: 2021, // ECMAScript 2021
      sourceType: "script", // Use 'script' for CommonJS
    },
    plugins: {
      jsdoc,
    },    
    rules: {
      "array-callback-return": "warn",
      "arrow-spacing": ["error", { "before": true, "after": true }],
      "block-scoped-var": "warn",
      "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
      "consistent-return": ["warn", { "treatUndefinedAsUnspecified": false }],
      "curly": ["error", "multi-line"],
      "default-case": "error",
      "eqeqeq": "error",
      "no-dupe-args": "error",
      "no-duplicate-imports": "error",
      "no-else-return": "warn",
      "no-eval": "error",
      "no-implicit-globals": "error",
      "no-implied-eval": "error",
      "no-inner-declarations": "error",
      "no-self-compare": "warn",
      "no-template-curly-in-string": "warn",
      "no-undef": "error",
      "no-unused-vars": "warn",
      "no-use-before-define": ["error", { "functions": false, "classes": true, "variables": true }],
      "no-useless-assignment": "warn",
      "no-var": "error",
      "prefer-const": "warn",
      "jsdoc/check-alignment": "warn",
      "jsdoc/check-indentation": "warn",
      "jsdoc/check-param-names": "warn",
      "jsdoc/check-tag-names": "warn",
      "jsdoc/check-types": "warn",
      "jsdoc/require-jsdoc": "warn",
      "jsdoc/require-param": "warn",
      "jsdoc/require-param-description": "warn",
      "jsdoc/require-param-type": "warn",
      "jsdoc/require-returns": "warn",
      "jsdoc/require-returns-description": "warn",
      "jsdoc/require-returns-type": "warn",
    },
  },
];