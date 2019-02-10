import { Given, When, Then } from "cucumber";
import { Calculator } from "../pageObjects/calculator";
import { browser } from "protractor";
import { AngularJS } from "../pageObjects/angularjs";
import chai from "chai";

let calc = new Calculator();

let angularPage = new AngularJS();

var expect = chai.expect;

Given('I will navigate to {string} site', async (sitename) => {
  // Write code here that turns the phrase above into concrete actions
  if (sitename == "SuperCalculator") {
    await browser.get("https://juliemr.github.io/protractor-demo/");
  }

  else if (sitename == "AngularJS") {
    await browser.get('https://angularjs.org/');
  }

});


When('I add two numbers {string} and {string}', async (string, string2) => {
  // Write code here that turns the phrase above into concrete actions
  await calc.firstEditBox.sendKeys(string);
  await calc.secondEditBox.sendKeys(string2);
  await calc.goButton.click();
});


Then('the output displayed should be {string}', async (expectedResult) => {
  // Write code here that turns the phrase above into concrete actions
  await calc.singleResult.getText().then(function (actualResult) {
    console.log(actualResult);
    expect(expectedResult).to.equal(actualResult);
  })
});


// Given('I will navigate to AngularJS page', async ()=> {
//   // Write code here that turns the phrase above into concrete actions
//   await browser.get('https://angularjs.org/');
// });


When('I clicked on header link', async () => {
  // Write code here that turns the phrase above into concrete actions
  await angularPage.angularLink.click();


});


When('you will navigate to angular page', async () => {
  // Write code here that turns the phrase above into concrete actions
  await browser.sleep(3000);
});


Then('you will enter {string} in search box', async (string) => {
  // Write code here that turns the phrase above into concrete actions
  await angularPage.searchBox.sendKeys(string);

  await browser.sleep(3000);
});