import fs from "node:fs";
import path, { parse } from "node:path";
import prettier from "prettier";
import config from "~/config";

function format(file: string, content: string) {
  let parser = "";

  switch (path.extname(file)) {
    case ".js":
    case ".ts":
      parser = "babel";
      break;
    case ".json":
      parser = "json";
      break;
  }

  if (parser) {
    return prettier.format(content, {
      parser,
      ...config.prettier,
    });
  } else {
    return content;
  }
}

export function writeFile(
  file: string,
  content: string | NodeJS.ArrayBufferView
) {
  fs.writeFileSync(file, format(file, content.toString().trim()), {
    encoding: "utf-8",
  });
}
