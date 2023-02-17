export const selectModules = {
  type: "multiselect",
  name: "modules",
  message: "请选择需要安装的模块",
  choices: [{ title: "editorconfig", value: "editorconfig", selected: true }],
  max: 2,
  hint: "- Space to select. Return to submit",
};
