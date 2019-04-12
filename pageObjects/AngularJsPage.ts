import { ElementFinder, element, by, browser } from 'protractor';

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
    }

    async clickAngularLink()
    {
        await this.angularLink.click();
    }

    async enterSearchText(text:string){
        if (text){
            await this.searchBox.sendKeys(text);
        }
        else{
            console.log('Kindly provide a search string');
        }
        
    }
}