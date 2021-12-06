class MainPage {
    get accountMenuBtn() {
        return $('#navbarAccount');
    }

    get loginBtn() {
        return $('#navbarLoginButton');
    }
 
    get closePopupBtn() {
        return $('button.close-dialog');
    }

    async open() {
        await browser.url(`${browser.options.baseUrl}`);
        await this.closePopupBtn.click();
    }

    async openAccountMenu() {
        await this.accountMenuBtn.click();
    }

    async navigateToLogin() {
        await this.loginBtn.click();
    };
}

export default new MainPage();