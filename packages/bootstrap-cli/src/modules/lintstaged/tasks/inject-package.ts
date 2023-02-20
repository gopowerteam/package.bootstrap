import { injectPackage } from "~/shared/pcakage";

export default function injectPackageTask(response: Record<string, any>) {
  injectPackage("lintstaged", "inject-package.json");
}
