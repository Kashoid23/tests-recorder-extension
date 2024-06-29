# GPT Tests Recorder Extension

Generate test examples with ChatGPT from DevTools Recorder

[Demo](https://www.youtube.com/watch?v=4Ki4YdZ5g50)

## Installation

Install the extension from the [Chrome Web Store](https://chromewebstore.google.com/detail/gpt-tests-recorder/cjjpdjgkongdhfhieamlefpamejpofdf)

## Usage

1. Open DevTools by right-clicking on any page and selecting "Inspect" or by pressing `Ctrl + Shift + I`.
2. Go to the "Recorder" tab.
3. Choose existing recording or create a new one.
4. Click the "Export" button.
5. Select from "Export via extensions" one of the following options:
   - Export as Jest tests
   - Export as Jasime tests
   - Export as MochaJS tests
   - Export as React Testing Library tests
   - Export as RSpec/Capybara E2E tests
   - Export as RSpec/Capybara/SitePrism E2E tests
   - Export as Cucumber/Gherkin BDD tests
   - Export as Cucumber/Cypress/Gherkin BDD tests
   - Export as CucumberJVM/Gherkin BDD tests
   - Export as JBehave/Gherkin BDD tests
   - Export as Lettuce/Gherkin BDD tests
6. Wait for the extension to process the recording and generate the test example with ChatGPT.

## Development

```
yarn build
zip -r gpt_tr_1_0_0.zip build
```

## License

This extension is licensed under the [MIT License](LICENSE). Feel free to modify and distribute it according to your needs.
