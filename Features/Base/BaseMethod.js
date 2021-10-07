"use strict";
var wd = require("selenium-webdriver"),
    By = wd.By,
    until = wd.until;

const {webdriver} = require("wd");
const {expect} = require("chai");
const util = require("util");
let driver;

class BaseMethod {



        findElement(element) {

        return driver.findElement(element)

    }
           clickElement(element) {

                this.findElement(element).click();


        }
        sendKeys(element,text) {

            const sendKeysElement = this.findElement(element)

            sendKeysElement.sendKeys(text)

        }
       controlElementIsDisplayed(element) {

            expect(
                this.findElement(element)
                    .isDisplayed()).to.be.equal;

        }

        controlElementText(element,text) {
            expect(
                this.findElement(element)
                    .getText(),text).to.be.equal;


        }}



module.exports = class BaseMethod {}