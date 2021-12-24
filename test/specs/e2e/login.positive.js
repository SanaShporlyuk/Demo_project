import mainPage from "../../../pages/main.page.js";
import loginPage from "../../../pages/login.page.js";
import Chance from "chance";
import User from "../../../api/user.js";

describe("Login", () => {
  const user = new User();
  const chance = new Chance();
  const email = chance.email();
  const password = "blabla3#_";

  before(async () => {
    const response = await user.Create(email, password);
    expect(response.statusCode).toHaveValue(201);
  });

  it("User does login with valid credentials", async () => {
    // main page
    await mainPage.open();
    await mainPage.openAccountMenu();
    await mainPage.navigateToLogin();

    // login page
    await loginPage.login(email, password);
    await mainPage.accountMenuBtn.waitForExist();
    await mainPage.openAccountMenu();

    await expect($('//div[@id = "mat-menu-panel-0"]//button[1]/span')).toBeExisting();
    await expect($('//div[@id = "mat-menu-panel-0"]//button[1]/span')).toHaveTextContaining(email);
  });
});
