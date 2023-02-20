import path from "node:path";
import fs from "node:fs";
import config from "~/config";

export default function createFolder(response: Record<string, string>) {
  if (response["commentlint"] || response["eslint"]) {
    const huskyPath = path.resolve(config.path.project, ".husky");
    const huskyUnderlinePath = path.resolve(huskyPath, "_");

    if (!fs.existsSync(huskyPath)) fs.mkdirSync(huskyPath);
    if (!fs.existsSync(huskyUnderlinePath)) fs.mkdirSync(huskyUnderlinePath);
  }
}
