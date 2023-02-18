import path from "node:path";
import fs from "node:fs";
import config from "~/config";
import { writeFile } from "./file";

function getPackageObject(targetPath: string) {
  const packageContent = fs.readFileSync(targetPath, { encoding: "utf-8" });
  const packageJSON = JSON.parse(packageContent);

  return packageJSON;
}

function injectScripts(packageObject: any, content: Record<string, string>) {
  const injectObject = packageObject["scripts"] || {};

  Object.entries(content).forEach(([key, value]) => {
    injectObject[key] = value;
  });

  packageObject.scripts = injectObject;
}

function injectDependencies(
  packageObject: any,
  content: Record<string, string>,
  isDev?: boolean
) {
  const injectKey = isDev ? "devDependencies" : "dependencies";
  const injectObject = packageObject[injectKey] || {};

  Object.entries(content).forEach(([key, value]) => {
    injectObject[key] = value;
  });

  packageObject[injectKey] = injectObject;
}

export function injectPackage(module: string, file: string) {
  const templatePath = path.resolve(config.path.template, module, file);
  const packagePath = path.resolve(config.path.project, "package.json");

  const targetObject = getPackageObject(templatePath);
  const packageObject = getPackageObject(packagePath);

  Object.entries(targetObject).forEach(([key, content]) => {
    switch (key) {
      case "scripts":
        injectScripts(packageObject, content as Record<string, string>);
        break;
      case "dependencies":
      case "devDependencies":
        injectDependencies(
          packageObject,
          content as Record<string, string>,
          key === "devDependencies"
        );
        break;
      default:
        packageObject[key] = content;
        break;
    }
  });

  writeFile(packagePath, JSON.stringify(packageObject));
}
