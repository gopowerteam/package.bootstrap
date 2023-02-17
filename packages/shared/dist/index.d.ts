import prompts from 'prompts';

declare function createQuestion(questions: prompts.PromptObject<string> | prompts.PromptObject<string>[]): Promise<prompts.Answers<string>>;

declare const question_createQuestion: typeof createQuestion;
declare namespace question {
  export {
    question_createQuestion as createQuestion,
  };
}

declare function info(): void;

declare const logger_info: typeof info;
declare namespace logger {
  export {
    logger_info as info,
  };
}

declare function copy(templatePath: string, ...files: string[]): void;

declare const template_copy: typeof copy;
declare namespace template {
  export {
    template_copy as copy,
  };
}

declare function add(a: number, b: number): number;
interface TaskOptions {
    questions: prompts.PromptObject[];
    resolve: (response: Record<string, any>) => () => Promise<void>;
}
declare class Task {
    name: string;
    questions: prompts.PromptObject[];
    resolve: (response: Record<string, any>) => () => Promise<void>;
    constructor(name: string, options: TaskOptions);
}

export { Task, add, logger, question, template };
