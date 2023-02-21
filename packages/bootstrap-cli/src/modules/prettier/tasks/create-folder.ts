import path from "node:path";
import fs from "node:fs";
import config from "~/config";

export default function createFolder(response: Record<string, string>) {
  if (response["prettier-pug"] || response["prettier-cli"]) {
    const prettierPath = path.resolve(config.path.project, ".prettier");

    if (!fs.existsSync(prettierPath)) fs.mkdirSync(prettierPath);
  }
}
