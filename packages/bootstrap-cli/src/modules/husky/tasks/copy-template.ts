import { copyTemplate } from "~/shared/template";

export default function writeTemplateFiles(response: Record<string, any>) {
  if (response["commentlint"] || response["eslint"]) {
    copyTemplate("husky", [
      {
        input: "_/.gitignore",
        output: ".husky/_/.gitignore",
      },
      {
        input: "_/husky.sh",
        output: ".husky/_/.husky.sh",
      },
    ]);
  }

  if (response["commentlint"]) {
    copyTemplate("husky", [
      {
        input: "commit-msg",
        output: ".husky/commit-msg",
      },
    ]);
  }

  if (response["lint-staged"]) {
    copyTemplate("husky", [
      {
        input: "pre-commit",
        output: ".husky/pre-commit",
      },
    ]);
  }
}
