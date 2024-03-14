let arguments = require("minimist")(process.argv.slice(2));
let testScenario = arguments.scenario;
let scenarios;

try {
  // Load site testing configuration
  console.log('Loading BackstopJS test configurations for "' + testScenario + '".');

  let pathConfig = require("./config/scenarios/" + testScenario + ".js");
  scenarios = pathConfig.array;
} catch (error) {
  console.log("No test configurations found for " + testScenario + ". Using default configuration.");

  let referenceUrl = arguments.referenceUrl == null ? "" : arguments.referenceUrl;
  let url = arguments.url == null ? "" : arguments.url;

  if (referenceURL == "" || deployURL == "") {
    console.log("Error: Missing arguments for --url or --referenceUrl.");

    scenarios = [
      {
        label: testScenario,
        url: url,
        referenceUrl: referenceUrl,
      },
    ];
  } else {
    scenarios = [
      {
        label: testScenario,
        cookiePath: "",
        url: deployURL,
        referenceUrl: referenceURL,
        readySelector: "",
        hideSelectors: [],
        removeSelectors: [],
        hoverSelector: "",
        clickSelector: "",
        postInteractionWait: 0,
        selectorExpansion: true,
        selectors: ["document"],
        readyEvent: null,
        delay: 1000,
        misMatchThreshold: 0.1,
        requireSameDimensions: true,
      },
    ];
  }
}

module.exports = {
  id: testScenario,
  viewports: [
    {
      name: "phone",
      width: 320,
      height: 480,
    },
    {
      name: "desktop",
      width: 1920,
      height: 1080,
    },
  ],
  scenarios: scenarios,
  paths: {
    bitmaps_reference: "backstop_data/" + testScenario + "/bitmaps_reference",
    bitmaps_test: "backstop_data/" + testScenario + "/bitmaps_test",
    html_report: "backstop_data/" + testScenario + "/html_report",
    ci_report: "backstop_data/" + testScenario + "/ci_report",
  },
  report: ["browser", "CI"],
  debug: false,
  engine: "puppeteer",
  engineOptions: {
    args: ["--no-sandbox"],
  },
  asyncCaptureLimit: 5,
  asyncCompareLimit: 50,
  debug: false,
  debugWindow: false,
};
