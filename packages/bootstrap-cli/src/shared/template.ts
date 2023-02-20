import fs from "node:fs";
import { type } from "node:os";
import path from "node:path";
import config from "~/config";
import { writeFile } from "./file";

export function copyTemplate(
  module: string,
  files: { input: string; output?: string; compileParams?: any }[] | string[]
) {
  files.forEach((file) => {
    const input = typeof file === "string" ? file : file.input;
    const output =
      typeof file === "string" ? file : file.output ? file.output : file.input;
    const compileParams =
      typeof file === "string" ? undefined : file.compileParams;

    const content = fs.readFileSync(
      path.resolve(config.path.template, module, input)
    );

    writeFile(
      path.resolve(config.path.project, output),
      content,
      compileParams
    );
  });
}
