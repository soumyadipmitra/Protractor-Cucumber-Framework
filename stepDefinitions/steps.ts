import { Given, When, Then } from 'cucumber';
import { SuperCalculatorPage } from '../pageObjects/SuperCalculatorPage';
import { browser } from 'protractor';
import { AngularJSPage } from '../pageObjects/AngularJsPage';
import chai from 'chai';
import { log4js } from '../utils/log4jsConfig';


let superCalcPage = new SuperCalculatorPage();

let angularPage = new AngularJSPage();

var expect = chai.expect;

let logger = log4js.getLogger('Step Definitions');

Given('I will navigate to {string} site', async (sitename) => {
  logger.debug('Step : Navigate to site ' + sitename);
  // Write code here that turns the phrase above into concrete actions
  if (sitename == "SuperCalculator") {
    await superCalcPage.openSuperCalcPage();
  }

  else if (sitename == "AngularJS") {
    await angularPage.openAngularJS();
  }

});

When('I add two numbers {string} and {string}', async (first, second) => {
  logger.debug('Step : Add two numbers');
  await superCalcPage.sendNumbers(first, second);
  await superCalcPage.clickGoButton();
});


Then('the output displayed should be {string}', async (expectedResult) => {
  logger.debug('Step : Validate the output');
  expect(expectedResult).to.equal(await superCalcPage.getSingleResult());
});


// Given('I will navigate to AngularJS page', async ()=> {
//   // Write code here that turns the phrase above into concrete actions
//   await browser.get('https://angularjs.org/');
// });


When('I clicked on header link', async () => {
  logger.debug('Step : I clicked on header link');
  await angularPage.clickAngularLink();
});


When('you will navigate to angular page', async () => {
  logger.debug('Step : Navigate to angular page');
  await browser.sleep(3000);
});


Then('you will enter {string} in search box', async (text) => {
  logger.debug('Step : Enter string in search box');
  await angularPage.enterSearchText(text);
  await browser.sleep(3000);
});
