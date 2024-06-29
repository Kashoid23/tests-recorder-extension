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
  new GPTTestsRecorderPlugin('jasime'),
  'Export as Jasime tests',
  'application/javascript'
);

chrome.devtools.recorder.registerRecorderExtensionPlugin(
  new GPTTestsRecorderPlugin('jest'),
  'Export as Jest tests',
  'application/javascript'
);

chrome.devtools.recorder.registerRecorderExtensionPlugin(
  new GPTTestsRecorderPlugin('mocha_js'),
  'Export as MochaJS tests',
  'application/javascript'
);

chrome.devtools.recorder.registerRecorderExtensionPlugin(
  new GPTTestsRecorderPlugin('react_testing_library'),
  'Export as React Testing Library tests',
  'application/javascript'
);

chrome.devtools.recorder.registerRecorderExtensionPlugin(
  new GPTTestsRecorderPlugin('rspec_capybara'),
  'Export as RSpec/Capybara E2E tests',
  'application/javascript'
);

chrome.devtools.recorder.registerRecorderExtensionPlugin(
  new GPTTestsRecorderPlugin('rspec_capybara_site_prism'),
  'Export as RSpec/Capybara/SitePrism E2E tests',
  'application/javascript'
);

chrome.devtools.recorder.registerRecorderExtensionPlugin(
  new GPTTestsRecorderPlugin('cucumber_gherkin'),
  'Export as Cucumber/Gherkin BDD tests',
  'application/javascript'
);

chrome.devtools.recorder.registerRecorderExtensionPlugin(
  new GPTTestsRecorderPlugin('cucumber_cypress'),
  'Export as Cucumber/Cypress/Gherkin BDD tests',
  'application/javascript'
);

chrome.devtools.recorder.registerRecorderExtensionPlugin(
  new GPTTestsRecorderPlugin('cucumber_jvm'),
  'Export as CucumberJVM/Gherkin BDD tests',
  'application/javascript'
);

chrome.devtools.recorder.registerRecorderExtensionPlugin(
  new GPTTestsRecorderPlugin('j_behave'),
  'Export as JBehave/Gherkin BDD tests',
  'application/javascript'
);

chrome.devtools.recorder.registerRecorderExtensionPlugin(
  new GPTTestsRecorderPlugin('lettuce'),
  'Export as Lettuce/Gherkin BDD tests',
  'application/javascript'
);
