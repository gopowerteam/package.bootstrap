#!/bin/env node

import process from "node:process";
import path from "node:path";
import fs from "node:fs";
import { program } from "commander";
import { question, Task } from "shared";
import { task as editorConfigTask } from "bootstrap-editorconfig";
import { executionAsyncId } from "node:async_hooks";

const supports = [editorConfigTask];

const packagePath = path.resolve(process.cwd(), "package.json");
const packageContent = fs.readFileSync(packagePath, { encoding: "utf-8" });
const packageJSON = JSON.parse(packageContent);

async function getExecTasks() {
  const response = await question.createQuestion({
    type: "multiselect",
    name: "modules",
    message: "请选择需要安装的模块",
    choices: supports.map((task) => ({
      title: task.name,
      value: task.name,
      selected: true,
    })),
    max: 2,
    hint: "- Space to select. Return to submit",
    instructions: false,
  });

  return supports.filter((task) => response?.modules?.includes(task.name));
}

async function getTaskQuestions(tasks: Task[]) {
  const questions = tasks.flatMap((task) => task.questions);

  return question.createQuestion(questions);
}

async function getTaskExections(tasks: Task[], response: Record<string, any>) {
  // tasks.map(task=>task.re)
  return tasks.map((task) => task.resolve(response));
}

async function bootstrap() {
  const tasks = await getExecTasks();
  const response = await getTaskQuestions(tasks);
  const exections = await getTaskExections(tasks, response);

  console.log(response);
  exections.forEach((exection) => exection());
}

bootstrap();
