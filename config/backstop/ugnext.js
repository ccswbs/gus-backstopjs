/*******************************
 SCENARIO-SPECIFIC CONFIGURATION
********************************/
const url = process.env.BACKSTOPJS_URL;
const referenceUrl = process.env.BACKSTOPJS_REF;
const pathsToTest = {
  "Homepage": "/",
  "Basic page": "/about",
  "Widget Examples": "/widget-examples",
  "Student Experience": "/studentexperience",
  "Undergrad Admissions": "/admission/undergraduate",
  "Program Search": "/programs/undergraduate",
  "Program Page": "/programs/criminal-justice-and-public-policy",
  "Profile Listing": "/csahs/people",
  "Profile Page": "/profile/chris-abraham",
  "OVC": "/ovc",
  "OAC": "/oac",
  "News Listing:": "/ovc/news",
  "News Page:": "/ovc/news/2026/07/ovc-researchers-earn-nserc-discovery-grant-support-university-guelph-hosts-federal",
  "Lang": "/lang",
  "UAR": "/programs/undergraduate/requirements",
  "UAR page": "/programs/undergraduate/requirements/high-school/netherlands/environmental-governance",
};
/*********************************/

var pathConfig = {};
let scenariosToTest = [];

/* NOTE: The STORY has been removed due to it causing false positives on mobile. */

for (let [key, value] of Object.entries(pathsToTest)) {
  scenariosToTest.push({
    label: key,
    cookiePath: "",
    url: url + value,
    referenceUrl: referenceUrl + value,
    readyEvent: null,
    readySelector: "",
    delay: 30000,
    hideSelectors: ["div[data-netlify-deploy-id]", ".uofg-card-image-wrapper", ".uofg-hero",".uofg-media-caption-media"],
    removeSelectors: [".uofg-story"],
    hoverSelector: "",
    clickSelector: "",
    postInteractionWait: 0,
    selectors: ["document"],
    selectorExpansion: true,
    expect: 0,
    misMatchThreshold: 0.1,
    requireSameDimensions: true,
  });
}

pathConfig.array = scenariosToTest;
module.exports = pathConfig;
