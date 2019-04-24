import { ElementFinder, element, by, browser } from 'protractor';
import { log4js } from '../utils/log4jsConfig';

let logger = log4js.getLogger('AngularJS Page');

//page objects for https://angularjs.org/ website
export class AngularJSPage
{
    angularLink:ElementFinder;
    searchBox:ElementFinder;

    constructor()
    {
        this.angularLink = element(by.linkText('angular.io'));
        this.searchBox = element(by.css("input[type='search']"));
    }

    async openAngularJS()
    {
        await browser.get("https://angularjs.org/");
        logger.info('Opened Angular.js page');
    }

    async clickAngularLink()
    {
        await this.angularLink.click();
        logger.info('Clicked Angular Link');
    }

    async enterSearchText(text:string){
        if (text){
            await this.searchBox.sendKeys(text);
            logger.info('Entered ' + text + ' in search textbox.');
        }
        else{
            console.log('Kindly provide a search string');
        }
        
    }
}