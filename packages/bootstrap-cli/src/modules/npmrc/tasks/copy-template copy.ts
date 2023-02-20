import { copyTemplate } from "~/shared/template";

export default function writeTemplateFiles(response: Record<string, any>) {
  copyTemplate("eslint", [{ input: ".eslintrc.js" }]);
  console.log(response["lint-staged"]);
  if (response["lint-staged"]) {
    copyTemplate("eslint", [
      {
        input: ".lintstagedrc.js.hbs",
        output: ".lintstagedrc.js",
        compileParams: response,
      },
    ]);
  }
}
