// src/index.ts
import { Task, template } from "shared";
function test() {
}
function copyTemplateFile() {
  template.copy(".editorconfig");
}
var task = new Task("editorconfig", {
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
export {
  task,
  test
};
