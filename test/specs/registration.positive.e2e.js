import registrationPage from "../../pages/registration.page.js"

describe('Register User', () => {
    it('User does registration with valid credentials', async () => {
        // registration page
        await registrationPage.open();

        await registrationPage.emailInput.setValue('bla@bla.com');
        await registrationPage.passwordInput.setValue('blabla3#_');

        await registrationPage.questionDropdown.select(`Mother's maiden name?`);
        await registrationPage.securityAnswer.setValue('blabla');

        await registrationPage.registerButton.click();

        browser.pause(5000);
    });
});