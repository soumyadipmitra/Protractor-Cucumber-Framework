import { ElementFinder, element, by } from "protractor";

export class Calculator
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

}