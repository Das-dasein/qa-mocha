const { suite } = require("selenium-webdriver/testing");
const { By } = require("selenium-webdriver");
const { assert } = require("assert");
require("chromedriver");

suite(function (env) {
  describe("Verification of a page with books", () => {
    let driver;

    before(async () => {
      driver = await env.builder().build();
    });

    it("Check books on a page", async () => {
      const bookName = "Война и мир";
      await driver.get("http://localhost:8000/books.html");

      const books = await driver.findElements(By.tagName("p"));
      const text = await books[0].getText();

      // Проверка истинности
      assert(text.includes(bookName));
    });

    after(() => {
      driver.quit();
    });
  });
});
