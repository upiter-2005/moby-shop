module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "prettier",
    "plugin:react/jsx-runtime",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    quotes: ["error", "double"],
    "import/prefer-default-export": "off",
    "react/prop-types": "off",
    "no-param-reassign": ["error", { props: false }],
    "react/function-component-definition": [
      "error",
      {
        namedComponents: ["function-declaration", "arrow-function"],
        unnamedComponents: "arrow-function",
      },
    ],
    "no-plusplus": [2, { allowForLoopAfterthoughts: true }],
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" },
    ],
    "react/jsx-uses-react": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "react/no-array-index-key": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "react/react-in-jsx-scope": "off",
    "arrow-body-style": ["error", "as-needed"],
    "react/jsx-props-no-spreading": "off",
    "react/self-closing-comp": [
      "error",
      {
        component: false,
        html: false,
      },
    ],
  },
};
