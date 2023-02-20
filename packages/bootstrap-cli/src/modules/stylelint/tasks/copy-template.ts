import { copyTemplate } from "~/shared/template";

export default function writeTemplateFiles(response: Record<string, any>) {
  if (response["stylelint"]) {
    copyTemplate("stylelint", [".stylelintignore", ".stylelintrc.js"]);
  }
}
