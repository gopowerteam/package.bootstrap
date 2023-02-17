var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/question.ts
var question_exports = {};
__export(question_exports, {
  createQuestion: () => createQuestion
});
import prompts from "prompts";
function createQuestion(questions) {
  return prompts(questions, {
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
export {
  Task,
  add,
  logger_exports as logger,
  question_exports as question,
  template_exports as template
};
