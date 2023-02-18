import prompts from "prompts";
import copyTemplateTask from "./tasks/copy-template";
import injectPackageTask from "./tasks/inject-package";

export default (response: prompts.Answers<any>) => {
  return async () => {
    copyTemplateTask();
    injectPackageTask();
  };
};
