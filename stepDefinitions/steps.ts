import { Given, When, Then } from 'cucumber';
import { SuperCalculatorPage } from '../pageObjects/SuperCalculatorPage';
import { browser } from 'protractor';
import { AngularJSPage } from '../pageObjects/AngularJsPage';
import chai from 'chai';


let superCalcPage = new SuperCalculatorPage();

let angularPage = new AngularJSPage();

var expect = chai.expect;

Given('I will navigate to {string} site', async (sitename) => {
  // Write code here that turns the phrase above into concrete actions
  if (sitename == "SuperCalculator") {
    await superCalcPage.openSuperCalcPage();
  }

  else if (sitename == "AngularJS") {
    await angularPage.openAngularJS();
  }

});

When('I add two numbers {string} and {string}', async (first, second) => {
  await superCalcPage.sendNumbers(first, second);
  await superCalcPage.clickGoButton();
});


Then('the output displayed should be {string}', async (expectedResult) => {
  expect(expectedResult).to.equal(await superCalcPage.getSingleResult());
});


// Given('I will navigate to AngularJS page', async ()=> {
//   // Write code here that turns the phrase above into concrete actions
//   await browser.get('https://angularjs.org/');
// });


When('I clicked on header link', async () => {
  await angularPage.clickAngularLink();
});


When('you will navigate to angular page', async () => {
  await browser.sleep(3000);
});


Then('you will enter {string} in search box', async (text) => {
  await angularPage.enterSearchText(text);
  await browser.sleep(3000);
});