export const options = {
    theme: 'bootstrap', //options->['bootstrap', 'hierarchy', 'foundation', 'simple']
    jsonFile: './reports/cucumberreport.json',
    output: './reports/cucumber_report.html',
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
        "App Version": "0.3.2",
        "Test Environment": "STAGING",
        "Browser": "Chrome 71.0.3578.98",
        "Platform": "Windows 7 Enterprise",
        "Parallel": "Scenarios",
        "Executed": "Local Machine"
    }
};