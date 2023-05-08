const { suite } = require("selenium-webdriver/testing");
const { By, WebDriver } = require("selenium-webdriver");
const assert = require("assert");
require("chromedriver");

suite(function (env) {
  describe("?", () => {
    let driver;

    before(async () => {
      driver = await env.builder().build();
    });
    
    it("?", async () => {
      
    });

    after(async () => {
      driver.quit();
    })
  })
});
