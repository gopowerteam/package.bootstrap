import prompts from "prompts";

export function add(a: number, b: number) {
  return a + b;
}

interface TaskOptions {
  questions: prompts.PromptObject[];
  resolve: (response: Record<string, any>) => () => Promise<void>;
}

export class Task {
  // 任务名称
  name: string;
  // 任务问题
  questions: prompts.PromptObject[];

  resolve: (response: Record<string, any>) => () => Promise<void>;

  constructor(name: string, options: TaskOptions) {
    this.name = name;
    this.questions = options.questions;
    this.resolve = options.resolve;
  }
}

export * as question from "./question";
export * as logger from "./logger";
export * as template from "./template";
