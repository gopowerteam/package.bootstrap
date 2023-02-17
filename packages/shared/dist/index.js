"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Task: () => Task,
  add: () => add,
  logger: () => logger_exports,
  question: () => question_exports,
  template: () => template_exports
});
module.exports = __toCommonJS(src_exports);

// src/question.ts
var question_exports = {};
__export(question_exports, {
  createQuestion: () => createQuestion
});
var import_prompts = __toESM(require("prompts"));
function createQuestion(questions) {
  return (0, import_prompts.default)(questions, {
    onCancel: () => {
      throw new Error("\u274C operation cancelled");
    }
  });
}

// src/logger.ts
var logger_exports = {};
__export(logger_exports, {
  info: () => info
});
function info() {
  console.log("123");
}

// src/template.ts
var template_exports = {};
__export(template_exports, {
  copy: () => copy
});
function copy(templatePath, ...files) {
  console.log(__dirname);
}

// src/index.ts
function add(a, b) {
  return a + b;
}
var Task = class {
  constructor(name, options) {
    this.name = name;
    this.questions = options.questions;
    this.resolve = options.resolve;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Task,
  add,
  logger,
  question,
  template
});
