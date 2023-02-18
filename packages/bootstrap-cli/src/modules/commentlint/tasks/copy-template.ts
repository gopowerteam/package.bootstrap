import { copyTemplate } from "~/shared/template";

export default function writeTemplateTask() {
  copyTemplate("commentlint", [".cz-config.js"]);
}
