import Chance from "chance";
import loginPage from "../../pages/login.page.js";
import registrationPage from "../../pages/registration.page.js";
const chance = new Chance();

describe("Registration", () => {
  it("User does registration with valid credentials", async () => {
    // registration page
    await registrationPage.open();

    const email = chance.email();
    await registrationPage.emailInput.setValue(email);
    await registrationPage.passwordInput.setValue("blabla3#_");
    await registrationPage.passwordRepeat.setValue("blabla3#_");

    // TODO: find better way to wait for password animation
    await browser.pause(200);
    await registrationPage.questionDropdown.select("Mother's maiden name?");
    await registrationPage.securityAnswer.setValue("blabla");    

    await registrationPage.registerButton.click();

    await loginPage.waitForPageAvailable();
    await expect(await browser.getUrl()).toMatch(
      `${browser.options.baseUrl}/#/login`
    );
  });
});
