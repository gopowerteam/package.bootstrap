import supportModules from "../modules";
import prompts from "prompts";

export const moduleQuestion: prompts.PromptObject = {
  type: "multiselect",
  name: "modules",
  message: "请选择需要安装的模块",
  choices: supportModules.map((module) => ({
    title: module.name,
    value: module.name,
    selected: true,
  })),
  max: 2,
  hint: "- Space to select. Return to submit",
  instructions: false,
};
