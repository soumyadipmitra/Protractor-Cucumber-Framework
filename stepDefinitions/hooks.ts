import { browser } from 'protractor';
import { Status } from 'cucumber';
import { After, Before } from 'cucumber';

Before(() => {
  // This hook will be executed before every scenario
  console.log('Before a scenario');
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
  console.log('Testing is completed');
  if (scenario.result.status == Status.FAILED) {
    //code to take screenshot
    const screenshot = await browser.takeScreenshot();
    this.attach(screenshot, "image/png");
  }
});