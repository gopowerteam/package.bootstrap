import path from "node:path";
import prettier from "prettier";

const prettierOptions: prettier.Options = {
  // 一行最多 80 字符
  printWidth: 80,
  // 使用 2 个空格缩进
  tabWidth: 2,
  // 不使用缩进符，而使用空格
  useTabs: false,
  // 行尾需要有分号
  semi: false,
  // 使用单引号
  singleQuote: true,
  // 对象的 key 仅在必要时用引号
  quoteProps: "as-needed",
  // jsx 不使用单引号，而使用双引号
  jsxSingleQuote: false,
  // 末尾需要有逗号
  trailingComma: "all",
  // 大括号内的首尾需要空格
  bracketSpacing: true,
  // jsx 标签的反尖括号需要换行
  bracketSameLine: true,
  // 箭头函数，只有一个参数的时候，也需要括号
  arrowParens: "always",
};

const config = {
  path: {
    project: "",
    template: "",
    cli: "",
  },
  prettier: prettierOptions,
};

export function setupPath() {
  const projectPath = path.resolve(process.cwd());
  const templatePath = path.resolve(__dirname, "..", "templates");
  const cliPath = path.resolve(__dirname, "..");

  config.path.project = projectPath;
  config.path.template = templatePath;
  config.path.cli = cliPath;
}

export async function setupPrettier() {
  const configFile = await prettier.resolveConfigFile();

  if (!configFile) {
    return;
  }

  return prettier.resolveConfig(configFile).then((prettierOptions) => {
    if (prettierOptions) {
      config.prettier = prettierOptions;
    }
  });
}

export async function setupConfig() {
  await setupPath();
  await setupPrettier();
}

export default config;
