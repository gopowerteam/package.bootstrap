import fs from "node:fs";
import path from "node:path";
import config from "~/config";
import { writeFile } from "./file";

export function copyTemplate(module: string, files: string[], dest?: string) {
  files.forEach((file) => {
    const content = fs.readFileSync(
      path.resolve(config.path.template, module, file)
    );

    writeFile(
      path.resolve(
        config.path.project,
        ...([dest, file].filter(Boolean) as string[])
      ),
      content
    );
  });
}
