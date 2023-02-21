import prompts from "prompts";

const questions: () => prompts.PromptObject[] = () => [
  {
    type: "toggle",
    name: "prettier-pug",
    message: "是否添加Pug Format支持",
    initial: true,
    active: "Yes",
    inactive: "No",
  },
  {
    type: (prev) => (prev ? "toggle" : null),
    name: "prettier-cli",
    message: "是否添加Prettier CLI支持",
    initial: true,
    active: "Yes",
    inactive: "No",
  },
];

export default questions;
