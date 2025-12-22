import nextPlugin from "@next/eslint-plugin-next";
import reactPlugin from "eslint-plugin-react";

export default [
  {
    plugins: {
      "@next/next": nextPlugin,
      react: reactPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      ...reactPlugin.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
    },
    settings: { react: { version: "detect" } },
  },
  { ignores: [".next/*", "node_modules/*"] },
];
