import prompts from "prompts";
import copyTemplateTask from "./tasks/copy-template";
import createFolder from "./tasks/create-folder";
import injectPackageTask from "./tasks/inject-package";

export default (response: prompts.Answers<any>) => {
  return async () => {
    await createFolder(response);
    copyTemplateTask(response);
    injectPackageTask(response);
  };
};
