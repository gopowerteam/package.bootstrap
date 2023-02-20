import prompts from "prompts";

export interface ITaskModule {
  // 任务名称
  name: string;
  // 任务问题
  questions: (response?: Record<string, any>) => prompts.PromptObject[];
  // 任务解析
  resolver: (response: prompts.Answers<any>) => () => Promise<void>;
}
