require("@babel/polyfill");
const chrome = require("selenium-webdriver/chrome");
const {Builder, By, Key,}  = require("selenium-webdriver");
const {assert} = require("assert");
const { path } = require("chromedriver");
let driver = null;
const chromeOptions = new chrome.Options().headless();
//const URL = "https://www.google.com/webhp?hl=en";



let fs = require('fs');

(async function example() {
  let driver = await new Builder()
  .forBrowser('chrome')
  .build();

  await driver.get('https://pad.lescommuns.org/D6vKppj_SvqaYBjDOsgp-Q#');
  // Returns base64 encoded string
  let encodedString = await driver.takeScreenshot();
  let filename = new Date().getTime()+".png"
  console.log("date",filename)

  await fs.writeFileSync('./images/'+filename, encodedString, 'base64');


  let links = await driver.findElements(By.tagName("a"));
  console.log("links",links)


  for (const link of links){
     let text = await link.getText()
    console.log(text)
  }




  let body = await driver.findElements(By.tagName("body"));
  console.log("body", body)
  var childs = await driver.findElements(By.xpath("//*"));
  console.log(childs)

  for await (const child of childs){
    let tagname = await child.getTagName()
    let text = await child.getText()
    console.log("------",tagname, ":::", text)
    try{
      let attributes = await child.getProperty('attributes')

      attributes.forEach((att) => {
        console.log("____",att.name,"->", att.value)
      });
    }catch(e){
      console.error("error",e)
    }

    console.log("==========================================")
  }

  // for (const child of childs){
  //   var c = await child.findElements(By.xpath("/*/*"));
  //   console.log("------",c)
  //   //  let text = await link.getText()
  // //  console.log(child)
  // }




  await driver.quit();
}())






// describe("Selenium", () => {
//   beforeEach(async () => {
//     driver = await new Builder(path)
//       .forBrowser("chrome").setChromeOptions(chromeOptions)
//       //.forBrowser('firefox')
//       .build();
//     await driver.get(URL);
//   });
//
//   afterEach(async () => {
//     await driver.quit();
//   });
//
//
//   // it("should render a message on a Google search result", async () => {
//   //   const element = await driver.findElement(By.name("q"));
//   //   console.log("element", element)
//   //   await element.sendKeys("webdriver", Key.RETURN);
//   //   const res = await driver.findElement(By.css(".LC20lb")).getText();
//   //   assert.notEqual(res, null);
//   // });
// });
