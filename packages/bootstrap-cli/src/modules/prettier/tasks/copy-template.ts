import { copyTemplate } from "~/shared/template";

export default function writeTemplateFiles(response: Record<string, any>) {
  if (!response["prettier-pug"] && !response["prettier-cli"]) {
    copyTemplate("prettier", [
      {
        input: "prettierrc-base.js",
        output: ".prettierrc.js",
      },
    ]);
  }

  if (response["prettier-pug"]) {
    copyTemplate("prettier", [
      ".prettierrc.js",
      {
        input: "prettierrc-base.js",
        output: ".prettier/prettierrc-base.js",
      },
      {
        input: "prettierrc-pug.js",
        output: ".prettier/prettierrc-pug.js",
      },
    ]);
  }

  if (response["prettier-cli"]) {
    copyTemplate("prettier", [
      {
        input: "prettierrc-cli.js",
        output: ".prettier/prettierrc-cli.js",
      },
    ]);
  }
}
