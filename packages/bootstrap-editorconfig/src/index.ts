import { Task, template } from "shared";

export function test() {
  // return add(10, 29);
}

function copyTemplateFile() {
  template.copy(".editorconfig");
}

export const task = new Task("editorconfig", {
  questions: [
    {
      type: "multiselect",
      name: "modules",
      message: "请选择需要安装的模块",
      choices: [
        { title: "editorconfig123", value: "editorconfig", selected: true },
      ],
      max: 2,
      hint: "- Space to select. Return to submit",
    },
  ],
  resolve: (response) => {
    return async () => {
      copyTemplateFile();
    };
  },
});
// export const questions = createQuestion([{type:}]);
