import { injectPackage } from "~/shared/pcakage";

export default function injectPackageTask(response: Record<string, any>) {
  if (response["prettier"]) {
    injectPackage("prettier", "inject-package.json.hbs", response);
  }
}
