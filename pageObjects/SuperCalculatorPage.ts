import { ElementFinder, element, by, browser } from "protractor";
import { log4js } from '../utils/log4jsConfig';

let logger = log4js.getLogger('SuperCalculatorPage');

export class SuperCalculatorPage
{
    // the below variables has intentionally not been declared private so as to let the javascript test specs to run
    // it is a good practice to declare the element finders as private
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
        logger.info('Opened Super Calculator page');
    }

    async sendNumbers(firstNum:string, secondNum:string){
        await this.firstEditBox.sendKeys(firstNum);
        await this.secondEditBox.sendKeys(secondNum);
        logger.info('Sent ' + firstNum + ' and ' + secondNum + ' to page.');
    }

    async clickGoButton()
    {
        await this.goButton.click();
        logger.info('Clicked Go Button');
    }

    async getSingleResult()
    {
        return await this.singleResult.getText().then((val)=>{
            logger.info('Obtained Result : ' + val);
            return val;
        });
    }

}