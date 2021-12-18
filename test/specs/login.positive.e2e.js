import mainPage from "../../pages/main.page.js"
import loginPage from "../../pages/login.page.js"
import Chance from 'chance';
import superagent from "superagent";

describe('Login', () => {
    const chance = new Chance();
    const email = chance.email();
    const password = 'blabla3#_';

    before(async () => {
        let request = { "email": email, "password": password, "passwordRepeat": password, "securityQuestion": { "id": 2, "question": "Mother's maiden name?", "createdAt": "2021-12-16T00:19:40.807Z", "updatedAt": "2021-12-16T00:19:40.807Z" }, "securityAnswer": "test" };
        const response = await superagent.post(`${browser.options.baseUrl}/api/Users`, request);
        expect(response.statusCode).toHaveValue(201);
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