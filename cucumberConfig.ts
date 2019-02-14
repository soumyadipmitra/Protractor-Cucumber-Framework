import { Config } from "protractor";
import * as reporter from "cucumber-html-reporter";
import { options } from "./utils/cucumberReportOptions";

// An example configuration file
export let config: Config = {
    // The address of a running selenium server.
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,  //this will start the selenium server in your machine

    // set to "custom" instead of cucumber.
    framework: 'custom',

    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    // require feature files
    specs: [
        '../features/*.feature' // accepts a glob
    ],

    onComplete: () => {
        //copied from https://www.npmjs.com/package/cucumber-html-reporter
        //to generate the html report
        reporter.generate(options);
    },

    cucumberOpts: {
        tags: ["~@ignore", "@angularjstesting or @calculatortesting"],

        format: 'json:./reports/cucumberreport.json',  //this setting will create cucumber reports in JSON  format
        //we will then use html formatter to create html reports
        // require step definitions

        require: [
            './stepDefinitions/*.js' // accepts a glob
        ]
    },

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome'
    },



    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
    }
};
