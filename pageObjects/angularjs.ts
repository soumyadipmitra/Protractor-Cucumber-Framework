import { ElementFinder, element, by } from "protractor";

//page objects for https://angularjs.org/ website
export class AngularJS
{
    angularLink:ElementFinder;
    searchBox:ElementFinder;

    constructor()
    {
        this.angularLink = element(by.linkText('angular.io'));
        this.searchBox = element(by.css("input[type='search']"));
    }
}