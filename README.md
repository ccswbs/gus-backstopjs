# Pre-Requisites

- Install [BackstopJS](https://github.com/garris/BackstopJS)
- Run `backstop init` after installing BackstopJS

# Run tests on a single scenario

1. Choose a scenario to test (e.g., `default`). See all files in `config/scenarios` for a full list of scenario configurations.

## Create your initial reference screenshots

1. Run `backstop test --config=./backstopConfig.js --scenario=testScenario`. Replace `testScenario` with the name of your test scenario (e.g., `default`).

## Approve your reference screenshots

1. Run `backstop approve --config=./backstopConfig.js --scenario=testScenario`
1. Going forward, all tests will be compared against these reference screenshots

## Run tests

1. When you make changes to your deployment, run `backstop test --config=./backstopConfig.js --scenario=testScenario` to test the deployment against your approved reference screenshots.

# Create new scenarios to test

If you create a new feature, consider creating a config file that helps you test that feature, using specific URLs and focusing on the elements on the page that you want to visually test.

1. Create a copy of sample-config.js.
2. Name the file using a unique name for the scenario.
3. Fill in the live URL, test URL, and paths to test.
4. (Optional) Update any BackstopJS settings (e.g. you can remove dynamic site elements using removeSelectors or hideSelectors.)
