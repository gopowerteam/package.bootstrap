import config from "~/config";
import { getPackageManager } from "~/shared/pcakage";

const { execSync } = require("node:child_process");
const path = require("node:path");

export default (response: Record<string, any>) => {
  const installer = getPackageManager() || response["package-installer"];

  const commander = (() => {
    switch (installer) {
      case "pnpm":
        return "pnpm install";
      case "yarn":
        return "yarn";
      case "npm":
        return "npm install";
    }
  })();

  execSync(
    commander,
    { cwd: config.path.project, stdio: "inherit" },
    (error: any, stdout: any) => {
      if (error) throw error;
      console.log(stdout);
    }
  );
};
