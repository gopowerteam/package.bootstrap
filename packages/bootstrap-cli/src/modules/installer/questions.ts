import prompts from "prompts";
import fs from "node:fs";
import config from "~/config";
import path from "node:path";
import { getPackageManager } from "~/shared/pcakage";

const questions: () => prompts.PromptObject[] = () => [
  {
    type: "confirm",
    name: "install",
    message: "是否立即安装依赖?",
    initial: true,
  },
  {
    type: (prev) =>
      prev == true && getPackageManager() === false ? "select" : null,
    name: "package-installer",
    message: "请选择使用的包管理工具",
    instructions: false,
    choices: [
      {
        title: "pnpm",
        value: "pnpm",
      },
      { title: "yarn", value: "yarn" },
      { title: "npm", value: "npm" },
    ],
    initial: 0,
  },
];

export default questions;
