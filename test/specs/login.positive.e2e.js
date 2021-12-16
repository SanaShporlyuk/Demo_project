import Chance from 'chance';
import registrationPage from "../../pages/registration.page.js"
import mainPage from "../../pages/main.page.js"
import loginPage from "../../pages/login.page.js"

describe('User login', () => {
    const chance = new Chance();
    const email = chance.email();
    const password = 'blabla3#_';

    before(async () => {
        await registrationPage.open();
        await registrationPage.emailInput.setValue(email);
        await registrationPage.passwordInput.setValue(password);
        await registrationPage.passwordRepeat.setValue(password);
        await registrationPage.questionDropdown.select(`Mother's maiden name?`);
        await registrationPage.securityAnswer.setValue('blabla');
        await registrationPage.registerButton.click();
        await loginPage.waitForPageAvailable();
    });

    it('User does login with valid credentials', async () => {
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

