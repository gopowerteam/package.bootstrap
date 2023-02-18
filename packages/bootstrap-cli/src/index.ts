#!/usr/bin/env node

import supportModules from "./modules";
import { createQuestion } from "./shared/question";
import { ITaskModule } from "./interfaces";
import { setupConfig } from "./config";

async function getExecModules() {
  const response = await createQuestion({
    type: "multiselect",
    name: "modules",
    message: "请选择需要安装的模块",
    choices: supportModules.map((module) => ({
      title: module.name,
      value: module.name,
      selected: true,
    })),
    max: 2,
    hint: "- Space to select. Return to submit",
    instructions: false,
  });

  return supportModules.filter((module) =>
    response?.modules?.includes(module.name)
  );
}

async function getModuleQuestions(modules: ITaskModule[]) {
  const questions = modules.flatMap((module) => module.questions);

  return createQuestion(questions);
}

async function getModuleTasks(
  modules: ITaskModule[],
  response: Record<string, any>
) {
  return modules.map((module) => module.resolver(response));
}

async function bootstrap() {
  // 获取基础配置
  await setupConfig();

  const modules = await getExecModules();
  const response = await getModuleQuestions(modules);
  const tasks = await getModuleTasks(modules, response);

  tasks.forEach((task) => task());
}

bootstrap();
