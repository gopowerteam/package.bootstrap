const { execSync } = require("node:child_process");
const path = require("node:path");

const filePath = path.resolve(
  __dirname,
  "..",
  "packages",
  "bootstrap-cli",
  "dist",
  "index.js"
);

const workPath = path.resolve(__dirname, "..", "apps", "playground");

execSync(
  `node ${filePath}`,
  { cwd: workPath, stdio: "inherit" },
  (error, stdout, stderr) => {
    if (error) throw error;
    console.log(stdout);
  }
);
