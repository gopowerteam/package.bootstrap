import type { Options } from "tsup";

export default <Options>{
  entryPoints: ["src/index.ts"],
  clean: true,
  platform: "node",
  bundle: true,
  target: "node16",
  format: ["cjs"],
  dts: true,
  noExternal: ["shared", "bootstrap-editorconfig", "tsconfig"],
};
