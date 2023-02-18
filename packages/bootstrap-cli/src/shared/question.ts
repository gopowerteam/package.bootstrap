import prompts from "prompts";

export function createQuestion(
  questions: prompts.PromptObject<string> | prompts.PromptObject<string>[]
) {
  return prompts(questions, {
    onCancel: () => {
      throw new Error("❌" + " operation cancelled");
    },
  });
}
