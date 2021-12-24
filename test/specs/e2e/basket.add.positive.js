import { Chance } from "chance";
import User from "../../../api/user.js";
import mainPage from "../../../pages/main.page.js";
import loginPage from "../../../pages/login.page.js";
import basketPage from "../../../pages/basket.page.js";

describe("Purchase flow", () => {
  const user = new User();
  const chance = new Chance();
  const email = chance.email();
  const password = "blabla3#_";

  before(async () => {
    const response = await user.Create(email, password);
    expect(response.statusCode).toHaveValue(201);
  });

  it("Add to Basket", async () => {
    await loginPage.open();
    await loginPage.login(email, password);

    await mainPage.waitForPageAvailable();
    await mainPage.addToBasketBtn.click();
    await mainPage.basketBtn.click();

    await basketPage.waitForPageAvailable();
    await expect(await browser.getUrl()).toMatch(`${browser.options.baseUrl}/#/basket`);
    await $('//mat-row').waitForExist();
    await basketPage.checkoutBtn.click();

    await expect(await browser.getUrl()).toMatch(`${browser.options.baseUrl}/#/address/select`);    
  });
});

