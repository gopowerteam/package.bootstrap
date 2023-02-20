import { copyTemplate } from "~/shared/template";

export default function writeTemplateFiles(response: Record<string, any>) {
  if (response["lintstaged"]) {
    copyTemplate("lintstaged", [
      {
        input: ".lintstagedrc.js.hbs",
        output: ".lintstagedrc.js",
        compileParams: response,
      },
    ]);
  }
}
