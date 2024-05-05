import pluginJs from "@eslint/js";
import prettier from 'eslint-config-prettier';
import globals from "globals";
import tseslint from "typescript-eslint";


export default [
  {languageOptions: { globals: {...globals.browser, ...globals.node} }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...prettier.configs.recommended
  
];