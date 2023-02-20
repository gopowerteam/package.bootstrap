import prompts from "prompts";
import copyTemplateTask from "./tasks/copy-template";
import injectPackageTask from "./tasks/inject-package";
import createFolder from "./tasks/create-folder";
export default (response: prompts.Answers<any>) => {
  return async () => {
    await createFolder(response);

    copyTemplateTask(response);
    injectPackageTask(response);
  };
};
