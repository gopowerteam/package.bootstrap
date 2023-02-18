import { copyTemplate } from "~/shared/template";

export default function writeTemplateFiles() {
  copyTemplate("editorconfig", [".editorconfig"]);
}
