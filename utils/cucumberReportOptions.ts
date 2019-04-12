export const options = {
    theme: 'bootstrap', //options->['bootstrap', 'hierarchy', 'foundation', 'simple']
    jsonFile: './reports/cucumberreport.json',
    output: './reports/cucumber_report.html',
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
        "App Version": "1.0.1",
        "Test Environment": "STAGING",
        "Browser": "Chrome 72.0.3626.109 (Official Build) (64-bit)",
        "Platform": "Mac OS X Mojave",
        "Parallel": "Scenarios",
        "Executed": "Local Machine"
    }
};