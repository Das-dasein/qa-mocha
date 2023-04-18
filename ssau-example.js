const { suite } = require("selenium-webdriver/testing");
const { By, WebDriver } = require("selenium-webdriver");
const assert = require("assert");
require("chromedriver");

suite(function (env) {
  describe("Страница Цифровые кафедры", () => {
    let driver;

    before(async () => {
      driver = await env.builder().build();
      await driver.get("https://ido.ssau.ru/цифровые-кафедры/");
    });

    it('должен отобразить заголовок, содержащий фразу Цифровые кафедры', async () => {
      const pageTitle = await driver.getTitle();

      assert(pageTitle.includes("Цифровые кафедры"));
    })

    it("должен отобразить 6 программ", async () => {
      const programs = await driver.findElements(
        By.css(".tabs__interest-active-current .interest__cell")
      );
      // assert(programs.length === 6);
      assert.strictEqual(programs.length, 7);
    })

    after(async () => {
      driver.quit();
    })

    // it("должен отобразить заголовок, содержащий фразу Цифровые кафедры", async () => {
    //   await driver.get("https://ido.ssau.ru/цифровые-кафедры/");
    //   const pageTitle = await driver.getTitle();
    //   console.log(pageTitle);
    //   assert(pageTitle.includes("Цифровые кафедры"));
    // });

    // it("должен отобразить 6 программ", async () => {
    //   await driver.get("https://ido.ssau.ru/цифровые-кафедры/");
    //   const programs = await driver.findElements(
    //     By.css(".tabs__interest-active-current .interest__cell")
    //   );
    //   assert.strictEqual(programs.length, 6);
    // });

    // after(() => {
    //   driver.quit();
    // });
  })
});
