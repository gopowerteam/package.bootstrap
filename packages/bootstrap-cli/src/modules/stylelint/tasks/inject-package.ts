import { injectPackage } from "~/shared/pcakage";

export default function injectPackageTask(response: Record<string, any>) {
  if (response["stylelint"]) {
    injectPackage("stylelint", "inject-package.json");
  }
}
