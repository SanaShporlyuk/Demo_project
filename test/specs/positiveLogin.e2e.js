import mainPage from "../../pages/main.page.js"
import loginPage from "../../pages/login.page.js"

describe('User login', () => {
    it('User does login with valid credentials', async () => {
        // main page
        await mainPage.open();
        await mainPage.openAccountMenu();
        await mainPage.navigateToLogin();  

        // login page
        await loginPage.login('sanasmitrc@gmail.com', 'Done_demo@');
        await browser.pause(1000);
        
        await mainPage.openAccountMenu();
        await expect($('//div[@id = "mat-menu-panel-0"]//button[1]/span')).toBeExisting();
        await expect($('//div[@id = "mat-menu-panel-0"]//button[1]/span')).toHaveTextContaining('sanasmitrc@gmail.com');
    });
});

