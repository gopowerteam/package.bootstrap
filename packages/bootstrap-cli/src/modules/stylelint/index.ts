import { ITaskModule } from "~/interfaces";
import questions from "./questions";
import resolver from "./resolver";

const module: ITaskModule = {
  name: "eslint",
  questions,
  resolver,
};

export default module;
