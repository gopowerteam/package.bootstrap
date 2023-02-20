import { injectPackage } from "~/shared/pcakage";

export default function injectPackageTask(response: Record<string, any>) {
  if (response["commentlint"] || response["eslint"]) {
    injectPackage("husky", "inject-package.json");
  }
}
