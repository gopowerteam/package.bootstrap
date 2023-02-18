import { injectPackage } from "~/shared/pcakage";

export default function injectPackageTask() {
  injectPackage("commentlint", "inject-package.json");
}
