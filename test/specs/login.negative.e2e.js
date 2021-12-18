import mainPage from "../../pages/main.page.js"
import loginPage from "../../pages/login.page.js"

describe('User Login', () => {
    it('User does not exist', async () => {
        // main page
        await mainPage.open();
        await mainPage.openAccountMenu();
        await mainPage.navigateToLogin();

        // login page
        await loginPage.login('user_not_exists@gmail.com', 'Done_demo@');

        // assert
        await expect(loginPage.error).toHaveTextContaining('Invalid email or password');
    });
});

