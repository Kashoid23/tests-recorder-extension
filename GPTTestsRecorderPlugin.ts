const { saveAs } = require('file-saver');

export class GPTTestsRecorderPlugin {
  name: string;

  constructor(name) {
    this.name = name;
  }

  async stringify(recording) {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await fetch('https://gpt-tests-recorder.onrender.com/v1/tests', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            plugin: this.name,
            recording: recording,
          }),
        });

        const response = await result.json();

        if (!result.ok) {
          throw new Error(response['error'] || 'Error exporting tests. Please try again later.');
        }

        saveAs(new File([response['content']], 'test.example.txt', { type: 'text/plain' }));

        // Return a null to prevent the default save as dialog
        resolve(null);
      } catch (error) {
        saveAs(new File([JSON.stringify(error['message'], null, 2)], 'test.error.txt', { type: 'text/plain' }));

        // Return a null to prevent the default save as dialog
        reject(null);
      }
    });
  }

  async stringifyStep(step) {
    return JSON.stringify(step);
  }
}
