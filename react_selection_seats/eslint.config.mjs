import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  {
    "react/prop-types": "off",
  },
  {
    languageOptions: { globals: globals.browser },
    plugins: {
      js: pluginJs.configs.recommended,
      react: pluginReact.configs.flat.recommended,
    },
  },
];
