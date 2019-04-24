import { browser, Browser } from 'protractor';
import { Status, BeforeAll, AfterAll } from 'cucumber';
import { After, Before } from 'cucumber';
import { log4js } from '../utils/log4jsConfig';

let logger = log4js.getLogger('Hooks');

BeforeAll(async () => {
  browser.params.passCount = 0;
  browser.params.failCount = 0;
  browser.params.totalCount = 0;
  logger.info('******************Environment Setup*****************');
});

Before(async (scenario) => {
  logger.info('****************************************************');
  logger.info('Scenario : ', scenario.pickle.name);
});

// Before({tags: "@calculatortesting"}, function () {
//   // This hook will be executed before scenarios tagged with @calculatortesting
//   browser.manage().window().maximize();
// });

// Before({tags: "@angularjstesting"}, function () {
//     // This hook will be executed before scenarios tagged with @angularjstesting
//     console.log("Before hook for angularjs tags");
//   });

After(async (scenario) => {
  // This hook will be executed after every scenario
  try {
    logger.debug('In After');

    if (scenario.result.status === Status.FAILED) {
      browser.params.failCount++;
      logger.debug('---------TEST SCENARIO FAILED---------');
      //code to take screenshot
      const screenshot = await browser.takeScreenshot();
      this.attach(screenshot, "image/png");
      logger.debug('Screenshot captured for failed step');
    } else {
      logger.debug('---------TEST SCENARIO PASSED---------');
      browser.params.passCount++;
    }
  } catch (error) {
    logger.error('Caught error' + error);
  }
});

AfterAll(async () => {
  try {
    browser.params.totalCount = browser.params.passCount + browser.params.failCount;
    logger.info('Scenario Passed : ' + browser.params.passCount);
    logger.info('Scenario Failed : ' + browser.params.failCount);
    logger.info('Scenario Total : ' + browser.params.totalCount);
    await browser.quit();
  } catch (error) {
    logger.error(error);
  }
});