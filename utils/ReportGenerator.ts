import * as reporter from 'cucumber-html-reporter';
import * as mkdirp from 'mkdirp';
import * as path from 'path';
import * as fs from 'fs';

const jsonReportFolder = path.join(process.cwd(), '/reports/json');
const htmlReportFolder = path.join(process.cwd(), '/reports/html');

export class ReportGenerator {

    public static createDirectory(dir: string) {
        if (!fs.existsSync(dir)) {
            mkdirp.sync(dir);
        }
    }

    public static createCucumberHtmlReport(timeStamp) {
        try {
            const inputJsonReport = path.join(jsonReportFolder, '/cucumber_' + timeStamp + '.json');
            const outputHtmlReport = path.join(htmlReportFolder, '/cucumber_' + timeStamp + '.html');
            ReportGenerator.createDirectory(htmlReportFolder);
            const cucumberReportOptions = {
                theme: 'bootstrap', //options->['bootstrap', 'hierarchy', 'foundation', 'simple']
                jsonFile: inputJsonReport,
                output: outputHtmlReport,
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
            }
            reporter.generate(cucumberReportOptions); //invoke the cucumber-html-reporter
        } catch (error) {
            throw new Error('Failed to save cucumber test results to json file');
        }
    }

}