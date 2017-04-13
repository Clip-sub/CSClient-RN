module.exports = {
  "env": {
    "es6": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "react-native"
  ],
  "settings": {
    "createClass": "createClass",
    "pragma": "React"
  },
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "react/jsx-uses-var": "error",
    "react/no-is-mounted": "error",
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
  }
};