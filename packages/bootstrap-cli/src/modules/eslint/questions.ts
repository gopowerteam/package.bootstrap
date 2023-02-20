import prompts from "prompts";

const questions: () => prompts.PromptObject[] = () => [
  {
    type: "toggle",
    name: "lintstaged",
    message: "是否安装LintStaged",
    initial: true,
    active: "Yes",
    inactive: "No",
  },
  {
    type: "toggle",
    name: "stylelint",
    message: "是否安装StyleLint",
    initial: true,
    active: "Yes",
    inactive: "No",
  },
];

export default questions;
