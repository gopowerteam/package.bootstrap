import { copyTemplate } from "~/shared/template";

export default function writeTemplateFiles(response: Record<string, any>) {
  copyTemplate("eslint", [{ input: ".eslintrc.js" }]);
}
