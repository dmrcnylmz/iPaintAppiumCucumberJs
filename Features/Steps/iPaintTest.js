"use strict";

var wd = require("selenium-webdriver"),
    By = wd.By,
    until = wd.until;
const {webdriver} = require("wd");

let driver;

const { Before, Given, When, Then , After,setDefaultTimeout } = require('cucumber')
var assert = require('assert');
const {expect} = require("chai");
const TIMEOUT = 300000000

const homepageobject = require("../object/homepageobject");
const element = new homepageobject();

const BaseMethod = require("../Base/BaseMethod");
const Assert = require("assert");
const {TimelinePlugin} = require("protractor/plugins/timeline");
const method = new BaseMethod();


// Setting Desired Capabilities.
var desiredCaps = {
    platformName: "Android",
    deviceName: "General Mobile 4G",
    AUTOMATION_NAME: "uiautomator2",
    appPackage: "com.teknasyon.coloringbook",
    appActivity: "com.teknasyon.coloringbook.view.activity.SplashActivity",
    browserName: '',
       
};

// Before function for driver initialization
Before( {timeout: 30000}, async function () {
    console.log('Before: Connecting to Device.....');
    setDefaultTimeout(30000);
    driver = await new wd.Builder().usingServer("http://localhost:4723/wd/hub").withCapabilities(desiredCaps).build();
    await driver.sleep(10000);
    console.log('');

    
})

Given(/^Uygulamaya giriş sağla$/, async function ()  {

    console.log("Uygulama giriş...")
    console.log("elementtt"+element.startView)
    driver.wait(until.elementLocated(By.xpath(element.startView)),5);
})
Then(/^Rahatlayın başlığı ekranında kontrol sağla$/, async function ()  {
    console.log("element2"+element.headerText1)
   await driver.wait(until.elementLocated(By.xpath(element.headerText1)),5);

    expect(
        await driver.findElement(
            By.xpath(element.headerText1))
            .getText(),"Rahatlayın").to.be.equal;

    driver.wait(until.elementLocated(By.xpath(element.detailText1)),5);

    expect(
        await driver.findElement(
            By.xpath(element.headerText1))
            .getText(),"Birbirinden harika resim koleksiyonumuzdan dilediğinizi seçin ve boyayarak rahatlayın.").to.be.equal;

})
When(/^Devam et butonuna tıkla$/, async function ()  {

    await driver.findElement(By.xpath(element.skipButtonXpath)).click();

    //await  method.clickElement(element.skipButtonXpath)

    console.log("İlk devam et butonuna tıklandı")
})
When(/^İkinci devam et butonuna tıkla$/, async function ()  {

    await driver.findElement(By.xpath(element.skipButtonXpath)).click();

    console.log("İkinci devam et butonuna tıklandı")

})
When(/^Üçüncü devam et butonuna tıkla$/, async function ()  {

    await driver.findElement(By.xpath(element.skipButtonXpath)).click();

    console.log("Üçüncü devam et butonuna tıklandı")

})

Then(/^Yaratıcı olun ekranında kontrol sağla$/, async function ()  {

    driver.wait(until.elementLocated(By.xpath(element.headerText2)),5);
    expect(
        await driver.findElement(
            By.xpath(element.headerText2))
            .getText(),"Yaratıcı Olun").to.be.equal;

    driver.wait(until.elementLocated(By.xpath(element.detailText2)),5);
    expect(
        await driver.findElement(
            By.xpath(element.detailText2))
            .getText(),"Yaratıcılığınızı konuşturun! Tasarlayacağınız resimleri arkadaşlarınızla paylaşın ve beğeni toplayın.").to.be.equal;
    console.log("Yaratıcı olun sayfası kontrol sağlandı.")
})
Then(/^Muhteşem paletler ekranında kontrol sağla$/, async function ()  {
    driver.wait(until.elementLocated(By.xpath(element.headerText3)),5);
    expect(
        await driver.findElement(
            By.xpath(element.headerText3))
            .getText(),"Muhteşem Paletler").to.be.equal;

    driver.wait(until.elementLocated(By.xpath(element.detailText3)),5);
    expect(
        await driver.findElement(
            By.xpath(element.detailText3))
            .getText(),"Birbirinden harika renk paletlerini keşfedin. Artık hazırsınız.").to.be.equal;

    console.log("Muhteşem paletler sayfası kontrol sağlandı.")
})

When(/^Reklam çıkarsa geç$/,async function ()  {
    await driver.sleep(4000);
    driver.wait(until.elementLocated(By.xpath(element.reklamCarpı)),30);
    await driver.findElement(By.xpath(element.reklamCarpı)).click();
  //  await driver.wait(until.stalenessOf(By.id(element.reklamContent)),30);
    console.log("Reklam sayfası geçildi")

});
When(/^Kategori menüsüne ilerle$/,async function ()  {
    await driver.sleep(5000)
   await driver.wait(until.elementLocated(By.id(element.cateGoryMenuButton)),10);
   // await driver.wait(until.(By.id(element.cateGoryMenuButton)),10);
    await driver.findElement(By.id(element.cateGoryMenuButton)).click();
    console.log("Kategori sayfasına geçildi")
});
Then(/^Kategori menüsünde kontrolleri sağla$/,async function ()  {
    await driver.sleep(5000)
    await driver.wait(until.elementLocated(By.id(element.cateGoryToolbarControl)),30);
    expect(
        await driver.findElement(
            By.id(element.cateGoryToolbarControl))
            .getText(),"Kategoriler").to.be.equal;

    console.log("Kategori sayfası kontroller sağlandı")
});
When(/^Çalışmalarım menüsüne ilerle$/,async function ()  {

    await driver.wait(until.elementLocated(By.id(element.myWorkMenuButton)),10);
    await driver.findElement(By.id(element.myWorkMenuButton)).click();
    console.log("Çalışmalarım sayfasına geçildi")
});
Then(/^Çalışmalarım menüsünde kontrolleri sağla$/,async function ()  {
    await driver.wait(until.elementLocated(By.id(element.myWorkMenuToolbarControl)),10);
    expect(
        await driver.findElement(
            By.id(element.myWorkMenuToolbarControl))
            .getText(),"Çalışmalarım").to.be.equal;
    console.log("Çalışmalarım sayfası kontroller sağlandı")
});
When(/^Diğerleri menüsüne ilerle$/,async function ()  {

    await driver.wait(until.elementLocated(By.id(element.othersMenuButton)),30);
    await driver.findElement(By.id(element.othersMenuButton)).click();
    console.log("Diğerleri menüsüne ilerlendi")
});

Then(/^Diğerleri menüsünde kontrolleri sağla$/,async function ()  {
    await driver.wait(until.elementLocated(By.id(element.othersToolbarControl)),30);
    expect(
        await driver.findElement(
            By.id(element.othersToolbarControl))
            .getText(),"Diğerleri").to.be.equal;
    await driver.wait(until.elementLocated(By.id(element.othersLanguageMenuControl)),30);
    expect(
        await driver.findElement(
            By.id(element.othersLanguageMenuControl))
            .getText(),"Uygulama Dili").to.be.equal;
    console.log("Diğerleri menüsünde kontroller sağlandı")
});

When(/^Scroll page$/,async function ()  {
    // webdriver.io example
    await driver.sleep(5000)

  //  driver.executeScript('mobile: scroll', {'direction': 'down'});
// wd example
  //  driver.touchAction(10, 100, element);
   // await driver.scroll(10, 100);
   // await driver.wait(until.elementLocated(By.id(element.homeFirstPicture)),30);
    driver.executeScript("arguments[0].scrollIntoView()", driver.findElement(By.xpath(element.scrollElement1)));

})

// After function to release the Driver
After(async function() {
    
    console.log('Disconnecting.....');  
    console.log('');

    await driver.quit();
  })
