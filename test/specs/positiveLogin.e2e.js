import mainPage from "../../pages/main.page.js"
import loginPage from "../../pages/login.page.js"

describe('User login', () => {
    it('User does login with valid credentials', async () => {
        // main page
        await mainPage.open();
        await mainPage.openAccountMenu();
        await mainPage.navigateToLogin();
        // await browser.url(`${browser.options.baseUrl}`);
        // await $('//app-welcome-banner//button[@aria-label="Close Welcome Banner"]').click();        
        // await $('//app-navbar//button[@ id="navbarAccount"]').click();
        // await $('//button[@ id="navbarLoginButton"]').click();        

        // login page
        await loginPage.login('sanasmitrc@gmail.com', 'Done_demo@');
        // await $('#email').setValue('sanasmitrc@gmail.com');
        // await $('#password').setValue('Done_demo@');
        // await $('button#loginButton').click();

        
        await mainPage.openAccountMenu();
        await expect($('//div[@id = "mat-menu-panel-0"]//button[1]/span')).toBeExisting();
        await expect($('//div[@id = "mat-menu-panel-0"]//button[1]/span')).toHaveTextContaining('sanasmitrc@gmail.com');
    });
});

