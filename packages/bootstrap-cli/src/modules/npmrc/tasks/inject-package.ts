import { injectPackage } from "~/shared/pcakage";

export default function injectPackageTask(response: Record<string, any>) {
  injectPackage("eslint", "inject-package.json");
}
