import loginPage from "../../pages/login.page.js";
import registrationPage from "../../pages/registration.page.js"

describe('Register User', () => {
    it('User does registration with valid credentials', async () => {
        // registration page
        await registrationPage.open();

        // TODO: generate email
        await registrationPage.emailInput.setValue('bla7@bla.com');
        await registrationPage.passwordInput.setValue('blabla3#_');
        await registrationPage.passwordRepeat.setValue('blabla3#_');

        await registrationPage.questionDropdown.select(`Mother's maiden name?`);
        await registrationPage.securityAnswer.setValue('blabla');

        await registrationPage.registerButton.click();

        await loginPage.waitForPageAvailable();
        await expect(await browser.getUrl()).toMatch(`${browser.options.baseUrl}/#/login`);
    });
});