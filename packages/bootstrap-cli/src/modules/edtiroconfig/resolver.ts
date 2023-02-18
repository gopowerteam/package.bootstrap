import prompts from "prompts";
import copyTemplateFiles from "./tasks/copy-template";

export default (response: prompts.Answers<any>) => {
  return async () => {
    copyTemplateFiles();
  };
};
