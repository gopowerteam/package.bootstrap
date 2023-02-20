import fs from "node:fs";
import path from "node:path";
import prettier from "prettier";
import config from "~/config";
import Handlebars from "handlebars";

export function compile(
  content: string,
  compileParams: Record<string, any> = {}
) {
  const template = Handlebars.compile(content);
  return template(compileParams);
}

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
  content: string | NodeJS.ArrayBufferView,
  complieParams?: Record<string, any>
) {
  const text = [
    // complie content
    (text: string) => (complieParams ? compile(text, complieParams) : text),
    // format content
    (text: string) => format(file, text),
  ].reduce((r, action) => action(r), content.toString());

  fs.writeFileSync(file, text, {
    encoding: "utf-8",
  });
}
