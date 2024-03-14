/*******************************
 SCENARIO-SPECIFIC CONFIGURATION
********************************/
const url = "https://preview-ugconthub.netlify.app";
const referenceUrl = "https://develop-ugconthub.netlify.app/";
const pathsToTest = {
    'Basic Page: Explore All Programs': '/explore-all-programs',
    'Program Page: BAS': '/programs/bachelor-of-applied-science',
    'Basic Page: Student Experience': '/studentexperience',
}
/*********************************/

var pathConfig = {};
let scenariosToTest = [];

for (let [key, value] of Object.entries(pathsToTest)) {
    scenariosToTest.push({
        label: key,
        cookiePath: "",
        url: url + value,
        referenceUrl: referenceUrl + value,
        readySelector: "",
        hideSelectors: [],
        removeSelectors: [],
        hoverSelector: "",
        clickSelector: "",
        postInteractionWait: 0,
        selectorExpansion: true,
        selectors: [],
        readyEvent: null,
        delay: 8000,
        misMatchThreshold: 0.1,
        requireSameDimensions: true
    })
}

pathConfig.array = scenariosToTest;
module.exports = pathConfig;