import {browser,element,by, By, $, $$, ExpectedConditions} from "protractor";
import { async } from "q";
import { SuperCalculatorPage } from "./pageObjects/SuperCalculatorPage";
import { AngularJSPage } from "./pageObjects/AngularJsPage";

describe("Protractor test", async ()=>{
    //create an object of Calculator page object class
    let calc = new SuperCalculatorPage();

    async function openBrowser()
    {
        await browser.get("https://juliemr.github.io/protractor-demo/");
    }

    async function enterData(a:number,b:number)
    {
        await calc.firstEditBox.sendKeys(a);
        await calc.secondEditBox.sendKeys(b);
    }

    function clickGoButton()
    {
        calc.goButton.click().then(function(){
            calc.singleResult.getText().then(function(result){
                console.log(result);
            })
            
        })
    }

    it("Open Browser", ()=>{
        openBrowser();
        enterData(6,5);
        clickGoButton();
        enterData(1,2);
        clickGoButton();
        enterData(13,18);
        clickGoButton();
    })

    it('Angular JS website title validation', async ()=>{
        //open angularjs website
        await browser.get('https://angularjs.org/');

        //declare an object of angular page model
        let angularPage = new AngularJSPage();

        //click on the angular.io link
        await angularPage.angularLink.click();

        await browser.sleep(3000);

        //enter some text in the search box on the right
        await angularPage.searchBox.sendKeys("angular");

        await browser.sleep(3000);

    })
})