import prompts from "prompts";
import install from "./tasks/install";

export default (response: prompts.Answers<any>) => {
  return async () => {
    if (response["package-installer"]) {
      install(response);
    }
  };
};
