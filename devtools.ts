import { GPTTestsRecorderPlugin } from './GPTTestsRecorderPlugin';

declare namespace chrome.devtools {
  interface RecorderExtensionPlugin {
    rules: string;
    model: string;
  }

  namespace recorder {
    function registerRecorderExtensionPlugin(plugin: RecorderExtensionPlugin, name: string, mediaType: string): void;
  }
}

chrome.devtools.recorder.registerRecorderExtensionPlugin(
  new GPTTestsRecorderPlugin('Use rspec with capybara gem'),
  'Export as RSpec/Capybara E2E tests',
  'application/javascript'
);

chrome.devtools.recorder.registerRecorderExtensionPlugin(
  new GPTTestsRecorderPlugin('Use rspec with site_prism gem with page elements grouped into sections whenever possible'),
  'Export as RSpec/Capybara/SitePrism E2E tests',
  'application/javascript'
);

chrome.devtools.recorder.registerRecorderExtensionPlugin(
  new GPTTestsRecorderPlugin('Use @testing-library/react lib'),
  'Export as React Testing Library tests',
  'application/javascript'
);

chrome.devtools.recorder.registerRecorderExtensionPlugin(
  new GPTTestsRecorderPlugin('Use cucumber with gherkin syntax with separate files for features and ruby step definitions'),
  'Export as Cucumber/Gherkin BDD tests',
  'application/javascript'
);
