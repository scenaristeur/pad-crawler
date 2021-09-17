import "../node_modules/@babel/polyfill";
import chrome from "../node_modules/selenium-webdriver/chrome";
import { Builder, By, Key, /*Capabilities*/ } from "../node_modules/selenium-webdriver";
import assert from "../node_modules/assert";
import { path } from "../node_modules/chromedriver";
let driver = null;
const chromeOptions = new chrome.Options().headless();
const URL = "https://www.google.com/webhp?hl=en";

describe("Selenium", () => {
  beforeEach(async () => {
    driver = await new Builder(path)
      .forBrowser("chrome")
      .setChromeOptions(chromeOptions)
      .build();
    await driver.get(URL);
  });

  afterEach(async () => {
    await driver.quit();
  });

  it("should render a message on a Google search result", async () => {
    const element = await driver.findElement(By.name("q"));
    await element.sendKeys("webdriver", Key.RETURN);
    const res = await driver.findElement(By.css(".LC20lb")).getText();
    assert.notEqual(res, null);
  });
});
