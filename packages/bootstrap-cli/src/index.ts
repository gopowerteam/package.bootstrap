#!/usr/bin/env node

import supportModules from "./modules";
import { createQuestion } from "./shared/question";
import { ITaskModule } from "./interfaces";
import { setupConfig } from "./config";
import { moduleQuestion } from "./core/questions";
import husky from "./modules/husky";
import installer from "./modules/installer";
import stylelint from "./modules/stylelint";
import lintstaged from "./modules/lintstaged";

// 公共模块
const commonModules = [lintstaged, stylelint, husky, installer];

/**
 * 获取需要执行的模块
 * @returns
 */
async function getExecModules() {
  const response = await createQuestion(moduleQuestion);

  return supportModules.filter((module) =>
    response?.modules?.includes(module.name)
  );
}

/**
 * 获取模块相关问题
 * @param modules
 * @returns
 */
async function getModuleQuestions(modules: ITaskModule[]) {
  const questions = modules.flatMap((module) => module.questions());

  return createQuestion(questions);
}

/**
 * 获取模块相关问题
 * @param modules
 * @returns
 */
async function getCommonModuleQuestions(
  modules: ITaskModule[],
  response: Record<string, any>
) {
  const questions = modules.flatMap((module) => module.questions(response));

  return createQuestion(questions);
}

/**
 * 获取相关任务
 * @param modules
 * @param response
 * @returns
 */
async function getModuleTasks(
  modules: ITaskModule[],
  response: Record<string, any>
) {
  return modules.map((module) => module.resolver(response));
}

/**
 * 启动逻辑
 */
async function bootstrap() {
  // 获取基础配置
  await setupConfig();

  // 选择模块
  const taskModules = await getExecModules();

  const taskModuleResponse = await getModuleQuestions(taskModules);

  const commonModuleResponse = await getCommonModuleQuestions(
    commonModules,
    taskModuleResponse
  );

  const tasks = await getModuleTasks([...taskModules, ...commonModules], {
    ...taskModules
      .map((x) => x.name)
      .reduce<Record<string, boolean>>((r, key) => ((r[key] = true), r), {}),
    ...taskModuleResponse,
    ...commonModuleResponse,
  });

  tasks.forEach((task) => task());
}

bootstrap();
