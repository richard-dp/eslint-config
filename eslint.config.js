import eslintJs from "@eslint/js";
import eslintTs from "typescript-eslint";
import pluginStylistic from "@stylistic/eslint-plugin";

export function deletePluginReferences(eslintConfig, pluginName) {
  const modifiedConfig = eslintConfig;
  for (const item of modifiedConfig) {
    if ("plugins" in item) {
      if (pluginName in item.plugins) {
        delete item.plugins[pluginName];
      }
    }
  }
  return modifiedConfig;
}

export const plugins = { plugins: { "@stylistic": pluginStylistic } };

export const ignores = {
  ignores: [
    "node_modules/**/*",
    ".nuxt/**/*",
    ".output/**/*",
  ],
};

export const languageOptions = {
  languageOptions: {
    globals: {
      browser: true,
      es2016: true,
      node: true,
    },
    parserOptions: {
      ecmaVersion: "latest",
      parser: "@typescript-eslint/parser",
      sourceType: "module",
    },
  },
};

export const baseOptions = [ languageOptions, ignores ];

export const jsRules = { rules: { eqeqeq: [ "error", "allow-null" ] } };

export const jsConfig = [ eslintJs.configs.recommended, jsRules ];


export const tsRules = { rules: { "@typescript-eslint/no-namespace": "off" } };

export const tsConfig = [ ...eslintTs.config(...jsConfig, ...eslintTs.configs.recommended), tsRules ];


export const stylisticRules = {
  rules: {
    "@stylistic/comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "never",
        exports: "always-multiline",
        functions: "never",
      },
    ],
    "@stylistic/array-bracket-newline": [
      "error",
      {
        minItems: 3,
        multiline: true,
      },
    ],
    "@stylistic/array-bracket-spacing": [
      "error",
      "always",
      {
        singleValue: true,
        objectsInArrays: true,
        arraysInArrays: true,
      },
    ],
    "@stylistic/array-element-newline": [
      "error",
      {
        minItems: 3,
        multiline: true,
      },
    ],
    "@stylistic/arrow-parens": [ "error", "always" ],
    "@stylistic/arrow-spacing": "error",
    "@stylistic/block-spacing": "error",
    "@stylistic/brace-style": "error",
    "@stylistic/comma-spacing": [
      "error",
      {
        before: false,
        after: true,
      },
    ],
    "@stylistic/comma-style": [ "error", "last" ],
    "@stylistic/computed-property-spacing": [ "error", "never" ],
    "@stylistic/dot-location": [ "error", "object" ],
    "@stylistic/eol-last": [ "error", "always" ],
    "@stylistic/function-call-argument-newline": [ "error", "consistent" ],
    "@stylistic/function-call-spacing": [ "error", "never" ],
    "@stylistic/function-paren-newline": [ "error", { minItems: 3 } ],
    "@stylistic/generator-star-spacing": [
      "error",
      {
        before: false,
        after: true,
      },
    ],
    "@stylistic/implicit-arrow-linebreak": [ "error", "beside" ],
    "@stylistic/indent": [
      "error",
      2,
      { SwitchCase: 1 },
    ],
    "@stylistic/indent-binary-ops": [ "error", 2 ],
    "@stylistic/key-spacing": [
      "error",
      {
        beforeColon: false,
        afterColon: true,
        mode: "strict",
      },
    ],
    "@stylistic/keyword-spacing": [
      "error",
      {
        before: true,
        after: true,
      },
    ],
    "@stylistic/linebreak-style": [ "error", "unix" ],
    "@stylistic/lines-between-class-members": [
      "error",
      {
        enforce: [
          {
            blankLine: "always",
            prev: "*",
            next: "method",
          },
          {
            blankLine: "always",
            prev: "method",
            next: "*",
          },
          {
            blankLine: "always",
            prev: "method",
            next: "field",
          },
          {
            blankLine: "always",
            prev: "field",
            next: "method",
          },
          {
            blankLine: "never",
            prev: "field",
            next: "field",
          },
        ],
      },
    ],
    "@stylistic/member-delimiter-style": [
      "error",
      {
        multiline: {
          delimiter: "semi",
          requireLast: true,
        },
        singleline: {
          delimiter: "semi",
          requireLast: true,
        },
      },
    ],
    "@stylistic/multiline-ternary": [ "error", "never" ],
    "@stylistic/new-parens": [ "error", "always" ],
    "@stylistic/newline-per-chained-call": [ "error", { ignoreChainWithDepth: 2 } ],
    "@stylistic/no-confusing-arrow": [ "error", { onlyOneSimpleParam: true } ],
    "@stylistic/no-extra-semi": "error",
    "@stylistic/no-floating-decimal": "error",
    "@stylistic/no-mixed-spaces-and-tabs": "error",
    "@stylistic/no-multi-spaces": "error",
    "@stylistic/no-multiple-empty-lines": [
      "error",
      {
        max: 2,
        maxBOF: 0,
      },
    ],
    "@stylistic/no-tabs": "error",
    "@stylistic/no-trailing-spaces": "error",
    "@stylistic/no-whitespace-before-property": "error",
    "@stylistic/object-curly-newline": [
      "error",
      {
        ObjectExpression: {
          minProperties: 3,
          multiline: true,
        },
        ObjectPattern: {
          minProperties: 3,
          multiline: true,
        },
      },
    ],
    "@stylistic/object-curly-spacing": [ "error", "always" ],
    "@stylistic/object-property-newline": "error",
    "@stylistic/operator-linebreak": [ "error", "before" ],
    "@stylistic/padded-blocks": [ "error", "never" ],
    "@stylistic/quote-props": [
      "error",
      "as-needed",
      { keywords: true },
    ],
    "@stylistic/quotes": [
      "error",
      "double",
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    "@stylistic/rest-spread-spacing": [ "error", "never" ],
    "@stylistic/semi": [ "error", "always" ],
    "@stylistic/semi-spacing": [
      "error",
      {
        before: false,
        after: true,
      },
    ],
    "@stylistic/semi-style": [ "error", "last" ],
    "@stylistic/space-before-blocks": "error",
    "@stylistic/space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always",
      },
    ],
    "@stylistic/space-in-parens": [ "error", "never" ],
    "@stylistic/space-infix-ops": "error",
    "@stylistic/space-unary-ops": "error",
    "@stylistic/switch-colon-spacing": [
      "error",
      {
        after: true,
        before: false,
      },
    ],
    "@stylistic/template-curly-spacing": [ "error", "never" ],
    "@stylistic/template-tag-spacing": "error",
    "@stylistic/type-annotation-spacing": "error",
    "@stylistic/type-generic-spacing": [ "error" ],
    "@stylistic/type-named-tuple-spacing": [ "error" ],
    "@stylistic/wrap-iife": [ "error", "inside" ],
    "@stylistic/wrap-regex": "error",
    "@stylistic/yield-star-spacing": [ "error", "after" ],
  },
};


export const js = [
  ...jsConfig,
  plugins,
  stylisticRules,
];

export const ts = [
  ...tsConfig,
  ...baseOptions,
  plugins,
  stylisticRules,
];

export default ts;
