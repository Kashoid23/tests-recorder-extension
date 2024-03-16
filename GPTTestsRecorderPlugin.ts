const OpenAI = require("openai");
const { saveAs } = require('file-saver');

export class GPTTestsRecorderPlugin {
  rules: string;
  model: string;

  constructor(rules, model = "gpt-3.5-turbo") {
    this.rules = rules;
    this.model = model;
  }

  async stringify(recording) {
    return new Promise(async (resolve, reject) => {
      try {
        const ALLOWED_STEP_TYPES = ['navigate', 'change', 'click', 'hover', 'doubleClick', 'keyDown', 'keyUp'];

        const openai = new OpenAI({
          apiKey: 'OPEN_AI_API_KEY',
          dangerouslyAllowBrowser: true,
        });

        // Reduce the number of step types. Remove offset properties.
        const filteredSteps = recording.steps.filter(step => ALLOWED_STEP_TYPES.includes(step.type)).map(step => {
          const { target, offsetY, offsetX, ...rest } = step;
          return rest;
        });

        const chatCompletion = await openai.chat.completions.create({
          messages: [
            {
              "role": "system",
              "content": [
                "Follow these instructions:",
                "Step 1: The user will provide a JSON recording from chrome.devtools.recorder.",
                "Step 2: Analyze the provided JSON and rewrite to working compact test example, without using xpath, according to rules:",
                this.rules,
                "Step 3: Return the sanitized string without any comments or explanations."
              ].join(" ")
            },
            {
              "role": "user",
              "content": JSON.stringify({ title: recording.title, steps: filteredSteps })
            }
          ],
          model: this.model
        });

        saveAs(new File([chatCompletion.choices[0].message.content], 'test.example.txt', { type: 'text/plain' }));

        // Return a null to prevent the default save as dialog
        resolve(null);
      } catch (error) {
        saveAs(new File([JSON.stringify(error, null, 2)], 'test.example.txt', { type: 'text/plain' }));

        // Return a null to prevent the default save as dialog
        reject(null);
      }
    });
  }

  async stringifyStep(step) {
    return JSON.stringify(step);
  }
}
