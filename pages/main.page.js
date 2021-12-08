import BasePage from "../base/basePage.js"

class MainPage extends BasePage {
    get accountMenuBtn() {
        return $('#navbarAccount');
    }

    get loginBtn() {
        return $('#navbarLoginButton');
    }

    async open() {
        await super.open('');
        await super.closePopupBtn.click();
    }

    async openAccountMenu() {
        await this.accountMenuBtn.click();
    }

    async navigateToLogin() {
        await this.loginBtn.click();
    };
}

export default new MainPage();