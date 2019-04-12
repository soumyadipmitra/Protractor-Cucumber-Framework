import { ElementFinder, element, by, browser } from "protractor";

export class SuperCalculatorPage
{
    //declaring the page object variables
    firstEditBox:ElementFinder;
    secondEditBox:ElementFinder;
    goButton:ElementFinder;
    singleResult:ElementFinder;

    //assign each of the page elements to its objects in the constructor
    constructor()
    {
        this.firstEditBox = element(by.model('first'));
        this.secondEditBox = element(by.model('second'));
        this.goButton = element(by.id('gobutton'));
        this.singleResult = element(by.css("h2[class='ng-binding']"));
    }

    async openSuperCalcPage(){
        await browser.get("https://juliemr.github.io/protractor-demo/");
    }

    async sendNumbers(firstNum:string, secondNum:string){
        await this.firstEditBox.sendKeys(firstNum);
        await this.secondEditBox.sendKeys(secondNum);
    }

    async clickGoButton()
    {
        await this.goButton.click();
    }

    async getSingleResult()
    {
        return await this.singleResult.getText().then((val)=>{
            return val;
        });
    }

}