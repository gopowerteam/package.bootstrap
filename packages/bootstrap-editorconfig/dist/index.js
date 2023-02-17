"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  task: () => task,
  test: () => test
});
module.exports = __toCommonJS(src_exports);
var import_shared = require("shared");
function test() {
}
function copyTemplateFile() {
  import_shared.template.copy(".editorconfig");
}
var task = new import_shared.Task("editorconfig", {
  questions: [
    {
      type: "multiselect",
      name: "modules",
      message: "\u8BF7\u9009\u62E9\u9700\u8981\u5B89\u88C5\u7684\u6A21\u5757",
      choices: [
        { title: "editorconfig123", value: "editorconfig", selected: true }
      ],
      max: 2,
      hint: "- Space to select. Return to submit"
    }
  ],
  resolve: (response) => {
    return async () => {
      copyTemplateFile();
    };
  }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  task,
  test
});
