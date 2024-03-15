# Pre-Requisites

- Install [BackstopJS](https://github.com/garris/BackstopJS)
  - Global installation is recommended: `npm install -g backstopjs`
- Run `npm ci`
- Run `backstop init` after installing BackstopJS
- Add the following environment variables:
  - `BACKSTOPJS_URL`: This is the URL you are testing
  - `BACKSTOPJS_REF`: This is the URL showing how things *should* appear. It will be used to generate your reference screenshots before running visual regression tests.

# Run our generic visual regression test
1. To set up your initial reference screenshots, run `backstop test --config=./backstop.config.js`
1. If the reference screenshots look good, run `backstop approve --config=./backstop.config.js`
1. To run a visual regression test, run `backstop test --config=./backstop.config.js`

**Tip:** If you want to skip the approval process, you can just run `backstop reference --config=./backstop.config.js --scenario=testScenario` instead of running `test` then `approve`

# Test a specific scenario (e.g., just the header)

## Choose your scenario
1. Navigate to `config/scenarios`
1. Choose a scenario to test.
1. Going forward, when we refer to `testScenario`, this should correspond with the name of a file in `config/scenarios`, only without the .js on the end.

## Run a test using your specific scenario
1. To generate reference screenshots, run `backstop reference --config=./backstop.config.js  --scenario=testScenario`
1. To run a visual regression test against those screenshots, run `backstop test --config=./backstop.config.js  --scenario=testScenario`

# Create new scenarios to test
If you need to test something specific (e.g., the header web-component), consider creating a config file that helps you specifically test that component, using specific URLs and focusing on the specific elements on the page that you want to visually test.

1. Create a copy of sample-config.js.
1. Name the file using a unique name for the scenario.
1. Fill in the paths to test.
1. (Optional) Update any BackstopJS settings (e.g. you can remove dynamic site elements using removeSelectors or hideSelectors.)
1. Test your configuration file by running `backstop reference --config=./backstop.config.js  --scenario=testScenario` and `backstop test --config=./backstop.config.js  --scenario=testScenario`
1. If all works as expected, commit your configuration file to the repository.
